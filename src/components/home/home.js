import React, {  useState } from "react";
import { Button, Container } from "reactstrap";
import "./home.css";
import Register from "../register/register";
import Users from "../users/users";
const Home = () => {
    const [isRegisterSelected, setRegisterSelected] = useState(true);

    return(
        <Container fluid className="hero-container">
            <div>
                <h2>User Mangement</h2>
            </div>
            <div className="buttons-container">
                <Button color="primary" outline={!isRegisterSelected} disabled={isRegisterSelected}  size="lg" onClick={()=> setRegisterSelected(true)}>Register</Button>
                <Button color="success" outline={isRegisterSelected} disabled={!isRegisterSelected} size="lg" onClick={()=> setRegisterSelected(false)}>Users List</Button>
            </div>
            <div>
                {isRegisterSelected ? <Register /> : <Users />}
            </div>
        </Container>
    );
};

export default Home;