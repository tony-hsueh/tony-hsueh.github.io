const rightCoors = [
  {left: 405, top: 150, isFound: false}, 
  {left: 30, top: 265, isFound: false}, 
  {left: 340, top: 245, isFound: false}, 
  {left: 255, top: 355, isFound: false},
  {left: 215, top: 60, isFound: false}
]
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const startBtn = document.getElementById('start-btn')
const hintBtn = document.querySelector('.hint')
const overlay = document.querySelector('.overlay')
const timer = document.getElementById('timer')

let wrongTimes = 0
let hintCount = 3
let countdownTimer;
let countdownFrom = 30

const addCircle = (e) => {
  const matchCoorIndex = rightCoors.findIndex(coor => e.offsetX <= coor.left + 30 && e.offsetX >= coor.left && e.offsetY <= coor.top + 30 && e.offsetY >= coor.top)
  const mark = document.createElement('div')
  mark.style.position = 'absolute'
  mark.style.left = `${e.offsetX - 15}px`
  mark.style.top = `${e.offsetY - 15}px`
  if (matchCoorIndex !== -1) {
    if (rightCoors[matchCoorIndex].isFound) return;
    rightCoors[matchCoorIndex].isFound = true
    const isFoundCount = rightCoors.filter(coor => coor.isFound === true).length
    document.getElementById('find-count').innerHTML = isFoundCount
    if (rightCoors.length - isFoundCount === 0) {
      clearInterval(countdownTimer)
      setTimeout(() => {
        alert('恭喜你，眼力很好哦')
      }, 500)
    }
    mark.className = 'circle'
  } else {
    wrongTimes++
    document.querySelectorAll('.life-container > i')[wrongTimes - 1].className = 'fa-regular fa-heart'
    mark.className = 'cross'
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'
    
    mark.append(icon)
    if (wrongTimes === 3) {
      clearInterval(countdownTimer)
      setTimeout(() => {
        alert('答錯3次，遊戲結束')
      }, 500)
    }
  }
  left.append(mark)
  right.append(mark.cloneNode(true))
}

function handleHint() {
  if (hintCount === 0) return;
  hintCount--;
  document.getElementById('hint-count').innerText = hintCount

  const hintIndex = rightCoors.findIndex(coor => coor.isFound === false)
  rightCoors[hintIndex].isFound = true
  isWinGame()

  const mark = document.createElement('div')
  mark.style.position = 'absolute'
  mark.style.left = `${rightCoors[hintIndex].left}px`
  mark.style.top = `${rightCoors[hintIndex].top}px`
  mark.className = 'circle'
  left.append(mark)
  right.append(mark.cloneNode(true))
}

function startGame() {
  overlay.style.display = 'none'
  countdownTimer = setInterval(() => {
    --countdownFrom
    if ( countdownFrom === -1) {
      clearInterval(countdownTimer)
      alert('時間歸零，遊戲結束')
      return
    } else if (countdownFrom < 10) {
      timer.innerHTML = `0${countdownFrom}`
    } else {
      timer.innerHTML = countdownFrom
    }
  }, 1000)
}

function isWinGame() {
  const isFoundCount = rightCoors.filter(coor => coor.isFound === true).length
  if (rightCoors.length - isFoundCount === 0) {
    clearInterval(countdownTimer)
    setTimeout(() => {
      alert('恭喜你，眼力很好哦')
    }, 500)
  }
}

left.addEventListener('click',addCircle)
right.addEventListener('click',addCircle)
startBtn.addEventListener('click', startGame)
hintBtn.addEventListener('click', handleHint)