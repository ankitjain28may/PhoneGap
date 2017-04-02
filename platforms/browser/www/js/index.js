
function clr() {
    // console.log("2");
    document.getElementById("screen").value=0;
        document.getElementById("screen").style="color:black;";
}


function inp(){
    var show=document.getElementById("screen").value;
    // console.log(show);
    var len=show.length;
    var first="";
    var second="";
    var oper="";
    var flag=0;
    var i=0;
    if(show.charAt(i)=='-')
    {
        i=1;
        first='-';
    }
    for(;i<len;i++)
    {
        if(show.charAt(i)!='+' && show.charAt(i)!='-' && show.charAt(i)!='*' && show.charAt(i)!='/' && show.charAt(i)!='=' && flag==0)
        {
             first=first+show.charAt(i);
             // console.log(first);
        }
        else if(show.charAt(i)!='+' && show.charAt(i)!='-' && show.charAt(i)!='*' && show.charAt(i)!='/' && show.charAt(i)!='=' && flag==1)
        {
             second=second+show.charAt(i);
             // console.log(second);
        }
        else if(flag==0){
            flag=1;
             oper=show.charAt(i);
        }
        else{
            flag=2;
            break;
        }
    }

    if(oper==='+')
        show=parseFloat(first)+parseFloat(second);
    else if(oper==='-')
        show=parseFloat(first)-parseFloat(second);
    else if(oper==='*')
        show=parseFloat(first)*parseFloat(second);
    else if(oper==='/')
        show=parseFloat(first)/parseFloat(second);
    // console.log(show);
    first=parseFloat(show);
    if(isNaN(show))
    {
        show="Syntax Error";
        first="";
        document.getElementById("screen").style="color:red;";
    }
    document.getElementById("screen").value=show;


}

function post(ad){
    var show=document.getElementById("screen").value;
    show=show+ad;
    document.getElementById("screen").value=show;
}
function back() {
    var show=document.getElementById("screen").value;
    show=show.substr(0,show.length-1);
    document.getElementById("screen").value=show;
}

function change()
{

}