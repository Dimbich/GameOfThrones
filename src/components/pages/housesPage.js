import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import {Field} from '../viewItem/';
import ErrorMessage from '../errorMessage/';
import RowBlock from '../rowBlock';
import gotService from '../../services';

class booksPage extends Component {

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
            getData = {this.gotService.getAllHouses}
            renderItem = {({name}) => name}
            />);

        const itemDetails   = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getItem = {this.gotService.getHouses}>
				<Field field='region' label='Region'/>
				<Field field='words' label='Words'/>
				<Field field='founded' label='Founded'/>
				<Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>    
        );
        

        return(           
          <RowBlock left={itemList} right={itemDetails}/>
        )        
    }
}

export default booksPage;