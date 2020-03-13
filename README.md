# Rhovas

Rhovas is a programming language for API design and enforcement. Using Rhovas,
developers can better express the contracts and intention of their code to help
create correct, maintainable software.

This repository is the source for <https://rhovas.dev>, the official website for
Rhovas.

Discussion on design, development, and other community aspects are all done in
the `#rhovas` channel on the <https://proglangdesign.net> discord.

## Implementation Notes

This website is designed to be static; there is no backend server. Additionally,
in order to support features like docs and the editor, content should be pulled
from the appropriate repositories without needing to update the website.

### Dependencies

The following is a list of dependences that may be used in this project in
addition to the necessary Rhovas repositories.

 - General:
    - [jsDelivr](https://www.jsdelivr.com/): CDN for dependencies.
    - [Bulma](https://bulma.io/): Frontend CSS styling.
       - Includes [Font Awesome](https://fontawesome.com/) for icons.
       - Includes [extensions](https://bulma.io/extensions/) as needed.
 - Editor:
    - [Monaco Editor](https://microsoft.github.io/monaco-editor/): The editor.
    - [Kotlin](https://kotlinlang.org/): Specifically, the `kotlin.js` runtime.
