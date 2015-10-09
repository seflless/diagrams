var railroadDiagrams = require('railroad-diagrams');

module.exports = function railroad(inputContent){
    try {

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
            svgText = eval(inputContent).format().toString();

        // A few touchups
            // Embed styles
            // TODO: Make this customizable
        svgText = svgText.replace(/(<svg class="railroad-diagram" width="\d+" height="\d+" viewBox="\d+ \d+ \d+ \d+")>/,'$1> \n'+
            '\t<defs>\n'+
                '\t\t<style type="text/css"><![CDATA[\n'+
                    '\t\t\tsvg.railroad-diagram {\n'+
                        '\t\t\t\tbackground-color: hsl(30,20%,95%);\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram path {\n'+
                        '\t\t\t\tstroke-width: 3;\n'+
                        '\t\t\t\tstroke: black;\n'+
                        '\t\t\t\tfill: rgba(0,0,0,0);\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram text {\n'+
                        '\t\t\t\tfont: bold 14px monospace;\n'+
                        '\t\t\t\ttext-anchor: middle;\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram text.label {\n'+
                        '\t\t\t\ttext-anchor: start;\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram text.comment {\n'+
                        '\t\t\t\tfont: italic 12px monospace;\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram g.non-terminal text {\n'+
                        '\t\t\t\t/*font-style: italic;*/\n'+
                    '\t\t\t}\n'+
                    '\t\t\tsvg.railroad-diagram rect {\n'+
                        '\t\t\t\tstroke-width: 3;\n'+
                        '\t\t\t\tstroke: black;\n'+
                        '\t\t\t\tfill: hsl(120,100%,90%);\n'+
                    '\t\t\t}\n'+
                '\t\t]]></style>\n'+
            '\t</defs>'
        );
            // The SVG doesn't render correctly in chrome unless this is added to the text that railroad-diagrams spits out
        svgText = svgText.replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" ');

        return svgText;
	} catch (error) {
		throw error;
	}
}
