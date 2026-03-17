function quad(a,b,c){
    if(a==0) return " Ошибка. Недопустимое значение параметра а";
    var D=b*b-4*a*c;
    var x1,x2;
    if(D>0){
        x1=(-b-Math.sqrt(D))/(2*a);
        x2=(-b+Math.sqrt(D))/(2*a);
        return "D = "+ D+ ", x1 = "+x1+", x2 = "+x2;
    }
    else if (D==0){
        x1=(-b)/(2*a);
        return "D = "+ D+ ", x1 = "+x1;
    }else if (D<0) return "Корней нет"
}

function prog(){
    var a=Number(document.getElementById('a').value);
    var b=Number(document.getElementById('b').value);
    var c=Number(document.getElementById('c').value);
    var result=quad(a,b,c);
    document.getElementById("result").textContent=result;
    document.getElementById("otvet").style.display = "block";
}
