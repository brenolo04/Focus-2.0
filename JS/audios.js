export default function () {
  
  const jungle = new Audio('../src/forest.wav')
  const rain = new Audio('../src/rain.wav')
  const coffeshop = new Audio('../src/coffeshop.wav')
  const fireplace = new Audio('../src/fireplace.wav')

  const actionSounds = {
    click: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
    kitchenClock:  new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  }

  function playJungle() {
    jungle.play()
  }

  function stopJungle() {
    jungle.pause()
  }

  function playRain() {
    rain.play()
  }

  function stopRain() {
    rain.pause()
  }

  function playCoffeshop() {
    coffeshop.play()
  }

  function stopCoffeshop() {
    coffeshop.pause()
  }

  function playFireplace() {
    fireplace.play()
  }

  function stopFireplace() {
    fireplace.pause()
  }

  function click() {
    actionSounds.click.play()
  }

  function endTime() {
    actionSounds.kitchenClock.play()
  }

  return {
    playJungle,
    stopJungle,
    playRain,
    stopRain,
    playCoffeshop,
    stopCoffeshop,
    playFireplace,
    stopFireplace,
    click,
    endTime
  }
}