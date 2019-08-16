// select   the elements
const clear = document.querySelector(".clear"); 
const dateElement = document.querySelector("#date");
const list = document.querySelector("#list"); 
const input = document.querySelector("#input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// show todays date
const today = new Date();
const options = {weekday: "long",month: "short",day: "numeric"};
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

// add to-do functions
const addToDo=(toDO)=>{
    const item = `
                  <li class = "item">
                  <i class="fa fa-circle-thin co"  job="complete" id="0"></i>
                  <p class="text">${toDO}</p>
                  <i class="fa fa-trash-o de"></i>
                  </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position,item); 
}

// add an item if the user hits the enter key
const addItem = (even) =>{
    if(event.keycode == 13){
        const toDo = input.value;
        // if the input isnt empty
        if(toDo){
            addToDo(toDo);
        }
    }
}
document.addEventListener("keyup",addItem)
