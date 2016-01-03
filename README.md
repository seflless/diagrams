# Overview
Command line tool for generating a suite of various types of diagrams, each based on intuitive text DSLs.

See below for documentation/examples of the syntax/output for each of the currently supported diagrams type:
  - [flowchart](#flowchart)
  - [network sequence](#sequence)
  - [graphviz's dot](#dot)
  - [railroad diagrams](#railroad)

<img src="http://francoislaberge.github.io/diagrams/docs/flowchart.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/sequence.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/dot.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/docs/railroad.png" width="25%"/>

# Installation

```bash
npm install -g diagrams
```

# Usage

## flowchart
Documentation: [Flowchart.js ](http://flowchart.js.org/).

To generate flowcharts, run:

    diagrams flowchart input.flowchart flowchart.svg

<table>
<tr>
<td><strong>input.flowchart</strong></td>
<td><strong>flowchart.svg</strong></td>
</tr>
<tr>
  <td>
  <pre>
<code>
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
</code>
  </pre>
  </td>
  <td>
    <img src="http://francoislaberge.github.io/diagrams/docs/flowchart.png" width="600px" />
  </td>
</tr>
</table>


## sequence
Documentation: [Network Sequence Diagram Syntax ](https://bramp.github.io/js-sequence-diagrams/).

To generate Network Sequence Diagrams, run:

    diagrams sequence input.sequence sequence.svg

<table>
<tr>
<td><strong>input.sequence</strong></td>
<td><strong>sequence.svg</strong></td>
</tr>
<tr>
  <td>
  <pre>
<code>
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
</code>
  </pre>
  </td>
  <td>
    <img src="http://francoislaberge.github.io/diagrams/docs/sequence.png" width="350px" />
  </td>
</tr>
</table>

## dot
Documentation on the dot file format:
  - Read [dotguide.pdf](http://www.graphviz.org/pdf/dotguide.pdf).
  - See the [online generator](http://mdaines.github.io/viz.js/).

To generate diagrams from Graphviz's .dot file format, run:

    diagrams dot input.dot dot.svg

<table>
<tr>
<td><strong>input.dot</strong></td>
<td><strong>dot.svg</strong></td>
</tr>
<tr>
  <td>
  <pre>
<code>
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
</code>
  </pre>
  </td>
  <td>
    <img src="http://francoislaberge.github.io/diagrams/docs/dot.png" width="300px" />
  </td>
</tr>
</table>

## railroad
Documentation see [railroad-diagrams](http://npmjs.org/railroad-diagrams)'s documentation':
  - **NOTE:** There is no real documentation for the input file syntax (PRs welcome), but the examples
      should help you figure it out a bit
  - [Examples](http://www.xanthir.com/etc/railroad-diagrams/example.html)
  - [Online Generator](http://www.xanthir.com/etc/railroad-diagrams/generator.html)

To generate Railroad Diagrams, run:

    diagrams railroad input.railroad railroad.svg

<table>
<tr>
<td><strong>input.railroad</strong></td>
<td><strong>railroad.svg</strong></td>
</tr>
<tr>
  <td>
  <pre>
<code>
Diagram(
  Optional('+', 'skip'),
    Choice(0,
      NonTerminal('name-start char'),
      NonTerminal('escape')),
      ZeroOrMore(
        Choice(0,
          NonTerminal('name char'),
          NonTerminal('escape'))))
</code>
  </pre>
  </td>
  <td>
    <img src="http://francoislaberge.github.io/diagrams/docs/railroad.png"  width="400px" />
  </td>
</tr>
</table>

## Credits

  - [flowchart.js](http://flowchart.js.org/) for the flowchart diagrams
  - [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) for the sequence diagrams
  - [viz.js](https://github.com/mdaines/viz.js) for getting Graphviz compiled to js
  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the railroad diagrams
  - [electron](http://electron.atom.io/) for headless browsing to wrap above libraries that don't work without a browser environment

## TODOs
It's a work in progress. See [TODO.md](https://github.com/francoislaberge/diagrams/blob/master/TODO.md).
