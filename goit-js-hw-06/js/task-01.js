// const ulEl = document.querySelector('#categories')
// console.log(ulEl)

const allItems = document.querySelectorAll('.item')

console.log(`Number of categories: ${allItems.length}`)

for (let i = 0; i < allItems.length; i++) {
    const h2El = allItems[i].querySelector('h2');
    const liQnt = allItems[i].querySelectorAll('li').length

    // console.log(element.querySelector('h2'))
    console.log(`Category: ${h2El.textContent}`)
    console.log(`Elements: ${liQnt}`)
}







// const ulChildren = ulEl.children
// console.log(ulChildren)
