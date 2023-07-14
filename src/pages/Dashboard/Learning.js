import React, { useEffect, useState } from "react";
import javaImg from "../../assets/images/java.jpg";
import ReactImg from "../../assets/images/react.jpg";
import PythonImg from "../../assets/images/python.jpg";
import JavascriptImg from "../../assets/images/javascript.jpg";
import DotnetImg from "../../assets/images/dotnet.jpg";
import HtmlImg from "../../assets/images/html.jpg";
import CssImg from "../../assets/images/css.png";

function Learning() {
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/search-results")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data
        setSearchResults(data);
        setLoading(false); // Set loading to false when links are available
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="interview-heading">Interview Preparation</h1>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="scrollable-container">
          <div className="job-space">
            {Object.entries(searchResults).map(([jobPosting, results]) =>
              results.map((link, index) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="job-link"
                >
                  <div className="image-box">
                    <div className="box-content">
                      {jobPosting === "Java" && (
                        <img
                          src={javaImg}
                          width="532px"
                          height="320px"
                          alt="Java"
                        />
                      )}
                      {jobPosting === "Python" && (
                        <img
                          src={PythonImg}
                          width="532px"
                          height="320px"
                          alt="Python"
                        />
                      )}
                      {jobPosting === "HTML" && (
                        <img
                          src={HtmlImg}
                          width="532px"
                          height="320px"
                          alt="HTML"
                        />
                      )}
                      {jobPosting === "CSS" && (
                        <img
                          src={CssImg}
                          width="532px"
                          height="320px"
                          alt="CSS"
                        />
                      )}
                      {jobPosting === "React" && (
                        <img
                          src={ReactImg}
                          width="532px"
                          height="320px"
                          alt="React"
                        />
                      )}
                      {jobPosting === ".NET" && (
                        <img
                          src={DotnetImg}
                          width="532px"
                          height="320px"
                          alt=".NET"
                        />
                      )}
                      {jobPosting === "JavaScript" && (
                        <img
                          src={JavascriptImg}
                          width="532px"
                          height="320px"
                          alt="JavaScript"
                        />
                      )}
                    </div>
                  </div>
                  <div className="title">{jobPosting} Interview Preparation</div>
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Learning;
