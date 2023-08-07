/*class Rectangle {
    
    constructor (width, height) {
    this.width = width ;
    this.height = height ;    
    }

    get perimeter () {
        return (this.width + this.height)*2
    }

    get isValid () {
        return this.height>0 && this.width>0 
        
    }
}

class Square extends Rectangle {

    constructor (cote) {
        super(cote, cote)
        
    }
}

const p = new Rectangle(10,15)
const s = new Square(10);
console.log(p.perimeter)
console.log(p.isValid)
console.log(s.perimeter)*/



/*class Book {
numPage = 1 
constructor (title, page) {
this.title = title
this.page = page

}

nextPage () {
return this.numPage++
}
}
const p = new Book('bonjour', 10)
console.log(p.title)
p.nextPage()
console.log(p.numPage)*/
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
   
    // const p = document.querySelector('p')
    const data = new FormData(form).get('lastname')
    const h1 = document.createElement('h1')
    document.body.append(h1.innerText = `${data}`)
    e.preventDefault()
})


