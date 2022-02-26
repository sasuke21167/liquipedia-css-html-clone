
const dropToggle=document.querySelectorAll('#drop-toggle');
const brandMenu=document.querySelector('.brand-menu');
const navItem=document.querySelector('.brand-desktop');
const trending=document.querySelector('.nav-drop-trending');
const tournament=document.querySelector('.nav-drop-tournament');
const contribute=document.querySelector('.nav-drop-contribute');
const shareDrop=document.querySelector('.share-drop');
const menuDrop=document.querySelector('.menu-drop');


const arrayShow = [brandMenu,navItem,trending,tournament,contribute,shareDrop,menuDrop];

const show = (a) => {
  arrayShow[a].classList.add("show");
  Object.keys(arrayShow).forEach(function(item){
    if(item!=a){
      arrayShow[item].classList.remove("show");
    }
  })
}

const showTwo = (i) => {
  let a = 1 + +i;
  arrayShow[i].classList.add("show");
  arrayShow[a].classList.add("show");
  Object.keys(arrayShow).forEach(function(item){
    if(item!=a & item!=i){
      arrayShow[item].classList.remove("show");
    }
  })
}

const toggleElement = (i) => {
  let a = 1 + +i;
  if( i == 0){
    if(arrayShow[i].classList.contains("show")){
      arrayShow[i].classList.remove("show");
      arrayShow[a].classList.remove("show");
    }else{
      showTwo(i);
    }
   
  }else{
    if(arrayShow[a].classList.contains("show")){
      arrayShow[a].classList.remove("show");
    }else{
      show(a);
    }
  } 
}

function eventClick  {
  e.preventDefault();
  console.log(e.target);

  if((div.style.display === '' || div.style.display === 'none') && (e.target === button || e.target === itag)) {
    div.style.display = 'block';    
  } else if((div.style.display === '' || div.style.display === 'none') && (e.target !== button || e.target !== itag)) {
    div.style.display = 'none';
  } else {
    div.style.display = 'none';
  }
}

//add event

Object.keys(dropToggle).forEach(function (i) {
  dropToggle[i].addEventListener('click', function() {
    toggleElement(i);
  });
});


