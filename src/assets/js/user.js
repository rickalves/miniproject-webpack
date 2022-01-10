import button from '../../pages/button.html'
const userName = document.createTextNode('Rick Alves')

document.querySelector('[hr-user]').appendChild(userName)
document.querySelector('[hr-btn]').insertAdjacentHTML("beforeend", button);