import axios, { Axios } from "axios";
import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function Course({course, update}) {

  const deleteCourse = (name) => {
    axios.delete(`${base_url}/api/items/name/${name}`).then(
      (response)=>{
        toast.success("Course Deleted !")
        update(name)
      },
      (error)=>{
        toast.error("Course not deleted ! Server error !")
      }
    )
  }

    return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardTitle>{course.name}</CardTitle>
          <CardSubtitle className="font-weight-bold">Course Description: {course.description}</CardSubtitle>
          <CardText>This course covers all the advanced topics in Java for development in frontend and backend with springboot</CardText>
          <Container className="text-center">
          <Button color="danger" onClick={()=>{deleteCourse(course.name)}}>Delete</Button>
          <Button color="warning">Update</Button>
          </Container>
          
        </CardBody>
      </Card>
    </div>
    );
}
export default Course;