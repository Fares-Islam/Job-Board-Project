import LoadDefaultJobs from "./loadDefaultJobs";
import SelectJob from "./selectJob";

export default function SearchJobs() {
  let jobCount = parseInt(localStorage.getItem(`jobCount`) ?? `-1`) + 1;

  if (jobCount == 0) {
    LoadDefaultJobs();
    jobCount = parseInt(localStorage.getItem(`jobCount`) ?? `-1`) + 1;
  }

  const jobBar = document.getElementsByClassName("jobinput")[0] as HTMLInputElement;
  const locationBar = document.getElementsByClassName("locationinput")[0] as HTMLInputElement;
  const jobTemplate = document.getElementsByClassName("jobtemplate")[0] as HTMLTemplateElement;
  const jobPanelsDiv = document.getElementsByClassName("jobsdiv")[0] as HTMLDivElement;
  const noJobFoundNote = document.getElementById("nojobfoundtext") as HTMLDivElement;

  let found = false;

  if (jobPanelsDiv.children.length == 2) {
    for (let i = 0; i < jobCount; i++) {
      const jobData = JSON.parse(localStorage.getItem(`job${i}`) ?? `{}`);
      const jobName = jobData.formEntries["Job Name"];
      const location = jobData.formEntries["Location"];
      const companyName = jobData.formEntries["Company Name"];

      const searchIncludesJobName = jobName.toLowerCase().includes(jobBar.value.toLowerCase());
      const searchIncludeslocation = location.toLowerCase().includes(locationBar.value.toLowerCase());

      if (searchIncludesJobName && searchIncludeslocation) {
        found = true;

        const templateClonedContent = jobTemplate.children[0].cloneNode(true);
        templateClonedContent.childNodes[0].textContent = jobName;
        templateClonedContent.childNodes[1].textContent = `At: ${companyName}`;
        templateClonedContent.childNodes[2].textContent = `In: ${location}`;
        templateClonedContent.addEventListener("click", (event) => SelectJob(event));
        // cloned nodes need their event listeners re-added, otherwise onclick is not present

        jobPanelsDiv.appendChild(templateClonedContent);
      }
    }
  } else {
    for (let i = 1; i < jobPanelsDiv.children.length; i++) {

      const jobName = jobPanelsDiv.children[i]?.childNodes[0]?.textContent
      const location = jobPanelsDiv.children[i]?.childNodes[2]?.textContent

      const searchIncludesJobName = jobName?.toLowerCase().includes(jobBar.value.toLowerCase());
      const searchIncludeslocation = location?.toLowerCase().includes(locationBar.value.toLowerCase());

      if (searchIncludesJobName && searchIncludeslocation) {
        found = true;

        if (jobPanelsDiv.children[i].classList.contains("hidden")) {
          jobPanelsDiv.children[i].classList.remove("hidden");
        }
      } else {
        if (!jobPanelsDiv.children[i].classList.contains("hidden")) {
          jobPanelsDiv.children[i].classList.toggle("hidden");
        }
      }
    }
  }

  if (!found && noJobFoundNote.classList.contains("hidden")) {
    noJobFoundNote.classList.remove("hidden");
  }
  // nojobfoundnote hides itself when a job is found without needing to be told to
}