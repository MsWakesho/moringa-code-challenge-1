// function getStudentGrade (input, studentsmarks){

//     let input = userInput("Enter the marks of the student between numbers of 0 to 100");

//     let studentsmarks = parseFloat(input);
   
   
// }



function getStudentGrade(){

    let input = prompt(`Enter the student\s marks`);// Displays a dialog box with the message, to get the input from the teacher.

   let studentMarks = parseFloat(input); // Converts the input (which is initially a string) to a floating-point number. This is done to ensure that the input can be treated as a number.

   //Now  to Calculate the Grade of the student marks that were input by the user.
   //Grade Calculate.
   if( studentMarks > 79){
    return 'A';
   }else if ( studentMarks >= 60 && studentMarks <= 79){
    return 'B';
   }else if(studentMarks >= 49 && studentMarks <= 59 ){
    return 'C';
   }else if(studentMarks >=40 && studentMarks <= 49){
    return 'D';
   } else {
    return 'E';
   }

}

console.log(getStudentGrade());



