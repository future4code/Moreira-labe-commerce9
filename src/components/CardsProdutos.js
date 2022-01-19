import React from 'react';


class CardsProdutos extends React.Component {
    addCarrinho = () =>{
        const novaCompra = {
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0
        }

        const copiaNovaCompra = [...this.state.viagens, novaCompra]
        this.setState({viagens:copiaNovaCompra})
       
    }
    render() {
    
        return (
         <div>
            <img scr={this.props.imagem} alt={'Imagem do planeta'} /> 
            <div>
                <h3>Viagem à Marte</h3>
                <p>R$ 1.000,00</p>
            </div>
            <div>
            <button onClick={this.addCarrinho}>Adicionar ao Carrinho</button>
            </div>
         </div>
        )
      }
}

export default CardsProdutos;