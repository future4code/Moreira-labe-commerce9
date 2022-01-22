import React from "react";
import styled from "styled-components";

const CartScreen = styled.section`
  background-color: #010736;
  display: flex;
  justify-content: space-around;
  color: #D3D3D3;
 
`;

const SubCart = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubValorFinal = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export class Cart extends React.Component {
  sumValue = () => {
    let valueAtual = 0
    for (let travel of this.props.carrinho){
     valueAtual += travel.qtde * travel.value
    };
    return valueAtual
  };
  
  render() {
    return (
      <CartScreen>
        <SubCart>
          <h1>Produtos adicionados</h1>
          {this.props.carrinho.map((viagem) => {
            return (
              <div>
                <h3>
                  x{viagem.qtde} {viagem.name}
                </h3>
              </div>
            );
          })}
        </SubCart>

        <SubCart>
          <h1>Valor parcial</h1>
          {this.props.carrinho.map((viagem) => {
            return (
              <div>
                <h3>
                  R${viagem.qtde * viagem.value}                  
                </h3>
              </div>
            );
          })}
        </SubCart>

        <SubValorFinal>
          <h1>Valor final</h1>   
          <h3>R${this.sumValue(this.props.carrinho)}</h3>  
        </SubValorFinal>
      </CartScreen>
    );
  }
}
