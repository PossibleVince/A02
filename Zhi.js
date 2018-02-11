function calculate(){
	var height = parseInt(document.getElementById("height").value);
	var weight = parseInt(document.getElementById("weight").value);

    var realHeight = height / 100;
    var bmi = weight / Math.pow(realHeight, 2);

    if(bmi <= 18.5){
        var notice = "Too thin!";
    }
    if(bmi > 18.5 && bmi <= 24.9){
        var notice = "Great, keep it!";
    }
    if(bmi > 24.9 && bmi <= 29.9){
        var notice = "You need lose your weight!";
    }
    if(bmi > 29.9){
        var notice = "Too fat! You have to lose your weight for your health!!";
    }

	window.alert("Your BMI is " + bmi.toFixed(2) + ". " + notice);
}