# Overview
**It's a work in progress.** See [TODO.md](https://github.com/francoislaberge/diagrams/blob/master/TODO.md).

The goal of this project is to enable easily generating static SVG and images for useful diagrams related to documenting/explaining complex systems.

My current use case is for embedding these images into Github Markdown based documents.

# Installation

```bash
npm install -g diagrams
```

# Usage

## Railroad Diagrams (.railroad)

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

  <img src="http://francoislaberge.github.io/diagrams/docs/railroad.png"  width="50%" />

  4. For more Documentation see [railroad-diagrams](http://npmjs.org/railroad-diagrams)'s documentation':
    - **NOTE:** There is no real documentation for the input file syntax (PRs welcome), but the examples
      should help you figure it out a bit
    - [Examples](http://www.xanthir.com/etc/railroad-diagrams/example.html)
    - [Online Generator](http://www.xanthir.com/etc/railroad-diagrams/generator.html)

## Dot Diagrams (.dot)

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

  <img src="http://francoislaberge.github.io/diagrams/docs/dot.png" width="50%" />

  4. For more documentation on the dot file format read [dotguide.pdf](http://www.graphviz.org/pdf/dotguide.pdf).

## Network Sequence Diagrams (.sequence)

  1. Run the following command from your terminal

          diagrams sequence input.sequence sequence.svg

  2. If your inputTextFile's content was this:

          Alice->Bob: Hello Bob, how are you?
          Note right of Bob: Bob thinks
          Bob-->Alice: I am good thanks!

  3. ...then your ```sequence.svg``` should look like this:

    <img src="http://francoislaberge.github.io/diagrams/docs/sequence.png"  width="50%" />

  4. Documentation: [Network Sequence Diagram Syntax ](https://bramp.github.io/js-sequence-diagrams/)

## Flowchart Diagrams (.flowchart)

  1. Run the following command from your terminal

        diagrams flowchart input.flowchart flowchart.svg

  2. If your inputTextFile's content was this:

            st=>start: Start|past:>http://www.google.com[blank]
            e=>end: Ende:>http://www.google.com
            op1=>operation: My Operation|past
            op2=>operation: Stuff|current
            sub1=>subroutine: My Subroutine|invalid
            cond=>condition: Yes
            or No?|approved:>http://www.google.com
            c2=>condition: Good idea|rejected
            io=>inputoutput: catch something...|request

            st->op1(right)->cond
            cond(yes, right)->c2
            cond(no)->sub1(left)->op1
            c2(yes)->io->e
            c2(no)->op2->e


  3. ...then your ```flowchart.svg``` should look like this:

    <img src="http://francoislaberge.github.io/diagrams/docs/flowchart.png"  width="50%" />

  4. Documentation: [Flowchart.js ](http://flowchart.js.org/)



## Tips & Tricks
#### Embedding SVGs into Github Markdown
If you host your SVG file somewhere like using Github Pages, you can embed svg diagrams into your markdown files using the following style syntax:
```
<img src="http://francoislaberge.github.io/diagrams/docs/example.svg">
```

## Credits

  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the heavy lifting generating railroad diagrams
  - TODO: Add graphviz, network sequence diagram, and etc credits.
