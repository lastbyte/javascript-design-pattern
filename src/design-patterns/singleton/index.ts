import { TaskManager } from "./TaskManager";

const manager = new TaskManager();
manager.run()
TaskManager.instance().run()

// comment/un-comment the line below to remove/show the error
// const manager1 = new TaskManager();