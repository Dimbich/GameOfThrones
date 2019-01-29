import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ViewItem from '../viewItem';
import ErrorMessage from '../errorMessage';

const ItemDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
        h4 {
            margin-bottom: 20px;
            text-align: center;
        }
        span.select-error {
            color: #fff;
            text-align: center;
            font-size: 26px;    
        }
`;


export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: true,
        error: false,
        errMessage: ''
    }

    componentDidMount() {       
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onLoader = (item) =>{
        //console.log(item);
        this.setState({
            item,
            loading:false,
        });
    }
    
    onError = ({message}) =>{
        this.setState({
            loading:false,
            error: true,
            errMessage: message
        });
    }

    updateItem() {
        const {itemId, getItem} = this.props;        
        if (!itemId) {
            return;
        }
       getItem(itemId)
            .then(this.onLoader)            
            .catch(this.onError)
       // this.foo.bar = 0        
    }
    render() {
        console.log('fg');
        const {loading, item, error,errMessage} =this.state;
        let styleErr= {            
            color: '#fff',
            textAlign: 'center',
            fontSize: '26px'        
        }
        if (!this.props.itemId) {
            return <span style = {styleErr} className="select-error">Please select charcter</span>
        }
        const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
        const spinner =loading ? <Spinner/> : null;
        const content = !(loading || error) ? 
                                            <ViewItem item={item}>
                                                {this.props.children}                                           
                                            </ViewItem>
                                             : null;
        return (            
            <ItemDetail className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </ItemDetail>
        );
    }
}