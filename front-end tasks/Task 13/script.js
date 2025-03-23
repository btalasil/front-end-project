let studentRecords = [];
function storeStudentData() {
let newStudent = {
name: document.getElementById("studentName").value,
age: document.getElementById("studentAge").value,
grade: document.getElementById("studentgrade").value,
course: document.getElementById("studentcourse").value
};
studentRecords.push(newStudent);
alert("Student information stored!");
}
function displayStudentData() {
if (studentRecords.length === 0) {
document.getElementById("infoDisplay").innerHTML = "No data available. Please enter details first.";
return;
}
let output = "<h3>Stored Student Records:</h3>";
studentRecords.forEach((student, index) => {
output += `Record ${index + 1}: ${student.name}, ${student.age}, ${student.grade}, ${student.course} <br>`;
});
document.getElementById("infoDisplay").innerHTML = output;
}
