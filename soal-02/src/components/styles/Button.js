import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  padding-top:  0.5em ;
  padding-right:  1.5em ;
  padding-bottom:  0.5em ;
  padding-left:  1.5em ;

  font-family: sans-serif;
  font-size: 1.25em;

  border: ${(props) => (props.outline ? "lightblue" : "white")} ;
  border: 1px;
  border: solid;
  
  background-color: ${(props) => (props.outline ? "white" : "lightblue")};
  color: ${(props) => (props.outline ? "lightblue" : "white")};
  width: ${(props) => (props.fullWidth !== null ? "100%" : "auto")};
  &:hover {
        border: ${(props) => (props.outline ? "lightblue" : "cornflowerblue")} 
        border: 1px;
        border: solid;
        background-color: ${(props) => props.outline ? "lightblue" : "cornflowerblue"};
  }
`;