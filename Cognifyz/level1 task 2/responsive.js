var currentTime = new Date();
var currentHour = currentTime.getHours();

var greeting;
if (currentHour < 12 ) {
                    greeting = "good morning!";              
}else if (currentHour<18) {
                    greeting = "good afternoon!";                             
}else{
                    greeting = "good evening!";              
}

alert(greeting);

function addNumbers() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var Sum = num1 + num2;

        document.getElementById("Result").innerHTML = "The Result is :" + Sum;

}
const btn = document.getElementById('btn');


btn.addEventListener('click',function onclick(){
                    btn.style.backgroundColor = 'salmon';
                    btn.style.color='white';

});