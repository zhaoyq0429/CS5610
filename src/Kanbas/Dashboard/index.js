import db from "../Database";
import { Link } from "react-router-dom";
import './index.css';
import { React, useState } from "react";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
  

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" 
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
     <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button 
      style={{ marginRight: '10px', marginLeft: '15px' }}
      onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>

      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
                <button 
              style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

              <button
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            {course.name}
          </Link>
        ))}
      </div>
      {/* <div className="row">
        {courses.map((course) => (
          <div className="col course-card">
            <div className="card">
              <div className="card-top">
                <div className="dots">
                  ...
                </div>
              </div>
              <div className="card-body">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                >
                  <h4 className="course-link">{course.number} 01 FA23</h4> 
                </Link>
                <button>
                  {course.name}
                </button>
                <p>{course._id}</p>
                <p>{course.startDate} - {course.endDate}</p>
                <div className="icon">
                  🖋
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Dashboard;