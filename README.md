# Scriptable + Apple Shortcut + OpenAI - Summarize

Script and shortcuts to quickly and easily summarize the content of images or texts.

Idea shared by [Jelle Prins](https://twitter.com/jelleprins/status/1616732334514122752) on [Twitter](https://twitter.com/eduardostuart/status/1616737195423059968), _"Translate government speak into something more accessible and comprehensible"_.

## Demo

From image:
https://user-images.githubusercontent.com/767879/213875587-41ab7fc7-59a0-4f6c-9fef-d226aae987eb.mp4

From text:
https://user-images.githubusercontent.com/767879/213876840-d2c27026-fc31-491e-bc8b-243b41cb0d8d.mp4

## Requirements

1. [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188) - available on iPad and iPhone;
1. [Apple Shortcut](https://apps.apple.com/us/app/shortcuts/id915249334)

## Installation

1. Install the shortcuts

- [Translate and summarize text](https://www.icloud.com/shortcuts/750d98055431431bbbb5ffbac93b720b)

> Receive text from `share`, detect language, translate text to english, run scriptable (open-ai), and show output.

- [To summarize image content](https://www.icloud.com/shortcuts/a3b4432905784842979c666d620fdea2)

> Receive image from `share`, extract text from input and run `Translate and summarize` shortcut.

2. Create a new scriptable script and include the code from [scriptable.js](./scriptable.js).

Depending on the name of your scriptable script you might need to change the reference on the shortcut (Translate and summarize text).

# Author

[Eduardo Stuart](https://s.tuart.dev)
