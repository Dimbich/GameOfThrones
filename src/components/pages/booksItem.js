import React, { Component } from 'react';
import gotService from '../../services';
import ItemDetails from '../itemDetails';
import {Field} from '../viewItem/';

class BooksItem extends Component {

    gotService = new gotService();

    render() {
        return (
            <ItemDetails  style = {{backgroundColor: 'tomato'}}
                itemId={this.props.booksId}
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