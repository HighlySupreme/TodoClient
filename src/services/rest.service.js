import axiosService from "src/services/axios.service";

const apiVersion = "v1"

const getTasks = async () => {
    return axiosService.GET(`/api/${apiVersion}/task`)
        .then(r => r.data)
}
const getTask = async (id) => {
    return axiosService.GET(`/api/${apiVersion}/task/${id}`)
        .then(r => r.data)
}

const createTask = async (task) => {
    return axiosService.POST(`/api/${apiVersion}/task`, task)
        .then(r => r.data)
}

const updateTask = async (task) => {
    console.log(task)
    return axiosService.PUT(`/api/${apiVersion}/task`, task)
        .then(r => r.data)
}

const deleteTasks = async (tasks) => {
    return axiosService.DELETE(`/api/${apiVersion}/task`, tasks)
        .then(r => r.data)
}

export default {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTasks
}
