import styled from "styled-components";

import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        margin-top: auto;

        .font-go-to-checkout {
            font-size: 14px;
    }
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`



    // button {
    //     margin-top: auto;
    //     background-color: rgb(0, 0, 0);
    //     border: 1px solid black;

    //     
    //     }
    // }

    // button:hover {
    //     margin-top: auto;
    //     background-color: rgb(255, 255, 255);
    //     border: 1px solid black;


    //     }
    // }