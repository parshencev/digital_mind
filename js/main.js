document.addEventListener("DOMContentLoaded",function(){
    setEvents();
    set_style();
});
function accordion(obj){
    if(obj.className=="accordion")obj.className="accordion active";
    else obj.className="accordion";
}
function selected(obj){
    console.log("he");
    if(obj.className=="active")obj.className="";
    else obj.className="active";
}
function range(obj){
    obj.onmouseover=function(e){
        obj.onmousedown=function(e){
            RX=e.pageX-obj.offsetLeft;
            RY=e.pageY-obj.offsetTop;
            obj.onmousemove=function(e){
                if(parseInt(obj.style.left)<0){
                    obj.style.left=0+"px";
                    obj.onmousemove="";
                    obj.onmouseover="";
                }
                else if(parseInt(obj.style.left)>190){
                    obj.style.left=190+"px";
                    obj.onmousemove="";
                    obj.onmouseover="";
                }else if(obj.className=="float left" && parseInt(obj.style.left)>=parseInt(document.getElementsByClassName("float right")[0].style.left)||obj.className=="float right" && parseInt(obj.style.left)<=parseInt(document.getElementsByClassName("float left")[0].style.left)){
                    if(obj.className=="float left") obj.style.left=parseInt(document.getElementsByClassName("float right")[0].style.left)-20+"px";
                    else obj.style.left=parseInt(document.getElementsByClassName("float left")[0].style.left)+20+"px";
                    obj.onmousemove="";
                    obj.onmouseover="";
                }
                else if(parseInt(obj.style.left)>=0 && parseInt(obj.style.left)<=190) {
                    obj.style.left = e.pageX - RX + "px";
                }
                if (obj.className == "float left"){
                    document.getElementsByClassName("number min")[0].innerHTML=parseInt(obj.style.left)*5;
                    document.getElementsByClassName("number min")[0].style.left = e.pageX - RX - 5 + "px";
                    document.getElementsByClassName("line front")[0].style.left = e.pageX - RX + 16 + "px";
                    document.getElementsByClassName("line front")[0].style.width =parseInt(document.getElementsByClassName("float right")[0].style.left) - parseInt(obj.style.left)-16+"px";
                }
                else{
                    document.getElementsByClassName("number max")[0].innerHTML=parseInt(obj.style.left)*5;
                    document.getElementsByClassName("number max")[0].style.left= e.pageX - RX - 5 + "px";
                    document.getElementsByClassName("line front")[0].style.width =parseInt(obj.style.left)-parseInt(document.getElementsByClassName("float left")[0].style.left)-14+"px";
                }
            };
        };
    };
    obj.onmouseup=function(){
        obj.onmousemove="";
        obj.onmouseover="";
    };
    obj.onmouseout=function(){
        obj.onmousemove="";
        obj.onmouseover="";
    };
}
function setEvents(){
    for(var i=0;i<=document.getElementsByClassName("float").length-1;i++)
        range(document.getElementsByClassName("float")[i]);
}
function set_style(){
    document.getElementsByClassName("float left")[0].style.left="17px";
    document.getElementsByClassName("float right")[0].style.left="156px";
    document.getElementsByClassName("line front")[0].style.width ="125px";
}
function load_more(){
    document.getElementsByClassName("products")[0].innerHTML+=document.getElementsByClassName("products")[0].innerHTML;
}