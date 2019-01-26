import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';
import gotService from '../../services';

class App extends Component {

    gotService = new gotService();

    state = {
        show: true,
        error: null

    }

    componentDidCatch() {
        this.setState({error: true});
    }

    toggleButton = () => {
        this.setState(({show})=>({
            show: !show
        }));
    }

    render() {
        const {show} = this.state;
        const btnLabel = show ? 'Hide' : 'Show random character';
        const randChar = show ? <RandomChar /> : null;
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (        
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick ={()=>{this.toggleButton()}}>{btnLabel}</Button>
                            {randChar}
                        </Col>
                    </Row>
                    <CharacterPage 
                        getData = {this.gotService.getAllCharacters}
                        renderItem = {({name, gender}) => (<><span>{name} ({gender})</span><button>Click me</button></>)}/>
                    <CharacterPage 
                        getData = {this.gotService.getAllBooks}
                        renderItem = {({name,authors}) => `${name} (${authors})`}/>/>
                    <CharacterPage 
                        getData = {this.gotService.getAllHouses}
                        renderItem = {({name,founder}) => `${name} (${founder})`}/>/>
                </Container>
           </>
        )
    }
}

export default App;