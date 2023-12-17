import React, { useEffect } from "react";
import { Container,Button } from "reactstrap";

function Home() {
    useEffect(() => 
    {
        document.title="Home || Learn to Code";
    }, []);

    return (
    
    <div class="container-fluid text-sm-center p-5 bg-light"> 
    <h1 class="display-2">This is Homepage</h1>
    <p class="lead">This is developed by Titas to provide a learning platform for courses with
    Springboot as backend and React as frotend</p>
    <Container>
        <Button color="primary"> Start </Button>
    </Container>
    
    </div>
    
        
    );
}
export default Home;
