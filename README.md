# Page Property Shortcode
### Page Property Shortcode for Obsidian

---

## About

Reference a page property that renders the property value..

Usage: '@Folder/Page:Property'.

Note it does **not** replace the 'shortcode' in the source; it only changes the render output.


## Why

Allows you to use "variables" or "constants" across your vault, **without** need for code blocks; thus can be "inline", and not break up the text.


## Installation

You can install the plugin manually by copying a release to your `.obsidian/plugins/page-property-shortcode` folder.


## Potential Updates?

Unlikely lol, would be suprised if I even submit this to the community store.

Made for a personal need, idk if others would find this useful ¯\_(ツ)_/¯

---

- Might test just doing a replace on just the reader element; and do innerHTML, rather than focusing on textContent
- Command to make changes / make permanent
- Popup when writing to make making property shortcodes easier (Make properties??)
- Force refresh/reload when properties update