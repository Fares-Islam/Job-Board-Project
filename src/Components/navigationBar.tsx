import logo from "../../public/logo.png";

export default function NavigationBar() {
  return (
    <>
      <ul className="navbar">
        <li className="logo">
          <a href="../index.html">
            <img src={logo} alt="img not found"></img>
          </a>
        </li>
        <div className="navbarlinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#/JobPosting">Job Posting</a>
          </li>
          <li>
            <a href="#/Jobs">Jobs</a>
          </li>
          <li>
            <a href="#/About">About</a>
          </li>
        </div>
      </ul>
    </>
  );
}
