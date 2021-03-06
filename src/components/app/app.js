import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import MainPage from '../mainPage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages/';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import './app.css';

class App extends Component {

    state = {
        show: false,
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
            <Router>        
            <div className="app"> 
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
                    <Route path='/' exact component={()=>{
                        return (
                          <MainPage/>
                        )
                    }}/>
                    <Route path='/characters' component={CharacterPage}/>                    
                    <Route path='/houses' component={HousesPage}/>
                    <Route path='/books/' exact component={BooksPage}/>
                    <Route path='/books/:id' render={
                        ({match})=>{
                            const {id} = match.params;
                        return <BooksItem booksId = {id}/>}
                    } />

                </Container>

           </div>
           </Router>
           
        )
    }
}

export default App;