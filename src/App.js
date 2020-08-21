import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const friends  = ['Abedul','Foridul','Foysal','Tushar','Jisan','Rony','Masud','Suruj','Kaioum'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello react come with me</p>

      <ul>
        {
          friends.map(fd => <li>{fd}</li>)
        }
      </ul>

        <Person name = "Muktarul khan" occupation= "Software Engineer" country = "Bangladesh"> </Person>
        <Person name = "Salman khan" occupation= "Actor" country = "India"> </Person>
        <Person name = "Shahid Afridi" occupation= "Cricketer" country = "Pakistan"></Person>
{/* 
         { <Product name = {products[0].name} price = {products[0].price}></Product>
        <Product name = {products[1].name} price = {products[1].price}></Product>
        <Product name = {products[2].name} price = {products[2].price}></Product> } */}
        {/* type 1 */}
        <Product product = {products[0]}></Product>
        <Product product = {products[0]}></Product>
        <Product product = {products[0]}></Product>
        {/* type 2 */}
        {
          products.map(pd => <Product product ={pd}></Product>)
        }

        <Counter></Counter>
        <MinusCounter></MinusCounter>

        <Users></Users>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Person(props){
  return (
   <div style= {{border: '2px solid deeppink',margin:'2px'}}>
      <h2 style ={{color:'tomato'}}>name: {props.name}</h2>
      <p>occupation: {props.occupation}, country: {props.country} in 2021-2050 </p>
   </div>
  )
}
const products = [
  {name:"Adobe Photoshop", price:'$90.99'},
  {name:"Adobe illustrator", price:'$100'},
  {name:"Acrobat Pro", price:'$150'}
]
const productNames = products.map(product => product);
console.log(productNames);
function Product(props){
  const productStyle = {
    height:'400px',
    width:'400px',
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'whiteSmoke',
    color:'tomato',
    float:'left'
  }
  const {name,price} = props.product;
  // console.log(name,price)
  return(
    <div style = {productStyle}>
      <h3>Name:{name}</h3>
      <h2>price:{price}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est molestias repellat at quos? Incidunt aspernatur debitis</p>
      <button>Buy now</button>
    </div>
  )
}
// this is for counter
function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div style = {{color:'tomato', margin:'5px',border:'3px solid gray',borderRadius:'5px',height:'150px',width:'150px'}}>
      <h2>Count:{count}</h2>
      <button onMouseMoveCapture= {handleIncrease}>Increase</button>
      <button onMouseMoveCapture= {() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
  }

  function MinusCounter(){
    const [count,setCount] = useState(0);
    const handleDecrease = () => setCount(count - 1);
    
    return(
      <div style = {{color:'tomato', margin:'5px',border:'3px solid gray',borderRadius:'5px',height:'150px',width:'150px'}}>
        <h2>Count:{count}</h2>
        <button onClick= {() =>setCount(count + 1)}>Increase</button>
        <button onClick= {() =>setCount(count - 1)}>Decrease</button>
      </div>
    )
    }


    function Users(){
      const [users,setUsers] = useState([]);
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
      }, [])
      return(
        <div>
          <h3>Dynamic Users:{users.length}</h3>
          <ul>
            {
              users.map(user => <li>{user.name}</li>)
            }
          </ul>
        </div>
      )
    }

export default App;
