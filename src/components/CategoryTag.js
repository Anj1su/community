import React from 'react';
import styled, {css} from "styled-components";

const types = {
    square: {
        lineHeight: '3.13rem',
        fontSize: '0.875rem',
        borderRadius: "8px",
        marginBottom: "0",
        minWidth: "3.13rem",
        height: "3.13rem",
    },
    long: {
        lineHeight: '1.6rem',
        fontSize: '1rem',
        borderRadius: "1rem",
        minWidth: "4.31rem",
        height: "1.6rem",
    }
}

const typeStyles = css`
    ${({type}) => css`
        line-height: ${types[type].lineHeight};
        font-size: ${types[type].fontSize};
        border-radius: ${types[type].borderRadius};
        margin-bottom: ${types[type].marginBottom};
        min-width: ${types[type].minWidth};
        height: ${types[type].height};
    `}
`

const Tag = styled.div`
    display: inline-block;
    text-align: center;
    border: none;
    box-sizing: border-box;
    font-weight: 700;
    color: #333;
    background-color: ${(props) => props.tagColor};
    ${typeStyles}
`

const CategoryTag = (props) => {
    const {children, category, type} = props;
    const styles = {type: type};

    let tagColor = "";
    switch(category){
        case "HTML" :
            tagColor = "#FFCDA0";
            break;
        case "CSS" :
            tagColor = "#FBD7E7";
            break;
        case "JS" :
            tagColor = "#FFEB9B";
            break;
        case "React" :
            tagColor = "#D3EDF2";
            break;
        case "ETC" :
            tagColor = "#D3EDF2";
            break;
    }

  return (
    <div tagColor={tagColor} {...styles}>
      {children}
    </div>
  );
};



export default CategoryTag;