import styles from "./AboutStyles.module.css";
// import { useTheme } from "../../common/ThemeContext";

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>About Me</h1>
        <h2>Full Stack Web Developer MERN With DevOps</h2>
        <div>
          <p className={styles.description}>
            I’m a Full Stack Developer with 1 years of experience in building
            modern, scalable web applications using the MERN stack. I specialize
            in creating responsive frontends with React.js and robust backends
            with Node.js, Express.js, and MongoDB. My work also includes DevOps
            practices, where I use Docker, Kubernetes, Jenkins, and AWS to
            automate deployments and ensure system reliability. I’ve implemented
            CI/CD pipelines, secure authentication systems, and optimized cloud
            infrastructure for performance and cost-efficiency. I’m passionate
            about clean code, continuous learning, and building solutions that
            help businesses grow efficiently.
          </p>
          <br />
          <div style={{ border: "1px", color: "white" }}>
            <h3>Education</h3>
            <br />
            <p>Bachelor Of Engineer - Electronic Communication Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
