import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { projects } from "../data.js";

function ProjectGallery({ photos, monogram, title }) {
  const [index, setIndex] = useState(0);
  const hasGallery = photos && photos.length > 1;

  function prev() {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }

  function next() {
    setIndex((i) => (i + 1) % photos.length);
  }

  return (
    <>
      <div className="project-blob">
        {photos && photos.length > 0 ? (
          photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} — tampilan ${i + 1}`}
              className={"project-photo" + (i === index ? " is-active" : "")}
            />
          ))
        ) : (
          <span>{monogram}</span>
        )}
      </div>

      {hasGallery && (
        <>
          <button
            type="button"
            className="gallery-arrow gallery-arrow--prev"
            aria-label="Foto sebelumnya"
            onClick={prev}
          >
            ←
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow--next"
            aria-label="Foto berikutnya"
            onClick={next}
          >
            →
          </button>
          <div className="gallery-dots">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === index ? "is-active" : ""}
                aria-label={`Tampilan ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function ProjectRow({ project }) {
  const ref = useReveal();
  return (
    <article
      className={`project-row project-row--${project.variant}`}
      ref={ref}
      data-reveal
    >
      <div className="project-row-media">
        <span className="project-row-index" aria-hidden="true">{project.index}</span>
        <ProjectGallery photos={project.photos} monogram={project.monogram} title={project.title} />
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
        {projects.map((project) => (
          <ProjectRow key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
