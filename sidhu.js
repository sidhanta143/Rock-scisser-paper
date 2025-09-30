


let userScore=0;
let computerScore=0;
let drowscore=0;

let para=document.getElementById("para");
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win..!");
        para.innerHTML="you win..!😍";
        para.style.backgroundColor="green";
        userScore++;
        document.getElementById("userscore").innerText=userScore;
    }
    else{
        console.log("you loss..!");
        para.innerHTML="you loss..!😒";
        para.style.backgroundColor="blue";
        computerScore++;
         document.getElementById("computerscore").innerText=computerScore;
    }
}

const choice=document.querySelectorAll(".choice");
const playgame=(userchoice)=>{
    console.log("user choice is= ",userchoice);
const  computerchoice=computer(); 
    console.log("computer choice: ",computerchoice);
if(userchoice===computerchoice){
    console.log("game will be drow..!");
    para.innerHTML="game will be drow..!🫳🫳🫳";
    para.style.backgroundColor="yellow";
    drowscore++;
    document.getElementById("drowscore").innerText=drowscore;


}
else{
    let userwin=true;
    if(userchoice==="Rock"){
        userwin=computerchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userwin=computerchoice==="scisser"?false:true;
    }
    else{
        computerchoice==="Rock"?false:true;
    }
    showwinner(userwin);
}
}
const computer=()=>{
    const choice=["Rock","paper","scisser"];
   const rand= Math.floor(Math.random()*3);
    // console.log(rand);
    return choice[rand];
}

choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        // const choiceId=document.getAttribute("id");
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
        // computerchoice();
       
    });
});
