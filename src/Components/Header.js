import React from "react";
import {Card, CardBody, jumbotron} from 'reactstrap';


function Header({name, title}) {

    return (
        <div>
            <Card>
                <CardBody className="my-2 bg-success">
                    <h1 className="text-center my-3">Welcome to Courses Application</h1>

                </CardBody>
            </Card>
        </div>
    );
}

export default Header;