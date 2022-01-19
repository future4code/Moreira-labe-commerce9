import React from "react";
import { SubCart } from "./SubCart";
import styled from "styled-components";


const CartScreen = styled.section`
    background-color: #b87af6;
    display: flex;
    justify-content: space-around
    
`;


export class Cart extends React.Component {
  render() {
    return (
      <CartScreen>
        <SubCart title={"Produtos adicionados"} product/>
        <SubCart title={"Valor final"}/>
      </CartScreen>
    );
  }
}
