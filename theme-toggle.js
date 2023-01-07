if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.firstElementChild.setAttribute('data-theme', 'dark')
}else{
  document.firstElementChild.setAttribute('data-theme', 'light')
}