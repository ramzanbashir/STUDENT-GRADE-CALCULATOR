// Get the student's name and marks
var studentName = prompt("Student Name", "Enter data");
var Eng = +prompt("Enter Eng marks", "marks");
var Urdu = +prompt("Enter Urdu marks", "marks");
var Math = +prompt("Enter Math marks", "marks");
var Cs = +prompt("Enter Cs marks", "marks");
var Ph = +prompt("Enter Ph marks", "marks");

// Calculate the total and percentage
var Total = Eng + Urdu + Math + Cs + Ph;
var Per = (Total / 500) * 100;

// Determine the grade
var Grade;
if (Per >= 80) {
  Grade = "A+";
} else if (Per >= 70) {
  Grade = "A";
} else if (Per >= 60) {
  Grade = "B";
} else if (Per >= 50) {
  Grade = "C";
} else if (Per >= 40) {
  Grade = "D";
} else if (Per >= 30) {
  Grade = "Fail";
} else {
  Grade = "Bhai tary bas ki bat nhi";
}

// Create the table
document.write(`
  <table border="1px">
    <tr>
      <th>Student Name</th>
      <th>Eng</th>
      <th>Urdu</th>
      <th>Math</th>
      <th>Cs</th>
      <th>Ph</th>
      <th>Total</th>
      <th>Percentage</th>
      <th>Grade</th>
    </tr>
    <tr>
      <td>${studentName}</td>
      <td>${Eng}</td>
      <td>${Urdu}</td>
      <td>${Math}</td>
      <td>${Cs}</td>
      <td>${Ph}</td>
      <td>${Total}</td>
      <td>${Per}%</td>
      <td>${Grade}</td>
    </tr>
  </table>
`);