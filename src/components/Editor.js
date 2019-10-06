import React from 'react';

const css = { 
    width: '96%',
    maxWidth: '900px'
}

const Editor = ({ onTextChange, initialValue }) => {
    return(
        <div className="center mv3" style={ css }>
            <h2 className="bg-black-10 f3 vh-10 ba br3 b--transparent br--top pa2">Editor</h2>
            <textarea onChange={ onTextChange } className="vh-75 pa3 bg-black-90 white-90 ba br3 b--transparent br--bottom" >{ initialValue }</textarea>
        </div>
    );
}

export default Editor;