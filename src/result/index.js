import Stack from "../stack"
import fibonacci from "../fibonacci"

const result = () => {
    console.log('fibonacci:');
    [0, 1, 2, 3, 4].forEach(x => {
        console.log(fibonacci(x));
    })
    console.log('------------\n\n');
    console.log('Stack:');
    const myStack = new Stack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    
    const popResult = myStack.pop() 
    const size = myStack.size() 
    console.log(popResult,size)

    console.log('------------');


}


export default result