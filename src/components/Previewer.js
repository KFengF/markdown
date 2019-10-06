import React from 'react';
import Markdown from 'react-markdown';

const css = { 
    width: '96%',
    maxWidth: '900px'
}

const Previewer = ({ textArea }) => {
    return(
        <div className="center mv3" style={ css }>
            <h2 className="bg-black-10 f3 vh-10 ba br3 b--transparent br--top pa2">Previewer</h2>
            <Markdown source={ textArea } escapeHTML={ false } className="vh-75 bg-white black-90 ba br3 b--transparent br--bottom pa3 overflow-y-auto" />
        </div>
    );
}

export default Previewer;