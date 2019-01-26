import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services';
import Spinner from '../spinner';
import ViewChar from '../viewChar';
import ErrorMessage from '../errorMessage';

const CharDetail = styled.div`
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


export default class CharDetails extends Component {
    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false,
        errMessage: ''
    }

    componentDidMount() {       
        this.updateChar();
    };

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onLoader = (char) =>{
        this.setState({
            char,
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

    updateChar() {
        const {charId} = this.props;        
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then(this.onLoader)            
            .catch(this.onError)
       // this.foo.bar = 0        
    }
    render() {
        const {loading, char, error,errMessage} =this.state;
        let styleErr= {            
            color: '#fff',
            textAlign: 'center',
            fontSize: '26px'        
        }
        if (!this.props.charId) {
            return <span style = {styleErr} className="select-error">Please select charcter</span>
        }
        const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
        const spinner =loading ? <Spinner/> : null;
        const content = !(loading || error) ? <ViewChar char={char}/> : null;
        return (            
            <CharDetail className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </CharDetail>
        );
    }
}