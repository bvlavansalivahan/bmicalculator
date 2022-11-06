let weight=document.getElementById("inputIdkg")
let height=document.getElementById("inputIdcm")
function claculate() {
    let weight1=weight.value
    let height1=height.value
    if(weight1=="" && height1==""){
        document.getElementById("requriedWeight").textContent="*required";
        document.getElementById("requiredHeight").textContent="*required";
        document.getElementById("result").textContent="";
        document.getElementById("result1").textContent="";
    }else if (height1=="") {
        document.getElementById("requiredHeight").textContent="*required";
        document.getElementById("requriedWeight").textContent="";
        document.getElementById("result").textContent="";
        document.getElementById("result1").textContent="";
    }else if (weight1=="") {
        document.getElementById("requriedWeight").textContent="*required";
        document.getElementById("requiredHeight").textContent="";
        document.getElementById("result").textContent="";
        document.getElementById("result1").textContent="";
    }else {
        document.getElementById("requriedWeight").textContent="";
        document.getElementById("requiredHeight").textContent="";
        document.getElementById("result").textContent="";
        document.getElementById("result1").textContent="";
        if (isNaN(weight1) && isNaN(height1)) {
            document.getElementById("requiredHeight").textContent="*Invalid height";
            document.getElementById("requriedWeight").textContent="*Invalid Weight";
            document.getElementById("result").textContent="";
            document.getElementById("result1").textContent="";
        }else if (isNaN(weight1)){
            document.getElementById("requriedWeight").textContent="*Invalid Weight";
            document.getElementById("requiredHeight").textContent="";
            document.getElementById("result").textContent="";
            document.getElementById("result1").textContent="";
        }else if (isNaN(height1)){
            document.getElementById("requiredHeight").textContent="*Invalid height";
            document.getElementById("requriedWeight").textContent="";
            document.getElementById("result").textContent="";
            document.getElementById("result1").textContent="";
        }else {
        BMI=weight1/(height1*height1)*10000;
        BMI=BMI.toFixed(2);
        if (BMI<18.50){
            document.getElementById("result").textContent="BMI:"+BMI;
            document.getElementById("result").style.color="red";
            document.getElementById("result1").textContent="UNDERWEIGHT";
            document.getElementById("result1").style.color="red";
        }else if (18.50<=BMI && BMI<25) {
            document.getElementById("result").textContent="BMI:"+BMI;
            document.getElementById("result").style.color="green";
            document.getElementById("result1").textContent="HEALTHYWEIGHT";
            document.getElementById("result1").style.color="green";
        }else if (25.00<=BMI && BMI<30) {
            document.getElementById("result").textContent="BMI:"+BMI;
            document.getElementById("result").style.color="orange";
            document.getElementById("result1").textContent="OVERWEIGHT";
            document.getElementById("result1").style.color="orange";
        }else {
            document.getElementById("result").textContent="BMI:"+BMI;
            document.getElementById("result").style.color="RED";
            document.getElementById("result1").textContent="OBESE";
            document.getElementById("result1").style.color="red";
        }
        weight.value="";
        height.value="";

    }

}
}
