import React from "react";

// customized text title
export default TextTitle = props => {
    return (
        <TextBold
            style={{
                fontSize: 20,
                textAlign: "center",
                paddingBottom: 15,
                ...props.style
            }}
        >
            {props.children}
        </TextBold>
    );
}