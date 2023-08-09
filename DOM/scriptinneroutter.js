// .log v/s .dir
let x = document.getElementsByTagName('span')[0]
console.log(x)

// or

let y = document.getElementsByTagName('span')[0]
console.dir(y)

// tag name and node name
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName) 


// InnerHTML - only valid for element nodes
console.log(first.innerHTML)
// changing innerHTML
first.innerHTML = "<i>Hey I am italic</i>"
console.log(first.innerHTML)

// OutterHTML - conatins full HTML = innerHTML + the element itself
console.log(first.outerHTML)
// changing outerHTML
first.outerHTML = "<div>Hey</div>"
console.log(first.outerHTML)

