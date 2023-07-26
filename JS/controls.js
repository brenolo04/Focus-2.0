export default function ({
  controls,
  timer,
  sound
}) {

  function play () {
    controls.play.classList.add('hide')
    controls.pause.classList.remove('hide')

    timer.countdown()
    sound.click()
  }
  
  function pause () {
    controls.play.classList.remove('hide')
    controls.pause.classList.add('hide')

    timer.hold()
    sound.click()
  }

  function stop () {
    controls.play.classList.remove('hide')
    controls.pause.classList.add('hide')

    timer.stopTimer()
    sound.click()
  }

  function increase() {
    stop()
    timer.increaseMinutes()
    sound.click()
  }

  function decrase() {
    stop()
    timer.decreaseMinutes()
    sound.click()
  }

  return {
    play,
    pause,
    stop,
    increase,
    decrase
  }
}