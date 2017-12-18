/**************************
serch button array methods
***************************/

const arrayButton = document.querySelector('.arrayButton');
const arraySerchInput = document.querySelector('.arraySerchInput');
const list_array = document.querySelectorAll('.orderd-list li');

var nothing = true ;

//serch function

function serch() {
  for (let i=0; i<list_array.length; i++) {
  if ((arraySerchInput.value).toLowerCase() == (list_array[i].id).toLowerCase()) {
    let foo = '#';
    window.location.href = foo.concat(list_array[i].id);
    nothing =true;
    break;
   } else {
     nothing = false;
   }
  }
      if (nothing == false) {
        alert('write only the method NAME (like length)');
      } arraySerchInput.value = '';
  
}

//click event on serch
arrayButton.addEventListener('click', serch);

// keydown event on serch 
window.addEventListener('keydown', (e)=> {
  if (e.keyCode === 13 && arraySerchInput.value) {
  serch();
  }
});





