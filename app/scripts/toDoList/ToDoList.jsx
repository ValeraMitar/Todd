import React, {Component} from 'react';
import MainToDo from '../mainToDo/MainToDo.jsx';

class ToDoList extends Component{
    render() {
        return (
            <div className="main_container">
                <MainToDo/>
            </div>
        );
    }
}

export default ToDoList;