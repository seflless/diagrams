var railroadDiagrams = require('railroad-diagrams');
var fs = require('fs');

module.exports = function railroad(inputPath, outputPath, cb) {
    try {
        var inputContent = fs.readFileSync(inputPath, 'utf8');

        // Eval the file's content (There has got to be a better input method than this)
            // These are required to exist for the evaling to work:
        var Diagram = railroadDiagrams.Diagram,
            ComplexDiagram = railroadDiagrams.ComplexDiagram,
            Sequence = railroadDiagrams.Sequence,
            Stack = railroadDiagrams.Stack,
            Choice = railroadDiagrams.Choice,
            Optional = railroadDiagrams.Optional,
            OneOrMore = railroadDiagrams.OneOrMore,
            ZeroOrMore = railroadDiagrams.ZeroOrMore,
            Terminal = railroadDiagrams.Terminal,
            NonTerminal = railroadDiagrams.NonTerminal,
            Comment = railroadDiagrams.Comment,
            Skip = railroadDiagrams.Skip,
            // Now try to eval it, if something goes wrong it will be caught below
            // in our try/catch error handler
            outputContent = eval(inputContent).format().toString();

        // A few touchups
            // Embed styles
            // TODO: Make this customizable
            // Trick I used babeljs.io to generate this multi-line string:
        /*
        ```
        	<defs>
        		<style type="text/css"><![CDATA[
        			svg.railroad-diagram {
                        stroke: rgba(0, 122, 209, 0.95);
        			}
        			svg.railroad-diagram path {
        				stroke-width: 2;
        				stroke: rgba(0, 122, 209, 0.95);
        				fill: rgba(0,0,0,0);
        			}
        			svg.railroad-diagram text {
        				font: 14px monospace;
        				text-anchor: middle;
                        stroke: black;
        			}
        			svg.railroad-diagram text.label {
        				text-anchor: start;
        			}
        			svg.railroad-diagram text.comment {
        				font: italic 12px monospace;
        			}
        			svg.railroad-diagram rect {
        				stroke-width: 2;
        				stroke: rgba(0, 122, 209, 0.95);
        				fill: rgba(0,0,0,0);
        			}
        		]]></style>
        	</defs>
        ```
        */
        outputContent = outputContent.replace(/(<svg class="railroad-diagram" width="\d+" height="\d+" viewBox="\d+ \d+ \d+ \d+")>/,"$1> "+
            "\n\t<defs>\n\t\t<style type=\"text/css\"><![CDATA[\n\t\t\tsvg.railroad-diagram {\n                stroke: rgba(0, 122, 209, 0.95);\n\t\t\t}\n\t\t\tsvg.railroad-diagram path {\n\t\t\t\tstroke-width: 2;\n\t\t\t\tstroke: rgba(0, 122, 209, 0.95);\n\t\t\t\tfill: rgba(0,0,0,0);\n\t\t\t}\n\t\t\tsvg.railroad-diagram text {\n\t\t\t\tfont: 14px monospace;\n\t\t\t\ttext-anchor: middle;\n                stroke: black;\n\t\t\t}\n\t\t\tsvg.railroad-diagram text.label {\n\t\t\t\ttext-anchor: start;\n\t\t\t}\n\t\t\tsvg.railroad-diagram text.comment {\n\t\t\t\tfont: italic 12px monospace;\n\t\t\t}\n\t\t\tsvg.railroad-diagram rect {\n\t\t\t\tstroke-width: 2;\n\t\t\t\tstroke: rgba(0, 122, 209, 0.95);\n\t\t\t\tfill: rgba(0,0,0,0);\n\t\t\t}\n\t\t]]></style>\n\t</defs>\n"
        );
            // The SVG doesn't render correctly in chrome unless this is added to the text that railroad-diagrams spits out
        outputContent = outputContent.replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" ');

        fs.writeFileSync(outputPath, outputContent);

        process.nextTick(cb);
	} catch (error) {
        process.nextTick(function(){
            cb(error);
        })
	}
}
