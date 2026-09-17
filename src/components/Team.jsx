import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { members } from "../data.js";

function pad(n) {
  return String(n + 1).padStart(2, "0");
}

export default function Team() {
  const headRef = useReveal();
  const wrapRef = useReveal();
  const carouselRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let timeout;
    function onScroll() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
        setActive(index);
      }, 80);
    }
    carousel.addEventListener("scroll", onScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(index) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const clamped = Math.max(0, Math.min(members.length - 1, index));
    carousel.scrollTo({ left: carousel.clientWidth * clamped, behavior: "smooth" });
  }

  return (
    <section className="team" id="tim">
      <div className="bg-blob team-blob-a" aria-hidden="true"></div>
      <div className="bg-blob team-blob-b" aria-hidden="true"></div>

      <div className="section-head" ref={headRef} data-reveal>
        <p className="eyebrow"><span className="eyebrow-num">02</span>Lebih dekat dengan kami</p>
        <h2>Tentang Tim</h2>
        <p className="section-sub">Geser ke kanan untuk membaca profil masing-masing anggota tim.</p>
      </div>

      <div className="team-carousel-wrap" ref={wrapRef} data-reveal>
        <button
          className="team-arrow team-arrow--prev"
          aria-label="Sebelumnya"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
        >
          ←
        </button>

        <div className="team-carousel" ref={carouselRef}>
          {members.map((member, i) => (
            <article className="team-slide" key={member.name + member.nim}>
              <div className="team-photo-col">
                <span className="team-slide-index" aria-hidden="true">N°{pad(i)}</span>
                <div className="team-photo-ring" aria-hidden="true"></div>
                <div className="team-photo">
                  {member.photo ? (
                    <img className="avatar-img" src={member.photo} alt={member.name} />
                  ) : (
                    <span className="photo-initial">{member.initial}</span>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p className="team-meta">NIM {member.nim} · Kelas {member.kelas}</p>
              </div>
              <div className="team-info-col">
                <span className="project-tag">{member.peminatan}</span>
                <h4 className="team-highlights-title">Pengalaman & Kontribusi</h4>
                <ul className="team-highlights">
                  {member.highlights.map((h, idx) => (
                    <li key={h}>
                      <span className="hl-num">{pad(idx)}</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <a href={member.cvUrl} className="btn btn-outline">Lihat CV Lengkap →</a>
              </div>
            </article>
          ))}
        </div>

        <button
          className="team-arrow team-arrow--next"
          aria-label="Berikutnya"
          onClick={() => goTo(active + 1)}
          disabled={active === members.length - 1}
        >
          →
        </button>

        <div className="team-controls">
          <div className="team-dots">
            {members.map((_, i) => (
              <button
                key={i}
                className={i === active ? "is-active" : ""}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <span className="team-count">{pad(active)} / {pad(members.length - 1)}</span>
        </div>
      </div>
    </section>
  );
}
