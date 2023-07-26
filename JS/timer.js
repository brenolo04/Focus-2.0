export default function ({
  display,
  sound
}) {
  let minutes = Number(display.minutes.innerText) // Armazena os minutos do display
  let timerOut

  function updateDisplay(minutes, seconds) {
    display.minutes.innerText = String(minutes).padStart(2, '0')
    display.seconds.innerText = String(seconds).padStart(2, '0')
  }

  function resetTimer() {
    updateDisplay(minutes, 0)
  }

  function countdown() {
    let minutes = Number(display.minutes.innerText)
    let seconds = Number(display.seconds.innerText)
    let isFinished = minutes <= 0 && seconds <= 0
    
    timerOut = setTimeout(() => {
      if (isFinished) {
        sound.endTime()
        resetTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, String(seconds - 1))

    countdown()
    }, 1000);
  }

  function stopTimer() {
    updateDisplay(minutes, 0)
    clearTimeout(timerOut)
  }

  function hold() {
    clearTimeout(timerOut)
  }

  function increaseMinutes() {
    minutes = minutes + 5
    updateDisplay(minutes, 0)
  }

  function decreaseMinutes() {
    if(minutes == 5) {
      alert('Esse é o minimo')
      return
    }
    minutes = minutes - 5
    updateDisplay(minutes, 0)
  }
  
  return {
    countdown,
    hold,
    stopTimer,
    increaseMinutes,
    decreaseMinutes
  }
}
