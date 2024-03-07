// Welcome to TaskMaster!
// TaskMaster is a comprehensive task management system designed to help individuals and teams organize, prioritize, and track their tasks effectively.
// Whether you're a busy professional, a student, or a freelancer,
// TaskMaster provides the tools and features you need to stay organized and productive.
// Say goodbye to missed deadlines and hello to efficient task management with TaskMaster!

// Sample code to demonstrate basic functionality of TaskMaster

// Define a Task class to represent tasks in TaskMaster
class Task {
    constructor(title, description, priority, deadline, assignedTo) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
        this.assignedTo = assignedTo;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

// Define a TaskManager class to manage tasks in TaskMaster
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description, priority, deadline, assignedTo) {
        const task = new Task(title, description, priority, deadline, assignedTo);
        this.tasks.push(task);
    }

    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`Title: ${task.title}, Deadline: ${task.deadline}, Assigned To: ${task.assignedTo}`);
        });
    }
}

// Example usage of TaskMaster functionality
const taskManager = new TaskManager();
taskManager.addTask('Complete project proposal', 'Write a detailed proposal for the upcoming project', 'High', '2024-03-15', 'John Doe');
taskManager.addTask('Prepare presentation slides', 'Create slides for the client presentation', 'Medium', '2024-03-20', 'Jane Smith');

// Display tasks in the task manager
console.log('Tasks in TaskMaster:');
taskManager.displayTasks();
