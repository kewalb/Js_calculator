//to display valur=e on the input area
display = (val) => {
    document.getElementById("display").value+=val
}

//to clear the input area
clear_data = () => {
    document.getElementById("display").value = ""
}

//to calculate the output of a given expression
compute = () => {
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y

}

keyPressed = (event) => {
    console.log(event.key)
}