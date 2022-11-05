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

        findByTitle({ commit }, title) {
            return TaskService.findByTitle(title).then(
                task => {
                    commit('showSnackbar', 'Task added!')
                    return Promise.resolve(task);
                },
                error => {
                    return Promise.reject(error);
                }
            );
        },
    },
};