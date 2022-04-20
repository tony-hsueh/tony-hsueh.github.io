let tmp_arr = Array(9).fill('');
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');
const ans5 = document.querySelector('#ans5');
const ans6 = document.querySelector('#ans6');
const ans7 = document.querySelector('#ans7');
const ans8 = document.querySelector('#ans8');
const ans9 = document.querySelector('#ans9');
window.addEventListener('load',event=>{
    ans1.focus();
})
ans1.addEventListener('keydown',event=>{
    // console.log(event.keyCode);
   if(event.keyCode==8 || event.keyCode==37){
    setTimeout(function(){
        ans1.focus();
    },30);
   }else{
    setTimeout(function(){
        ans2.focus();
    },30);  
   }
})
ans1.addEventListener('change',event=>{
    tmp_arr.splice(0,1,event.target.value);    
})
ans2.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans1.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans3.focus();
        },30);  
    }
})
ans2.addEventListener('change',event=>{
    tmp_arr.splice(1,1,event.target.value);    
})
ans3.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans2.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans4.focus();
        },30);  
    }
})
ans3.addEventListener('change',event=>{
    tmp_arr.splice(2,1,event.target.value);     
})
ans4.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans3.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans5.focus();
        },30); 
    } 
})
ans4.addEventListener('change',event=>{
    tmp_arr.splice(3,1,event.target.value); 
})
ans5.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans4.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans6.focus();
        },30); 
    } 
})
ans5.addEventListener('change',event=>{
    tmp_arr.splice(4,1,event.target.value);
})
ans6.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans5.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans7.focus();
        },30); 
    } 
})
ans6.addEventListener('change',event=>{
    tmp_arr.splice(5,1,event.target.value); 
})
ans7.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans6.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans8.focus();
        },30); 
    } 
})
ans7.addEventListener('change',event=>{
    tmp_arr.splice(6,1,event.target.value);
})
ans8.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans7.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans9.focus();
        },30); 
    } 
})
ans8.addEventListener('change',event=>{
    tmp_arr.splice(7,1,event.target.value); 
})
ans9.addEventListener('keydown',event=>{
    if(event.keyCode==8 || event.keyCode==37){
        setTimeout(function(){
            ans8.focus();
        },30); 
    }else{    
        setTimeout(function(){
            ans9.blur();
        },300); 
    } 
})
ans9.addEventListener('change',event=>{
    tmp_arr.splice(8,1,event.target.value);
    // console.log(tmp_arr.join(''));  
    // 檢查結果用 
    let isSame = tmp_arr.join('') === 'alligator' || tmp_arr.join('') === 'crocodile';
    console.log(isSame);
    if(isSame){
        tmp_arr = [];
        document.querySelector('.gameover').style.display = 'none';
        alert('英文不錯哦!');
        return;
    }else{
        document.querySelectorAll('input').forEach(el=>{
            el.value = '';
            tmp_arr = [];
            document.querySelector('.gameover').style.display = 'block'
            ans1.focus();       
        })
    }
})