const assert = require('chai').assert;
global.window = global;
global.firebase = require('firebase');
require("../src/model");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCY8nA0imj5wGhxtPOLFj0CbrFCkH_sSkM",
    authDomain: "test-todolist-10d7b.firebaseapp.com",
    databaseURL: "https://test-todolist-10d7b.firebaseio.com",
    projectId: "test-todolist-10d7b",
    storageBucket: "test-todolist-10d7b.appspot.com",
    messagingSenderId: "552577706745"
};
firebase.initializeApp(config);

describe(
    "Modelo de la lista de tareas",// se empieza por lo general
    () => {
        describe(
            "La lista, me debería permitir agregar tareas",
            () => {
                it("Debería agregar una tarea",
                    (done) => {
                        addTask("Comprar pan").then(
                            (task) => {
                                return getTaskList();
                            }
                        ).then(
                            (taskList) => {
                                const comprarPan = Object.entries(taskList.val())
                                    .find(
                                        task => {
                                            return task[1].title == "Comprar pan";
                                        }
                                    );
                                assert.exists(comprarPan[1]);//verifica que exista algo en particular en el código una función
                                assert.equal(comprarPan[1].title, "Comprar pan");
                                done();
                            }
                        ).catch(
                            (error) => {
                                done(error);
                            }
                        )
                    }
                );
            }
        );

        describe(
            "La lista, me debería permitir colocarle un progreso a una tarea",
            () => {
                it("Debería permitirle colocarle progreso a una tarea",
                    (done) => { //parametros de la función
                        taskProgress("Comprar pan", "se ha comprado").then(
                            (task) => {
                                assert.exists(task);
                                assert.equal(task.title, "Comprar pan");
                                assert.equal(task.state, "se ha comprado");
                                done();
                            }
                        ).catch(
                            (error) => {
                                done(error);
                            }
                        );
                    })
            }
        );

        describe(
            "La lista, me debería permitir editar una tarea",
            () => {
            }
        );

        describe(
            "La lista, me debería permitir borrar una tarea",
            () => {

            }
        );
    }
);