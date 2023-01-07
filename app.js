const root = document.querySelector('body');
const themeBtn = document.getElementById('change-theme')
const themeBtnSelector = document.querySelector('#change-theme span')

themeBtn.onclick = () => {
  themeBtnSelector.classList.toggle('light')
  root.classList.toggle('light')
}