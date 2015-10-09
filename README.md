# Overview

# Installation

```bash
npm install -g diagrams
```

# Usage

## Railroad Diagrams

  1. Run the following command from your terminal

          diagrams railroad inputTextFile example.svg

  2. If your inputTextFile's content was this:
```bash
Diagram(
  Optional('+', 'skip'),
    Choice(0,
      NonTerminal('name-start char'),
      NonTerminal('escape')),
      ZeroOrMore(
        Choice(0,
          NonTerminal('name char'),
          NonTerminal('escape'))))
```
  3. ...then your ```example.svg``` should look like this:
 
  <img src="https://camo.githubusercontent.com/cec8667e8bd7954c74df19b71231524c8660199b/687474703a2f2f6672616e636f69736c6162657267652e636f6d2f6469616772616d732f646f63732f6578616d706c652e737667">

# Tips & Tricks
## Embedding SVGs into Github Markdown
