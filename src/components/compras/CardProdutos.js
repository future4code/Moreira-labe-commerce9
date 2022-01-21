
import React from 'react';
import styled from 'styled-components';

const CardsHome = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    /* grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 5%; */
`

class CardsProdutos extends React.Component {
    render() {
        return (
            <section>
            <CardsHome>
                   
            <img src={this.props.imageUrl} alt='Imagem do planeta' /> 
            
            
                <h3>{this.props.name}</h3>
                <p>{this.props.value}</p>
            
           
            
            
        </CardsHome>
        
         </section>
        );
      }
    
    } 
    
    

export default CardsProdutos;