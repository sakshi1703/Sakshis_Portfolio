import React from "react";

function GitStats() {
  return (
    <section className="git-stats">
      <div className="content">
        <div className="title">
          <span>Git Stats</span>
        </div>

        <div className="git-div">
          {/* GitHub Contribution Calendar */}
          <div className="git-calendar">
            <a
              className="react-activity-calendar"
              href="https://ghchart.rshah.org/sakshi1703"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
              <img
                className="image12"
                id="image"
                src="https://ghchart.rshah.org/sakshi1703"
                alt="GitHub Contributions"
              />
            </a>
          </div>

          {/* GitHub Streak Stats */}
          <a
            href="https://git.io/streak-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="image12"
              src="https://github-readme-streak-stats.herokuapp.com?user=sakshi1703"
              alt="GitHub Streak"
            />
          </a>

          {/* GitHub Stats Card */}
          <div>
            <img
              className="image12"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=sakshi1703&show_icons=true"
              alt="GitHub Stats"
            />
          </div>

          {/* GitHub Top Languages */}
          <div>
            <img
              className="image12"
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sakshi1703&show_icons=true"
              alt="GitHub Top Languages"
              style={{ width: "80%", maxWidth: "500px", height: "auto" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitStats;
