import TaskService from '../services/task.service';


export const task = {
    namespaced: true,
    actions: {
        getAll() {
            return TaskService.getAll().then(
                task => {
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },

        deleteAll() {
            return TaskService.getAll().then(
                () => {
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },

        findByTitle(commit, title) {
            return TaskService.findByTitle(title).then(
                task => {
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },

        create(commit, data) {
            return TaskService.create(data).then(
                task => {
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },
    },
};