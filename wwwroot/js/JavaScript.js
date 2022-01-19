
/*This function will take inputs from the form located on the index.html page
    and calculate a final grade and letter grade*/

$("#calc").click(function () {

    /*Calculate the final grade with jquery formatting*/
    finalGrade = (
        $("#assign").val() * 0.55 +
        $("#project").val() * 0.05 +
        $("#quiz").val() * 0.10 +
        $("#exam").val() * 0.20 +
        $("#intex").val() * 0.10
    );

    /*Determine the letter grade*/
    var letterGrade = ""
    if (finalGrade >= 93) {
        letterGrade = 'A';
    } else if (finalGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (finalGrade >= 86) {
        letterGrade = 'B+';
    }
    else if (finalGrade >= 83) {
        letterGrade = 'B';
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (finalGrade >= 76) {
        letterGrade = 'C+';
    }
    else if (finalGrade >= 73) {
        letterGrade = 'C';
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (finalGrade >= 66) {
        letterGrade = 'D+';
    }
    else if (finalGrade >= 63) {
        letterGrade = 'D';
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-';
    }
    else if (finalGrade < 60) {
        letterGrade = 'F';
    }

    /*alert with the results*/
    alert("Final Grade: " + finalGrade + "%\nLetter Grade: " + letterGrade);
})