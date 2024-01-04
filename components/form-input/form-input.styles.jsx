import styled, { css } from "styled-components"; //> We need to import css from styled-components to use css in js ... use if you want to pass around css styles and use them in different components 

const subColor = "grey"; //> Instead of using sass variables, we can use js variables
const mainColor = "black";



const shrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`
//> why ${mainColor} instead of $mainColor? Because we are using js variables, not sass variables and when we use js variables, we need to use ${} to use them
export const FormInputLabel = styled.label`
        color: ${subColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;

        ${({shrink}) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
        background: none;
        background-color: white;
        color: ${subColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${subColor};
        margin: 25px 0;

        &:focus {
            outline: none;
        }

        &:focus~ ${FormInputLabel} {
            ${shrinkLabelStyles};
        }
`

export const Group = styled.div`
    position: relative;
    margin: 45px 0;
        input[type='password'] {
            letter-spacing: 0.3em;
        }
`
//> remember the order we write the components in : we first write the component that doesn't have any other component inside it, then we write the component that has the previous component inside it/uses it and so on