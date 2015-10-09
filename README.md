# Overview

# Installation

```bash
npm install -g diagrams
```

# Usage

## Railroad Diagrams

  1. Run the following command from your terminal

          diagrams railroad inputTextFile example.svg

  2. If your inputTextFile's content was this:
```bash
Diagram(
  Optional('+', 'skip'),
    Choice(0,
      NonTerminal('name-start char'),
      NonTerminal('escape')),
      ZeroOrMore(
        Choice(0,
          NonTerminal('name char'),
          NonTerminal('escape'))))
```
  3. ...then your ```example.svg``` should look like this:

  <img src="http://francoislaberge.github.io/diagrams/docs/example.svg">


## Tips & Tricks
#### Embedding SVGs into Github Markdown
If you host your SVG file somewhere like using Github Pages, you can embed svg diagrams into your markdown files using the following style syntax:
```
<img src="http://francoislaberge.github.io/diagrams/docs/example.svg">
```

## Credits

  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the heavy lifting generating railroad diagrams
