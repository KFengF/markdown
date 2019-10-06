import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

let placeholder = `# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no 'dangerouslySetInnerHTML' is used! Yay!

## HTML block below

> This blockquote will change based on the HTML settings above.

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
`;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            textArea: placeholder
        }
    }

    onTextChange = event => {
        this.setState({ textArea: event.target.value })
    }

    render() {
        return(
            <div className="bg-black-10 black-90 min-vh-100">
                <h1 className="tc bg-white-80 ttu mv0 f1">Markdown Editor</h1>
                <div className="flex flex-wrap">
                    <Editor onTextChange={ this.onTextChange } initialValue={ placeholder }/>
                    <Previewer textArea={ this.state.textArea } />
                </div>
            </div>
        )
    }
}

export default App;