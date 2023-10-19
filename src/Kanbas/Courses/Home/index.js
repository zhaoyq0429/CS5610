import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="row">
        <div className="col-10">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-2">
            <h2>Course Status</h2>
            <div class="mb-5 d-none d-md-block">
            <div class="ms-4">
              <button class="btn btn-secondary ms-2"><i class="fa-solid fa-ban"></i>Unpublish</button>
              <button class="btn btn-success"><span class="fa fa-check-circle text-white"></span>Published</button>
              <div style={{width:"10px;"}}></div>

              <div><button class="btn btn-secondary ms-2 mb-1 mt-3 fixed-size-button"><i class="fa-solid fa-file-import"></i>Import Existing Content</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-solid fa-arrow-right-from-bracket"></i>Import from Commons</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-solid fa-bullseye"></i>Choose Home Page</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-solid fa-chart-column"></i>View Course Stream</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-solid fa-volume-low"></i>New Announcement</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-solid fa-chart-column"></i>New Analytics</button></div>
              <div><button class="btn btn-secondary ms-2 mb-1 fixed-size-button"><i class="fa-regular fa-bell"></i>View Course Notifications</button></div>
            </div>
            <div class="clearfix"></div> 
            <div>
              <div class="ms-3 mt-3"><h4>To Do</h4></div>
              <div class="clearfix"></div>
              <hr />
              <div class="ms-4 text-danger"><h6><i class="fa-solid fa-circle-exclamation me-2"></i>Grade A1 - ENV + HTML</h6></div>
              <div class="ms-5 text-secondary">100 points Sep 18 at 11:59pm</div>

              <div class="ms-3 mt-3"><h4>Coming Up</h4></div>
              <div class="clearfix"></div>
              <hr />
              <div class="ms-4 text-danger"><h6><i class="fa-solid fa-calendar-check me-2"></i>Lecture</h6></div>
              <div class="ms-5 text-secondary">CS4550.12631.202410</div>
              <div class="ms-5 text-secondary">Sep 11 at 11:45am</div>
              <div class="ms-4 text-danger mt-2"><h6><i class="fa-solid fa-calendar-check me-2"></i>CS5610 06 SP23 Lecture</h6></div>
              <div class="ms-5 text-secondary">CS4550.12631.202410</div>
              <div class="ms-5 text-secondary">Sep 11 at 6pm</div>
              <div class="ms-4 text-danger mt-2"><h6><i class="fa-solid fa-calendar-check me-2"></i>CS5610 Web Development</h6></div>
              <div class="ms-5 text-danger"><h6>Summer 1 2023 - LECTURE</h6></div>
              <div class="ms-5 text-secondary">CS4550.12631.202410</div>
              <div class="ms-5 text-secondary">Sep 11 at 7pm</div>
              
            </div>
          </div>
        </div>
    </div>
  );
}
export default Home;