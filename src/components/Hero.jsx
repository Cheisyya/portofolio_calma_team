import { useEffect, useRef } from "react";
import useReveal from "../hooks/useReveal.js";
import useMagnetic from "../hooks/useMagnetic.js";
import useTilt from "../hooks/useTilt.js";
import { members } from "../data.js";

function PhotoCard({ member, position }) {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      className={`photo-card photo-card--${position}`}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="photo-frame">
        {member.photo ? (
          <img className="avatar-img" src={member.photo} alt={member.name} />
        ) : (
          <span className="photo-initial">{member.initial}</span>
        )}
      </div>
      <div className="photo-caption">
        <strong>{member.name}</strong>
        <span>NIM {member.nim} · {member.kelas}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const copyRef = useReveal();
  const photosRef = useReveal();
  const avatarStackRef = useReveal();
  const primaryBtn = useMagnetic();
  const ghostBtn = useMagnetic();
  const heroRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 601px)").matches) return;
    const photos = document.getElementById("heroPhotos");
    const hero = heroRef.current;
    if (!photos || !hero) return;

    function onScroll() {
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      photos.style.transform = `translateY(${rect.top * -0.06}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="beranda" ref={heroRef}>
      <span className="hero-ghost" aria-hidden="true">CALMA</span>
      <div className="hero-blob hero-blob--a" aria-hidden="true"></div>
      <div className="hero-blob hero-blob--b" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy" ref={copyRef} data-reveal>
          <p className="eyebrow">Capstone Project — S1 Sistem Informasi</p>
          <h1 className="hero-title">Kelompok <span>Calma</span></h1>
          <p className="hero-desc">
            Kolaborasi peminatan <strong>Enterprise Information System Design (EISD)</strong>
            {" "}dan <strong>Enterprise Information Management (EIM)</strong>
          </p>
          <div className="hero-actions">
            <a
              href="#proyek"
              className="btn btn-primary"
              ref={primaryBtn.ref}
              onMouseMove={primaryBtn.onMouseMove}
              onMouseLeave={primaryBtn.onMouseLeave}
            >
              Lihat Proyek
            </a>
            <a
              href="#tim"
              className="btn btn-ghost"
              ref={ghostBtn.ref}
              onMouseMove={ghostBtn.onMouseMove}
              onMouseLeave={ghostBtn.onMouseLeave}
            >
              Kenali Tim
            </a>
          </div>
        </div>

        <div className="hero-photos" ref={photosRef} data-reveal data-reveal-delay="1" id="heroPhotos">
          <PhotoCard member={members[0]} position="top" />
          <PhotoCard member={members[1]} position="left" />
          <PhotoCard member={members[2]} position="right" />
        </div>

        <div className="hero-avatar-stack" ref={avatarStackRef} data-reveal data-reveal-delay="1">
          <div className="stack-row">
            {members.map((m) => (
              <span className="stack-avatar" key={m.initial}>
                {m.photo ? (
                  <img className="avatar-img" src={m.photo} alt={m.name} />
                ) : (
                  m.initial
                )}
              </span>
            ))}
          </div>
          <span className="stack-label">Tim Kami</span>
        </div>
      </div>

      <a href="#proyek" className="scroll-cue" aria-label="Gulir ke bawah">
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="scroll-cue-chevron scroll-cue-chevron--1">
          <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="scroll-cue-chevron scroll-cue-chevron--2">
          <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
