import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}])
    let [newTodo,setNewTodo]=useState("")
    let addNewTask=()=>{
        setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo("");
      
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);

    }
    let deleteTodo=(id)=>{
       setTodos(todos.filter((todo)=>todo.id !=id));

    }
    let upperCaseToAll=()=>{
      setTodos(todos.map((todo)=>{
           
           return {
            ...todo,task:todo.task.toUpperCase()
           }
        }))
    
    }
    let lowerCaseToAll=()=>{
          setTodos(todos.map((todo)=>{
            return{
                ...todo,task:todo.task.toLowerCase()
            }
          }))
    }
    let upperCaseOne=(id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return {
                        ...todo,task:todo.task.toUpperCase()
                    }
                }
                else{
                    return todo;
                }
            })
        )

    }
    let isMarkDone=(id)=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id==id){
                    return {
                        ...todo,isDone:true
                    }
                }
                else{
                    return todo;
                }
            })
        )

    }
    
    return (
        <div>
            <input  placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}> Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h2> Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>(
                     <li key={todo.id}><span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                     &nbsp;
                     <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                     &nbsp;&nbsp;
                     <button onClick={()=>upperCaseOne(todo.id)}>upperCase One</button>
                     <button onClick={()=>isMarkDone(todo.id)}>Mark as Done</button>
                     </li>
                    )
                )} 
            </ul>
            <span>
            <button onClick={upperCaseToAll}>UpperCase All</button>
            &nbsp;&nbsp;
            <button onClick={lowerCaseToAll}>LowerCase All</button>
            </span>
        </div>
    )
}