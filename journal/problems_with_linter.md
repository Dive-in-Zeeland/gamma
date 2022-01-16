# Problems we've encountered

## `.eslintingore` not working
>But `ignorePatterns` in `.eslintrc.js` do work

## Absolute imports require config dublication
>For absolute imports to work in the app, we needed to set up `babel.config.js` with `module-resolver` plugin.  
For them to work in the vs code, we needed to set up `tsconfig.json` with `baseUrl`

## `elevation` is not supported by `typescript-styled-plugin`
> For this, we needed to configure `validProperties` array in `tsconfig.json`

## `module-resolver` needs a list of file extensions
> I guess

## npm didn't work for half an hour
> Was getting stuck on `IdealTree` thing, fixed itself after some time

## QR code scanner didnt work on the phone
> Had to restart the phone

## One NPM module didnt find its own dependency
> Had to google for `clearing cache`, reinstall `node_modules`, use `expo start --clear`

## Typescript didn't like `styled-components`
> Needed to install `@types/styled-components-react-native`

## Eslint needed a separate tsconfig
> see Željko Šević answer: https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
> Changed to Rafael's solution

## Need `tsconfigRootDir`
> But cant remember why

## Does tsconfig need to exclude node_modules
> Question still remains (todo?)

## For valid module import checking the file needs to be `.tsx`
> Maybe there a fix?