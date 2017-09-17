'use strict';

import React, {Component} from 'react';

class ToDoItems extends Component {
    constructor(props) {
        super(props);
    }


    crossTheText(event) {
        let form = event.target.closest('form'),
            target = form.childNodes[0],
            done_button = event.target.lastElementChild.lastElementChild;
        target.classList.toggle('done_toggle');
        done_button.classList.toggle('done_toggle');
        /*if(event.target === 'button'){
         event.target.classList.toggle('done_toggle');
         }*/
        console.log(done_button);
        event.preventDefault();
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


    createTasks(item) {



        return <li key={item.key}>
            <form onSubmit={this.crossTheText.bind(this)}>
                <input className="task"data-key={item.key} title={item.text} value={item.text} onChange={this.props.changeItem}/>
                <div className="forPseudoElement">
                    <div className="delete" data-key={item.key} onClick={this.props.delLi}>
                        x
                    </div>
                    <button className="done" type="submit">Done!</button>
                </div>
            </form>
        </li>
    }


    render() {
        let stateTasks = this.props.entr,
            listItems = stateTasks.map(this.createTasks.bind(this));

        return (
            <div className="someTask">
                <ul className="theList">
                    {listItems}
                </ul>
            </div>
        );
    }
}


export default ToDoItems;
