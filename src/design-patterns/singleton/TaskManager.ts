
let taskManager : TaskManager;

export class TaskManager {
    constructor(){
        if (!taskManager){
        taskManager = this;}
        else {
            throw new Error('Task Manager already exists')
        }
    };

    run() {
        console.log("Starting task manager");
    }

    static instance() { return taskManager};

    description() {
        console.log("This is the Task Manager");
    }
}
