import Number1 from './Number1';
import String1 from './String1';
import Boolean1 from './Boolean1';
import Object1 from './Object1';
import Function1 from './Function1';



import './App.css';

function App() {
  const num = 123;
  const str = "Привет, Alex!";
  const bool = "false not found";
  const obj = {name: "alex"};
  const func = () => "Hello, function";
  const arr = [1,"BMW",5];

  return (
    <div className="App">
      <header className="App-header">
      
        <Number1 message={num}/>
        <String1 message={str}/>
        <Boolean1 message={bool}/>
        <Object1 message={obj.name}/>
        <Function1 message={func} message2={arr}/>

      </header>
    </div>
  );
}

export default App;
