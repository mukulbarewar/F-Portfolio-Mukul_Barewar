// import React from "react";
import styles from "./ExperienceStyles.module.css";

const Experience = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>Work Experience</h1>
        <h2>Full Stack MERN Developer With DevOps : 1 Yr</h2>
        <div>
          <p className={styles.description}>
            I completed a 1-year internship at Intellipaat Software Solutions as
            a Full Stack Developer, where I built and deployed web applications
            using the MERN stack. My responsibilities included developing secure
            user authentication, creating RESTful APIs, and optimizing database
            performance. I also worked with DevOps tools like Docker, Jenkins,
            and Git to automate deployments and integrate CI/CD pipelines. This
            experience helped me strengthen my backend skills, improve
            application performance, and understand real-world Agile workflows
            in a professional development environment.
          </p>
          <br />
          <div style={{ border: "1px", color: "white" }}>
            <h3>Company</h3>
            <br />
            <p>Intellipaat software Solution Private Limited, Bengaluru</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
