import React, { useEffect, useState } from "react";
import { FaMailchimp } from "react-icons/fa";


const JobSearchPlatform = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [scrollY, setScrollY] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const url =
        "https://jsearch.p.rapidapi.com/search?query=developer%20in%20Vancouver%2C%20CANADA&page=1&num_pages=1";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff39dc54bfmsh3c589f765fbebb4p188ab2jsnb6a75da3a386",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        

        const jobList = result.data || [];
        setJobs(jobList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateDaysAgo = (timestamp) => {
    const postedDate = new Date(timestamp);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  };

  const renderCompanyLogo = (logoUrl) => {
    if (logoUrl) {
      return <img className="company-logo" src={logoUrl} alt="Company Logo" />;
    } else {
      return <FaMailchimp className="company-icon" />;
    }
  };

  const handleJobClick = (job) => {
    setSelectedJob(job === selectedJob ? null : job);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="job-search-platform">
      <ul className="job-list">
        {currentJobs.map((job, index) => (
          <li
            key={job.job_id}
            className={`job-item ${index === 0 && scrollY > 0 ? "hide" : ""}`}
            onClick={() => handleJobClick(job)}
          >
            <div className="job-details">
              <div className="logo-and-content">
                <div className="logo1">
                  {renderCompanyLogo(job.employer_logo)}
                </div>
                <div className="job-content">
                  <div className="job-title">{job.job_title}</div>
                  <div className="job-company">{job.employer_name}</div>
                  <div className="job-posted">
                    Posted {calculateDaysAgo(job.job_posted_at_datetime_utc)}
                  </div>
                  <div className="job-description">
                    {selectedJob === job ? job.job_description : ""}
                  </div>
                </div>
              </div>
              <div className="apply-link-container">
                <a
                  className="apply-link"
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="job-description-full">{job.job_description}</div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(jobs.length / jobsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`page-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default JobSearchPlatform;
