export default function HomePage() {
  return (
    <>
      <div className="welcomediv">
        <h1>Welcome</h1>
        <p>
          This is a job board, Browse available job listings and find your next
          opportunity!
        </p>
      </div>
      <div className="employmentdiv">
        <h2>Are you an employer</h2>
        <p>
          You can post your job listings here to reach a wider audience of
          potential candidates.
        </p>
        <a href="#/JobPosting"><button>Employ</button></a>
      </div>
      <div className="employmentdiv">
        <h2>Are you looking for a job</h2>
        <p>
          Browse through our job listings and find the perfect role that matches
          your skills and interests.
        </p>
        <a href="#/Jobs"><button>Browse</button></a>
      </div>
    </>
  );
}
