import React from 'react';
import CardsProdutos from "./CardsProdutos";


class ListaCards extends React.Component {
    render() {
        
    
        return (
        
         <div>
            {this.props.viagens.map(viagem => {
            return (
              <CardsProdutos imagem = {viagem.imageUrl} />
            )
          })}  
         </div>
        )
      }
}

export default ListaCards;