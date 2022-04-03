import React from 'react'
import { Form,Button,Col,Row,Container } from  "react-bootstrap"
function Signup() {
    const pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\@]).{8,}/;
    pattern.test("Qwerty123@")
    return (
        <>
        <Container>
            <Row>
                <Col md="6" className="offset-3">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}

export default Signup