const selectZone = document.querySelector('.choose');
selectZone.addEventListener('mousemove',mouseMove);
function mouseMove(event){
    let zone = event.currentTarget.getBoundingClientRect();   
    let positionX = `${event.clientX-zone.left}px `;
    let positionY = `${event.clientY-zone.top}px`;
    selectZone.style.background = `radial-gradient(circle 3rem at ${positionX} ${positionY},rgba(0,0,0,0) 0%,rgba(0,0,0,0.95) 100% )`;
}
// 提示按鈕的部分
const button = document.querySelector('.hint');
button.addEventListener('click',function(){
    document.querySelector('.table_hint').style.animation = `show 1s linear forwards`
    setTimeout(() => {
        document.querySelector('.table_hint').style.animation = `close 1s linear forwards`
    }, 2000);
});

// 遊戲規則部分
let tmp_arr = [];
let fail_count = 0;
let question = document.querySelectorAll('.q');
question.forEach(el=>{
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragend', dragEnd);
})
function dragStart(e){
    this.className += ' hold';
    setTimeout(()=>{
        this.className = 'invisible';
    },0)
    // 在拖曳開始時，傳遞此元素的英文字母
    e.dataTransfer.setData("text/plain",e.target.innerHTML);
    tmp_arr.push(e.target);
}
function dragEnd(){
    this.className = 'q';
}

const answer = document.querySelectorAll('.ans');
answer.forEach(el=>{
    el.addEventListener('dragover',dragOver);
    el.addEventListener('dragenter',dragEnter);
    el.addEventListener('dragleave', dragLeave);
    el.addEventListener('drop',dragDrop);
})
function dragOver(e){
    e.preventDefault();
}
function dragEnter(){
    this.className +=' hovered';
}
function dragLeave(){
    this.className = 'box a';
}
function dragDrop(e){
    this.className = 'box a';
    let text_data = e.dataTransfer.getData("text");
    let dropZone = e.target.getAttribute('data-answer');
    let index = '';
    if(dropZone == text_data){
        e.target.innerHTML = text_data;
        e.target.style.background = 'green';
        
        tmp_arr[0].remove();
        tmp_arr = [];
        // 選到正確答案，挑選區的就會消失
    }else{
        fail_count++;
        let wrong = document.createElement('i');
        wrong.className = "fas fa-times";
        wrong.style.color = 'red';
        wrong.style.animation = 'bigger 1s linear';
        e.target.append(wrong);
        setTimeout(()=>{
            e.target.innerHTML = '';
        },1000)
    }
    if(document.querySelectorAll('.q').length==4){
        setTimeout(function(){
            alert('恭喜你完成,英文不錯呦...');
        },300); 
    }
    if(fail_count==3){
        confirm('英文單字量還可以再擴充,要直接到導覽頁學習嗎?');
        // 如果未來這遊戲會放到大專裡，可以放上導覽頁超連結
    }
    
    console.log('目前錯誤次數為',fail_count);
}
