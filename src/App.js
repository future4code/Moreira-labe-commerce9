import React from 'react'
import { Cart } from './components/Cart/Cart';
import styled from 'styled-components';
import CardCarrinho from './components/compras/CardCarrinho';
import CardsProdutos from './components/compras/CardProdutos';


const Header = styled.div`
background-color: blue;
padding: 10px;
margin: 20px;
text-align: center;
`

const Filtro = styled.div`
// background-color: red;
display: Flex;
flex-direction: row;
justify-content: space-around;
width: 100vw;
padding: 5px;
margin: 0 auto;
`
const BuscaPreço = styled.div`
// background-color: red;
display: Flex;
flex-direction: row;
justify-content: space-around;
text-align: justify-all;
border: 2px solid black;
border-radius: 5px;
padding: 5px;
width: 100vw;
`
const BuscaNome = styled.div`
// background-color: green;
display: Flex;
flex-direction: row;
justify-content: space-around;
border: 2px solid black;
border-radius: 5px;
// align-item: center;
padding: 5px;
width: 100vw;
`
const Button = styled.button`
width: 100px;
margin: 1px;
`


class App extends React.Component {
  state = {
    query:"",
    minPreço:"",
    maxPreço:"",
    productsList:[
      {
        id: 1,
        name: 'Pacote ida e volta - Lua',
        value: 90000,
        qtde: 1
      },
      {
        id: 2,
        name: 'Pacote ida e volta - Marte',
        value: 150000,
        qtde: 1
      },
      {
        id: 3,
        name: 'Pacote ida e volta - Júpiter',
        value: 220000,
        qtde: 1
      },
      {
        id: 4,
        name: 'Pacote ida e volta - Saturno',
        value: 150000,
        qtde: 1
      },
      {
        id: 5,
        name: 'Pacote ida e volta - Urano',
        value: 310000,
        qtde: 1
      },
      {
        id: 6,
        name: 'Pacote ida e volta - Netuno',
        value: 450000,
        qtde: 1
      },
    ],
    carrinho: [],
    ordem: "crescente"
  }

  
   updateQuery = (event) =>{
     this.setState({
       query: event.target.value
     })     
        }

  updateMinPreço = (event) =>{
  this.setState({
   minPreço: event.target.value
      })     
        }


  updateMaxPreço = (event) =>{
    this.setState({
      maxPreço: event.target.value
        })     
  }

  addCarrinho = (viagemEscolhida) =>{

    let novaCompra = viagemEscolhida
    
    // if(this.state.carrinho.length === 0){
    //    novaCompra = viagemEscolhida
    // } else {
    //    novaCompra = this.state.carrinho.map((produto)=>{
    //       if(produto.id === viagemEscolhida.id){
    //         return {...produto , qtde: produto.qtde+1} ;
    //       } 
    //   })
    // }

    const copiaNovaCompra = [...this.state.carrinho, novaCompra]
    this.setState({carrinho: copiaNovaCompra}) 
  }

  onChangeFilter = (event) => {
    this.setState({ordem: event.target.value})
  }
          
  render(){
    let produtos = []
   
    
  return (
     <div>
        <Header>
          🚀<h1>Viajens Espaciais</h1>🚀
        </Header>

        <Filtro>
            <BuscaPreço>
            <div>
              <label for= "nome">Valor mínimo: </label>
              <input
              type="number" id='nome'
              value={this.state.minPreço}
              onChange={this.updateMinPreço}
              placeholder='Min    R$1000,00'/>
            </div>
          
            <div>
              <label for= "nome2"> Valor máximo: </label>
              <input
              type="number" id='nome2'
              value={this.state.maxPreço}
              onChange={this.updateMaxPreço}
              placeholder='Máx     R$100000,00'/>
            </div>
            <Button>Pesquisar</Button>
          </BuscaPreço>
          
          <BuscaNome>
            <label for= "nome3">Busca por Nomes: </label>
            <input
            type="text" id='nome3'
            value={this.state.query}
            onChange={this.updateQuery}
            placeholder='Nome do Produto'/>
            <Button>Pesquisar</Button>
             {this.state.query} 
          </BuscaNome>

         

        </Filtro>

            <div>
              <select value={this.state.ordem} onChange={this.onChangeFilter}>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
              </select>
            </div>
          <div>

          {this.state.productsList
            .filter(produto =>{
              return produto.name.toLowerCase().includes(this.state.query.toLowerCase())
              
            })
            .filter(produto =>{
              return this.state.minPreço === "" || produto.value >= Number(this.state.minPreço)
            })
            .filter(produto =>{
              return this.state.maxPreço === "" || produto.value <= Number(this.state.maxPreço)
            }).sort((a,b)=>{
              if(this.state.ordem === "crescente"){
                return a.value-b.value
              }else{
                return b.value-a.value
              }
            })
            .map(produto => {
              return  <div><CardsProdutos  name={produto.name} value={produto.value} imageurl={produto.imageUrl} viagens = {produto}   addcarrinho = {this.addCarrinho}/>
              <button onClick={()=>this.addCarrinho(produto)}>Adicionar ao Carrinho</button></div>
            })} 

          
          <div>Carrinho de Compras</div>
        

         </div>
            <Cart carrinho = {this.state.carrinho}/>
      </div>
    )
  
  
  }
}

export default App;
