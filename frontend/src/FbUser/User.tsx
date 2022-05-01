import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useDispatch, useSelector } from 'react-redux';
import userReducer,{addFriendAction} from '../reducers/userReducer';
import IUser from './IUser';
import "./User.scss";



function User(props) {
    const username = useSelector((state:any)=>state.userReducer.username);
    const dispatch = useDispatch();
    const { firstName, lastName, picture, title,id } = props.user;

    const addFriend = (payload)=>{
        dispatch(addFriendAction({...payload,username}) as any);
    };


    return (
        <>
        {/* 12 cols for small size  */}
        <Col className='fb-user test123' sm="12" md="6" lg="4">
            <Card className = "m-3 h-100">
                <Card.Body className = "col-12 d-flex">
                    <Image fluid src = {picture} rounded></Image>
                    <div className = "card-body__user ms-3">
                        <div className="card-body__user-font-name">{`${title} ${firstName} ${lastName}`}</div>
                        <Button onClick={()=>addFriend({id,friendName:firstName})} className="card-body__user-font-btn" variant = "outline-primary">Add Friend</Button>
                    </div>
                </Card.Body>
            </Card>
            </Col>

        </>
    )
}

export default User

// interface Props {
//     user: IUser;
// }


// interface State {
//     isLoggedIn: boolean;
// }
// export default class User extends Component<Props, State> {
//     constructor(props: Props) {
//         // initialized props
//         super(props);

//         // initialize state
//         this.state = {
//             isLoggedIn: false
//         }
//         // console.log("Inside Constructor",props);

//     }

//     login = (e) => {
//         console.log(e);
//         this.setState({ isLoggedIn: true })
//     }


//     render() {
//         // console.log("render");

        
//     }
// }
