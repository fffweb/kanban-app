import React, { Component,PropTypes } from 'react';
import { Render } from 'react-dom';

let contacts1 = [
    {
        "name": "Cassio Zen",
        "email": "cassiozen@gmail.com"
    },
    {
        "name": "Dan Abramov",
        "email": "gaearon@somewhere.com"
    },
    {
        "name": "Pete Hunt",
        "email": "floydophone@somewhere.com"
    },
    {
        "name": "Paul O’Shannessy",
        "email": "zpao@somewhere.com"
    },
    {
        "name": "Ryan Florence",
        "email": "rpflorence@somewhere.com"
    },
    {
        "name": "Sebastian Markbage",
        "email": "sebmarkbage@here.com"
    }
]

//ContactsAppContainer
//ContactsApp
// SearchBar
// ContactList
// ContactItem
class ContactsAppContainer extends Component {
    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }

    componentDidMount(){
        fetch('./contacts.json')
        .then((response) => response.json())
        .then((responseData)=>{
            this.setState({contacts:responseData});
        })
        .catch((error)=>{
            console.log('Error fetching and parsing data',error);
        })
    }

    render() {
        return (
            <ContactsApp contacts={this.state.contacts} >
            </ContactsApp>
        )
    }
}

class ContactsApp extends Component {
    constructor(){
        super();
        this.state={
            filterText:'a'
        }
    }
    onInputChange(searchTerm){
        this.setState({filterText:searchTerm})
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onInputChange={this.onInputChange.bind(this)}></SearchBar>
                <ContactList filterText = {this.state.filterText} contacts={this.props.contacts}></ContactList>
            </div>
        )
    }
}

ContactsApp.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component {
    handleChange(event){
        this.props.onInputChange(event.target.value)
    }
    render() {
        return (
            <input value={this.props.filterText} onChange={this.handleChange.bind(this)}></input>
        )
    }
}
SearchBar.propTypes={
    filterText:PropTypes.string,
    onInputChange:PropTypes.func
}
class ContactList extends Component {
    // constructor(){
    //     super(...arguments);
    //     this.state={
    //         contacts:contacts
    //     }
    // }
    render() {
        let filterContacts = this.props.contacts.filter(contact=>contact.name.indexOf(this.props.filterText)!==-1);
        return (
            <ul>
                {filterContacts.map(
                    (contact) => <ContactItem key={contact.email}
                        name={contact.name}
                        email={contact.email} />
                    /*{ contact=>{
                        return <ContactItem name=contact.name email=contacts.email/>
                    } }*/

                )}
            </ul>
        )
    }
}
class ContactItem extends Component {
    render() {
        return (
            <li>
                {this.props.name}-{this.props.email}
            </li>
        )
    }
}

export default ContactsAppContainer;
// export default ContactList;