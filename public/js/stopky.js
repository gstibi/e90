/* var currentTime = 90
var interval;
var started = false */

var timer = document.getElementById("timer")
var start = document.getElementById("start")
var reset = document.getElementById("reset")

timer.currentTime = 90
timer.interval;
timer.started = false

start.addEventListener("click", () => {
    if(!timer.started){
        timer.interval = setInterval(decreaseTime, 1000, timer)
        timer.started = true
    }
})

reset.addEventListener("click", () => {
    resetTimer(timer)
})

function decreaseTime(element){
    element.currentTime -= 1
    element.innerHTML = element.currentTime
    if(element.currentTime <= 0){
        stopTimer(element)
    }
}

function resetTimer(element){
    stopTimer(element)
    element.innerHTML = element.currentTime
    element.started = false
}

function stopTimer(element){
    clearInterval(element.interval)
    element.currentTime = 90
}