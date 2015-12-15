# TODO
Just railroad diagrams are supported currently. More coming soon. The goal is to have a consistent look for all of the diagrams and make a good suite of diagramming tool for improved documentation.

  - Add Sequence Diagrams
    - [Wikipedia Definition](https://en.wikipedia.org/wiki/Sequence_diagram)
    - Prio art
      - [js-sequence-diagrams](https://github.com/winfinit/js-sequence-diagrams)
        - Uses Raphael...
      - [grunt-websequencediagrams](https://www.npmjs.com/package/grunt-websequencediagrams)
        - Depends on online service
  - Add graphviz functionality
    - Create a graphviz-prebuilt or dot-prebuilt and go from there
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

## Extend Project Goals and Philosophies
Creating yet another visualization lib seems cliche, personally I feel like there are some very technical impressive libs out there but I'd like to create a well documented alternative with a strict focus on statically generated diagrams that are very consistently designed and easy to embed in documentation and should be mobile/responsive first. It's to be seen if I can improve on the status quo.
