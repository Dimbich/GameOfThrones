import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import gotService from '../../services';
import Spinner from '../spinner';

const ItemLists = styled.div`
    .item-list .list-group-item {
        cursor: pointer;
    }
`

export default class ItemList extends Component {
    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount(){
        this.gotService.getAllCharacters()
            .then((charList)=>{
                this.setState({charList})
            })
    }

    renderItem(arr) {
        return arr.map((item, i) => {
            return (
                <ListGroupItem 
                    key = {i}
                    onClick = {()=>{this.props.onCharSelected(41+i)}}> 
                    {item.name}
                </ListGroupItem>
            )

        })
    }

    render() {
        const {charList} = this.state;
        if (!charList) {
            return <Spinner />
        }
        const items = this.renderItem(charList);
        return (
            <ItemLists>
                {items} 
            </ItemLists>
        )        
    }
}