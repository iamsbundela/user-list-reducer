import React, { useContext } from "react";
import { Container, Table } from "reactstrap";
import { AuthContext } from "../../context/AuthContext";

const Users = () => {
    const {users} = useContext(AuthContext);
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
                    </tr>
                )
                }
                </tbody>
            </Table>
        </Container>
    );

};

export default Users;