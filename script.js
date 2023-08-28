function up(){
    let val = document.querySelector("#result").innerHTML;
    val = Number(val);
    val = val + 1;
    document.querySelector("#result").innerText = val;
}
function down(){
    let val = document.querySelector("#result").innerHTML;
    val = Number(val);
    val = val - 1;
    if(val <=  0){
        val = 0;
    }
    document.querySelector("#result").innerText = val;
}
function reset(){
    document.querySelector("#result").innerText = 0;
}