// Write your code here!

const mainTag = document.querySelector('#main')
mainTag.remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.textContent = "Samuel is the champion"