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
          <a className="dropdown-item" href="#">Publish all items and modules</a>
          <a className="dropdown-item" href="#">UnPublish</a>
        </div>
        <button className="btn btn-secondary dropdown-toggle float-end" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa-regular fa-circle-check text-success"></i> Publish All
        </button>
        <button className="btn btn-secondary float-end">View Progress</button>
        <button className="btn btn-secondary float-end">Collapse All</button>
        </div>
        <hr/>
        {/* <div>
        <div className="list-group">
          <a href="#" class="list-group-item list-group-item-secondary">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            Resources
            <span class="fa fa-check-circle float-end text-success"></span>
          </a>
          <br/><br/>
          <a href="#" class="list-group-item list-group-item-secondary">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            Required Textbook
            <span class="fa fa-check-circle float-end text-success"></span>
          </a>
          <br/><br/>
          <a href="#" class="list-group-item list-group-item-secondary">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            Week 0 - INTRO
            <span class="fa fa-check-circle float-end text-success"></span>
          </a>
          <br/><br/>
          <a href="#" class="list-group-item list-group-item-secondary">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            Week 1 - HTML
            <span class="fa fa-check-circle float-end text-success"></span>
          </a>
          </div>
        </div> */}
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