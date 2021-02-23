//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const friendList = [
   {name:'Abir Khan', age:16,Nationality:'Bangladesh'},
   {name:'Kabir Sheikh', age:18,Nationality:'Bangladesh'},
   {name:'Rakib Sheikh', age:18,Nationality:'Bangladesh'},
   {name:'Nahid Sheikh', age:17,Nationality:'Bangladesh'},
   
 ]
  return (
    <div className="App">
      <header className="App-header">
        
        <Counter></Counter>
       <h1>hello</h1>
       {
         friendList.map(friend => <Identity id={friend}></Identity>)
       }
       <Dynamic></Dynamic>
       <User></User>
      </header>
    </div>
  );
}

function Dynamic(){
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[]);

  console.log(posts)
  return(
    <div>
      <ul>
        {
          posts.map(post => <li>id:{post.id},Title:{post.title}</li>)
        }
      </ul>
    </div>
  )
}

function User(){
  const [users,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
     <h1>username</h1>
     <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
     </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Identity(props){
  const IdentityStyle={
    border:'4px solid cyan',
    margin:'10px',
    padding:'15px',
    height:'20rem',
    width:'300px', 
    backgroundColor:'gray',
     
  }
   const {name,age,Nationality} = props.id;
  return(
    <div style={IdentityStyle}>
      <h3>Name: {name}</h3>
      <h5>Age: {age}</h5>
      <h5>Nationality: {Nationality}</h5>
    </div>
  )
}

export default App;



