const frontCanvas = document.getElementById('canvas-front')
    const backCanvas = document.getElementById('canvas-back')
    const ctx = frontCanvas.getContext('2d')
    const backCtx = backCanvas.getContext('2d')
    const imgObject = new Image();
    const backImgObject = new Image()

    frontCanvas.width = backCanvas.width = 400
    frontCanvas.height = backCanvas.height = 600
    
    let isDragged = false

    imgObject.src = "./lottery.png";
    imgObject.crossOrigin = "Anonymous";
    backImgObject.src = "./lottery-back.png"
    backImgObject.crossOrigin = "Anonymous";

    imgObject.addEventListener('load',function(){
      ctx.drawImage(imgObject, 0, 0, frontCanvas.width, frontCanvas.height);
    })

    backImgObject.addEventListener('load', function() {
      backCtx.drawImage(backImgObject, 0, 0, backCanvas.width, backCanvas.height);
      backCtx.font = "50px Arial"
      backCtx.fillStyle = 'white'
      backCtx.textAlign = 'center'
      backCtx.fillText("30 Points", backCanvas.width/2, 150)
    })


    const sratchLottery = (e) => {
      if (!isDragged) return false 
      let drawX, drawY;
      const canvasBound = frontCanvas.getBoundingClientRect()
      const iamgeData = ctx.getImageData(0, 0, frontCanvas.width, frontCanvas.height)

      if (e.type === 'touchmove') {
        drawX = e.touches[0].clientX - canvasBound.left
        drawY = e.touches[0].clientY - canvasBound.top
      } else {
        drawX = e.clientX - canvasBound.left
        drawY = e.clientY - canvasBound.top
      }
     
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = "#0044f0";
      ctx.beginPath();
      ctx.arc(drawX, drawY, 35, 0, 2 * Math.PI);
      ctx.fill();
      
      let sracthedNums = 0
      const newData = iamgeData.data.forEach((data) => {
        if (data === 0 ) sracthedNums += 1 
      });
      // 刮去80%即顯示結果
      if (sracthedNums/iamgeData.data.length * 100 > 80) {
        isDragged = false
        ctx.clearRect(0, 0, frontCanvas.width, frontCanvas.height)
        setTimeout(() => {
          alert('Congratulation !! You get 30 points')
        }, 100);
        return;
      }
    }

    frontCanvas.addEventListener('touchmove', sratchLottery)

    frontCanvas.addEventListener('mousemove', sratchLottery)

    frontCanvas.addEventListener('touchstart', (e) => {
      isDragged = true
    })
    frontCanvas.addEventListener('mousedown', (e) => {
      isDragged = true
    })
    window.addEventListener('touchend', (e) => {
      isDragged = false
    })
    window.addEventListener('mouseup', (e) => {
      isDragged = false
    })