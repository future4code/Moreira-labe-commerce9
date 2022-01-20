
import React from 'react';

class CardCarrinho extends React.Component {
   
   
      render() {
     
        return (
          
        
            this.props.teste.map(viagem => {
                return (
                    <div>
                    
                        <div>
                            <h3>{viagem.name}</h3>
                            <p>{viagem.value}</p>
                        </div>
          
                    </div>
                )
            })
  
        )
      }
};

export default CardCarrinho;