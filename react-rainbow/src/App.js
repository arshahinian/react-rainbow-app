import React,{useState} from 'react';
import './App.css';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';

function App() {
  let [colors,setColors] = useState(["red","yellow","blue"])
  let addColor = (newColor) => {setColors([...colors,newColor])}
  return (
    <div className="App">
        {colors.map((color,i)=>{
          return (<ColorBlock key={i} color={color}/>)
        })}
        <ColorForm addColor={addColor}/> 
    </div>
  );
}

export default App;
