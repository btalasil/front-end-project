// Project Data
const projects = [
    { id: "1", title: "1.Expectation Document", file: "front-end tasks/Task 1/index.html" },
    { id: "2", title: "2.Basic Html styling", file: "front-end tasks/Task 2/index.html" },
    { id: "3", title: "3.Css hover", file: "front-end tasks/Task 3/index-2.html" },
    { id: "4", title: "4.Welcome To JS", file: "front-end tasks/Task 4/demo.html" },
    { id: "5", title: "5.Calculator", file: "front-end tasks/Task 5/demo2.html" },
    { id: "6", title: "6.Github integration", file: "front-end tasks/Task 6/index.html" },
    { id: "7", title: "7.Console output", file: "front-end tasks/Task 7/index.html" },
    { id: "8", title: "8.String operation", file: "front-end tasks/Task 8/task.html" },
    { id: "9", title: "9.Conditions", file: "front-end tasks/Task 9/index.html" },
    { id: "10", title: "10.Call stack with array", file: "front-end tasks/Task 10/index.html" },
    { id: "11", title: "11.Stars", file: "front-end tasks/Task 11/index.html" },
    { id: "12", title: "12.Sum with colors", file: "front-end tasks/Task 12/index.html" },
    { id: "13", title: "13.Class work objects", file: "front-end tasks/Task 13a/index.html" },
    { id: "14", title: "14a.Class work objects", file: "front-end tasks/Task 14a/index.html" },
    { id: "15", title: "14b.Class work functions", file: "front-end tasks/Task 14b/index.html" },
    { id: "16", title: "15a.Age calculator", file: "front-end tasks/Task 15a/index.html" },
    { id: "17", title: "15b.Bootstrap", file: "front-end tasks/Task 15b/index.html" },
    { id: "18", title: "16.Class work Json", file: "front-end tasks/Task 16/index.html" }
    

];

document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const frame = document.getElementById("project-frame");
    const container = document.getElementById("project-container");

    projects.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task.title;

        
        listItem.onclick = () => {
            frame.src = task.file;
            frame.style.display = "block";
            container.querySelector(".instruction").style.display = "none";
        };

        projectList.appendChild(listItem);
    });

    
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
