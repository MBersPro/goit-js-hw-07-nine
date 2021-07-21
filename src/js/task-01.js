const liItemNodes = document.querySelectorAll('li.item')
console.log(`В списке ${liItemNodes.length} категории.`)

liItemNodes.forEach(item => {
    const nameCategory = item.querySelector('h2').textContent
    const amountElement = item.querySelectorAll('li').length
    console.log(`Категория: ${nameCategory}`)
    console.log(`Количество элементов: ${amountElement}`)

})