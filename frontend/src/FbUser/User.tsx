import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import IUser from './IUser';
import "./User.css";


interface Props {
    user: IUser;
}


interface State {
    isLoggedIn: boolean;
}
export default class User extends Component<Props, State> {
    constructor(props: Props) {
        // initialized props
        super(props);

        // initialize state
        this.state = {
            isLoggedIn: false
        }
        // console.log("Inside Constructor",props);

    }

    login = (e) => {
        console.log(e);
        this.setState({ isLoggedIn: true })
    }


    render() {
        // console.log("render");

        const { firstName, lastName, picture, title } = this.props.user;

        return (
            <>
            {/* 12 cols for small size  */}
            <Col sm="12" md="6" lg="4">
                <Card className = "m-3 h-100">
                    <Card.Body className = "col-12 d-flex">
                        <Image fluid src = {picture} rounded></Image>
                        <div className = "ms-3">
                            <div className="font-size">{`${title} ${firstName} ${lastName}`}</div>
                            <Button className="font-size" variant = "outline-primary">Add Friend</Button>
                        </div>
                    </Card.Body>
                </Card>
                </Col>

            </>
        )
    }
}
