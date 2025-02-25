function MarkToGrade(){
    let input = document.getElementById("mark-input-box").value.trim();
    let validateMessage = document.getElementById("validation-message");
    let gradeResult = document.getElementById("grade-result");

    validateMessage.textContent="";
    gradeResult.textContent="";


    try{
        if(input === ""){
            throw "PLease enter a mark";
        }

        let mark = parseInt(input, 10)

        if(isNaN(mark)){
            throw "Invalid input! please enter a number only.";
        }

        if(mark < 0){
            throw "Mark can not be negative";
        }

        if(mark > 100){
            throw "Mark can not be over 100 ";
        }

        let grade
        if(mark >= 90){
            grade = "A";
        
        }
        else if (mark >= 80){
            grade = "B";
        }
        else if (mark >= 70){
            grade = "C";
        }
        else if (mark >= 50){
            grade = "D";
        }
        else {
            grade = "F";


        }

        gradeResult.textContent = `Grade: ${grade}`;

            
    }catch (error){
        validateMessage.textContent = error;
    }
}
