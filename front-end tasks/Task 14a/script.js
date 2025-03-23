let studentRecords = [];
function storeStudentData() {
let newStudent = {
name: document.getElementById("studentName").value,
age: document.getElementById("studentAge").value,
grade: document.getElementById("studentGrade").value,
course: document.getElementById("studentCourse").value
};
studentRecords.push(newStudent);
alert("Student information stored!");
clearInputs();
}
function displayStudentData() {
if (studentRecords.length === 0) {
document.getElementById("infoDisplay").innerHTML = "No dataavailable. Please enter details first.";
return;
}
let output = "<h3>Stored Student Records:</h3>";
for (let i = 0; i < studentRecords.length; i++) {
output += "Record " + (i + 1) + ": " + studentRecords[i].name + "," + studentRecords[i].age + ", " + studentRecords[i].grade + ", " +
studentRecords[i].course + "<br>";
}
document.getElementById("infoDisplay").innerHTML = output;
}
function clearInputs() {
document.getElementById("studentName").value = "";
document.getElementById("studentAge").value = "";
document.getElementById("studentGrade").value = "";
document.getElementById("studentCourse").value = "";
}
function clearDisplay() {
document.getElementById("infoDisplay").innerHTML = "";
}
function searchStudent() {
let searchQuery = document.getElementById("searchInput").value;
let filteredRecords = studentRecords.filter(student =>
student.name.includes(searchQuery) ||
student.course.includes(searchQuery)
);
if (filteredRecords.length === 0) {
document.getElementById("infoDisplay").innerHTML = "No matching records found.";
return;
}
let output = "<h3>Search Results:</h3>";
for (let i = 0; i < filteredRecords.length; i++) {
output += "Record " + (i + 1) + ": " + filteredRecords[i].name + "," + filteredRecords[i].age + ", " + filteredRecords[i].grade + ", " +filteredRecords[i].course + "<br>";
}
document.getElementById("infoDisplay").innerHTML = output;
}