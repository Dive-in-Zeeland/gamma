// isnt it better to spend 20 hours of automizing instead of 20 minutes of manual work?
// My first functional programming attempt, although some bits are not by the rules i got tired.
// Bugs:
// elevation, styles in [], name collision appends styled only to new comp declaration, not its usage, {...props}, zindex px
// Fixed bugs: 
// name collision


// jscodeshift api so it is globally accessible
let j = null;

// Make j (jscodeshift) api globally available
const globalizeJ = localJ => j = localJ;

// Tipical compose function
const compose = (...funcs) => (arg) =>
  funcs.reduce((res, fn) => fn(res), arg);

// Make string start with a capital
const capitalize = str => str[0].toUpperCase() + str.slice(1);

// Apply filters to change name from (styles.name) to (<Name>)
const formatName = name => capitalize(name);

// Get an Object Expression from StyleSheet.create()
const stylesExpression = source => j(source)
  .find(j.VariableDeclarator, {
    id: { name: 'styles' }
  })
  .get().value.init.arguments[0];

// Convert AST Object Expression to a runtime JS object
const objectExpressionToObject = objectExpression =>
  objectExpression.properties.reduce(
    (obj, prop) => ({
      ...obj,
      [prop.key.name]:
        prop.value.type === 'ObjectExpression' ?
          objectExpressionToObject(prop.value) :
          prop.value.value
    }), {}
  )

// Get runtime JS object of native StyleSheet styles
const getStyles = source => compose(
  stylesExpression,
  objectExpressionToObject
)(source);

// Make camelCase string a kebab-case
const camelToKebab = camel =>
  camel.replace(
    /(?!^)[A-Z]/, char => '-' + char.toLowerCase()
  );

// Take care of px and other differences between native and css styles
const fixCssValue = (prop, value) => {
  if (prop !== 'flex' && typeof value === 'number') return value + 'px';
  return value;
}

// Convert one style of StyleSheet to css string
const getCss = nativeStyle => Object.entries(nativeStyle).reduce(
  (css, [prop, value]) => css + '\n  ' + camelToKebab(prop) + ': ' + fixCssValue(prop, value) + ';',
  ''
) + '\n';

// Create a declaration for making styled-component
const styledDeclaration = (name, css, type) => j.variableDeclaration('const',
  [j.variableDeclarator(
    j.identifier(name),
    j.taggedTemplateExpression(
      j.callExpression(
        j.identifier('styled'),
        [
          j.identifier(type)
        ]
      ),
      j.templateLiteral([
        j.templateElement({
          raw: css,
          cooked: css
        }, true)
      ], [])
    )
  )]
);

// Make sure names dont collide in elements like <Text style={ styles.text }>
const removeNameCollision = elementType => styleName => {
  return styleName === elementType ? styleName + 'Styled' : styleName;
}

// Create a styled-component and put it to new source code
const insertStyledComponent = (source, name, nativeStyle, type) => {
  const root = j(source);
  root
    .find(j.VariableDeclaration)
    .get()
    .insertBefore(
      styledDeclaration(name, getCss(nativeStyle), type)
    )
  return root.toSource()
}

// Get all elements to refactor (elements that have style = styles.something)
const getElementsWithStyle = source => j(source)
  .find(j.JSXElement)
  .filter(nodePath =>
    undefined !== nodePath
      .node
      .openingElement
      .attributes
      .find(
        attr => attr.name.name === 'style' &&
          attr.value.expression?.object?.name === 'styles'
      )
  );

// Get name for a new styled-component from styles.<styleName>
const getNameForStyledComponent = nodePath => compose(
  getStyleName,
  formatName,
  removeNameCollision(
    getJsxTagName(nodePath)
  )
)(nodePath)

// Check if styled-component with that name is already created on a source
const doesStyledComponentExist = (source, name) => j(source)
  .find(j.VariableDeclarator, {
    id: {
      name: name,
    },
    init: {
      tag: {
        callee: {
          name: 'styled'
        }
      }
    }
  })
  .size() > 0;

// Fill source with styled-components (ahhhh, not by the rules??)
const populateWithStyledComponents = source => {
  let newSource = source;
  const styles = getStyles(source);
  getElementsWithStyle(source)
    .forEach((nodePath) => {
      if (
        doesStyledComponentExist(
          newSource,
          getNameForStyledComponent(nodePath)
        )
      ) return;
      newSource = insertStyledComponent(
        newSource,
        getNameForStyledComponent(nodePath),
        styles[getStyleName(nodePath)],
        getJsxTagName(nodePath)
      );
    });

  return newSource;
}

// Get attribute out of JSX element
const getAttribute = attrName => nodePath => nodePath
  .node
  .openingElement
  .attributes
  .find(attr => attr.name.name === attrName);

// Get native style name out of JSX element
const getStyleName = nodePath => getAttribute('style')(nodePath)
  .value
  .expression
  .property
  .name;

// Get tag name of a JSX element
const getJsxTagName = nodePath => nodePath
  .node
  .openingElement
  .name
  .name

// Renames a JSX tag (there are two: opening and closing, it renames one)
const renameTag = name => tag => ({
  ...tag,
  name: j.jsxIdentifier(name)
});

// Rename all tags of a JSX element
const renameElement = name => elem => ({
  ...elem,
  openingElement: renameTag(name)(elem.openingElement),
  ...(elem.closingElement && { closingElement: renameTag(name)(elem.closingElement) }),
})

// Remove attribute from a JSX tag
const removeAttrFromTag = attrName => tag => ({
  ...tag,
  attributes: tag.attributes.filter(
    attr => attr.name.name !== attrName
  )
})

// Remove attribute from a JSX opening tag of a JSX element
const removeAttrFromElem = attrName => elem => ({
  ...elem,
  openingElement: removeAttrFromTag(attrName)(elem.openingElement)
})

// Rename all JSX elements to the value of their style attribute, and remove the style attribute
const refactorJsx = source =>
  getElementsWithStyle(source)
    .replaceWith(
      (nodePath) => compose(
        compose(
          getNameForStyledComponent,
          renameElement,
        )(nodePath),
        removeAttrFromElem('style'),
      )(nodePath.node)
    )
    .toSource();

// Remove StyleSheet declaration
const removeStyleDeclaration = source => j(source)
  .find(j.VariableDeclaration, {
    declarations: [
      {
        id: { name: 'styles' }
      }
    ]
  })
  .remove()
  .toSource();

// Todo? Too late
const removeStyleSheetImport = source => source;

// Add styled-components import
const importStyledComponent = source => {
  const root = j(source);
  root
    .find(j.ImportDeclaration)
    .get()
    .insertAfter(
      j.importDeclaration(
        [
          j.importDefaultSpecifier(
            j.identifier('styled')
          )
        ],
        j.literal('styled-components')
      )
    )
  return root.toSource();
}

// Run all the transforms
const transformer = ({ source }, { jscodeshift }) => {
  globalizeJ(jscodeshift);
  return compose(
    populateWithStyledComponents,
    refactorJsx,
    removeStyleDeclaration,
    removeStyleSheetImport, // Not implemented
    importStyledComponent,
  )(source);
}

export default transformer;