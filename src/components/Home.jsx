import React, { useEffect} from 'react'
import Task from './Task'
import { useState } from 'react';
function Home() {
  const initial = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,settask] =useState(initial);
  const [title,settitle] =useState('');
  const [description,setdescription] =useState('');
  const Handlesubmit=(e)=>{
    e.preventDefault();
    settask([...tasks,{title , description}]);    //...tasks adds {title , description} in previous given array
    settitle("");
    setdescription("")
    
  };

  //Delete
  const deleteTask = (index)=>{
    const filterdArr = tasks.filter((val,i)=>{   //EXCEPT index of clicked element all array stored in fileredArr
      return i!==index;
    })
    console.log(filterdArr)
    settask(filterdArr);
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])   //when there is change in tasks then "localStorage.setItem("tasks",JSON.stringify(tasks))" called each time 

  return (
    <div className='container'>
      <form onSubmit={Handlesubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <textarea placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
        <button type='submit'>Add</button>
      </form>
      {tasks.map((item,ind)=>(
        <Task key={ind} title={item.title} description={item.description} deleteTask={deleteTask} ind={ind}/>
      ))}
    </div>
  )
}

export default Home
