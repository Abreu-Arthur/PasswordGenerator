var up=['A','B','C','D','E','F','G','H','I','J','K','L'
,'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var low=['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
var num=['1','2','3','4','5','6','7','8','9']
var simb=['!','@','#','$','%','&','*']

var td=[]
var pos=[0,0,0,0]
function gerar(){
    document.getElementById('view').value=''
    td=[]
    if(document.getElementById('u').checked){
        var i=0
        while(i<up.length){
            td.push(up[i])
            i++
        }
        pos[0]=up.length
    }
    if(document.getElementById('l').checked){
        var i=0
        while(i<low.length){
            td.push(low[i])
            i++
        }
        pos[1]=low.length
    }
    if(document.getElementById('n').checked){
        var i=0
        while(i<num.length){
            td.push(num[i])
            i++
        }
        pos[2]=num.length
    }
    if(document.getElementById('s').checked){
        var i=0
        while(i<simb.length){
            td.push(simb[i])
            i++
        }
        pos[3]=simb.length
    }
    console.log(pos[0]+pos[1]+pos[2]+pos[3])
    var qntd=document.getElementById('qntd').value
    var z=0
    while(z<qntd){
        var po=Math.floor(Math.random()*td.length)
        document.getElementById('view').value+=td[po]
        z++
    }
}
function qntd(){
    document.getElementById('qntdv').value=document.getElementById('qntd').value 
}