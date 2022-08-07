import React, { useContext, useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { v4 } from "uuid";
import { REGISTER_USER } from "../../context/authActions.types";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
    const [user, setUser] = useState({id: v4()});
    const {dispatch} = useContext(AuthContext);
   
    const registerUser = (event) => {
        event.preventDefault();
        dispatch({type: REGISTER_USER, payload: user});
        setUser({id: v4()});
    };

    return (
        <Container className="mt-2">
            <h1 className="mb-4">Register Screen</h1>
            <Form onSubmit={registerUser}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                type="text"
                                value={user.firstName}
                                onChange={(e)=> setUser({...user, firstName: e.target.value})}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Last Name"
                                type="text"
                                value={user.lastName}
                                onChange={(e)=> setUser({...user, lastName: e.target.value})}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            value={user.email}
                            onChange={(e)=> setUser({...user, email: e.target.value})}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="Enter Phone Number"
                            type="text"
                            value={user.phone}
                            onChange={(e)=>setUser({...user, phone: e.target.value})}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag="fieldset">
                    <legend>Gender</legend>
                    <Row>
                        <Col>
                            <FormGroup check>
                                <Input name="gender" type="radio" value={'Female'} onChange={(e)=>setUser({...user, gender: e.target.value})} />
                                <Label check>Female</Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup check>
                                <Input name="gender" type="radio" value={'Male'} onChange={(e)=>setUser({...user, gender: e.target.value})} />
                                <Label check>Male</Label>
                            </FormGroup>
                        </Col>
                        </Row>
                    </FormGroup>
                </Row>
                <Row className="mt-2"><Button size="warning">Submit</Button></Row>
            </Form>
        </Container>
    )
};

export default Register;