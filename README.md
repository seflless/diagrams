# Overview
A suite of text DSLs for generating various types of diagrams. Currently supported are:
  - [flowchart](#flowchart)
  - [graphviz's dot](#dot)
  - [network sequence](#sequence)
  - [railroad diagrams](#railroad)

<img src="http://francoislaberge.github.io/diagrams/docs/flowchart.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/sequence.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/dot.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/railroad.png" width="25%"/>

# Installation

```bash
npm install -g diagrams
```

# Usage

## flowchart
To generate flowcharts:

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

  <img src="http://francoislaberge.github.io/diagrams/docs/flowchart.png" width="600px" />

  4. Documentation: [Flowchart.js ](http://flowchart.js.org/)

## sequence
To generate Network Sequence Diagrams:

  1. Run the following command from your terminal

          diagrams sequence input.sequence sequence.svg

  2. If your inputTextFile's content was this:

          Alice->Bob: Hello Bob, how are you?
          Note right of Bob: Bob thinks
          Bob-->Alice: I am good thanks!

  3. ...then your ```sequence.svg``` should look like this:

  <img src="http://francoislaberge.github.io/diagrams/docs/sequence.png" width="350px" />

  4. Documentation: [Network Sequence Diagram Syntax ](https://bramp.github.io/js-sequence-diagrams/)

## dot
To generate diagrams from Graphviz's .dot file format:

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

  <img src="http://francoislaberge.github.io/diagrams/docs/dot.png" width="300px" />

  4. For more documentation on the dot file format:
    - Read [dotguide.pdf](http://www.graphviz.org/pdf/dotguide.pdf).
    - See the [online generator](http://mdaines.github.io/viz.js/).

## railroad
To generate Railroad Diagrams:

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

  <img src="http://francoislaberge.github.io/diagrams/docs/railroad.png"  width="400px" />

  4. For more Documentation see [railroad-diagrams](http://npmjs.org/railroad-diagrams)'s documentation':
    - **NOTE:** There is no real documentation for the input file syntax (PRs welcome), but the examples
      should help you figure it out a bit
    - [Examples](http://www.xanthir.com/etc/railroad-diagrams/example.html)
    - [Online Generator](http://www.xanthir.com/etc/railroad-diagrams/generator.html)

## Credits

  - [flowchart.js](http://flowchart.js.org/) for the flowchart diagrams
  - [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) for the sequence diagrams
  - [viz.js](https://github.com/mdaines/viz.js) for getting Graphviz compiled to js
  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the railroad diagrams
  - [electron](http://electron.atom.io/) for headless browsing to wrap above libraries that don't work without a browser environment

**It's a work in progress.** See [TODO.md](https://github.com/francoislaberge/diagrams/blob/master/TODO.md).
