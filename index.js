// data sample
const todoList = [
    {
      id: 1,
      topic: 'Walk the Dog',
      status: false
    },
    {
      id: 2,
      topic: 'Get starbucks', 
      status: true
    },
    {
      id: 3,
      topic: 'Buy socks',
      status: true
    }
  ]

function addItem(item){
    // create a new item with retrieved text from input box, generate a unique id with uuid(), set status as false as the default(unchecked) 
    let newItem = { id: uuid(), topic: item, status: false};
    // add to the existing sample array
    todoList.push(newItem);
    // refresh screen with new added item.
    displayItems();
}

function toogleCheckItem(selectedID, checkStatus){    
    for(let i=0; i<todoList.length; i++){
        if(String(todoList[i].id)===String(selectedID)){
            todoList[i].status=checkStatus;
        }
    }
    displayItems();
}

function displayItems(){
    
    let listElement = document.getElementById('itemLists');
    //clear existing list items
    listElement.innerHTML = '';

    //go through the list of items in the sample array
     for(let size = 0; size<todoList.length; size++){
       
        //create an input field
        let newItem = document.createElement('input');
        //create span element for checklist item text
        let span = document.createElement('span');
        //create span element with the item text within each textbox item
        span.appendChild(document.createTextNode(todoList[size].topic));
        //create a line <br> element to seperate each checklist item
        let br = document.createElement('br');

        //check the status if true mark as completed
        if(todoList[size].status===true){
            span.classList = 'completed';
        }
        //set new item attributes
        newItem.setAttribute('type', 'checkbox');
        newItem.setAttribute('name', 'item');
        newItem.setAttribute('id', todoList[size].id);
        newItem.setAttribute('value', todoList[size].topic);
        newItem.checked = todoList[size].status;

        //create checkbox for new item
        listElement.appendChild(newItem);
  
        //add span element and br element under itemlist
        listElement.append(span);
        listElement.append(br);  
    }
}

function watchPage(){
    //handle checkbox event
    document.getElementById('toDoList-form').addEventListener('change',function(event){
        event.preventDefault();
        let target = event.target;  
        toogleCheckItem(target.id, target.checked);  
    })
    //handle new item button event
    document.getElementById('addNew-btn').addEventListener('click',function(event){
        event.preventDefault();
        let newItem = document.getElementById('newItemText').value;
        //print error message if the input field is blank
        if(newItem!=''){
        addItem(newItem);
        }
        else{
            alert("Please enter a value");
        }
    })
   
}

watchPage();