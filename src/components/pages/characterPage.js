import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import {Field} from '../viewItem/';
import ErrorMessage from '../errorMessage/';
import RowBlock from '../rowBlock';
import gotService from '../../services';

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
            renderItem = {({name}) => name}/>);

        const itemDetails   = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getItem = {this.gotService.getCharacter}>
                <Field field ='gender' label='Gender'/>
                <Field field ='born' label='Born'/>
                <Field field ='died' label='Died'/>
                <Field field ='culture' label='Culture'/>
            </ItemDetails>    

        );
        

        return(           
          <RowBlock left={itemList} right={itemDetails}/>
        )        
    }
}

export default characterPage;