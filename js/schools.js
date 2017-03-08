/**
 * Created by h205p3 on 10/31/16.
 */


function add(a,b) {
    return a + b;
}

function calculateGrades() {
    var c = document.getElementById("tests").value;
    var d = document.getElementById("testWeight").value;
    var e = document.getElementById("quizzes").value;
    var f = document.getElementById("quizWeight").value;
    var k = document.getElementById("midterm").value;
    var j = document.getElementById("midtermWeight").value;
    var l = document.getElementById("homework").value;
    var m = document.getElementById("homeworkWeight").value;
    var n = document.getElementById("finalWeight").value;
    var o = document.getElementById("gradeNeeded").value;

    c = c.replace(" ", "");
    var parts = c.split(",");
    for (var i = 0; i < parts.length; i++) {
        parts[i] = +parts[i];
    }
    var g1 = document.getElementById("tests").value = parts.reduce(add, 0) / parts.length;

    e = e.replace(" ", "");
    var parts = e.split(",");
    for (var i = 0; i < parts.length; i++) {
        parts[i] = +parts[i];
    }
    var g2 = document.getElementById("quizzes").value = parts.reduce(add, 0) / parts.length;

    k = k.replace(" ", "");
    var parts = k.split(",");
    for (var i = 0; i < parts.length; i++) {
        parts[i] = +parts[i];
    }
    var g3 = document.getElementById("midterm").value = parts.reduce(add, 0) / parts.length;

    l = l.replace(" ", "");
    var parts = l.split(",");
    for (var i = 0; i < parts.length; i++) {
        parts[i] = +parts[i];
    }
    var g4 = document.getElementById("homework").value = parts.reduce(add, 0) / parts.length;

    currentGrade = g1 * ((d/100)+(n/400)) + g2 * ((f/100)+(n/400)) + g3 * ((j/100)+(n/400)) + g4 * ((m/100)+(n/400));
    document.getElementById("output").innerHTML = currentGrade;
}

function calculateFinalNeeded() {

    var n = document.getElementById("finalWeight").value;
    var o = document.getElementById("gradeNeeded").value;

    if(o == "a") {
        examGradeNeeded = 100*(90-currentGrade+(currentGrade*n/100))/n;
    }
    else if(o == "b") {
        examGradeNeeded = 100*(80-currentGrade+(currentGrade*n/100))/n;
    }
    else if(o == "c") {
        examGradeNeeded = 100*(70-currentGrade+(currentGrade*n/100))/n;
    }
    else if(o == "d") {
        examGradeNeeded = 100*(60-currentGrade+(currentGrade*n/100))/n;
    }
    document.getElementById("output").innerHTML = examGradeNeeded;
    console.log(currentGrade);
    console.log(o);
    console.log(n);
    console.log(examGradeNeeded);
}
