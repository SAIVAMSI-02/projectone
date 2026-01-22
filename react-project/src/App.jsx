import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'

function App() {
  const [inputgiven,setInputGiven]=useState(""); // State change avudhi kabbati we used this
  
// Tasks change avtaayi so usestate as a array la iccham 
const [myTasks,setMyTasks]=useState(["Reading Books","Writing Notes","Playing Games","Trip Plan","Movie Plan","Trips to Temples","Visit Friends","Library Plan"]);
const [completedTasks,setCompletedTasks]=useState([]); 
  function handleInput(e){ //onchange of input field chestey e function call avudhi with parameters what you typed inside input field
   let newval=e.target.value; 
   setInputGiven(newval);  // setinputgiven loki user enter chesina value ni send chestunnam 
  }

  function addTask(){ // onclick + button click chestey e function call avvali
    setMyTasks(prev=>[...prev,inputgiven]); //... spread operator use chesi unna tasks arr loki manam ichina new task value menas inputgiven ni append chestunnam
       console.log(inputgiven); // + button click chesakey inputfield lopala unna value console lo print avuddhi
       setInputGiven("");
}
 
// delete task ni TaskItem component ki send chestunnam DELETE button ki sending
function deleteTask(taskName,listType){
  console.log("before Deleting:",myTasks);
if(listType==='myTasks'){
 let afterdelete=myTasks.filter(x=>x!=taskName) // filter is arr method lopala condition satisfy inavey afterdelete lo store avtayi 
 console.log('After Deletion:',afterdelete);
 setMyTasks(afterdelete);
}
else if(listType==='completedTasks'){
 let afterdelete=completedTasks.filter(x=>x!=taskName) // filter is arr method lopala condition satisfy inavey afterdelete lo store avtayi 
 setCompletedTasks(afterdelete);
}}

// complete task ni TaskItem component ki send chestunnam COMPLETE button ki sending
function completeTask(taskName){
 let aftercomplete=myTasks.filter(x=>x==taskName) // filter is arr method lopala condition satisfy inavey afterdelete lo store avtayi 
let after=myTasks.filter(x=>x!=taskName) // filter is arr method lopala condition satisfy inavey afterdelete lo store avtayi 
 setMyTasks(after);
 console.log("Completed Tasks:",aftercomplete[0]); //completed task at a time one a untadhi so,always at 0th index
 setCompletedTasks(prev=>[...prev,aftercomplete[0]]) //completed task arr looki 0th index 1by1 completed v send chestunnam
 console.log("Completed Tasks:",completedTasks);
}

  return (
    <div className='main-body d-flex justify-content-center align-items-center' > {/*d-flex means full flex box avudi,justifycontentcenter-horizontal center,alignitemscenter-verticalcenter*/}
      <div className='todolist-body'>
       <center><h1>My Todo List</h1></center> 

       <div>
        <div className='todo-inputdiv'> {/* input field and btn same div lo pettamu */}
        <div className="form-floating w-75"> {/*w-75 means width 75 icham*/}
  <input type="text" className="form-control" id="floatingInput" placeholder="Todo-task" onChange={(e)=>{
    handleInput(e)
  }} value={inputgiven}/>   {/* 2 way binding value={newTask} ani iccham So,console looki a value anedhi vastadhi means a letter type chesi newTask will be updated,newTask update ayye everytime value will be */
  }
  <label htmlFor="floatingInput">Todo Task</label>
  </div>
    <button className='btn btn-primary'id='addbtn'onClick={()=>{addTask()}}>+</button> 
</div>

      <center> <h4>PENDING TASKS</h4> </center>
        <ul className='task-list'>
          {    // kindha veeti { lopala unnadhi js code }
          myTasks.map((task,index)=>
           <TaskItem
    key={index}
    taskName={task}
    deleteTask={deleteTask}
    completeTask={completeTask}
    listType="myTasks"   // pass list type
  />  // arr nunchi 1 by 1 task with index tho fetch chesi TaskItem Component ki prop (args) la send chestunnam and delete,complete btns ki func sending
          )
          }
        </ul> 
        <br />
        <center> <h4>COMPLETED TASKS</h4></center>
        <ul className='task-list'>
          {    // kindha veeti { lopala unnadhi js code }
          completedTasks.map((task,index)=>
           <TaskItem
    key={index}
    taskName={task}
    deleteTask={deleteTask}
    listType="completedTasks"   // pass list type
  /> // arr nunchi 1 by 1 task with index tho fetch chesi TaskItem Component ki prop (args) la send chestunnam and delete,complete btns ki func sending
          )
          }
        </ul>
        </div> 
        </div>
    </div>
  )
}

export default App;
