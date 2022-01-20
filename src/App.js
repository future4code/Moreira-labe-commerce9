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
    carrinho: []
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
  
            const novaCompra = viagemEscolhida
            
            
            const copiaNovaCompra = [...this.state.carrinho, novaCompra] 
           
            this.setState({carrinho: copiaNovaCompra}) 
           
          }
  render(){
    

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
            {/* {this.state.query} */}
          </BuscaNome>

          {/* <div>
            {this.state.jobs
            .filter(job =>{
              return job.titulo.toLowerCase().includes(this.state.query.toLowerCase())
              || job.descrição.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .filter(job =>{
              return this.state.minPreço === "" || job.preço >= this.state.minPreço
            })
            .filter(job =>{
              return this.state.maxPreço === "" || job.preço <= this.state.maxPreço
            })
            .map(job => {
              return 
              <div>
                key={job.id} job = {job}
              </div>
            })} */}
          {/* </div> */}

        </Filtro>

          <div>

            <CardsProdutos viagens = {this.state.productsList}   addcarrinho = {this.addCarrinho}/>
            <div>Carrinho de Compras</div>
            <CardCarrinho teste = {this.state.carrinho} />

         </div>
            <Cart/>
      </div>
    )
  
  
  }
}

export default App;
