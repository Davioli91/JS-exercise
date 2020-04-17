numbers = [5,2,1,3,4]

const result = [5,2,1,3,4].reduce((prevElement,currentElement) => {
    return (prevElement + currentElement)
}, 0)

const average = result / [5,2,1,3,4].length


const min = Math.min(...numbers)
const max = Math.max(...numbers)

