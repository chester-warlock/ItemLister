const form = document.querySelector('#addForm');
const itemList = document.getElementById('items');

//Adding list items
form.addEventListener('submit',AddListItem);

//Deleting items!
// const MultipleListElements = document.getElementsByClassName('list-group-item');
itemList.addEventListener('click',deleteListItem);


//Adding filter functionality
const InputItem = document.querySelector('#filter') 
// console.log(InputItem);
InputItem.addEventListener('keydown', Filter);


function AddListItem(e){
    e.preventDefault();
    // console.log(e.target);
    console.log(form.firstElementChild.value);
    // console.log(e.children);

    //create a new list item so that you can append it to itemList!!

    const newItem = document.createElement('li');
    newItem.className = "list-group-item";
    // newItem.textContent = `${form.firstElementChild.value}`;
    const newItemTextNode = document.createTextNode(`${form.firstElementChild.value}`);
    newItem.appendChild(newItemTextNode);
    
    //Also add the delete button!
    const deleteButton = document.createElement('button');
    deleteButton.classList = "btn btn-danger btn-sm float-right delete";
    deleteButton.textContent = "X";
    // console.log(deleteButton);
    newItem.appendChild(newItem.appendChild(deleteButton));

    console.log(newItem);
    itemList.appendChild(newItem);
}

// console.log(MultipleListElements);

//Delete function
function deleteListItem(e){
    //will delete only if user clicks on the delete button which has a class of delete!!
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            // e.target gives us the X button we click on!!
            //e.target.parentElement will give us the li element!
            console.log(e.target.parentElement);

            itemList.removeChild(e.target.parentElement);
            
        }
    }
}


//filtering function
function Filter(e){
    let text = e.target.value.toLowerCase();
    console.log(text);

    const ListItems = itemList.getElementsByTagName('li');
    // console.log(ListItems); //Since this is an Html collection, you need to convert it ino Array to apply methods!!
    // get all li's

                        // function : paramter & body
    Array.from(ListItems).forEach(EachItem => {
        // console.log(EachItem.firstChild.textContent);
        // Above statement gives us the text values of all list items upon searching!

        //Now we just have to filter it!
        let textInListItems = EachItem.firstChild.textContent;

        //if content matches
        if(textInListItems.toLowerCase().indexOf(text) != -1)
        {
            EachItem.style.display = 'block';

        }
        else{
            EachItem.style.display = 'none';
        }
    });
}
