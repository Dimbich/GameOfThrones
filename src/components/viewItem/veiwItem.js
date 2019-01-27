import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

const Field = ({item, field, label}) => {
    return (
    <ListGroupItem className="d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </ListGroupItem>
    )
}
export {Field};

class ViewItem extends Component {
    render() {
        const {item, item:{name}} = this.props;
        return (
            <>
                <h4>{name}</h4>
                <ListGroup className="list-group-flush">
                   {React.Children.map(this.props.children, child=>{
                       return React.cloneElement(child, {item})
                   })}               
                </ListGroup>
            </>
        )
    }
} 
export default ViewItem;