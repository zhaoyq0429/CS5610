import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  console.log(db.modules);
  console.log(courseId);
  console.log(modules.filter((module) => module.course === courseId).length);

  return (
    <div>
      <div>
      <div className="d-flex flex-row-reverse align-items-start gap-2">
        <button className="btn btn-secondary float-end button-height">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>...
        </button>
        <button className="btn btn-danger float-end">+ Module</button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">Publish all items and modules</div>
          <div className="dropdown-item" >UnPublish</div>
        </div>
        <button className="btn btn-secondary dropdown-toggle float-end" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa-regular fa-circle-check text-success"></i> Publish All
        </button>
        <button className="btn btn-secondary float-end">View Progress</button>
        <button className="btn btn-secondary float-end">Collapse All</button>
        </div>
        <hr/>
    </div> 
    <ul className="list-group">
  {
    modules
      .filter((module) => module.course === courseId)
      .map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary list-group-item-gap">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          <h5>{module.name}</h5>
          <span className="fa fa-check-circle float-end text-success"></span>
          <p>{module.description}</p>
        </li>
    ))
  }
</ul>
    
    </div>
  );
}
export default ModuleList;