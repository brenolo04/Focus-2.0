export default function ({
  controls,
  control,
  BtnSound,
  // btnMode,
  sound
}) {
  controls.play.addEventListener('click', control.play)
  controls.pause.addEventListener('click', control.pause)
  controls.stop.addEventListener('click', control.stop)
  controls.increase.addEventListener('click', control.increase)
  controls.decrease.addEventListener('click', control.decrase)
  BtnSound.jungle.addEventListener('click', () => {
    if(BtnSound.jungle.classList.contains('active')) {
      sound.stopJungle()
      BtnSound.jungle.classList.remove('active')
      return
    }
      BtnSound.jungle.classList.add('active')
      sound.playJungle()
  })
  BtnSound.rain.addEventListener('click', () => {
    if(BtnSound.rain.classList.contains('active')) {
      sound.stopRain()
      BtnSound.rain.classList.remove('active')
      return
    }
      BtnSound.rain.classList.add('active')
      sound.playRain()
  })
  BtnSound.coffeshop.addEventListener('click', () => {
    if(BtnSound.coffeshop.classList.contains('active')) {
      sound.stopCoffeshop()
      BtnSound.coffeshop.classList.remove('active')
      return
    }
      BtnSound.coffeshop.classList.add('active')
      sound.playCoffeshop() 
  })
  BtnSound.fireplace.addEventListener('click', () => {
    if(BtnSound.fireplace.classList.contains('active')) {
      sound.stopFireplace()
      BtnSound.fireplace.classList.remove('active')
      return
    }
      BtnSound.fireplace.classList.add('active')
      sound.playFireplace()
  })
/*   btnMode.sun.addEventListener('click', () => {  
    btnMode.sun.classList.add('hide')
    btnMode.moon.classList.remove('hide')
  })
  btnMode.moon.addEventListener('click', () => {  
    btnMode.sun.classList.remove('hide')
    btnMode.moon.classList.add('hide')
  })
*/
}