import React from 'react';

// customized text body in bold
export default TextBold = props => {
    return (
        <TextBody
            style={{
                fontWeight: "bold",
                ...props.style
            }}
        >
            {props.children}
        </TextBody>
    );
}