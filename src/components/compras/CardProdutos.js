import styled from 'styled-components';
import React from 'react';

const Img = styled.img`
    width: 200px;
    height: 200px;
`

class CardsProdutos extends React.Component {
    render() {
        return (
            <section>
              
                    <Img src={this.props.imageurl} alt='Imagem do planeta' />            
                    <p>{this.props.name}</p>
                    <p>R$ {this.props.value}</p>                        
                      
            </section>
        );
    }
    
} 
    
    

export default CardsProdutos;