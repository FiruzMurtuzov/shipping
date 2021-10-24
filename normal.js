var lol = [];
var i = 1;
var yozmaq = prompt("Shiplemek istediyin adamın adını yaz");
function functiona(){
if( i<8){
    document.getElementById('form').className="form2"
    document.getElementById('button').className="button2"
    document.getElementById('all_people').className="people2"
console.log(i)
i++

}

else{
    document.getElementById('button').style.animation="shake,glow-red";
    document.getElementById('button').style.animationDuration="0.7s,0.35s"
    document.getElementById('button').style.backgroundColor="red"
  
       i =8;


}
 
}
function randomiz(){
    if (i==8){
        alert();
    }
    else{
       
            document.getElementById('select').style.display="block";
      

    }
}


function mainthink(){ 
    var name = document.getElementById('input').value;
    lol.push(name);
    document.getElementById('form').className="form1"
    document.getElementById('button').className="button1"
    document.getElementById('all_people').className="people3"
   
    var btn = document.createElement("div");
    btn.className="divpart";
    btn.innerHTML=name;
    document.getElementById('all_people').appendChild(btn);
    
    if (i==8){
    
           
                document.getElementById('select').className="select2"
          
    
       
    }
  

   
}
function randomiz(){
    alert("Iradlarinizi timeshiping@gmail.com adresine gondere bilersiniz")
     var x = Math.floor(Math.random() * 7);
  
     document.getElementById('button').style.filter="blur(12px)";
     document.getElementById('all_people').style.filter="blur(12px)";
    if (x==0){ 
  
     
        var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[0]+ " adli adamla yozduz tebrikler";
        document.getElementById('ending').appendChild(lolll);
        lolll.className="last";
         document.getElementById('ending').style.display="block"

    }
  else if (x==1){
   
    var lolll = document.createElement('H1');
    lolll.innerHTML=yozmaq+" adli adam " + lol[1]+ " adli adamla yozduz tebrikler";
    document.getElementById('ending').appendChild(lolll);
    lolll.className="last"; 
    document.getElementById('ending').style.display="block"
    }
   else  if (x==2){
    
    var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[2]+ " adli adamla yozduz tebrikler";
        document.getElementById('ending').appendChild(lolll);
        lolll.className="last";
        document.getElementById('ending').style.display="block"
    }
    else if (x==3){
        
        var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[3]+ " adli adamla yozduz tebrikler";
        document.getElementById('ending').appendChild(lolll);document.getElementById('ending').style.display="block"
        lolll.className="last";
    } else if(x==4){
        document.getElementById('ending').style.display="block"
        var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[4]+ " adli adamla yozduz tebrikler";
       
        lolll.className="last"; document.getElementById('ending').appendChild(lolll);
    }
    else if(x==5){

       
    
        var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[5]+ " adli adamla yozduz tebrikler";
        document.getElementById('ending').appendChild(lolll);
        lolll.className="last"; document.getElementById('ending').style.display="block"
    }
    else if(x==6){
       
        var lolll = document.createElement('H1');
        lolll.innerHTML=yozmaq+" adli adam " + lol[6]+ " adli adamla yozduz tebrikler";
        document.getElementById('ending').appendChild(lolll);
        lolll.className="last"; document.getElementById('ending').style.display="block"
    }
}
