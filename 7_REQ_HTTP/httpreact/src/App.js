import './App.css';

import {useState, useEffect } from "react";

//useState - > Salvar os dados em algum lugar...
//useEffect - > Favzer a requisição uma vez ou quando precisar

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])
  // "products" -> Auxilia a salvar os pordutos
  // "setProducts" -> Auxilia a colocar os produtos em algum lugar...

  // 1 - REsgatando dados
  useEffect(() => {
    async function fetchData() {
      // Necesario uma URL base para puxar os dados
      const res = await fetch(url); // Recebemos esta resposata como testo puro
      // res -> Resposta da requisição
  
      // tranformando da resposta de texto em um objeto
      const data = await res.json();
  
  
      setProducts(data);
    }    
    fetchData();
  }, []);
  /*array de dependencia*/

  console.log(products);
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
