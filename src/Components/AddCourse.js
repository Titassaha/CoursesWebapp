import axios from "axios";
import base_url from "../api/bootapi";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";


const AddCourse = () => {

    useEffect(() => 
    {
        document.title="Add Course || Learn to Code";
    }, []);

    const [course, setCourse] = useState({});
    const handleform = (e) => {
        console.log(course);
        postCourse(course);
        e.preventDefault();
    };

    const postCourse = (data) => {
        axios.post(`${base_url}/api/items`, data)
        toast.success("Course Added !")

    }

    return( 
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
        <Form onSubmit={handleform}>
            <FormGroup>
                <label for = "name">Course Name</label>
                <Input type="text" placeholder="Enter here" name="name" id="name" 
                onChange={(e)=> {
                    setCourse({...course, name: e.target.value})
                }}
                />
            </FormGroup>
            
            {/* <FormGroup>
                <label for="description">Course Title</label>
                <Input type="textarea" placeholder="Enter Title" id="title"
                onChange={(e)=> {
                    setCourse({...course, title: e.target.value})
                }}/>
            </FormGroup> */}

            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter description" id="description" style={{height:100}}
                onChange={(e)=> {
                    setCourse({...course, description: e.target.value})
                }}/>
            </FormGroup>
            <Container className="text-center">
                <Button color="success" type="submit">Add Course</Button>
                <Button color="warning" type="reset">Clear</Button>
            </Container>
            
        </Form>
    </Fragment>
    );
};
export default AddCourse;