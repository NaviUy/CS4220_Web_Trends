
//problem #1
const group1 = {
        name: 'Justice League',
        leader: 'Wonder Woman',
        members: ['Batman', 'Superman']
    }

    const group2 = {
        name: 'Avengers',
        members: ['Hulk', 'Thor', 'Captain America']
    }
    
    //console.log for new line
    console.log()
    print(group1)
    console.log()
    print(group2)

    //function
    function print(arr){
        const {name, leaders = '', members} = arr

        //template literals
        let nameTemplate = `Name: ${name}`
        let leaderTemplate = `Leaders: ${leaders}`
        let membersTemplate = `Members: ${members}`

        //console.log template literals
        console.log(nameTemplate)
        console.log(leaderTemplate)
        console.log(membersTemplate)
    }

//spacing
console.log() 
//problem #2

let roundedTotal = 0

class Grocery {
    constructor(arr = []) {
        this.arr = arr
    }

    addItem(object) {
        const {item, quantity, price = 'n/a'} = object
        this.arr.push(object)
        //console.log(this.arr)
        return this
    }

    removeItem(string) {
        let index = -1;
        let remove = false;
        this.arr.forEach(function(element) {
            const{item, quantity} = element
            let itemLowercase = item.toLowerCase()
            let stringLowercase = string.toLowerCase()

            if(itemLowercase !== stringLowercase){
                index++
            } else {
                if(quantity > 1){
                    element.quantity = quantity - 1
                } else{
                    remove = true;
                }
            }

        }); 

        if(remove && index > -1){
                this.arr.splice(index, 1);
        }

        return this

    }

    addPrice(string, priceInput) {

        this.arr.forEach(function(element) {
            const{item} = element
            let itemLowercase = item.toLowerCase()
            let stringLowercase = string.toLowerCase()

            if(itemLowercase === stringLowercase){
                element.price = priceInput;
            }
        }); 

        return this

    }

    addTotal(){
        let total = 0
        this.arr.forEach(function(element) {
            const{item, quantity, price = 0} = element
            total = total + (quantity * price)
        }); 
        roundedTotal = (Math.round(total * 100) / 100).toFixed(2)
        //console.log(roundedTotal)
        return this
    }

    get print(){
        //console.log(this.arr)
    this.arr.forEach(function(element) {
        const{item, quantity, price= 'n/a'} = element
        console.log(`Item: ${item} | Quantity: ${quantity} | Price: ${price}`)
    });  

    console.log(`Total: ${roundedTotal}`)

    }

}

const newCart = new Grocery()
const cart = newCart
    .addItem({ item: 'bread', quantity: '1'})
    .addItem({ item: 'soup', quantity: '3'})
    .addItem({ item: 'chips', quantity: '4'})
    .addItem({ item: 'soda', quantity: '1'})
    .addPrice('chiPs', 5.99)
    .removeItem('Chips')
    .addPrice('soda', 1.04)
    .addTotal()
    .print

