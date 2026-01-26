import defaultJobs from "../../public/defaultJobs.json";

export default function LoadDefaultJobs() {
    for (let i = 0; i < defaultJobs.Jobs.length; i++) {
        localStorage.setItem(`job${i}`, JSON.stringify(defaultJobs.Jobs[i]));
        localStorage.setItem(`jobCount`, `${defaultJobs.Jobs.length - 1}`);
    }
}