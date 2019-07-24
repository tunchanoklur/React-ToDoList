import React from 'react';
import TodoCard from './TodoCard'
import Grid from '@material-ui/core/Grid';

export default class TodoList extends React.Component {
  render(){
    return (
      <div>
          {
            this.props.lists.length===0? <h2>No to do list</h2>
            :this.props.lists.map((list,id)=>{
                return (
                    <Grid item xs={12} key={id}>
                        <TodoCard 
                            id={id}
                            text={list.text}
                            done={list.done}
                            UpdateStatus={this.props.UpdateStatus}
                            ClickDelete={this.props.ClickDelete}
                            ClickEdit={this.props.ClickEdit}
                        />
                    </Grid>
                )
            })
          }
      </div>
    );
  }
}