import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import ViewItem,{Field} from '../viewItem';

// import { ListGroup, ListGroupItem } from 'reactstrap';
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

    gotService  = new gotService();
    state = {
        item:{},
        loading: true,
        error: false,
        errMessage: ''
    }

    componentDidMount() {
        this.updateChar();
        this.timer = setInterval(this.updateChar, 1500);
    }
    
    componentWillUnmount() {        
        clearTimeout(this.timer);
    };

    onCharLoaded = (item) => {
        this.setState({
            item,
            loading: false,
            error: false
        });
    }

    onError = ({message}) => {
        this.setState({
            error: true,
            loading: false,
            errMessage: message
        });
    }

    toggleRandomForm = ()=>{
        this.setState({visable: !this.state.visable})
    }

    updateChar = () => {
        //console.log('update');
        const id = Math.floor(Math.random()*131+12);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }
    render() {
        const {loading, item, error,errMessage} =this.state;
        const errorMessage = error ? <ErrorMessage errorMessage={errMessage}/> : null;
        const spinner =loading ? <Spinner/> : null;
        const content = !(loading || error) ? <ViewItem item={item}>                                              
                                                <Field field ='gender' label='Gender'/>
                                                <Field field ='born' label='Born'/>
                                                <Field field ='died' label='Died'/>
                                                <Field field ='culture' label='Culture'/>           
                                              </ViewItem> 
                                              : null;
         {/*return loading ? <Spinner/> : <View char={char}/>;*/}
        return (
            <RandomBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        )


    }

}

// const View = ({char}) => {
//     const {name, gender, born, died, culture} = char;
//    // console.log(url);
//     return (
//         <>
//             <h4>{name}</h4>
//             <ListGroup className="list-group-flush">
//                 <ListGroupItem className="d-flex justify-content-between">
//                     <span className="term">Gender </span>
//                     <span>{gender}</span>
//                 </ListGroupItem>
//                 <ListGroupItem className="d-flex justify-content-between">
//                     <span className="term">Born </span>
//                     <span>{born}</span>
//                 </ListGroupItem>
//                 <ListGroupItem className="d-flex justify-content-between">
//                     <span className="term">Died </span>
//                     <span>{died}</span>
//                 </ListGroupItem>
//                 <ListGroupItem className="d-flex justify-content-between">
//                     <span className="term">Culture </span>
//                     <span>{culture}</span>
//                 </ListGroupItem>
//             </ListGroup>
//         </>
//     )
// }
