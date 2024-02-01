let todo=[]
let req=prompt("Please enter the request");

while(true){
    if(req=="quit"){
        console("quiting the app");
        break;
    }
    if(req=="add"){
        let adding=prompt("Enter the task to add in the todo list");
        todo.push(adding);
        console.log("Item added");
    }
    else if(req=="list"){
        console.log("--------------------");
        for(item of todo){
            console.log(item)
        }
        console.log("-------------------");

    }
    else if(req=="delete"){
        // console.log();
        let index=prompt("Enter the index to delete it from the list")
        todo.splice(index,1);
        console.log("Item deleted");
    }
    req=prompt("please enter the next request");
    
}