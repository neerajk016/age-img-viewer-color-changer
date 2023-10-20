function ageindays(){
    var birthyear =prompt("enter your birthyear");
    var x=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode("you are"+x+"days old.");
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById("ageindays").remove();
}



function gcat(){
    var image=document.createElement('img');
    image.setAttribute("id","remove");
    var div=document.getElementById("cat");
    image.src="img.png"
    div.appendChild(image);

}
function rem(){
    document.getElementById("remove").remove();

}
var allbuttons=document.getElementsByTagName("button");



var copyofbuttons=[];
for(let i=0;i<allbuttons.length;i++){
    copyofbuttons.push(allbuttons[i].classList[1])

}
console.log(copyofbuttons);

function buttoncolorchange(x){
    if(x.value==="red"){
        buttonred();
    }else if(x.value==="green"){
        buttongreen();
    }else if(x.value==="reset"){
        buttoncolorreset();
    }else if(x.value==="random"){
        randomcolor();
    }
}
function buttonred(){
    for(let i=0;i<allbuttons.length;i++){
        // console.log(allbuttons[i].classList[1])
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add("btn-danger");

    }
}

function buttongreen(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add("btn-success");
    }
}

function buttoncolorreset(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(copyofbuttons[i]);
    }
}

function randomcolor(){
    let choices=['btn-primary','btn-danger',"btn-success","btn-warning"]

    for (let i=0;i<allbuttons.length;i++){
        let randomnumber=Math.floor(Math.random()*4);
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(choices[randomnumber]);

    }

}


