import React from 'react';

const PlusSign = (props) => {
    const PlusStyles = {
        width: props.PlusSignWidth,
        height: props.PlusSignHeight,
        zIndex: -1,

    }

    return (
        <p><img src="/static/plus-sign.png" alt="plus-sign"/></p>
        
    );
};

export default PlusSign;