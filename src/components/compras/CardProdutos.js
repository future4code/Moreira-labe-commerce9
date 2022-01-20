
import React from 'react';
import styled from 'styled-components';

const CardsHome = styled.div`
display: grid;
/* grid-template-columns: 1fr 1fr 1fr; */
`

class CardsProdutos extends React.Component {
   
    
      
    
      render() {
       const productsList = [
            {
              id: 1,
              name: 'Pacote ida e volta - Lua',
              value: 90000
            },
            {
              id: 2,
              name: 'Pacote ida e volta - Marte',
              value: 150000
            },
            {
              id: 3,
              name: 'Pacote ida e volta - Júpiter',
              value: 220000
            },
            {
              id: 4,
              name: 'Pacote ida e volta - Saturno',
              value: 150000
            },
            {
              id: 5,
              name: 'Pacote ida e volta - Urano',
              value: 310000
            },
            {
              id: 6,
              name: 'Pacote ida e volta - Netuno',
              value: 450000
            },
          ]

          const cardsFeitos = productsList.map(viagem => {
            return (
        
                <CardsHome>
                   
                    <img src={viagem.imageUrl} alt='Imagem do planeta' /> 
                    
                    
                        <h3>{viagem.name}</h3>
                        <p>{viagem.value}</p>
                    
                   
                    <button onClick={()=>this.props.addcarrinho(viagem)}>Adicionar ao Carrinho</button>
                    
                </CardsHome>
            )
        })
        console.log(productsList)
        return (
          
         <div>{cardsFeitos}</div>
  
        )
      }
};

export default CardsProdutos;