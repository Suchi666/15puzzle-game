const button=document.querySelector(".btn");
let count=0;
let flag;
let stopid;

/*function addText(id,pos){
    const arr=document.getElementById(id);
    let cl=arr.classList[1];
    console.log(cl[4]);
    const textbox=document.querySelector(`.text${pos}`);
    textbox.innerHTML=`<h1>${cl[4]}</h1>`;
}*/
let sec=0;
let min=0;
let h=0;
let second=document.querySelector(".seconds");
let minute=document.querySelector(".minute");
let hour=document.querySelector(".hour");
let timeSec=0;

function timer(){
    sec+=1;
    timeSec+=1;
    //console.log(time);
    
    if(min>=60)
    {
        h+=1;
        min=min-60;
    }
    if(sec>=60)
    {
        min+=1;
        sec=sec-60;
    }
    if(h<10){hour.innerHTML=`0${h}`; }
    else{hour.innerHTML=`${h}`; }

    if(min<10){minute.innerHTML=`0${min}`; }
    else{second.innerHTML=`${min}`; }
    
     if(sec<10){second.innerHTML=`0${sec}`; }
        else{ second.innerHTML=`${sec}`; }

    if(min>=1){
        clearInterval(stopid);
        prompt("Time up!!");
         
    }
}




function swap(id1,id2){
    //console.log(id1);
    //console.log(id2);
      let temp=document.getElementById(id1).className;
      document.getElementById(id1).className= document.getElementById(id2).className;
      document.getElementById(id2).className=temp; 
}

function change(){
    let tiles=document.querySelectorAll(".box");
    count=0;
    DisplayCount(count);
    sec=0;
    min=0;
    h=0;
    timeSec=0;
    hour.innerHTML=`0${h}`; 
    minute.innerHTML=`0${min}`; 
    second.innerHTML=`0${sec}`;
    for(let i=1;i<=3;i++)
    {
        for(let j=1;j<=3;j++){
            let num1=Math.floor(Math.random()*3)+1;
            let num2=Math.floor(Math.random()*3)+1; 
            swap("tile"+i+j,"tile"+num1+num2);

        }
    }
    flag=true;
    stopid=setInterval(timer,1000);
}

function checkFunc(){
     const arr=document.querySelectorAll(".box");
     //console.log(arr);
     for(let iterator of arr){
         let list=iterator.classList;
         //console.log(typeof list[1]);
         let listId=iterator.id;
         //.log(typeof listId);
         if(list[1===listId])flag=true;
         else{
            return false;
         } 
     }
     return true;
}


button.addEventListener("click",change);

function DisplayCount(count){
    let displayBox=document.querySelector(".display");
    displayBox.innerHTML=`${count}`;
}

function shift(row,col)
{
    //console.log("function called");
    const emptyCellId=document.querySelector(".tile33").id;
    let rowET=Number(emptyCellId[4]);
    let colET=Number(emptyCellId[5]);
    //console.log(rowET,typeof rowET);
    //console.log(colET,typeof colET); 
    count++;
    
    
    DisplayCount(count);
    if((row==rowET)||(col==colET)){
        if(row==rowET){
           if(col<colET){
               for(let i=colET;i>col;i--){
                   let a=i-1;
                    swap(`tile${row}${i}`,`tile${row}${a}`);
               }
           }
           else{
            for(let i=colET;i<col;i++){
                let a=i+1;
                swap(`tile${row}${i}`,`tile${row}${a}`);
                }
           }
        }
        if(col==colET){
            if(row<rowET){
                for(let i=rowET;i>row;i--){
                    let a=i-1;
                    swap(`tile${i}${col}`,`tile${a}${col}`);
                }
            }
            else{
             for(let i=rowET;i<row;i++){
                    let a=i+1;
                    swap(`tile${i}${col}`,`tile${a}${col}`);
                 }
            }
        }
    }
    
    let test1=checkFunc();
    if(test1===true&&flag===true){
    prompt("you won");
    clearInterval(stopid);}
}