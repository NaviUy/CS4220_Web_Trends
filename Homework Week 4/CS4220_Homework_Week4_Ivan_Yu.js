console.log("Problem #1") // problem #1
const adderDelay = 10 //delay for adder in milliseconds

const adder = (previous, next) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let currentTotal = parseInt(previous)
            const error = !next ? `Something Went Wrong!` : null
            if(error)
                reject(error)
            else
                //debug
                // console.log("inside adder " , previous)
                // console.log("inside adder " , next)
                // console.log("inside adder " , previous + next)
                // let passingTotal = currentTotal + next
            resolve(`${currentTotal + parseInt(next)}`)
        }, adderDelay)
    })
}

async function iterateNumbers(numbers) {
    let previousNumber = 0    
    for(let i = 0; i < numbers.length; i++){
        let nextNumber = numbers[i]

        try{
            previousNumber = await adder(previousNumber, nextNumber)
            //debug
            //console.log("outside adder pN ", previousNumber)
            // console.log("outside adder nN". nextNumber)
        } catch (e) {
            console.log(e)
        }
    }

    console.log("Total: ", previousNumber)

}

iterateNumbers([1, 2, 3, 5, 8, 13, 21])

//formatting
setTimeout(() =>{
console.log()
console.log("Problem #2")
}, 85)


const todos = [{
    name: 'get coffee',
    priority: 90
},
{
    name: 'clean room',
    priority: null
},
{
    name: 'go to CS4220',
    priority: 40
},
{
    name: 'do homework before due date',
    priority: 80
}]

const checkPriority = (todo, callback) => {
    let delay = 90 //adjustable delay
    setTimeout(() => {
    const error = !todo.priority ? `${todo.name}`: null
    //console.log(!todo.priority)
    if(!todo.priority){
        //console.log("done")
        delay = 0
    }
    //console.log(delay)
    callback(error, todo)
    }, delay)
}

const makePriorityList = (todos) => {
    let errorArr = []
    let priorityArr = []

    for(let i = 0; i < todos.length; i++){
        let todo = todos[i]
        checkPriority(todo, (error, result) => {
            if(error){
                errorArr.push(error)
                
            }
            else{
                priorityArr.push(result)
                
            }
            if(i + 1 == todos.length){
                console.log("Priority")
                bubbleSort(priorityArr)
                console.log(priorityArr)
                console.log("Missing Priority", errorArr)
            }
        }) 

    }


    //bubble sort algorithim from https://khan4019.github.io/front-end-Interview-Questions/sort.html
    function bubbleSort(arr){
        let len = arr.length;
        for(let i = len-1; i>=0; i--){
            for(var j = 1; j <=i; j++){
                if(arr[j-1].priority<arr[j].priority){
                    let temp = arr[j]
                    arr[j] = arr[j-1]
                    arr[j-1] = temp
                }
            }
        }
        return arr;
    }


    //console.log(priorityArr)

}


makePriorityList(todos)

// checkPriority({ name: 'get coffee', priority: 90 }, (err, result) => {
//     console.log(result)
// })

// checkPriority({ name: 'clean room', priority: null }, (err, result) => {
//     console.log(result)
// })

