let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#rstbtn");
let msgContainer = document.querySelector(".msg-container");
let para = document.querySelector("#para");
let newgame = document.querySelector("#rstbtn");

let turnx = true;

const winpat = [[0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6],
                [3, 4, 5],
                [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnx){
            box.innerText = "X";
            turnx = false;
        }
        else{
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for(let pat of winpat){
        let pos1v = boxes[pat[0]].innerText;
        let pos2v = boxes[pat[1]].innerText;
        let pos3v = boxes[pat[2]].innerText;
        if(pos1v != "" && pos2v != "" && pos3v != ""){
            if(pos1v == pos2v && pos2v == pos3v){
                showWinner(pos1v);
            }
                
        }
    }
}; 

const showWinner = (winner) => {
    para.innerText = `Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnx = true;
    msgContainer.classList.add("hide");
    enableBoxes();
}

newgame.addEventListener("click", resetGame);