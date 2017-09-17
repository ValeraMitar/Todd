'use strict';

import React, {Component} from 'react';
import TodoItems from '../todoItems/ToDoItems.jsx';

class GiveTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'Task',
            items: [],
            count: 0
        };
        this.newState = props;
        this.creatableTaskList = this.createTaskList.bind(this)
    }

    deleteLi(event) {
        let _confirm = confirm('Are you sure you want to delete this item?');

        if(_confirm) {
            //    delete element
            let parentUl = event.target.closest('ul'),
                deleteLi = event.target.closest('li'),
                someTask = event.target.closest('div.someTask'),
                tasks_block = event.target.closest('div.tasks_block');
            console.log(parentUl);
            if(parentUl.childNodes.length === 1) {
                someTask.style.display = 'none';
            }
            console.log(someTask);
            parentUl.removeChild(deleteLi);
        } else {
            //    nothing doing
        }
    };

    onCh(event) {
        debugger;

        let itemArray = this.state.items;
        itemArray.find((element)=>{
            if(element.key === event.target.getAttribute("data-key")) {
                element.text = event.target.value;
            }});
        this.setState({items:itemArray});
        console.log(itemArray);
    }

    addItem(event) {
        let itemArray = this.state.items,
            count = this.state.count,
            tasks_block = event.target.closest('div.tasks_block');
        itemArray.push({
            text: this._inputElement.value,
            key: `task ${count}`
        });
        count += 1;
        this.setState({
            items: itemArray,
            count: count
        });
        this._inputElement.value = '';
        event.preventDefault();
        tasks_block.childNodes[1].style.display = 'block';


    }

    onDelete(event) {
        let target = event.target,
            key = event.target.attr('data-key'),
            itemArray = this.state.items,
            _newArray;
         _newArray = itemArray.filter((item)=>{
             return item.key !== key;
         });
        this.setState({items:itemArray});

       /* let task_container = target.closest('div.task_container'),
            Entr_new_task_container = target.closest('div.Entr_new_task_container'),
            _confirm = confirm('Are you sure you want to delete this item?');
        if (_confirm) {
            task_container.removeChild(Entr_new_task_container);
        }*/
    }


    createTaskList(item) {
        return (
            <div className="add_task">
                <form onSubmit={this.addItem.bind(this)}>
                    <input ref={(a) => this._inputElement = a}
                           placeholder="Enter New task">
                    </input>
                    <button type="submit">add</button>
                    <div className="del_btn" data-key={item.key} onClick={this.onDelete.bind(this)}>X</div>
                </form>
            </div>
        );

    }


    render() {
        let countArray = this.props.forButtonDelete.slice(),
            taskList = countArray.pop();
        return (
            <div className="tasks_block">
                {this.creatableTaskList(taskList)}
                <TodoItems entr={this.state.items} changeItem={this.onCh.bind(this)} delLi={this.deleteLi.bind(this)}/>
            </div>
        );
    }

}

export default GiveTasks;