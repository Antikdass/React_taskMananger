export const setLocalStorage = (tasks: any) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const completeTask = (task: any, tasks: any) => {
  const index = tasks.findIndex((value: any) => value.id === task.id);
  tasks[index].isCompleted = true;
  return tasks;
};
export const createTask = (task: any, tasks: Array<any>) => {
  task.id = !tasks.length ? 0 : tasks[0].id + 1;
  task.isCompleted = false;
  tasks.unshift(task);
  return tasks;
};
export const deleteTask = (id: number, tasks: any) => {
  const index = tasks.findIndex((value: any) => value.id === id);
  tasks.splice(index, 1);
  return tasks;
};
export const editTask = (task: any, tasks: any) => {
  const index = tasks.findIndex((value: any) => value.id === task.id);
  tasks[index] = task;
  return tasks;
};
