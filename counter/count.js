var counter=document.getElementById('count');
var plus=document.getElementById('plus');
var minus=document.getElementById('minus');

plus.addEventListener('click',add);
var count=0;
function add(){
    
    count++;
    counter.innerHTML=count;

}
minus.addEventListener('click',sub);
function sub(){
    
    count--;
    counter.innerHTML=count;

}

