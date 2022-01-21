import React from 'react'
import { Cart } from './components/Cart/Cart';
import styled from 'styled-components';
import CardsProdutos from './components/compras/CardProdutos';



const Header = styled.div`
background-image: url('https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/03/universo-o-que-e-origem-principais-elementos-e-curiosidade-2.jpg');
padding: 5px;
margin: 5px;
text-align: center;
color: #D3D3D3;
text-shadow:3px 4px 2px #aaa
`

const Filtro = styled.div`
// background-color: red;
display: Flex;
flex-direction: row;
justify-content: space-around;
padding: 5px;
margin: 20px;
margin-right: 20px
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
/* background-color: green; */
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
const SelecaoCards = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    /* margin: 5%; */
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    padding: 10px;
    margin width: 10%;
    flex-wrap: wrap;
    flex-direction: row;
    
    
`

const EstilizaBotao = styled.div`
  text-align: center;
  margin-bottom: 10px; 
  border-radius: 10px 10px 1px 1px;
  margin: 0 auto;
 
  
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
        imageUrl: "https://s1.static.brasilescola.uol.com.br/be/e/lua1.jpg",
        qtde: 1
      },
      {
        id: 2,
        name: 'Pacote ida e volta - Marte',
        value: 150000,
        imageUrl: "https://br.toluna.com/dpolls_images/2018/06/19/693a3325-08d3-44b3-91fb-ebdf0bc4d776_x365.jpg",
        qtde: 1
      },
      {
        id: 3,
        name: 'Pacote ida e volta - Júpiter',
        value: 220000,
        imageUrl: "https://s2.glbimg.com/paUxikPLNf8SbK4IctB6x5OIk0s=/0x0:1280x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
        qtde: 1
      },
      {
        id: 4,
        name: 'Pacote ida e volta - Saturno',
        value: 150000,
        imageUrl: "https://st.depositphotos.com/1546708/3053/i/600/depositphotos_30536645-stock-photo-saturn.jpg",
        qtde: 1
      },
      {
        id: 5,
        name: 'Pacote ida e volta - Urano',
        value: 310000,
        imageUrl: "https://i.ytimg.com/vi/jjxbLuNEnc4/maxresdefault.jpg",
        qtde: 1
      },
      {
        id: 6,
        name: 'Pacote ida e volta - Netuno',
        value: 450000,
        imageUrl: "https://www.sobiologia.com.br/figuras/Universo/netuno.jpg",
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
            <label>Busca por Nomes: </label>
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

          <SelecaoCards>

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
                return  <EstilizaBotao><CardsProdutos  name={produto.name} value={produto.value} imageurl={produto.imageUrl} viagens = {produto}   addcarrinho = {this.addCarrinho}/>
                <button onClick={()=>this.addCarrinho(produto)}>Adicionar ao Carrinho</button></EstilizaBotao>
              })} 

          </SelecaoCards>
          <div>Carrinho de Compras</div>
        
              <div><Cart carrinho = {this.state.carrinho} /></div>
        
     </div>
    )
  
  
  }
}

export default App;
