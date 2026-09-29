This repository consists of userstyles primarily intended to develop and apply a dark theme to a
website that doesn't have one. So, when the user asks you to inspect a webpage, investigate/check
and fix something; they mean that there's some part of the visible webpage that isn't in a dark
theme yet. And that you have to investigate and fix it.

- When you edit a userstyle, the changes will be applied immediately to the page you are currently
  viewing. No need to refresh the page to see the changes.
- When adding/modifying userstyles:
  - If the selector is minified and not human-readable, add comments to explain what element the
    rule is targeting.
  - Try to check if there are existing blocks of CSS where you can add a new selector. Likely, there
    are already existing rules for setting foreground color, various background colors, borders,
    etc.
  - Avoid using !important in values unless absolutely required.
  - If an investigation shows that a rule currently scoped to a specific URL/sub-scope applies
    globally too, feel free to hoist it to the broader scope.
