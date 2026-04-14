document.getElementById("SumForm").addEventListener("submit", 
    function(event) {
        event.preventDefault(); // Prevent form submission  
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);

        //calcula la suma 
        var sum = num1 + num2;

        //Display the result
        document.getElementById("result").innerHTML = `La suma de ${num1} y ${num2} es ${sum}`;
}); 