for(i=1; i<=100; i++){
    if(i%3 == 0){
        document.write("Fizz");
    }
    if(i % 5 == 0){
        document.write("Buzz");
    }
    if(i%5 != 0 && i%3 != 0){
        document.write(i);
    }
    document.write("<br>");
 
}
document.write("<br>"+"con funcion"+"<br>"+"<hr>"+"<br>");
//con funcion esDivisible
for(i=1; i<=100; i++){
    if(esDivisible(i,3)){
        document.write("Fizz");
    }
    if(esDivisible(i,5)){
        document.write("Buzz");
    }
    if(!esDivisible(i,3) && !esDivisible(i,5)){
        document.write(i);
    }
    document.write("<br>");
    function esDivisible(num, divisor) {
        if(num % divisor == 0){
            return true;
        }
        else{
            return false;
        }
    }

}