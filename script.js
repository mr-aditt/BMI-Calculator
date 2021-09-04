
function bmi(){
    var weight = parseFloat(document.getElementById("weight").value)
    var height = parseFloat(document.getElementById("height").value)

    if(document.getElementById("weight-unit").value == "kilogram" &&
    document.getElementById("height-unit").value == "meter" ){
        var res = weight/height
    }else if (document.getElementById("weight-unit").value == "pounds" &&
    document.getElementById("height-unit").value == "inches" ){
        var res = (703*weight)/height
    }else {
        document.getElementById("out").innerHTML = '<p>Incorrect units</p>'
    }

    if(res < 18.5){
        document.getElementById("out").innerText = '<p class = "red">Underweight</p>'
    } else if(res >= 18.5 && res <= 24.9){
        document.getElementById("out").innerText = '<p class = "green">Normal</p>'
    } else if(res >= 25.0 && res <= 29.9){
        document.getElementById("out").innerText = '<p class = "red">Overweight</p>'
    } else if(res >= 30.0 && res <= 34.9){
        document.getElementById("out").innerText = '<p class = "maroon">Obese class I</p>'
    } else if(res >= 35.0 && res <= 39.9){
        document.getElementById("out").innerText = '<p class = "maroon">Obese class II</p>'
    } else if(res >= 40.0){
        document.getElementById("out").innerText = '<p class = "maroon">Obese class III</p>'
    } 
}
