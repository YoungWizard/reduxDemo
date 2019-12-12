import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
    render() {
        return (
            <div>
                <div className='input_'>
                    <Input className='input_thing'
                        
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue} />
                    <Button type='primary' onClick={this.props.addList}> add</Button>
                </div>
                <div className='list_'>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index ) => (
                            <List.Item
                               onClick = {()=> this.props.deleteItem(index)}
                            >
                            {item }
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUI;

