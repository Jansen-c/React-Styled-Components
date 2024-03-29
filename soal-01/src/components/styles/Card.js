import styled from "styled-components";

export const CardContainer = styled.div`
    border-color: rgba(192, 192, 192, 0.5);
    border-width: 1px;
    border-style: solid;
    border-radius: 0.5em;
    width:  ${(props) => {
        if(props.width){
            return props.width
        }
        else{
            return "100%"
        }
    }};
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const CardImage  = styled.img`
    width: 100%;
    height: 350px;
    object-fit:cover;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
`;

export const CardBody = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const CardPrice =  styled.h5`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
`;

export const CardProductName = styled.h6`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
    color: grey;
`;