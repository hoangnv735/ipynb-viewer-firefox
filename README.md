# ipynb-viewer

`ipynb-viewer` is a Firefox addons to view .ipynb file without notebook server

## Install

I wrote this addons for my personal usage, and the code is still messy.
Nevermind, it works though.

Check for lastest version at the [Release page](https://github.com/hoangnv735/ipynb-viewer-firefox/releases).
Download ipynb_viewer-x.y.z-firefox.xpi and install it to Firefox.

## Usage

After installed, click on addons icon to open view-tab.
Select file or drag it in to the window and the addons take it from here.

## Built on

- [nbpreview](https://github.com/jsvine/nbpreview) and [notebookjs](https://github.com/jsvine/notebookjs), for notebook-rendering
- [dompurify](https://github.com/cure53/DOMPurify), for HTML sanitization
- [prism](http://prismjs.com/), for code-highlighting
- [marked](https://github.com/chjj/marked), for markdown-rendering
- [ansi_up](https://github.com/drudru/ansi_up), for ANSI-rendering
- [katex](https://github.com/KaTeX/KaTeX), for math typesetting
- [es5-shim](https://github.com/es-shims/es5-shim), for JavaScript compatibility
