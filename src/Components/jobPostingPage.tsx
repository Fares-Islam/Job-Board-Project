import PostJob from "./postJob";
import { useEffect, useRef } from "react";
import LoadCurrencies from "./loadCurrencies";

export default function JobPostingPage() {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    LoadCurrencies();
  });

  return (
    <>
      <form className="jobpostingform" onSubmit={PostJob}>
        <h1>Post a Job</h1>
        <div className="horizontaldiv">
          <div>
            <p>Company Name</p>
            <input
              type="text"
              name="Company Name"
              placeholder="Enter company name"
              maxLength={50}
              required
            ></input>
          </div>
          <div>
            <p>Job Name</p>
            <input
              type="text"
              name="Job Name"
              placeholder="Enter job name"
              maxLength={50}
              required
            ></input>
          </div>
        </div>
        <div className="horizontaldiv">
          <div>
            <p>Location</p>
            <input
              type="text"
              name="Location"
              placeholder="Enter location"
              maxLength={50}
              required
            ></input>
          </div>
          <div>
            <p>Pay</p>
            <input
              type="number"
              name="Pay"
              placeholder="Enter pay"
              max={100000000000}
              required
            ></input>
          </div>
        </div>
        <div className="horizontaldiv">
          <div className="paycurrncydiv">
            <p>Pay Currency</p>
            <select name="Pay Currency" className="paycurrency"></select>
          </div>
          <div>
            <p>Pay Rate</p>
            <select name="Pay Rate">
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
              <option value="Weekly">Weekly</option>
              <option value="Annually">Annually</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
        </div>
        <p>Job Type</p>
        <select name="Job Type">
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Permanent">Permanent</option>
          <option value="Temporary">Temporary</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>
        <p>Job Description</p>
        <textarea
          name="Job Description"
          className="jobdescriptiontextarea"
          placeholder="Enter job description"
          maxLength={5000}
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </>
  );
}
