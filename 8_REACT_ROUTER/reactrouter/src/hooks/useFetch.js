import { useState, useEffect } from "react";

// 4 - Custum hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // Criação de Request que invoca uma resquisição da API

    // 5 - refatorando POST
    // Novos states
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null); // GET or POST
    const [callFetch, setCallFetch] = useState(false); // Ponto que mostra quando é atualizado os dados, trás os dados atualizados

    // 6 - Loading
    const [loading, setLoading] = useState(false);


    // 7 - Tratando erros
    const [error, setError] = useState(null);

    // 8 - desafio 6
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method); // Mapeando setMethod ("Alterando o mesmo")
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {
        // So vai funcionar/Passar se tiver uma resposta do JSON
        const fetchData = async () => {
            // 6 - loading
            setLoading(true); // Chamada da func --> Começa a carregar os dados

            try {
                
                const res = await fetch(url);
                const json = await res.json();
                // await -> Esperar
                setData(json); // Passa os valores de JSON para DATA
                
            } catch (error) {
                console.log(error.message); //

                setError("Houve algum erro ao carregar");
            }

            setLoading(false); // Quando terminar de imprimir os dados na tela --> Ou seja quando o
            // estado de setData for alterado roda como false
        };

        fetchData(); // Por fim é chamada a função para executar a mesma
        
    }, [url, callFetch]);

// 5 - refatorando o POST
useEffect(() => {
    // Inserção de dados REFATORADO
    const httpRequest = async () => {

        let json

        if(method === 'POST'){
            let fetchOptions = [url, config]
            // Possivel inserir diferentes dados
    
            const res = await fetch(...fetchOptions)
    
            json = await res.json();
            setCallFetch(json); // Executa uma requisição de GET quando o POST for concluido
        } else if(method === "DELETE"){
            const deletUrl = `${url}/${itemId}`

            const res = await fetch(deletUrl, config)

            json = await res.json();
        }
        setCallFetch(json); // Executa uma requisição de chamada dos objetos GET apos o DELETE
    }
    // Após a checagem invoca a função:
    httpRequest();

}, [config, method, url]) // sempre que houver um alteração na config -> Chama-se o usEffect

// Exportação
// O que vai retornar em App.js listado a baixo
return { data, httpConfig, loading, error }; // Retornos para App.js (Dados, XXXX, Estado de carregamento)

}