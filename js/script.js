let pieceSelected = false; //used for moving only one piece
let selectedPiece;
let selectedField;

let blueFields = Array.from(document.getElementsByClassName("blue"));
let whiteFields = Array.from(document.getElementsByClassName("white"));
let allFields = blueFields.concat(whiteFields);

for (let i = 0; i < allFields.length; i++) {
    allFields[i].onclick = function() {
        getField(this); //listener on every field
    };
}

function getField(field) {
    if (!pieceSelected) { //no piece is selected
        pieceSelected = true;
        selectedPiece = field.innerHTML;
        selectedField = field;
    } else { //moving the piece
        if(field.innerHTML != ""){
            field.innerHTML = "";
        }
        field.innerHTML = selectedPiece;
        selectedField.innerHTML = "";
        pieceSelected = false;
    }
}

function showMoves(pieceID, type) {
    let position = getPiecePosition(pieceID);
    console.log(`Clicked on a piece ${pieceID} on ${position[0]}${position[1]}`);
}

function getPiecePosition(pieceID) {
    let field = document.getElementById(pieceID).parentElement.parentElement.getAttribute("id");
    let splitField = field.split("");
    return(splitField);
}
