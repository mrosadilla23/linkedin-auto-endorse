const expandBtns = document.getElementsByClassName('pvs-navigation__text');
for (let button of expandBtns) {
  const arr = button.innerText.split(' ');
  
  if (arr[arr.length - 1] === 'skills') {
    button.click()
  }
};
setTimeout( () => {
  const buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    if (button.innerText === 'Endorse') {
      button.click()
    }
  }
}, 1000)
