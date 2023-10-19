import db from "../Database";
import { Link } from "react-router-dom";
import './index.css';
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="row">
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
                  <h4 className="course-link">{course.number} 01 FA23</h4> {/* Made the course number clickable */}
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
      </div>
    </div>
  );
}

export default Dashboard;