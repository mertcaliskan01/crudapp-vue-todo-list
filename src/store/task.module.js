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
            return TaskService.deleteAll().then(
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

        get(commit, id) {
            return TaskService.get(id).then(
                task => {
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },

        update(commit, data) {
            return TaskService.update(data.id, data).then(
                task => {
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },

        delete(commit, id) {
            return TaskService.delete(id).then(
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