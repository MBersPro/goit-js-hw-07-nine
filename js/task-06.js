const inputNode = document.querySelector('#validation-input')
const dataLengthNode = inputNode.getAttribute("data-length")
const check = (event) => {
    if (event.currentTarget.value.length === 6) {
        inputNode.classList.add('valid');
        inputNode.classList.remove('invalid');
    }else{
        inputNode.classList.add('invalid');
        inputNode.classList.remove('valid');
    }
}
inputNode.addEventListener('blur', check)
