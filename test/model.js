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
    "Modelo de la lista de tareas",
    ()=>{
        describe(
            "La lista, me debería permitir agregar tareas",
            ()=>{
                it("Debería agregar una tarea",
                    (done)=>{
                        addTask("Comprar pan").then(
                            (task)=>{
                                return getTaskList(); 
                            }
                        ).then(
                            (taskList)=>{
                                const comprarPan = Object.entries(taskList.val())
                                    .find(
                                        task => {
                                            return task[1].title == "Comprar pan";
                                        }
                                    );
                                assert.exists(comprarPan[1]);
                                assert.equal(comprarPan[1].title, "Comprar pan");
                            }
                        ).catch(
                            (error)=>{
                                assert.error();
                            }
                        ).finally(()=>{
                            done();
                        });
                    }
                );
            }
        );

        describe(
            "La lista, me debería permitir colocarle un progreso a una tarea",
            ()=>{

            }
        );

        describe(
            "La lista, me debería permitir editar una tarea",
            ()=>{

            }
        );

        describe(
            "La lista, me debería permitir borrar una tarea",
            ()=>{

            }
        );
    }
);