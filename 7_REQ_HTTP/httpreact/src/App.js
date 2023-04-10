import './App.css';

import {useState, useEffect } from "react";

// 4 - Custom hook
import { useFetch } from './hooks/useFetch';

//useState - > Salvar os dados em algum lugar...
//useEffect - > Favzer a requisição uma vez ou quando precisar

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])
  // "products" -> Auxilia a salvar os pordutos
  // "setProducts" -> Auxilia a colocar os produtos em algum lugar...

  // 4 - custom
  // itens vindos do Hooks -> Exportados do useFetch
  const {data: items, httpConfig, loading, error} = useFetch(url);
  // data = itens
  // httpConfig vem de hooks -> useFetch
  // Loading vem de hooks -> useFetch (Mostra estado do carregamento)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - REsgatando dados
  /*
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
*/

  /*array de dependencia*/

  console.log(products);

  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    // preventDefault -> Nâo submete o formulario

    // Objeto criado para enviar todos os dados dele para o Backend
    const product = {
      name,
      price,
    };
    console.log(product);
    
    // requisição } GET
    /*
    const res = await fetch(url, {
      // Configura como vai ser a resquisição
      method: "POST",
      // Cabeçalhos da Requisição // Transmitir na requisição que tipo de conteudo está transmitindo/Passando
      headers: {
        "Content-Type": "application/json"
      }, 
      // Corpo da requisição --> é o Objeto "Product"
      body: JSON.stringify(product),
    });
    // 3 - Carregamento Dinamico
    const addedProduct = await res.json(); // Transforma um Json em Um objeto

    setProducts((prevProducts) => [...prevProducts, addedProduct]) // Addiciona os antigos produtos e o novo evitando ter que carregar a pagina para atualizar os mesmos
    // prevProducts -> Produtos antes de add um novo
    // addedProduct -> Novo produto que veio de um JSON
*/

    // Refatorando POST
    httpConfig(product, "POST");

    // Resetar os States
    setName(""); // Ao manipular um state -> Manipula-se os estados dos inputs
    setPrice("");
  };

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*6 - loading*/}
      {loading && <p>Carregando dados...</p>}
      {/* 
      Na secção a cima verificamos se o loading está "True", se estiver retorna a TAG <p>
      */}
      {error && <p>{error}</p>}
      {!error &&
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      }
      {/*Formulario*/}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" 
            value={name} 
            name="name" 
            onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço: 
            <input type="number" 
            value={price} 
            name="price" 
            onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - state de loading no post*/}
          {loading && <input type="submit" disable value="Aguarde"/>}
          {!loading && <input type="submit" value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
