console.log(document.body.firstChild.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

console.log(document.body.childNodes[0])
console.log(document.body.childNodes[document.body.childNodes.length - 1])

let a = Array.from(document.body.childNodes)
console.log(a)
console.log(typeof(a))


console.log(document.body.firstChild.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)

console.log(document.body.firstElementChild.firstElementChild)
