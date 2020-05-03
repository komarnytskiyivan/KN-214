function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function validateNumber() {
    var txt = "";
     if (document.getElementById("id1").validity.rangeUnderflow) {
        txt = "Значення замале";
     }
    document.getElementById("demo").innerHTML = txt;
 }