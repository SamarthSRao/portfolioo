import LayoutToggle from "./LayoutToggle";
import { experiences } from "./Experience";
import { projects } from "./Projects";
import { X_URL } from "@/config/site";

export default function PlainHtmlPage() {
  return (
    <div className="plain-html">
      <div className="plain-column">
        <LayoutToggle tone="plain" />
        <h1>Samarth S Rao</h1>
        <p>Backend Developer | Engineer | Building Systems</p>
        <hr />

        <h2>About</h2>
        <p>
          currently learning how distributed systems work, exploring backend systems and database internals in depth. and sometimes vibecoding uis just for fun.
        </p>

        <h2>Experience</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.company}>
              {exp.link ? (
                <a href={exp.link}>{exp.company}</a>
              ) : (
                exp.company
              )}
              {`, ${exp.role} (${exp.period}). ${exp.description}`}
            </li>
          ))}
        </ul>

        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <a href={project.link}>{project.title}</a>
              {` — ${project.description}`}
            </li>
          ))}
        </ul>

        <h2>Writing</h2>
        <ul>
          <li>
            <a href="https://samarthsrao.blog">samarthsrao.blog</a>
          </li>
          <li>
            <a href="https://main.d2ncu76bbgdazq.amplifyapp.com/">Hackblog</a>
          </li>
        </ul>

        <h2>Contact</h2>
        <ul>
          <li>
            <a href="mailto:hello@samarth.dev">hello@samarth.dev</a>
          </li>
          <li>
            <a href="https://cal.com/samarthsrao">cal.com/samarthsrao</a>
          </li>
          <li>
            <a href={X_URL}>x.com/Samarthssrao</a>
          </li>
          <li>
            <a href="https://github.com/SamarthSRao">github.com/SamarthSRao</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
