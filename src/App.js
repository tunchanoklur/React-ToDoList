import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header'
import Dialog from './components/Dialog'
import TodoList from './components/TodoList'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lists:[],
      show_dialog:false,
      method:"Add",
      edited_index:-1,
      form:{
        done:false,
        text:""
      }
    }
  }
  componentDidMount(){
    //get data from local storage
    this.setState(JSON.parse(localStorage.getItem('state')))
    console.log(JSON.parse(localStorage.getItem('state')))
  }
  SaveState=()=>{
    //save state to local storage
    console.log("State Saved to Local Storage")
    localStorage.setItem('state', JSON.stringify(this.state));
  }
  ClickOpen = () => {
    //open add dialog
    this.setState({show_dialog:true})
  }
  ClickClose = () => {
    //close dialog and set to default
    this.setState({
      edited_index:-1,
      show_dialog:false,
      method:"Add" //default method is add
    },() => this.SaveState())
    this.ClearForm()
  }
  //used for both add and edit
  ClickAdd = () => {
    //add date or edit data (control dialog's form submit)
    let new_lists = this.state.lists.slice() //duplicate array - prevent direct mutation
    if(this.state.method==="Add"){
      new_lists.push(this.state.form)
    }
    else if(this.state.method==="Edit"){
      new_lists[this.state.edited_index]=this.state.form
    }
    this.setState({
      lists:new_lists
    },() => this.SaveState())
    this.ClickClose()
  }
  ClearForm=()=>{
    //clear form when closed
    this.setState({
      form:{
        done:false,
        text:""
      }
    },() => this.SaveState())
  }
  UpdateForm = (event) => {
    //handle typing in form's text box
    this.setState({
      form:{
        text:event.target.value
      }
    })
  }
  UpdateStatus= id =>{
    //change status when pressed check (done)
    let new_lists = this.state.lists.slice() //duplicate array - prevent direct mutation
    new_lists[id].done = !new_lists[id].done
    this.setState({
      lists:new_lists
    },() => this.SaveState()) 
  }
  ClickDelete = (id) =>{
    //remove to do list
    let new_lists = this.state.lists.slice()
    new_lists.splice(id,1)
    this.setState({
      lists:new_lists
    },() => this.SaveState())
  }
  ClickEdit = (id) =>{
    //edit to do list
    this.setState({
      method:"Edit",
      show_dialog:true,
      edited_index:id,
      form:this.state.lists[id]
    }, () => this.SaveState())
    
  }
  render(){
    return (
      <div>
        <Header/>
        <br/>
        <Container maxWidth="lg">
          <Dialog
            method={this.state.method}
            show_dialog={this.state.show_dialog}
            ClickAdd={this.ClickAdd}
            ClickOpen={this.ClickOpen}
            ClickClose={this.ClickClose}
            UpdateForm={this.UpdateForm}
            form={this.state.form}
          />
          <br/>
          <TodoList
            lists={this.state.lists}
            UpdateStatus={this.UpdateStatus}
            ClickDelete={this.ClickDelete}
            ClickEdit={this.ClickEdit}
          />
        </Container>
      </div>
    );
  }
}
