import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

function App() {
  const [todos,setTodos] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResult,setSearchResult] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/todos";

  //Add todo to JSON server
  const addTodo = (todo) => {
    axios.post(baseURL,{...todo}).then((res) => {
      if(res.status == 201) {
        alert('Todo is Added Successfully')
      }
      setTodos([...todos,res.data]);
    })
  }

  //retrive from json place holder
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const todos = (res.data).slice(0,5);
      // console.log(todos);
      setTodos(todos);
    });
  },[]);

  //Delete Todo
  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      if(res.status == 200) {
        alert('Todo is Deleted Successfully')
      }
    })
  }

  //Edit Todo
  const editTodo = (todo) =>{
    // console.log(todo)
    axios.patch(`${baseURL}/${todo.id}`,{...todo}).then((res) => {
      setTodos(todos.map((con) => con.id === todo.id ? res.data : con));
      if(res.status == 200) {
        alert('Todo is Updated Successfully')
      }
    })
  }

  //Search todo
  const handleSearch = (keyword) => {
    setSearchTerm(keyword);

    if(keyword !== ''){
      const newtodos = todos.filter((todo) => Object.values(todo).join(' ').toLowerCase().includes(keyword.toLowerCase())
      )
      setSearchResult(newtodos)
    }else{
      setSearchResult(todos)
    }
  }

  return (
    <Router>
      <div className='bg-dark text-light'>
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-7">
          <Header /> 
            <Routes>
              <Route path="/" element={<TodoList todos={searchTerm.length < 1 ? todos: searchResult} onDelete={handleDelete} term={searchTerm} onSearch={handleSearch} />}/>
              <Route path='/add' element={<AddTodo onAdd={addTodo}/>}/>
              <Route path='/edit' element={<EditTodo onEdit={editTodo}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </Router>
    


  );
}

export default App;
