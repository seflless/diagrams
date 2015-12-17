# Overview
**It's a work in progress.** See [TODO.md](https://github.com/francoislaberge/diagrams/blob/master/TODO.md).

The goal of this project is to enable easily generating static SVG and images for useful diagrams related to documenting/explaining complex systems.

My current use case is for embedding these images into Github Markdown based documents.

# Installation

```bash
npm install -g diagrams
```

# Usage

## Railroad Diagrams

  1. Run the following command from your terminal

          diagrams railroad input.railroad railroad.svg

  2. If your inputTextFile's content was this:

          Diagram(
            Optional('+', 'skip'),
              Choice(0,
                NonTerminal('name-start char'),
                NonTerminal('escape')),
                ZeroOrMore(
                  Choice(0,
                    NonTerminal('name char'),
                    NonTerminal('escape'))))

  3. ...then your ```output.svg``` should look like this:

  <img src="http://francoislaberge.github.io/diagrams/docs/railroad.svg">

  4. For more Documentation see [railroad-diagrams](http://npmjs.org/railroad-diagrams)'s documentation':
    - **NOTE:** There is no real documentation for the input file syntax (PRs welcome), but the examples
      should help you figure it out a bit
    - [Examples](http://www.xanthir.com/etc/railroad-diagrams/example.html)
    - [Online Generator](http://www.xanthir.com/etc/railroad-diagrams/generator.html)

## Dot Diagrams

  1. Run the following command from your terminal

        diagrams dot input.dot dot.svg

  2. If your inputTextFile's content was this:

            digraph G {
                main -> parse -> execute;
                main -> init;
                main -> cleanup;
                execute -> make_string;
                execute -> printf
                init -> make_string;
                main -> printf;
                execute -> compare;
            }

  3. ...then your ```dot.svg``` should look like this:

  <img src="http://francoislaberge.github.io/diagrams/docs/dot.svg">

  4. For more documentation on the dot file format read [dotguide.pdf](http://www.graphviz.org/pdf/dotguide.pdf).

## Tips & Tricks
#### Embedding SVGs into Github Markdown
If you host your SVG file somewhere like using Github Pages, you can embed svg diagrams into your markdown files using the following style syntax:
```
<img src="http://francoislaberge.github.io/diagrams/docs/example.svg">
```

## Credits

  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the heavy lifting generating railroad diagrams
