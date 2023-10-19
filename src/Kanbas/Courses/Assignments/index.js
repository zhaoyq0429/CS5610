import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div class="wide-column" id="main-content">
            <div class="mb-5">
              <div class="d-flex justify-content-between">
              <input 
              type="text" 
              id="search" 
              placeholder="Search for Assignment" 
              className="flex-grow-1 me-3" 
              />
                <div>
                    <button class="btn btn-secondary">+Group</button>
                    <button class="btn btn-danger">+ Assignment</button>
                    <button class="btn btn-secondary button-height"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>...</button>
                </div>
            </div>
              <hr />
            </div>
      </div>
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary">
          Assignment
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
            style={{
                display: 'flex',
                alignItems: 'center',
                borderLeft: '4px solid green',
            }}>
            <div style={{ paddingLeft: '10px' }}>
              {assignment.title}
              <p>{assignment.description}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
export default Assignments;
