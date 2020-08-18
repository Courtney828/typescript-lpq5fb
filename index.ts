// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let ToDoList = [{TaskName:"challange1", TaskDate:"3/August/2020",TaskStatus:"done"},
                {TaskName:"Html", TaskDate:"10/August/2020", TaskStatus:"done"},
                {TaskName:"Css", TaskDate:"17/August/2020", TaskStatus:"dodo"},
                {TaskName:"Javascript", TaskDate:"24/August/2020", TaskStatus:"todo"},
                {TaskName:"challange3", TaskDate:"31/August/2020", TaskStatus:"pending"},
                {TaskName:"task3", TaskDate:"7/September/2020", TaskStatus:"todo"},
                {TaskName:"challange4", TaskDate:"14/September/2020", TaskStatus:"todo"},
                {TaskName:"task4", TaskDate:"21/September/2020", TaskStatus:"todo"},
                {TaskName:"challange5", TaskDate:"28/September/2020", TaskStatus:"todo"},
                {TaskName:"task5", TaskDate:"5/October/2020",TaskStatus:"todo"}]

update(ToDoList);
function update(ToDoList){
  if(ToDoList[4].TaskStatus==="pending"){
    return ToDoList[4].TaskStatus="done";

  }
  else{
    return ToDoList[4].TaskStatus="pending";
  }
  }
console.log(ToDoList[4].TaskName + " "+ ToDoList[4].TaskDate +": " + ToDoList[4].TaskStatus); 





