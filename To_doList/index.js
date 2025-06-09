let tasks=[];
document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault();
    addTask();

})
let addTask=()=>{
   const taskInput= document.getElementById('taskInput');
    const text= taskInput.value.trim();
    if(text){
        tasks.push({text:text,completed:false});
        taskInput.value="";
        updatetaskList();
        updateStats();
    }
}


const editTask=(index)=>{
    const taskInput=document.getElementById('taskInput');
    taskInput.value=tasks[index].text;
    tasks.splice(index,1)
    updatetaskList();
    updateStats();
}
const updateStats=()=>{
    const compltask= tasks.filter(task=>task.completed).length;
    const totaltasks= tasks.length;
    const progress= (compltask/totaltasks)*100;
    const progbar=document.getElementById('progress');
    progbar.style.width=`${progress}%`
    document.getElementById('numbers').innerText=`${compltask}/${totaltasks}`
    if(tasks.length && compltask ===totaltasks)
    {
        confettie();
    }
}
const deleteTask=(index)=>{
    tasks.splice(index,1);
    updatetaskList();
    updateStats();

}
const toggleTaskCompleted=(index)=>{

    tasks[index].completed=!tasks[index].completed;
    updatetaskList();
    updateStats();

}
const updatetaskList=()=>{
    const taskList= document.getElementById('task-list');

    taskList.innerHTML="";

       tasks.forEach((task,index)=>{
        const listItem=document.createElement('li')
        listItem.innerHTML=
        `<div class="taskItem"> 
         <div class="task ${task.completed ?"completed":""}">
        <input type="checkbox"  class="checkbox" ${task.completed?"checked":""}/>
         <p>${task.text}</p>
        </div><div class="icons"><img src="./Images/edit.jpg" alt="" height="40px" width="40px" onClick="editTask(${index})"/> 
        <img src="./Images/deletelogo.jpg" alt="" height="40px" width="40px"onClick="deleteTask(${index})"></div></div>`
        listItem.querySelector('.checkbox').addEventListener('change',()=>toggleTaskCompleted(index))
        taskList.appendChild(listItem);
    })

}
let confettie=()=>{

    const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

