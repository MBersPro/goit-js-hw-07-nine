const inputNode = document.querySelector('#name-input')
const nameNode = document.querySelector('#name-output')
inputNode.addEventListener('input', () => {
if (inputNode.value === ""){
    nameNode.textContent = "незнакомец"
}else{
    nameNode.textContent = inputNode.value
}
})