import React from 'react';
import styled from styled-Component;


// const Filtro = styled.div`
// background-color: black;
// display: Flex;
// `

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='Header'>
          <h1>Viajens Espaciais</h1>
        </div>

        <div>
            <div className='BuscaPreço'>
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
          </div>
          
          <div className='BuscaNome'>
            <h4>Busca por Nomes:</h4>
            <input
            placeholder='Nome do Produto'/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
