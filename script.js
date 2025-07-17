// userchoice
let userscore=0;
let compscore=0;

let div=document.querySelectorAll(".imgg");
const btnn=document.querySelector("#button");
const compp=document.querySelector("#comp-score");
 const userr=document.querySelector("#user-score");

const compchoicefun=()=>{
    choicess=['rock' , 'paper','scissor'];
    number=Math.floor(Math.random()*3);
    return choicess[number];
}
const drawgame=()=>{
    console.log("game is drwan");
    
    btnn.innerText="This game is Drawn";
    btnn.style.backgroundColor = "aquamarine";
}

const winnerr =(userwinn,userchoice,compchoice)=>{
    if (userwinn) {console.log("user wins");
        
    btnn.innerText=`you win ${userchoice} beats ${compchoice}`;userscore++;
    
    btnn.style.backgroundColor = "green";
   
    userr.innerText=`${userscore}`;

}
    else{console.log("comp wins");
        
    btnn.innerText=`you loose ${compchoice} beats ${userchoice}`;compscore++;
    
    compp.innerText=`${compscore}`
    btnn.style.backgroundColor = "Red";;
}
}





const playgame = (userchoice) => {
    console.log("user choics is",userchoice);
    const compchoice=compchoicefun();
    console.log("computer choice is ", compchoice);

    if(compchoice==userchoice) 
        drawgame();

    else {
        let userwinn=true;
        if (userchoice=='rock'){
            userwinn= compchoice == 'paper' ? false : true;

        } 
        else if(userchoice=='paper'){
            userwinn= compchoice=='scissor'?false:true;
        }
        else{
            userwinn= compchoice=='rock'?false:true;
        }
        winnerr(userwinn,userchoice,compchoice);
    }
}



div.forEach((divs) => {
    divs.addEventListener("click", () => {
        const userchoice=divs.getAttribute("id");
        playgame(userchoice);
    })
})