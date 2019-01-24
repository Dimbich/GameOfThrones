import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

class App extends Component {
    state = {
        show: true,
        selectedChar: null
    }

    toggleButton = () => {
        this.setState(({show})=>({
            show: !show
        }));
    }

    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }

    render() {
        const {show} = this.state;
        const btnLabel = show ? 'Hide' : 'Show random character';
        const randChar = show ? <RandomChar /> : null;
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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected = {this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default App;