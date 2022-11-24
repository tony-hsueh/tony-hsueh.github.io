const startBtn = document.querySelectorAll('.c-start-btn');
const backdrop = document.querySelector('.l-game-start');

let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let question = [];
let question_set = new Set();
let index = 0;
let type = '';

// 重複數字使用的變數
let counter = {};

// 遊戲開始後，進入遊戲層，並隨機生成題目
startBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        type = e.target.dataset.type;
        if (e.target.dataset.type === 'no-repeat') { 
            while(question_set.size < 4) {
                question_set.add(Math.floor(9*Math.random()))
            }

            for(let value of question_set.values()) {
                question.push(value);
            }
            // for(i = 0; i < 4; i++) {
            //     index = Math.floor((10-i)*Math.random());
            //     question.push(numberList[index]);
            //     numberList.splice(index, 1);
            // }
        } else {
            for(i = 0; i < 4; i++) {
                index = Math.floor((10-i)*Math.random());
                question.push(numberList[index]);
            }

            for (i = 0; i < question.length; i++) {
                if (!counter[question[i]]) {
                    counter[question[i]] = 1;
                } else {
                    counter[question[i]]++;
                }
            }
        }
        
        backdrop.style.opacity = 0;
        setTimeout(() => {
            backdrop.style.display = 'none';
        }, 500)
    
        setTimeout(() => {
            document.querySelector('.example').style.opacity = 0;
        }, 1500)
    
        setTimeout(() => {
            document.querySelector('.example').style.display = 'none';
        }, 2000);
        console.log(question);
    })
})

const gameForm = document.querySelector('#user-form');
const userInput = document.querySelector('#user-answer');
const regex = new RegExp('[0-9]{4}');
const gameList = document.querySelector('.number-list');

let input = '';
let gameCount = 8;

gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    input = userInput.value;
    userInput.value = '';
    gameCount--;
    if (gameCount === 0) {
        alert(`遊戲失敗,正確數字為${question[0]}${question[1]}${question[2]}${question[3]}`);
        reset();
        return;
    }

    if (regex.test(input)) {
        if (type === 'no-repeat') {
            if (input[0] === input[1] || input[0] === input[2] || 
                input[0] === input[3] || input[1] === input[2] ||
                input[1] === input[3] || input[2] === input[3]) {
                alert('請勿輸入重複的數字');
            } else {
                const [a_count, b_count] = noRepeatHandler(input);
                resultRender(input, a_count, b_count);
            }
        } else {
            const [a_count, b_count] = repeatHandler(input);
            resultRender(input, a_count, b_count);
        }
    } else {
        alert('請勿輸入數字之外的值');
    }
})

// 遊戲重新開始
const resetBtn = document.querySelector('.c-reset-btn');

resetBtn.addEventListener('click', reset);

function noRepeatHandler(input) {
    let a_count = 0;
    let b_count = 0;

    for (i = 0; i < question.length; i++) {
        if (question.includes(+input[i])) {
            b_count++;
        }

        if (+input[i] === question[i]) {
            a_count++;
            b_count--;
        }
    }

    return [a_count, b_count];
}

function repeatHandler() {
    console.log(counter);
    let a_count = 0;
    let b_count = 0;
    let counter_tmp = Object.assign({}, counter);

    for (i = 0; i < question.length; i++) {
        if (counter_tmp[+input[i]] !== undefined) {
            counter_tmp[+input[i]]--;

            if (question.includes(+input[i])) {
                b_count++;
            }
            if (+input[i] === question[i]) {
                a_count++;
                b_count--;
            }   
        }
    }
    
    for (value in counter_tmp) {
        if (counter_tmp[value] < 0) {
            for (i = counter_tmp[value]; i < 0; i++) {
                b_count--;
            }
        }
    }

    console.log('after', counter);

    return [a_count, b_count];
}

function reset() {
    gameList.innerHTML = `<div class="example">
                            <h3 class="example-text">範例如下：</h3>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="user-number">2345</div>
                                <div class="gap"></div>
                                <div class="result">2A1B</div>
                            </div>
                        </div>`;
    backdrop.style.display = 'flex';
    backdrop.style.opacity = 1;
    numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    question = [];
    gameCount = 8;
    counter = {};
}

function resultRender(input, a_count, b_count) {
    gameList.innerHTML += `<div class="d-flex justify-content-between align-items-center mt-3">
                                            <div class="user-number">
                                                <div>${input[0]}</div>
                                                <div>${input[1]}</div>
                                                <div>${input[2]}</div>
                                                <div>${input[3]}</div>
                                            </div>
                                            <div class="gap"></div>
                                            <div class="result">
                                                <div>${a_count}</div>
                                                <div>A</div>
                                                <div>${b_count}</div>
                                                <div>B</div>
                                            </div>
                                        </div>`;
    if (a_count === 4){
        alert('恭喜你答對啦！！');
        reset();
    }
}