window.addTask = (title) => {
    const newTaskKey = firebase.database().ref().child('todo').push().key;
    return firebase.database().ref('todo/' + newTaskKey).set({
        title: title
    });
};

window.getTaskList = () => {
    return firebase.database().ref('todo').once('value');
}

window.taskProgress = (title, state) => {
    return firebase.database().ref('todo').once("value").then(
        (results) => {
            const taskKey = Object.entries(results.val()).find(
                task => task[1].title == title
            )[0];
            return firebase.database().ref('todo/' + taskKey).update({
                state: state
            });
        }
    ).then(() => {
        return firebase.database().ref('todo').once("value").then(
            (results) => {
                let taskToReturn = Object.entries(results.val()).find(
                    task => task[1].title == title
                )[1];
                return taskToReturn;
            }
        )
    });
}