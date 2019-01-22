// creating grade system


function getGrades(marks,maxMarks) {
    let myGrade
    let percent = (marks * 100) / maxMarks
    if (percent >= 90) {
        myGrade = "A+"
    }
    else if (percent >= 80 ) {
        myGrade = "A"
    }
    else if (percent >= 70 ) {
        myGrade = "B"
    }else if (percent >= 60 ) {
        myGrade = "C"
    }
    else
        myGrade = "F"

    console.log(`You got ${percent} % and ${myGrade} grade`);
    
}

const percent = getGrades(56,600)




