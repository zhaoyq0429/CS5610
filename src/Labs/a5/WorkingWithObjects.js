import React, { useEffect,useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_LAB;
  const URL = `${API_BASE}`

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL_ASSIGNMENT = `${URL}/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL_ASSIGNMENT}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL_ASSIGNMENT}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href={`${URL}/assignment`}
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${URL}/assignment/title`}
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      {/* modifying title */}
      <a
        href={`${URL_ASSIGNMENT}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      {/* modifying score */}
      <a
        href={`${URL_ASSIGNMENT}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="text"
      />
      {/* modifying completed */}
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        type="checkbox"
        id="checkbox1"
        name="check"
        checked={assignment.completed}
      />
      <label for="checkbox1">
        <a
          href={`${URL_ASSIGNMENT}/completed/${assignment.completed}`}
          className="btn btn-primary me-2 float-end"
        >
          Update Completed
        </a>
      </label>
    </div>
  );
}
export default WorkingWithObjects;
