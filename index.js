var disp = document.querySelector('#count');
var low = document.querySelector('#lower');
var add = document.querySelector('#add');
var current = disp.textContent;
add.addEventListener('click', function(){
    if(current > 49){
        alert('Maximmum number reached');
    }else{
        current == current++;
        
        // current = newDisp;
        disp.textContent= current;
    }
});
low.addEventListener('click', function(){
    console.log('lowered');
    if(current < 1){
        alert('Minimum number reached');
    }else {
        current == current--;
        // current = newDisp;
        disp.textContent= current;
    }
});


add.addEventListener('mousedown', function(){
    add.style.boxShadow = "none";
});
add.addEventListener('mouseup', function(){
    add.style.boxShadow = "1px 5px 10px black";
});
low.addEventListener('mousedown', function(){
    low.style.boxShadow = "none";
});
low.addEventListener('mouseup', function(){
    low.style.boxShadow = "1px 5px 10px black";
});