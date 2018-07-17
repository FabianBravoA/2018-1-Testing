window.addTask = (title) =>{
    const newTaskKey = firebase.database().ref().child('todo').push().key;
    return firebase.database().ref('todo/'+newTaskKey).set({
        title : title
    });
};

window.getTaskList = () =>{
    return firebase.database().ref('todo').once('value');
}