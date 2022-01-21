import styled from 'styled-components';
import React from 'react';

const H3 = styled.h3`
align-items: center;
background-color: red;
`
class CardCarrinho extends React.Component {
   
   
      render() {
     
        return (        
            this.props.teste.map(viagem => {
                return (
                    <div>                    
                        <div>
                            <h3>{viagem.name}</h3>
                            <p> { viagem.value}</p>
                        </div>          
                    </div>
                )
            })
  
        )
      }
};

export default CardCarrinho;