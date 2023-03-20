import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm 
        user={{ 
          name: "Josias", 
          email: "Josias@gmail.com", 
          bio: "Sou um ...",
          role: "admin"
       }}/>
    </div>
  );
}

export default App;
