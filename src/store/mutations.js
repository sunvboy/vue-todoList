export default {
    CHANGE_TASKS(state,newTasks){
        state.listTask = newTasks

    },
    TOGGLE_FORM(state){
        // if(state.isShowForm) state.taskSelected = null;
        state.isShowForm = !state.isShowForm;
    },
    HAND_SEARCH(state,strSearch){
        state.strSearch = strSearch
    },
    HAND_SORT(state,data){
        console.log(data.orderBy);
        state.orderBy = data.orderBy;
        state.orderDir = data.orderDir;
    },
    ADD_NEW_TASK(state, task) {
        state.listTask.push(task);
    },
    HANDLE_EDIT(state, taskEdit) {
        state.isShowForm = true;
		state.taskSelected = taskEdit;
    }
}