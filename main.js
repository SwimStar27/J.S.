first_array=[];
function submit(){
var first=document.getElementById("first_1").value;
var second=document.getElementById("first_2").value;
var third=document.getElementById("first_3").value;
var fourth=document.getElementById("first_4").value;
first_array.push(first);
first_array.push(second);
first_array.push(third);
first_array.push(fourth);
console.log(first_array);
document.getElementById("names").innerHTML=first_array;
document.getElementById("submit").style.display="none";
}
function sort(){
    first_array.sort();
    console.log(first_array);
    document.getElementById("names").innerHTML=first_array;
}