const studentName = document.querySelector("#student-name");
// console.log(studentName);
const unitMarks = document.querySelector("#unit-marks");
// console.log(unitMarks)
const preFinalMarks = document.querySelector("#preFinal-marks");
// console.log(preFinalMarks)
const finalMarks = document.querySelector("#final-marks");
const resultBtn = document.querySelector("#result-btn");
const nextBtn = document.querySelector("#next-btn");


let count = 0;
let data = [];

function clearTable() {
    if (count < 5) {
        addStudentData();
        count++;
    } else {
        calculateResuslt();
    }

    // console.log("from cleart")

}


function calculateResuslt() {

    var totalMarks = Number(unitMarks.value) + Number(preFinalMarks.value) + Number(finalMarks.value)
    // console.log(totalMarks)

    var averageMarks = totalMarks / 4;
    //display the results
    // document.querySelector("#std-name").value = document.querySelector("#student-name").value;
    // document.querySelector("#total-marks").value = totalMarks;
    // document.querySelector("#average-marks").value = averageMarks;

    var studentName = document.getElementById('student-name').value;
    var totalMarks = document.getElementById('total-marks');
    var averageMarks = document.getElementById('')




}

// function addStudentData() {

//     display the results
//     document.querySelector("#student-name") = '';
//     document.querySelector("#unit-marks") = '';
//     document.querySelector("#preFinal-marks") = '';
//     document.querySelector("#final-marks") = '';
// }








resultBtn.addEventListener("click", calculateResuslt);
nextBtn.addEventListener("click", clearTable);



