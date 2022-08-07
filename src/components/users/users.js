import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal ,ModalBody,ModalHeader, Row, Table } from "reactstrap";
import { DELETE_USER, UPDATE_USER } from "../../context/authActions.types";
import { AuthContext } from "../../context/AuthContext";

const Users = () => {
    const {users} = useContext(AuthContext);
    const [selectedUser, setSelectedUser] = useState({});
    const {dispatch} = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const onDeleteClick = (id) => {
        dispatch({type: DELETE_USER, payload: id});
    }
    const onEditClick = (index) =>{
        setSelectedUser({...users[index]})
        setModal(!modal)
    }

    const updateUser = (event) => {
        event.preventDefault();
        dispatch({type: UPDATE_USER, payload: selectedUser});
    };

    const EditModal = () => (<Modal isOpen={modal} fade={true} toggle={() => onEditClick(0)}>
        <ModalHeader toggle={() => onEditClick(0)}>Edit User</ModalHeader>
        <ModalBody>
            <Form onSubmit={updateUser}>
            <Row>
                    <Col>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                type="text"
                                value={selectedUser.firstName}
                                onChange={(e)=> setSelectedUser({...selectedUser, firstName: e.target.value})}  
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
                                value={selectedUser.lastName}
                                onChange={(e)=> setSelectedUser({...selectedUser, lastName: e.target.value})}
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
                            value={selectedUser.email}
                            onChange={(e)=> setSelectedUser({...selectedUser, email: e.target.value})}
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
                            value={selectedUser.phone}
                            onChange={(e)=>setSelectedUser({...selectedUser, phone: e.target.value})}
                        />
                    </FormGroup>
                </Row>
            <Button color="success">Update</Button>
            </Form>
        </ModalBody>
    </Modal>);

    return (
        <Container>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
               { users.map((user, index) => <tr key={user.id}>
                        <th scope="row">{index+1}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td><Button color="warning" onClick={() => onEditClick(index)}>Edit</Button></td>
                        <td><Button color="danger" onClick={() => onDeleteClick(user.id)}>Delete</Button></td>
                    </tr>
                )
                }
                </tbody>
                <EditModal />
            </Table>
        </Container>
    );

};

export default Users;