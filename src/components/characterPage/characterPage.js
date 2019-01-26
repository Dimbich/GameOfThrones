import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/';
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
        const {getData} = this.props;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return(           
            <Row>
                <Col md='6'>
                    <ItemList 
                        onCharSelected = {this.onCharSelected}
                        getData = {getData}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        )        
    }
}

export default characterPage;