import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // console.log(db.modules);
  // console.log(courseId);
  // console.log(modules.filter((module) => module.course === courseId).length);

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
    <li className="list-group-item">
      <div>
        <button 
        style={{marginRight: '34px' }}
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
        Add
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
        }/>
      </div>
      <div>
      <button 
      style={{marginRight: '10px' }}
      onClick={() => dispatch(updateModule(module))}>
        Update
        </button>
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }/>
        </div>
      </li>
  {modules
      .filter((module) => module.course === courseId)
      .map((module, index) => (
        <li key={index} className="list-group-item list-group-item-secondary list-group-item-gap">
          <button
              style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
          <button
              style={{ backgroundColor: 'red', color: 'white' }}
               onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          <h3>{module.name}</h3>
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