
const taskmanager = {
    task: [],
    //addtask method
    addtask(title, desc) {
        const t = { title, desc, completed: false };
        this.task.push(t)
    },
    //task completed
    completetask(index) {
        if (index >= 0) {
            this.task[index].completed = true;
        }
    },
    displaytask() {
        console.log("tasks for the task manager are:-");
        this.task.forEach((ta, index) => {
            console.log(`s.no ${index + 1}:-`);
            console.log(`title:${ta.title}`);
            console.log(`description:${ta.desc}`);
            console.log(`status:${ta.completed ? 'completed' : 'incomplete'}`);
        });
    }
};
taskmanager.addtask('morning task', 'eat your bfast');
taskmanager.addtask('noon task', 'eat your lunch');
taskmanager.addtask('evening task', 'eat your dinner');
taskmanager.completetask(0);
taskmanager.completetask(1);
taskmanager.displaytask();