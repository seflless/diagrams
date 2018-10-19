<a href="https://travis-ci.org/francoislaberge/diagrams"><img src="https://api.travis-ci.org/francoislaberge/diagrams.svg" alt="Build Status"></a>
# Overview
Command line tool for generating a suite of various types of diagrams, each based on intuitive text DSLs.

Also see [Atom Diagrams Plugin](https://atom.io/packages/diagrams) that integrates this into the [Atom IDE](https://atom.io/)

### Documentation
  - [Installation](#installation)
  - [Usage](#usage)
    - [watch](#watch)
    - [build](#build)
  - [Diagrams](#diagrams)
    - [flowchart](#flowchart)
    - [network sequence](#sequence)
    - [graphviz's dot](#dot)
    - [railroad diagrams](#railroad)

<img src="http://francoislaberge.com/diagrams/flowchart.png" width="20%"/><img src="http://francoislaberge.github.io/diagrams/sequence.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/dot.png" width="25%"/><img src="http://francoislaberge.github.io/diagrams/railroad.png" width="25%"/>

# Installation

```bash
npm install -g diagrams
```

# Usage

## watch
The diagrams CLI provides the `watch` command that will automatically generate the .svg visualization of each diagram file format it supports. Run the following:

Generates all of the .svg files, then starts watching the current directory and regenerates any diagram file that changes.
```
diagrams watch
```

Generates all .svg files, but don't start watching after.
```
diagrams build
```

To provide the target directory to watch just pass it as an argument right after the `watch` command.
```
diagrams watch somedirectory --build
```

### Diagrams

#### flowchart
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
st=>start: Start
e=>end
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
</code>
  </pre>
  </td>
  <td>
    <img src="http://francoislaberge.github.io/diagrams/flowchart.png" width="300px" />
  </td>
</tr>
</table>


#### sequence
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
    <img src="http://francoislaberge.github.io/diagrams/sequence.png" width="350px" />
  </td>
</tr>
</table>

#### dot
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
    <img src="http://francoislaberge.github.io/diagrams/dot.png" width="300px" />
  </td>
</tr>
</table>

#### railroad
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
    <img src="http://francoislaberge.github.io/diagrams/railroad.png"  width="500px" />
  </td>
</tr>
</table>

## Contributing

### Setup
```
git clone git@github.com:francoislaberge/diagrams.git
cd diagrams
```

### Testing
```
npm test
```

### Publishing to NPM
Do the usual npm version bump then publish.
```
npm version <major|minor|patch>
git push; git push --tags
npm publish
```

All tests are run automatically on push via our [travis-ci integration](https://travis-ci.org/francoislaberge/diagrams).

## Credits

  - [flowchart.js](http://flowchart.js.org/) for the flowchart diagrams
  - [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) for the sequence diagrams
  - [viz.js](https://github.com/mdaines/viz.js) for getting Graphviz compiled to js
  - [railroad-diagrams](https://npmjs.org/railroad-diagrams) for the railroad diagrams
  - [electron](http://electron.atom.io/) for headless browsing to wrap above libraries that don't work without a browser environment

## TODOs
It's a work in progress. See [TODO.md](https://github.com/francoislaberge/diagrams/blob/master/TODO.md).
