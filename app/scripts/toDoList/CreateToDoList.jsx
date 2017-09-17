'use strict';

import React, {Component} from 'react';

class CreateToDoList extends Component {
    constructor() {
        super();
    }

    createList(item) {
        return <div className="Entr_new_task_container" key={item.key}>{item.task}
        </div>
    }

    render() {
        let someList = this.props.someList,
            listTask = someList.map(this.createList);
        return(
            <div className="task_container">
                {listTask}
            </div>
        );
    }
}
export default CreateToDoList;