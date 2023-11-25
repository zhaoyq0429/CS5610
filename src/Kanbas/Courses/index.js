import db from "../../Kanbas/Database";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import CourseNavigation from "../CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"
import {useState, useEffect} from "react";
import * as client from"./client";


function Courses({ courses }) {
    const { courseId } = useParams();
    // const course = courses.find((course) => course._id === courseId);
    const [course, setCourse] = useState({});
    const fetchCourse = async () => {
        const course = await client.fetchCourse(courseId);
        setCourse(course);
    };
    useEffect(() => {
        fetchCourse();
    }, []);

  return (
    <div>
      {/* <h4>Courses {course.name} / {screen}</h4> */}
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0'}}
             className="d-flex flex-row align-items-start gap-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">CS4550.12631.202410</li>
              <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
        </div>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;