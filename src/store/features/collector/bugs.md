# Fisrt
Non-serializable values were found in the navigation state. Check:

Scan > Theory > params.collect (Function)

This can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.

# Second
Need feedback fro when pressing Pressable (ColorButton)

# Third
Need to rename screens (its about the main navigator) so there are no dublications

# Four
Need a way to go back a stack when pressing the title on the titled screen