import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';

const ItemLists = styled.div`
    background-color: #fff;
    .list-group-item {
        cursor: pointer;
    }

`

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false,
        loading: true,
        errMessage: null
    }

    componentDidMount(){
        const {getData} = this.props;      
        getData()
            .then(this.onCharLoaded)
            .catch(this.onError)
    }
    

    onCharLoaded = (itemList) => {
                
        this.setState({
                itemList,
                error: false,
                loading: false   
            })        
    }

    onError = ({message}) =>{
        this.setState({
            loading:false,
            error: true,
            errMessage: message
        });
    }

    renderItem(arr) {
        console.log('renderItem',arr)
        return arr.map((item) => {
            console.log('item',item)
            const {name, id} = item;
            return (
                <ListGroupItem
                    key = {id}
                    onClick = {()=>{this.props.onCharSelected(id)}}>
                    {name}
                </ListGroupItem>
            )

        })
    }

    render() {
       
    const {itemList, loading, error, errMessage} = this.state;
        const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
        const spinner =loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItem(itemList) : null;             
        return (
            <ItemLists className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </ItemLists>
        )     
       
    }
}