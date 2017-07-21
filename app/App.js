import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';
import ContactsAppContainer from './ContactsApp'

let cardsList = [
  {
    id: 1,
    title: "Read the Book ",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];

class HelloWord extends React.Component {

  render() {
    //TODO: what is let differ from var
    let mystyle = {
      width: 100,
      height: 30,
      padding: 5,
      backgroundColor: '#ee9900'
    }
    return (
      <div style={mystyle}>
        HelloWord
      </div>
    )
  }
}

class Search extends React.Component {
  constructor(){
    super();
    this.state={searchTerm:"React"}
  }

  handleChange(event){
    this.setState({searchTerm:event.value})
  }

  render() {
    return(
      <div>
        <input value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

class UncontrolledForm extends React.Component{
  handlerSubmit(event){
    console.log("submitted value is:",event.target.name.value,event.target.email.value,"end");
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className="formGroup">
          Name:<input name="name" type="text"/>
        </div>
        <div className="formGroup">
          E-mail:<input name="email" type="email"/>
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }
}

class FocusText extends React.Component{
  handleClick(){
    this.refs.myTextInput.focus();
  }

  render(){
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="change Focus" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

// class Greeter extends React.Component{
//   render(){
//     return(
//       <div>
//         {this.props.greetings}__{this.props.name}
//         </div>
//     )
//   }
// }

// Greeter.propTypes={
//   greetings:React.PropTypes.string,
//   name:React.PropTypes.string.isRequired
// }

// Greeter.defaultProps={
//   greetings: "hello default"
// }

// render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
// render(<HelloWord/>, document.getElementById('root'));
// render(<Search />, document.getElementById('root'));
// render(<UncontrolledForm/>,document.getElementById("root"));
// render(<FocusText/>,document.getElementById('root'));
// render(<Greeter/>,document.getElementById('root'));

render(<ContactsAppContainer />, document.getElementById('root'));