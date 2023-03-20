import './MyForm.css'

import {useState} from 'react'

const MyForm = ({user}) => {
  // 6 - controlando inputs

  // 3 - gerenciamento de dados
  
  const [name, setName] = useState(user ? user.name : "Não existe usuario")
  const [email, setEmail] = useState(user ? user.email : "Não existe email")

  // Contante [Variavel, Preenchimento da respectiva variavel]
  const [bio, setBio] = useState("")

  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value); 
  };
  /*
  console.log(name);
  console.log(email);
  */
  const handleSubmit = (event) => {
    event.preventDefault(); // Parada do envio de email "Não recarega mais a pagina quando resquisitado"
    console.log("Enviamos o formulario");
    console.log(name, email, bio, role);

    // Validação
    /*
    const verf = (e) => {
      e
      console.log("tem @");
    }
    */

    // Envio

    // 7 - Limpar Formulario
    setName("");
    setEmail(""); // -- > Atribui-se um string vazia
    setBio("");
  };

  return (
    <div>
        {/*5 - Envio de form*/}


        {/* 1 - Criação */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Digite o seu nome" 
              onChange={handleName}
              value={name}
            />
          </div>
          {/*2 - Label envolvendo input*/}
          <label htmlFor="">
            <span>E-mail:</span>
            {/*4 - Simplificação de manipulação de state*/}
            <input 
              type="email" 
              name="email" 
              placeholder="Digite seu e-mail" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          {/*8 - TextArea*/}
          <label>
            <span>Bio</span>
            <textarea 
            name="bio" 
            placeholder="Descrição do Usuario" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}
            ></textarea>
          </label>
          {/*9 - seleect*/}
          <label>
            <span>Função no sitema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuario</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    </div>
  );
};


export default MyForm;