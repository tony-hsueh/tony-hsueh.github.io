var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#000000';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
let raf;

const question = [ {name: 'raccoon', hint:'視覺不發達，吃東西前要將食物在水中洗一洗'},
                {name: 'hedgehog', hint: '夜間活動，以昆蟲和蠕蟲為主要食物'}, 
                {name: 'chameleon', hint: '能變化體色，雙眼各自獨立，可以自由轉向不同視角'},
                {name: 'salmon', hint: '會回到自己的出生地產卵'},
                {name: 'caterpillar', hint: '有些會長有假眼或是色彩鮮明的花紋，嚇退想吃了他們的動物'},
                {name: 'mosquito', hint: '雌性的會吸血，雄性以花蜜或果汁為食'},
                {name: 'gorilla', hint: '與人類具有較高的基因相似度，高達98.8%'},
                {name: 'jellyfish', hint: '以魚類和浮游生物為食，會用觸手上的刺絲囊來螫傷獵物'},
                {name: 'koala', hint: '以尤加利樹葉和嫩枝為食，成年的平均每天要吃400克的樹葉'},
                {name: 'ostrich', hint: '世界上最大的一種鳥類，不會飛但善於跑步'}];

const random_question = Math.floor(Math.random()*question.length);

let guess_count = 0;

// 遊戲重新開始按鈕
document.querySelector('.game-reset').addEventListener('click', () => {
    gameReset();
});

// 生成提示文字
document.querySelector('.hint').innerHTML += `<div>${question[random_question].hint}</div>`;

// 取得提示按鈕
document.querySelector('.get-hint').addEventListener('click', () => {
    document.querySelector('.hint').classList.add('hint-show');
    document.querySelector('.modal-mask').style.display = 'block';
});

// 關閉提示按鈕
document.querySelector('.close').addEventListener('click', () => {
    console.log(123);
    document.querySelector('.hint').classList.remove('hint-show');
    document.querySelector('.modal-mask').style.display = 'none';
});

document.querySelector('.modal-mask').addEventListener('click', () => {
    document.querySelector('.hint').classList.remove('hint-show');
    document.querySelector('.modal-mask').style.display = 'none';
});

// 靠 javascript 生成 26 個字母
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let buttons = ``;

for (let i = 0; i < alphabet.length; i++) {
    buttons += `<button data-alphabet="${alphabet[i]}" class="alphabets">${alphabet[i]}</button>`
}

document.getElementById('button').innerHTML = buttons;
// 靠 javascript 動態生成題目的字數
let word_count = ``;

for (let i = 0; i < question[random_question].name.length; i++) {
    word_count += `<div class="answer-text">_</div>`;
}

document.getElementById('answers').innerHTML = word_count;

const alphabets = document.querySelectorAll('.alphabets');

alphabets.forEach(el => {
    el.addEventListener('click',(e) => {
        e.target.classList.add('is-clicked');
        let choose = e.target.dataset.alphabet;
        if ( question[random_question].name.includes(choose)) {
            for (let i = 0; i < question[random_question].name.length; i++) {
                if (choose ==  question[random_question].name[i]) {
                    document.querySelectorAll('.answer-text')[i].innerHTML = choose;
                }
            }
            
            let isWin = gameWin();
            
            if (isWin) {
                if (confirm('再玩一次')) {
                    gameReset();
                 }
            }
        } else {
            guess_count++;
            drawOrder();
        }
    })
});

function gameWin() {
    const answers = document.querySelectorAll('.answer-text');

    let count = 0;
    
    answers.forEach(answer => {
        if (answer.innerHTML !== '_') {
            count++;
        }
    });

    return count === question[random_question].name.length ? true : false;
}

function gameReset() {
    guess_count = 0;

    alphabets.forEach(el => {
        el.classList.remove('is-clicked');
    });

    document.getElementById('answers').innerHTML = word_count;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawOrder() {
    switch (guess_count) {
        case 1:
            drawFloor();
            break;
        case 2:
            drawPillar();
            break;
        case 3:
            drawBeam();
            break;
        case 4:
            drawSupport();
            break;
        case 5:
            drawRope();
            break;
        case 6:
            drawHead();
            break;
        case 7:
            drawBody();
            break;
        case 8:
            drawLeftHand();
            break;
        case 9:
            drawRightHand();
            break;
        case 10:
            drawLeftFoot();
            break;
        case 11:
            drawRightFoot();
            setTimeout(() => {
                if (confirm('再玩一次')) {
                   gameReset();
                }
            }, 0)
            break;
        default:
            console.log('error');
    }
}

function drawFloor() {
    ctx.beginPath();
    ctx.moveTo(30, 400);
    ctx.lineTo(250, 400);
    ctx.stroke();
}

function drawPillar() {
    ctx.beginPath();
    ctx.moveTo(48, 399);
    ctx.lineTo(48, 100);
    ctx.stroke();
}

function drawBeam() {
    ctx.beginPath();
    ctx.moveTo(30, 100);
    ctx.lineTo(190, 100);
    ctx.stroke();
}

function drawSupport() {
    ctx.beginPath();
    ctx.moveTo(48, 200);
    ctx.lineTo(120, 100);
    ctx.stroke();
}

function drawRope() {
    ctx.beginPath();
    ctx.moveTo(190, 100);
    ctx.lineTo(190, 150);
    ctx.stroke();
}

function drawHead() {
    ctx.beginPath();
    ctx.arc(190, 170, 20, 0, 2*Math.PI);
    ctx.stroke();
}

function drawBody() {
    ctx.beginPath();
    ctx.moveTo(190, 190);
    ctx.lineTo(190, 280);
    ctx.stroke();
}

function drawLeftHand() {
    ctx.beginPath();
    ctx.moveTo(190, 210);
    ctx.lineTo(150, 250);
    ctx.stroke();
}

function drawRightHand() {
    ctx.beginPath();
    ctx.moveTo(190, 210);
    ctx.lineTo(230, 250);
    ctx.stroke();
}

function drawLeftFoot() {
    ctx.beginPath();
    ctx.moveTo(190, 280);
    ctx.lineTo(150, 350);
    ctx.stroke();
}

function drawRightFoot() {
    ctx.beginPath();
    ctx.moveTo(190, 280);
    ctx.lineTo(230, 350);
    ctx.stroke();
}