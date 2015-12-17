# TODO
Just railroad diagrams are supported currently. More coming soon. The goal is to have a consistent look for all of the diagrams and make a good suite of diagramming tool for improved documentation.

  - High level Goals
    - Create a rich suite of diagram generators
    - Be able to generate .svg, .png, .pdf (in that order)
    - Be designed to easily make a command line tool, a node.js module, a browser module, and an atom plugin
    - Make it very consistent
      - Make it so you can have styling that you provide to each generator to create simular styled graphs
      - Make it so that sub command/function is also the file extension for source files (helpful in atom and in general)
      - If possible make documentation consistent
        - For example extra graphviz's [pdf](http://www.graphviz.org/pdf/dotguide.pdf) (see the bottom for visual tables that are great)
        - Or [man dot](http://www.graphviz.org/cgi-bin/man?dot)
  - Add Sequence Diagrams
    - [Wikipedia Definition](https://en.wikipedia.org/wiki/Sequence_diagram)
    - Prio art
      - [js-sequence-diagrams](https://github.com/winfinit/js-sequence-diagrams)
        - Uses Raphael...
      - [grunt-websequencediagrams](https://www.npmjs.com/package/grunt-websequencediagrams)
        - Depends on online service
  - Add graphviz functionality
    - [See Gallery](http://www.graphviz.org/Gallery.php)
    - Create a graphviz-prebuilt or dot-prebuilt and go from there
    - Alternative Approach
      - https://github.com/mdaines/viz.js/
    - dot: filter for drawing directed graphs ([Docs](http://www.graphviz.org/pdf/dotguide.pdf))
      - started
    - add more layout engines
      - circo: filter for circular layout of graphs ([Docs](http://www.graphviz.org/pdf/circo.1.pdf))
      - fdp: filter for drawing undirected graphs ([Docs](http://www.graphviz.org/pdf/fdp.1.pdf))
      - neato: filter for drawing undirected graphs ([Docs](http://www.graphviz.org/pdf/neatoguide.pdf))
      - osage: filter for array-based layouts ([Docs](http://www.graphviz.org/pdf/osage.1.pdf))
      - twopi: filter for radial layouts of graphs ([Docs](http://www.graphviz.org/pdf/twopi.1.pdf))

  - A timeline labeling
    - https://twitter.github.io/labella.js/
  - Add Flowchart Support
    - [Wikipedia Definition](https://en.wikipedia.org/wiki/Flowchart)
    - Prio art
      - [flowchart.js](http://adrai.github.io/flowchart.js/)
        - - Uses Raphael...
      - Support compound states, [as in this demo?](http://js.cytoscape.org/demos/5b192c88616af2f75344/)
   - Generalized D3
     - Example: https://github.com/gregjopa/d3-server-side-demo
     - TODO: Find articles
     - Have system for running arbitrary code?
   - BNF, EBNF, and/or ABNF?
     - https://github.com/hildjj/node-abnf
   - Add Dependencies Diagram Support?
     - Prio art
       - http://blakehaswell.com/post/85244164767/visualise-your-javascript-dependency-graph-using
  - [cytoscape](https://www.npmjs.com/package/cytoscape) looks great in general.
  - Expose and document non cli way of generating the diagrams
  - Consider standardizing the input text formats for all diagram types(debatable as custom syntaxes are nice, albeit messier to manipulate/generate procedurally)
  - Consider adding file extensions for each that match their sub command
    - ```diagrams railroad``` -> ```file.railroad```
    - ```diagrams sequence``` -> ```file.sequence```
    - ```diagrams flowchart``` -> ```file.flowchart```
  - Consider supporting generating plain old images
    - Todo figure out the optimal way to go from svg to image pixels
  - Design improvements
    - Drop shadows?
    - Gradients?
    - Steal designs from the best. I love the look of [Omnigraffle](https://www.omnigroup.com/omnigraffle) when I used it. What's better?
  - Make an atom plugin
    - support svg too for convenience

## Extend Project Goals and Philosophies
Creating yet another visualization lib seems cliche, personally I feel like there are some very technical impressive libs out there but I'd like to create a well documented alternative with a strict focus on statically generated diagrams that are very consistently designed and easy to embed in documentation and should be mobile/responsive first. It's to be seen if I can improve on the status quo.
