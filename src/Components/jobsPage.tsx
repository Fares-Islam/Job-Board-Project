import SearchJobs from "./searchJobs";
import { useEffect, useRef } from "react";
import SelectJob from "./selectJob";

export default function JobsPage() {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    SearchJobs();
  });

  return (
    <>
      <div className="jobsearchdiv">
        <input type="text" placeholder="Job Name" className="jobinput" />
        <input type="text" placeholder="Location" className="locationinput" />
        <button className="jobsearchbutton" onClick={SearchJobs}>Search</button>
      </div>
      <div className="jobpanelsdiv">
        <div className="jobsdiv">
          <template className="jobtemplate">
            <button onClick={SelectJob} className="job">
              <p className="jobname">Job Name</p>
              <p className="companyname">Company Name</p>
              <p className="location">Location</p>
            </button>
          </template>
          <div className="job hidden" id="nojobfoundtext" style={{ cursor: "default" }}>
            <p className="jobname">No job found</p>
          </div>
        </div>
          <div className="jobdetails hidden">
            <p className="jobname">Job Name</p>
            <p className="companyname">Company Name</p>
            <p className="location">Location</p>
            <p className="pay">Pay</p>
            <p className="jobtype">Job Type</p>
            <hr />
            <p className="jobdescription">Job Description</p>
          </div>
      </div >
    </>
  );
}
