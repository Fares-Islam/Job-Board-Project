export default function SelectJob(event: any) {
    const jobDetails = document.getElementsByClassName("jobdetails")[0];

    let jobNumber = -1;
    const eventTarget = (event.currentTarget as HTMLButtonElement)

    if (jobDetails.classList.contains("hidden")) {
        jobDetails.classList.remove("hidden");
    }

    for (let i = 0; i < parseInt(localStorage.getItem(`jobCount`) ?? `-1`) +1; i++) {
        const jobData = JSON.parse(localStorage.getItem(`job${i}`) ?? `{}`);
        const jobName = jobData.formEntries["Job Name"];
        const companyName = jobData.formEntries["Company Name"];
        const location = jobData.formEntries["Location"];

        if (jobName == eventTarget.children[0].textContent && ("At: " + companyName) == eventTarget.children[1].textContent && ("In: " + location) == eventTarget.children[2].textContent) {
            jobNumber = i;
        }
    }

    const jobData = JSON.parse(localStorage.getItem(`job${jobNumber}`) ?? `{}`);
    jobDetails.childNodes[0].textContent = jobData.formEntries["Job Name"];
    jobDetails.childNodes[1].textContent = "At: " + jobData.formEntries["Company Name"];
    jobDetails.childNodes[2].textContent = "In: " + jobData.formEntries["Location"];
    jobDetails.childNodes[3].textContent = "Pay: " + jobData.formEntries["Pay"] + " " + jobData.formEntries["Pay Currency"] + " " + jobData.formEntries["Pay Rate"];
    jobDetails.childNodes[4].textContent = "Type: " + jobData.formEntries["Job Type"];
    jobDetails.childNodes[6].textContent = jobData.formEntries["Job Description"];
} 