import React, { Component, PropTypes } from 'react';
import CheckList from './CheckList';

let titilePropType = (props, propname, componentName) => {
  if(props[propname]){
    let value = props[propname];
    //DONE:  string must in quote, if(typeof value !== 'string' || value.length > 80){
    if(typeof value !== 'string' || value.length > 80){
      return new Error(
        '${propName`} in ${componentName} is longer than 80 characters'
      );
    }
  }
}

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  };

  toggleDatails() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
          <input type="text" className="checklist--add-task" placeholder="Type to add new task"/>
        </div>
      );
    };
let sideColor = {
position: 'absolute',
zIndex: -1,
top: 0,
bottom: 0,
left: 0,
width: 7,
backgroundColor: this.props.color
};
    return (
      <div className="card">
        <div style={sideColor}/>
        <div className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"} onClick={this.toggleDatails.bind(this)}>{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}

Card.propTypes={
  id:PropTypes.number,
  title:titilePropType,
  description:PropTypes.string,
  color:PropTypes.string,
  tasks:PropTypes.arrayOf(PropTypes.object)
}
export default Card;
