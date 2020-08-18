// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let ToDoList = [{TaskName:"challange1", TaskDate:"3/August/2020",TaskStatus:"done"},
                {TaskName:"task1", TaskDate:"10/August/2020", TaskStatus:"done"},
                {TaskName:"challange2", TaskDate:"17/August/2020", TaskStatus:"dodo"},
                {TaskName:"task2", TaskDate:"24/August/2020", TaskStatus:"todo"},
                {TaskName:"challange3", TaskDate:"31/August/2020", TaskStatus:"todo"},
                {TaskName:"task3", TaskDate:"7/September/2020", TaskStatus:"todo"},
                {TaskName:"challange4", TaskDate:"14/September/2020", TaskStatus:"todo"},
                {TaskName:"task4", TaskDate:"21/September/2020", TaskStatus:"todo"},
                {TaskName:"challange5", TaskDate:"28/September/2020", TaskStatus:"todo"},
                {TaskName:"task5", TaskDate:"5/October/2020",TaskStatus:"todo"}]





 function update(ToDoList){
for(var i =0; 1<ToDoList.length;i++){
  if(ToDoList[4].TaskStatus=="done"){
    ToDoList[4].TaskStatus="pending";
  }
  else{
    ToDoList[4].TaskStatus="done";
  }
}
 }         


console.log(ToDoList[4]);               
