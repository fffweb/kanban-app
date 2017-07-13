import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
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

class HelloWord extends React.Component{

  render(){
    //TODO: what is let differ from var
    let mystyle={
      width:100,
      height:30,
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
// render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
render(<HelloWord/>, document.getElementById('root'));
