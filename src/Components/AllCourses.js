import React, {useEffect, useState} from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";



function AllCourse (){
    useEffect( ()=>{
        // alert("This is testing !");
        document.title="All Courses";
        // alert("hello")
        getAllCoursesFromServer();

        
    }, []);

    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/api/items`).then(
            (response) => {
                console.log(response);
                setCourses(response.data);
                toast.success("Courses have been loaded!",{position:"bottom-left"});



            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong!");
            }
        );

    };
   

    const[courses, setCourses] = useState([]);

    const updateCourse = (name) => {
        setCourses(courses.filter((c) => c.name != name));
    
      }
    

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are: </p>
            {
                courses.length>0? courses.map((item) =>(
                    <Course course = {item} update = {updateCourse}/>
                )) : "No Courses"
                
            }
        </div>
    );
}
export default AllCourse;