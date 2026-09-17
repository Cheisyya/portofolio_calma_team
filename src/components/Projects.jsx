import useReveal from "../hooks/useReveal.js";
import { projects } from "../data.js";

function ProjectRow({ project, i }) {
  const ref = useReveal();
  return (
    <article
      className={`project-row project-row--${project.variant}`}
      ref={ref}
      data-reveal
    >
      <div className="project-row-media">
        <span className="project-row-index" aria-hidden="true">{project.index}</span>
        <div className="project-blob">
          {project.photo ? (
            <img className="avatar-img" src={project.photo} alt={project.title} />
          ) : (
            <span>{project.monogram}</span>
          )}
        </div>
        <div className="project-ring" aria-hidden="true"></div>
      </div>

      <div className="project-row-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const headRef = useReveal();

  return (
    <section className="projects" id="proyek">
      <div className="bg-blob projects-blob-a" aria-hidden="true"></div>
      <div className="bg-blob projects-blob-b" aria-hidden="true"></div>

      <div className="section-head" ref={headRef} data-reveal>
        <p className="eyebrow"><span className="eyebrow-num">01</span>Yang pernah kami kerjakan</p>
        <h2>Proyek Kami</h2>
        <p className="section-sub">
          Beberapa proyek yang kami rancang dan bangun bersama selama masa studi, mulai dari
          perancangan sistem hingga implementasi.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, i) => (
          <ProjectRow key={project.index} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
