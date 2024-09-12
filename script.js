const calculateGrade = () =>{
    const subject1 = parseInt(document.getElementById('subject1').value);
    const subject2 = parseInt(document.getElementById('subject2').value);
    const subject3 = parseInt(document.getElementById('subject3').value);
    const subject4 = parseInt(document.getElementById('subject4').value);
    const subject5 = parseInt(document.getElementById('subject5').value);
    
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;
    const grade = percentage >= 90 ? "Passing with A+" :
                  percentage >= 80 ? "Passing with A" :
                  percentage >= 70 ? "Passing with B" :
                  percentage >= 60 ? "Passing with C" :
                  percentage >= 50 ? "Passing with D" : 
                  percentage >= 30 ? "F and try again" : "Try next time" ;
                  document.getElementById('result').innerHTML = `
                  Total Marks: ${totalMarks} / 500<br>
                  Percentage: ${percentage}%<br>
                  Grade: ${grade}
              `;
}