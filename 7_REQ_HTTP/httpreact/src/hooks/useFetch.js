import { useState, useEffect } from "react";

// 4 - Custum hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // Criação de Request que invoca uma resquisição da API

    useEffect(() => {

        // So vai funcionar/Passar se tiver uma resposta do JSON
        const fetchData = async () => {
            const res = await fetchData(url);

            const json = await res.json();
            // await -> Esperar

            setData(json); // Passa os valores de JSON para DATA
        };

        fetchData(); // Por fim é chamada a função para executar a mesma
        
    }, [url]);
// Exportação
return { data };

}