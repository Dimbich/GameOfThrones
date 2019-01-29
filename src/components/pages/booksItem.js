import React, { Component } from 'react';
import gotService from '../../services';
import ItemDetails from '../itemDetails';
import {Field} from '../viewItem/';

class BooksItem extends Component {
    state = {
        selectedItem: 3
    }

    gotService = new gotService();

    render() {
        console.log('ghf');
        return (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getItem = {this.gotService.getBooks}>
                <Field field ='authors' label='Authors'/>
                <Field field ='numberOfPages' label='Number of pages'/>
                <Field field ='publisher' label='Publisher'/>
                <Field field ='country' label='Country'/>
            </ItemDetails>  
        );
    }
}

export default BooksItem;