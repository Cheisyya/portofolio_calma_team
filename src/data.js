import adityaPhoto from "./assets/team/aditya.jpg";
import khadafiPhoto from "./assets/team/khadafi.jpg";
import cheisyaPhoto from "./assets/team/cheisya.jpg";
import baraHidroPhoto from "./assets/projects/bara-hidro.jpg";
import baraHidroPhoto2 from "./assets/projects/bara-hidro-2.jpg";
import voltspacePhoto from "./assets/projects/voltspace.jpg";
import voltspacePhoto2 from "./assets/projects/voltspace-2.jpg";

export const members = [
  {
    initial: "D",
    photo: adityaPhoto,
    name: "M Aditya Djalil",
    nim: "102022300225",
    kelas: "SI-47-10",
    peminatan: "Peminatan EISD",
    bio: "-",
    highlights: [
      "Cyber Security Intern – PT. PLN (Persero) Head Office",
      "Barahidro - IoT Hydroponic Monitoring System",
      "VoltSpace - Smart Energy Monitoring System",
    ],
    cvUrl: "https://drive.google.com/file/d/1ZisnZoFoDptAVK4yBBwgefT8-6-wB54u/view?usp=sharing",
  },
  {
    initial: "K",
    photo: khadafiPhoto,
    name: "M Khadafi Adi Saputra",
    nim: "1020223300014",
    kelas: "SI-47-10",
    peminatan: "Peminatan EIM",
    bio: "-",
    highlights: [
      "Cyber Security Intern – PT. PLN (Persero) Head Office",
      "GiziTrack - Platform untuk mendukung operasional MBG",
    ],
    cvUrl: "https://drive.google.com/file/d/1ZvhSK-0KZNkIAWpZfS_odXlAruboNpfa/view?usp=sharing",
  },
  {
    initial: "V",
    photo: cheisyaPhoto,
    name: "Cheisya Valda W",
    nim: "102022330316",
    kelas: "SI-47-09",
    peminatan: "Peminatan EISD",
    bio: "-",
    highlights: [
      "Internship as Junior Backend Developer - PT. Pos Indonesia",
      "Object-Oriented Programming Practicum Assistant",
      "Database System Practicum Assistant",
    ],
    cvUrl: "https://drive.google.com/file/d/19B2zucGK6FF73bJrTfTsek3wPIQV9xYh/view?usp=sharing",
  },
];

export const projects = [
  {
    index: "01",
    monogram: "SI",
    photos: [baraHidroPhoto, baraHidroPhoto2],
    title: "Barahidro – Sistem Monitoring Hidroponik Berbasis IoT",
    desc: "Mengembangkan sistem berbasis IoT untuk memantau kondisi air dan nutrisi pada tanaman hidroponik.",
    variant: "a",
  },
  {
    index: "02",
    monogram: "DE",
    photos: [voltspacePhoto, voltspacePhoto2],
    title: "VoltSpace – Sistem Monitoring Energi Berbasis IoT",
    desc: "Mengembangkan sistem berbasis IoT dan web untuk memantau konsumsi listrik serta mengontrol perangkat secara jarak jauh.",
    variant: "b",
  },
];
