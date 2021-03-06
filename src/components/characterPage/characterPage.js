import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage/';
import RowBlock from '../rowBlock';
import gotService from '../../services';

import './characterPage.css';


class characterPage extends Component {

    gotService = new gotService();

    state = {
        selectedItem:null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }


    onItemSelected = (id) => {
        this.setState({selectedItem: id})
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = 
            (<ItemList 
            onItemSelected = {this.onItemSelected}
            getData = {this.gotService.getAllCharacters}
            renderItem = {({name, gender}) => (<><span>{name} ({gender})</span><button>Click me</button></>)}/>);

        const itemDetails   = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getItem = {this.gotService.getCharacter}/>               
        );
        

        return(           
          <RowBlock left={itemList} right={itemDetails}/>
        )        
    }
}

export default characterPage;