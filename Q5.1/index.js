const studentName = document.querySelector("#student-name");
// console.log(studentName);
const unitMarks = document.querySelector("#unit-marks");
// console.log(unitMarks)
const preFinalMarks = document.querySelector("#preFinal-marks");
// console.log(preFinalMarks)
const finalMarks = document.querySelector("#final-marks");
const resultBtn = document.querySelector("#result-btn");




function calculateResuslt() {
    var totalMarks = Number(unitMarks.value) + Number(preFinalMarks.value) + Number(finalMarks.value)
    // console.log(totalMarks)

    var averageMarks = totalMarks / 4;

    //display the results
    document.querySelector("#std-name").value = document.querySelector("#student-name").value;
    document.querySelector("#total-marks").value = totalMarks;
    document.querySelector("#average-marks").value = averageMarks;
}








resultBtn.addEventListener("click", calculateResuslt)



