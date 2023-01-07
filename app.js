const root = document.querySelector('html');
const themeBtn = document.getElementById('change-theme')

let theme = root.getAttribute('data-theme')
let choose = {
  dark: 'light',
  light: 'dark'
}
let changeTheme = () => {
  root.setAttribute('data-theme', choose[theme])
  theme = choose[theme]
}

themeBtn.onclick = changeTheme

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches}) => {
    console.log(matches, theme)
    if((matches && theme == 'light') || !matches && theme == 'dark'){
      changeTheme()
    }
    console.log(matches, theme)
  }
)