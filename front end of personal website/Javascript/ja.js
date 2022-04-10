const txt = document.getElementById('w')

var abt = document.getElementById("abtt");

abt.addEventListener("mouseover",aboutfun(),false);
abt.addEventListener("mouseout",about2fun(),false);
function aboutfun(){
    txt.textContent = "glad to  see everything is finally working"
    document.getElementById('message').style.backgroundColor = 'blue' ; 
    
}
function about2fun(){
    txt.textContent = "Hi the name is Vinayak"
    document.getElementById('message').style.backgroundColor = 'green' ; 
    
}