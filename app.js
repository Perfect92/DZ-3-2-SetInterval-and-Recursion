
// 1 Задача
const block = document.querySelector(".block")

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 440 && positionY <=0) {
        positionX += 15 
        block.style.left = `${positionX}px`
        setTimeout(move,100)
    }else if (positionX >= 440 && positionY <= 440){
        positionY += 15
        block.style.top = `${positionY}px`
        setTimeout(move,100)
    }else if (positionX >= 10 && positionY >= 440) {
        positionX -= 15
        block.style.left = `${positionX}px`
        setTimeout(move,100)
    }else if (positionX <= 10 && positionY >= 10){
        positionY -= 15
        block.style.top = `${positionY}px`
        setTimeout(move,100)
    }
};
move();


// 2 Задача
let i = 0

const interval =  setInterval(() => {
     i++
     console.log("Прошло "+ i +" ceкунд")
    if (i === 60) {
      clearInterval(interval)
      alert("Прошло "+ i +" ceкунд")
    }
}, 1000);





