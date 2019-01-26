import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/';
import RowBlock from '../rowBlock';
//import gotService from '../../services';

import './characterPage.css';


class characterPage extends Component {

    //gotService = new gotService();

    state = {
        selectedChar:null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true});
    }


    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }

    render() {
        const {getData, renderItem} = this.props;

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = 
            (<ItemList 
            onCharSelected = {this.onCharSelected}
            getData = {getData}
            renderItem = {renderItem}/>);

        const charDetails   = (
            <CharDetails charId={this.state.selectedChar}/>
        );
        

        return(           
          <RowBlock left={itemList} right={charDetails}/>
        )        
    }
}

export default characterPage;