window.onload=function(){
function modifyText2(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
const el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText2("four")}, false);
function modifyText(new_text) {
  const t1 = document.getElementById("t1");
  t1.firstChild.nodeValue = new_text;    
}
const ek = document.getElementById("outside");
ek.addEventListener("mousemove", function(){modifyText("three")}, false);
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});
}