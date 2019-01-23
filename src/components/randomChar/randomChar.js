import React, {Component} from 'react';
import Spinner from '../spinner';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../services'

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .term {
        font-weight: bold;
    }
`

export default class RandomChar extends Component {
    constructor(){
        super()
        this.updateChar();
    }
    gotService  = new gotService();
    state = {
        char:{},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    updateChar() {
        const id = Math.floor(Math.random()*131+12);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }
    render() {
        const {loading, char:{name, gender, born, died, culture}} =this.state;
        return loading ? <Spinner/> : (
            <RandomBlock className="rounded">
                <h4>{name}</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </RandomBlock>
        );
    }
}
