const fontSizeControlNode = document.querySelector('#font-size-control')
const textNode = document.querySelector('#text')
// fontSizeControlNode.setAttribute("min","1" )
// fontSizeControlNode.setAttribute("max", "50")
// fontSizeControlNode.setAttribute("step", "1")
textNode.style.fontSize = '50px'
const fontSizeControl = () => {
    const rangeValue = fontSizeControlNode.value
    
    textNode.style.fontSize = `${rangeValue}px`
}
fontSizeControlNode.addEventListener('input', fontSizeControl)
console.log(fontSizeControlNode.value)