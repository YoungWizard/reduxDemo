import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = store.getState();
       this.changeInputValue= this.changeInputValue.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.addList = this.addList.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态

       
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                addList={this.addList}
                deleteItem={this.deleteItem}
            />
        );
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }

    addList(e) {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;