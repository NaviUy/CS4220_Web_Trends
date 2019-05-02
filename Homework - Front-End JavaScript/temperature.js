
function display(){
    let form = document.getElementById('tempForm')
    let number = form.number.value

    let output = document.getElementById('output')
    let error = document.getElementById('errorMessage')

    let validation = /^[0-9]+$/;
    if(number.match(validation)){
        if(number.length == 0){
            errpr.innerText = ""
            error.innerText = "Input cannot be blank."
            output.innerText = "N/A"
        } else {
            if(form.temp.value == "Fahrenheit"){
                //console.log(form.temp.value)
                error.innerText = ""
                let finalValue = (number * 9 / 5) + 32
                output.innerText = `${number}C = ${finalValue}F`
                //console.log(finalValue)
                form.reset()
            } else {
                if(form.temp.value == "Celcius"){
                    //console.log(form.temp.value)
                    error.innerText = ""
                    let finalValue = (number - 32) * 5 / 9
                    output.innerText = `${number}F = ${finalValue}C`
                    //console.log(finalValue)
                    form.reset()
                } else {
                    //console.log("failed")
                    error.innerText = ""
                    error.innerText = "Please Select a Unit for Conversion"
                    output.innerText = "N/A"
        
                }
            }
        
        }
    } else {
        error.innerText = ""
        error.innerText = "Input must be numbers!"
        output.innerText = "N/A"
    }
 

}