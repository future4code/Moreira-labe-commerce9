import React from "react";
import { SubCart } from "./SubCart";
import styled from "styled-components";


const CartScreen = styled.section`
    background-color: #aaa;
    display: flex;
    justify-content: space-around
    
`;


export class Cart extends React.Component {
  render() {
    return (
      <CartScreen>
        <SubCart title={"Produtos adicionados"} product/>
        <SubCart title={"Valor final"}/>
        
        {this.props.carrinho.map(viagem => {
                return (
                    <div>
                    
                        <div>
                            <h3>{viagem.name}</h3>
                            <p>{viagem.value}</p>
                            <p>{viagem.qtde}</p>
                        </div>
          
                    </div>
                )
            })}
      </CartScreen>
    );
  }
}
