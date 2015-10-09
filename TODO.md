# TODO
Just railroad diagrams are supported currently. More coming soon. The goal is to have a consistent look for all of the diagrams and make a good suite of diagramming tool for improved documentation.
  - Add Sequence Diagrams
    - [Wikipedia Definition](https://en.wikipedia.org/wiki/Sequence_diagram)
    - Prio art
      - [js-sequence-diagrams](https://github.com/winfinit/js-sequence-diagrams)
        - Uses Raphael...
      - [grunt-websequencediagrams](https://www.npmjs.com/package/grunt-websequencediagrams)
        - Depends on online service
  - Add Flowchart Support
    - [Wikipedia Definition](https://en.wikipedia.org/wiki/Flowchart)
    - Prio art
      - [flowchart.js](http://adrai.github.io/flowchart.js/)
        - - Uses Raphael...
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
