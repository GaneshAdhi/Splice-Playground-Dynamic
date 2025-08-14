let arr = [1, 7, 3, 1, 0, 20, 77];


function convert() {
    let updateArrayInputEl = document.getElementById("updatedArray");
    let str = JSON.stringify(arr);
    updateArrayInputEl.textContent = str;
}


let spliceButton = document.getElementById("spliceBtn");

function spliceArray(startIndexInputEl, deleteCountInputEl, addingInputEl) {
    let itemToAddInputEl = document.getElementById("itemToAddInput");
    let spliceBtnEl = document.getElementById("spliceBtn");

    let startIndex = startIndexInputEl.value;
    let deleteCount = deleteCountInputEl.value;
    let itemToAdd = itemToAddInputEl.value;
    if (startIndex === "") {
        alert("enter the start index")
    }
    if (deleteCount === "") {
        deleteCount.value = 0;
    }

    if (itemToAdd === "") {
        arr.splice(parseInt(startIndex), parseInt(deleteCount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }
    startIndex.value = "";
    deleteCount.value = "";
    itemToAdd.value = "";
    convert()
}


spliceButton.onclick = function() {
    let startIndexInputEl = document.getElementById("startIndexInput");
    let deleteCountInputEl = document.getElementById("deleteCountInput");
    let addingInputEl = document.getElementById("itemToAddInput");



    spliceArray(startIndexInputEl, deleteCountInputEl, addingInputEl);
};
