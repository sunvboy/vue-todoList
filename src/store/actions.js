export default {
    changeTasks ({commit},newtTasks){
        commit('CHANGE_TASKS',newtTasks)
    },
    toggleForm({commit}) {
        commit('TOGGLE_FORM')
    },
    handleSearch({commit},strSearch){
        commit('HAND_SEARCH',strSearch)

    },
    handleSort({commit},data){
        commit('HAND_SORT',data)

    },
    handleDelete({commit,state},taskDelete){
        let newlistTask = state.listTask.filter(item => item.id !== taskDelete.id);
        commit('CHANGE_TASKS',newlistTask);

    },
    handleAddNewTask({ commit }, task) {
        commit('ADD_NEW_TASK', task);
    },
    handleEdit({ commit }, taskSelected) {
        commit('HANDLE_EDIT', taskSelected);
    },
    handleEditTaskById({ commit, state, dispatch }, taskEdit) {
        let index = state.listTask.findIndex(item => item.id === taskEdit.id);
        let listTaskClone = [...state.listTask];

        if(index !== -1) {
            listTaskClone.splice(index, 1, taskEdit);
            // dispatch('toggleForm')
            commit('TOGGLE_FORM');
            commit('CHANGE_TASKS', listTaskClone);
        }
    },
}