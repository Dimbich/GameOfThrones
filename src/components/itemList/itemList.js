import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ItemLists = styled.div`
    .item-list .list-group-item {
        cursor: pointer;
    }
`

export default class ItemList extends Component {

    render() {
        return (
            <ItemLists>
                <ListGroup>
                    <ListGroupItem>
                        John Snow
                    </ListGroupItem>
                    <ListGroupItem>
                        Brandon Stark
                    </ListGroupItem>
                    <ListGroupItem>
                        Geremy
                    </ListGroupItem>
                </ListGroup>
            </ItemLists>
        );
    }
}