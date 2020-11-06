const args=process.argv.slice(2);
let input=parseInt(args[0]);
if(input.length ==1){
    console.log("unit");
}else if(input.length ==10){
    console.log("ten");
}else if(input.length ==100){
    console.log("hundred");
}else if(input.length ==1000){
    console.log("thousand");
}else
console.log("more than thousand");
