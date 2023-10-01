const btn  = document.querySelector('.clear-btn');
    const board = document.querySelector('#snake-board')
    const gridBtn = document.querySelector('.grid-line-btn')
    const scoreDom = document.querySelector('.score')
    const step = 30
    const speed = 200
    const ctx = board.getContext('2d');

    board.width = 600
    board.height = 750

    let score = 0
    let isGridLineOn = false 
    let intervalId;
    let fooDIntervalID;
    let direction;
    let foodCoor = {x: null, y: null}
    let initialPos = [
      { x: 0, y: 0 }
    ]

    function drawGridLine() {
      for(i = step; i < board.height; i+=step) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(board.width, i)
        ctx.stroke();
      }
      for(i = step; i < board.width; i+=step) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, board.height)
        ctx.stroke();
      }
    }

    function clearBoard() {
      ctx.clearRect(0, 0, board.width, board.height);
      ctx.fillStyle="#91db60";
      ctx.fillRect(0, 0, board.width, board.height);
      ctx.fillStyle="#f55e5e";
      ctx.fillRect(foodCoor.x, foodCoor.y, step, step); 
      if (isGridLineOn) drawGridLine()
      
    }

    function drawObject(snakeBodyPos) {
      snakeBodyPos.forEach(pos => {
        ctx.fillStyle="#5eaaf5";
        ctx.strokeStyle="white";
        ctx.fillRect(pos.x, pos.y, step, step);
        ctx.strokeRect(pos.x, pos.y, step, step);
      });
    }

    function generateRandomPosition() {
      if (foodCoor.x && foodCoor.y) {
        score += 10
        scoreDom.innerHTML = score
        ctx.clearRect(foodCoor.x, foodCoor.y, step, step)
      }
      ctx.fillStyle="#f55e5e";
      foodCoor.x = step * Math.floor(board.width/step*Math.random())
      foodCoor.y = step * Math.floor(board.height/step*Math.random())
      ctx.fillRect(foodCoor.x, foodCoor.y, step, step);   
    }

    function isGameover(headCoor) {
      const {x: headX, y: headY} = headCoor
      const collapseCoor = initialPos.filter(pos => pos.x === headX && pos.y === headY)
      return collapseCoor.length > 1
    }

    function hasEatFood(headCoor) {
      const {x: headX, y: headY} = headCoor
      return foodCoor.x === headX && foodCoor.y === headY
    }

    gridBtn.addEventListener('click', () => {
      if (isGridLineOn) {
        isGridLineOn = false
        gridBtn.textContent = '開啟格線'
      } else {
        
        isGridLineOn = true
        gridBtn.textContent = '關閉格線'
      }
      clearBoard()
      drawObject(initialPos)
    })

    window.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 38:
          if (direction === 'bottom' || direction === 'top') return; 
          // 消去向左向右的計時器
          if (intervalId) {
            clearInterval(intervalId)
          }

          intervalId = setInterval(() => {
            direction = 'top'
            if (initialPos[0].y - step < 0) {
              initialPos = [{x: initialPos[0].x, y: board.height - step},...initialPos]
            } else {
              initialPos = [{x: initialPos[0].x, y: initialPos[0].y - step},...initialPos]
            }

            if (!hasEatFood(initialPos[0])) {
              initialPos.pop()
            } else {
              generateRandomPosition()
            }
            
            clearBoard()
            drawObject(initialPos)

            if (isGameover(initialPos[0])) {
              alert(`你輸囉! 分數為${score}`)
              clearInterval(intervalId)
              return;
            }   
          }, speed)
        break;
        case 40:
          if (direction === 'top' || direction === 'bottom') return;
           
          if (intervalId) {
            clearInterval(intervalId)
          }
          intervalId = setInterval(() => {
            direction = 'bottom'
            if (initialPos[0].y + step >= board.height) {
              initialPos = [{x: initialPos[0].x, y: 0},...initialPos]
            } else {
              initialPos = [{x: initialPos[0].x, y: initialPos[0].y + step},...initialPos]
            }

            if (!hasEatFood(initialPos[0])) {
              initialPos.pop()
            } else {
              generateRandomPosition()
            }

            clearBoard()
            drawObject(initialPos)

            if (isGameover(initialPos[0])) {
              alert(`你輸囉! 分數為${score}`)
              clearInterval(intervalId)
              return;
            }          
          }, speed)
        break;
        case 37:
          if (direction === 'right' || direction === 'left') return; 
          
          if (intervalId) {
            clearInterval(intervalId)
          }
          intervalId = setInterval(() => {
            direction = 'left'
            if (initialPos[0].x - step < 0) {
              initialPos = [{x: board.width - step, y: initialPos[0].y},...initialPos]
            } else {
              initialPos = [{x: initialPos[0].x - step, y: initialPos[0].y},...initialPos]
            }
    
            if (!hasEatFood(initialPos[0])) {
              initialPos.pop()
            } else {
              generateRandomPosition()
            }

            clearBoard()
            drawObject(initialPos)

            if (isGameover(initialPos[0])) {
              alert(`你輸囉! 分數為${score}`)
              clearInterval(intervalId)
              return;
            }  
          }, speed)
        break;
        case 39:
          if (direction === 'left' || direction === 'right') return; 
          
          if (intervalId) {
            clearInterval(intervalId)
          }
         intervalId = setInterval(() => {     
          direction = 'right'
          if (initialPos[0].x + step >= board.width) {
            initialPos = [{x: 0, y: initialPos[0].y},...initialPos]
          } else {
            initialPos = [{x: initialPos[0].x + step, y: initialPos[0].y},...initialPos]
          }

          if (!hasEatFood(initialPos[0])) {
            initialPos.pop()
          } else {
            generateRandomPosition()
          }

          clearBoard()
          drawObject(initialPos)

          if (isGameover(initialPos[0])) {
            alert(`你輸囉! 分數為${score}`)
            clearInterval(intervalId)
            return;
          }  
          }, speed)
        break;
        default:
        console.log(`Sorry, this key is not applicable`);
      }
    })

    window.addEventListener('load', () => {
      scoreDom.innerHTML = score
      clearBoard()
      drawObject(initialPos)
      generateRandomPosition()
    })