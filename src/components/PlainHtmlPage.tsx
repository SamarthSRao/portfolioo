import LayoutToggle from "./LayoutToggle";
import { experiences } from "./Experience";
import { projects } from "./Projects";
import { EMAIL, LINKEDIN_URL, X_URL } from "@/config/site";

const skillLine = [
  "RESTful APIs",
  "Microservices",
  "gRPC",
  "JWT",
  "OAuth2",
  "WebSockets",
  "Go",
  "Java",
  "TypeScript",
  "JavaScript",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "Linux/Shell",
].join(" / ");

const featured = ["wal kv", "reactordb", "tcp_next"];

function workRank(title: string) {
  const name = title.toLowerCase();
  const index = featured.findIndex((item) => name.includes(item));
  return index === -1 ? featured.length : index;
}

const selectedWork = [...projects].sort((a, b) => workRank(a.title) - workRank(b.title));

export default function PlainHtmlPage() {
  return (
    <div className="plain-html">
      <article className="plain-sheet" aria-label="Samarth S Rao">
        <nav className="plain-topnav" aria-label="Primary">
          <LayoutToggle tone="plain" />
          <a href="#about">About</a>
          <a href="#writing">Writing</a>
        </nav>

        <header className="plain-intro">
          <h1>Samarth S Rao</h1>
          <p className="plain-subname">Backend Developer | Engineer | Building Systems</p>
          <p className="plain-summary">
            currently learning how distributed systems work, exploring backend systems and database internals in depth. and sometimes vibecoding uis just for fun.
          </p>
          <p className="plain-quicklinks">
            Links: <a href={`mailto:${EMAIL}`}>Email</a> <a href="https://github.com/SamarthSRao">GitHub</a>{" "}
            <a href={LINKEDIN_URL}>LinkedIn</a> <a href={X_URL}>X</a> <a href="/shelf">Books</a>
          </p>
          <img className="plain-portrait" src="https://github.com/SamarthSRao.png" alt="Samarth S Rao" width={154} height={154} />
        </header>

        <section id="about">
          <h2>About</h2>
          <div className="plain-copy">
            <p>
              currently learning how distributed systems work, exploring backend systems and database internals in depth. and sometimes vibecoding uis just for fun.
            </p>
            <p>Bengaluru, India.</p>
          </div>
        </section>

        <section>
          <h2>Experience</h2>
          <div className="plain-entries">
            {experiences.map((exp) => (
              <div className="plain-entry" key={exp.company}>
                <p className="plain-time">{exp.period}</p>
                <div>
                  <h3>
                    {exp.role}
                    {", "}
                    {exp.link ? <a href={exp.link}>{exp.company}</a> : exp.company}
                  </h3>
                  <p className="plain-muted">{exp.skills.join(", ")}</p>
                  <ul>
                    {(exp.points ?? [exp.description]).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Selected Work</h2>
          <div className="plain-entries">
            {selectedWork.map((project) => (
              <div className="plain-entry" key={project.title}>
                <div>
                  <h3>
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <p className="plain-muted">{project.tags.join(", ")}</p>
                  <ul>
                    <li>{project.description}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <p className="plain-skills">{skillLine}</p>
        </section>

        <section id="writing">
          <h2>Writing</h2>
          <div className="plain-links">
            <a href="https://samarthsrao.blog">samarthsrao.blog</a>
            <a href="https://main.d2ncu76bbgdazq.amplifyapp.com/">Hackblog</a>
          </div>
        </section>

        <section>
          <h2>Links</h2>
          <div className="plain-links">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="https://github.com/SamarthSRao">GitHub</a>
            <a href={LINKEDIN_URL}>LinkedIn</a>
            <a href={X_URL}>X</a> <a href="/shelf">Books</a>
          </div>
        </section>
      </article>
    </div>
  );
}
