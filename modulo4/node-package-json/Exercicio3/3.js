const taskList = ["Limpar a casa", "Vender pamonha", "Dormir"]

const newTask = process.argv[2]
process.argv[2] && taskList.push(newTask)

newTask && console.log("Tarefa adicionada com sucesso!")
console.log("Tarefas:", taskList)