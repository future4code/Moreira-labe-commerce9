import { render } from '@testing-library/react';
import React from 'react';
import { Cart } from './components/Cart/Cart';





class App extends React.Component {
  render(){
    const productsList = [
      {
        id: Date.now(),
        name: 'Pacote ida e volta - Marte',
        value: 150000
      },
      {
        id: Date.now(),
        name: 'Pacote ida e volta - Júpiter',
        value: 220000
      },
      {
        id: Date.now(),
        name: 'Pacote ida e volta - Saturno',
        value: 150000
      },
      {
        id: Date.now(),
        name: 'Pacote ida e volta - Urano',
        value: 310000
      },
      {
        id: Date.now(),
        name: 'Pacote ida e volta - Netuno',
        value: 450000
      },
    ]
  
    const mappedProductsList = productsList.map((product) => {
      return <p>{product.name} = {product.value}</p>
    })

  return (
    <div className="App">
      <Cart/>
     {/*  {mappedProductsList} */}
    </div>
  );
  }
}

export default App;
