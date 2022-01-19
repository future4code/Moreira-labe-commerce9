import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
background-color: blue;
padding: 15px;
margin: 20px;
`

const Filtro = styled.div`
// background-color: red;
display: Flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
`
const BuscaPreço = styled.div`
display: Flex;
border: 2px solid black;
border-radius: 5px;
padding: 5px;
width: 100vh;
`
const BuscaNome = styled.div`
border: 2px solid black;
border-radius: 5px;
padding: 5px;
width: 100vh;
`

class App extends React.Component{
  render(){
    return(
      <div>
        <Header>
          <h1>Viajens Espaciais</h1>
        </Header>

        <Filtro>
            <BuscaPreço>
              <div>
              <h4>Valor mínimo:</h4>
              <input
              placeholder='Min    R$1000,00'/>
              </div>

            <div>
              <h4>Valor máximo:</h4>
              <input
              placeholder='Máx     R$100000,00'/>
            </div>
          </BuscaPreço>
          
          <BuscaNome>
            <h4>Busca por Nomes:</h4>
            <input
            placeholder='Nome do Produto'/>
          </BuscaNome>
        </Filtro>
      </div>
    )
  }
}

export default App;
