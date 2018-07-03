function move(fangxiang){

    var per = document.getElementById("cc");
    var j=per.style.top;
    var k=per.style.left;
    j=parseInt(j.substr(0,j.length-2));
    k=parseInt(k.substr(0,k.length-2));

    switch(fangxiang)
    {
        case 1:
            per.style.top=(j-10)+"px";
            break;
        case 2:
            per.style.top=(j+10)+"px";
            break;
        case 3:
            per.style.left=(k-10)+"px";
            break;
        case 4:
            per.style.left=(k+10)+"px";
            break;
    }
}