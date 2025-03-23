let taskStack = [];
function addTask() {
let taskInput = document.getElementById("task_input");
let taskName = taskInput.value.trim();
if (taskName !== "") {
taskStack.push(taskName);
taskInput.value = "";
updatePipeline();
}
}
function undoTask() {
if (taskStack.length > 0) {
taskStack.pop();
updatePipeline();
}
}
function updatePipeline() {
let pipeline = document.getElementById("task_pipeline");
if (taskStack.length > 0) {
pipeline.innerHTML = taskStack.join(",");
} else {
pipeline.innerHTML = "No tasks in pipeline";
}
}
