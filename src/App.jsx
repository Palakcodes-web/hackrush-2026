import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, Line } from "@react-three/drei";
import {
  ArrowUpRight, ArrowRight, Zap, Cpu, Wallet,
  HeartPulse, ShieldCheck, Leaf, Trophy, Users,
  CalendarDays, Globe2, Menu, X, Clock3, Target,
  ChevronRight
} from "lucide-react";
import "./App.css";

const tracks = [
  {
    number: "01", title: "AI, Machine Learning & Generative AI",
    desc: "Build intelligent solutions that transform how we live and work.",
    icon: Cpu, color: "#55d9ff"
  },
  {
    number: "02", title: "Fintech & Blockchain",
    desc: "Reimagine finance with secure, transparent digital innovation.",
    icon: Wallet, color: "#a78bfa"
  },
  {
    number: "03", title: "HealthTech & Biotech",
    desc: "Create technology that advances healthcare and biotechnology.",
    icon: HeartPulse, color: "#ff83b4"
  },
  {
    number: "04", title: "Cybersecurity & Digital Safety",
    desc: "Make the digital world safer, smarter and more resilient.",
    icon: ShieldCheck, color: "#70e8b0"
  },
  {
    number: "05", title: "Smart Cities & Sustainability",
    desc: "Engineer sustainable cities and a better future for everyone.",
    icon: Leaf, color: "#d5e77a"
  }
];

const timeline = [
  ["09 NOV 2026", "Announcement", "The HackRush journey begins."],
  ["09 NOV 2026", "Idea / PPT Submission Begins", "Teams can begin submitting their ideas."],
  ["16 NOV 2026", "Idea / PPT Submission Ends", "Final deadline for idea and PPT submissions."],
  ["18 NOV 2026", "Top 80 Teams Announced", "Shortlisted teams move forward."],
  ["19 NOV 2026", "Mentorship Round Begins", "Mentoring and guidance for selected teams."],
  ["20 NOV 2026", "Mentorship Round Ends", "Conclusion of the mentorship round."],
  ["21 NOV 2026", "Top 30 Teams Announced", "The final 30 teams are revealed."],
  ["22 NOV 2026", "Finale Round · Online", "The final round of HackRush 2026."],
  ["25 NOV 2026", "Result Declaration", "The final results are announced."]
];

const awards = [
  ["01", "First Position", "Internship Opportunity · Credits · Goodies"],
  ["02", "Second Position", "Internship Opportunity · Credits · Goodies"],
  ["03", "Third Position", "Internship Opportunity · Credits · Goodies"],
  ["★", "Best Female Team", "Goodies"],
  ["✦", "Most Promising Startup Idea", "Goodies"]
];



function NeuralCore() {
  const nodes = [
    [1.5, 0.5, 0],
    [-1.5, 0.5, 0],
    [0.5, 1.5, 0],
    [-0.5, -1.5, 0],
    [1, -1, 0.5],
    [-1, -1, 0.5],
    [0, 0.5, 1.5],
    [0, -0.5, -1.5],
  ];

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
      <group>
        <mesh>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#315bff"
            emissive="#174bff"
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>

        <mesh>
          <icosahedronGeometry args={[0.65, 2]} />
          <meshStandardMaterial
            color="#42dcff"
            emissive="#168dff"
            emissiveIntensity={1.5}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        {nodes.map((point, i) => (
          <group key={i}>
            <Line
              points={[[0, 0, 0], point]}
              color="#43dfff"
              lineWidth={1.5}
              transparent
              opacity={0.8}
            />
            <mesh position={point}>
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshBasicMaterial color="#8beaff" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

function Orb() {
  return (
    <div className="orb-wrap">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[3, 3, 4]} intensity={25} color="#37dfff" />
        <pointLight position={[-3, -2, 3]} intensity={20} color="#895bff" />

        <NeuralCore />

        <Sparkles count={80} scale={4} size={2} speed={0.4} color="#8bdfff" />
      </Canvas>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon"><Zap size={19} fill="currentColor" /></span>
          <span>HACK<span className="brand-accent">RUSH</span><small>2026</small></span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {["home", "about", "tracks", "timeline", "awards"].map(item => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo("about")}>
            Explore event <ArrowUpRight size={15} />
          </button>
        </div>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="live-dot" /> THE FLAGSHIP HACKATHON OF TECH4HACK · IGDTUW
          </div>
          <h1>
            THINK BEYOND.
            <br />
            <span>BUILD THE</span>
            <br />
            <span className="gradient-text">IMPOSSIBLE.</span>
          </h1>
          <p className="hero-description">
            One arena. Limitless possibilities. Bring your boldest ideas
            to life at HackRush 2026.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollTo("about")}>
              Explore HackRush <ArrowUpRight size={17} />
            </button>
            <button className="secondary-btn" onClick={() => scrollTo("tracks")}>
              Discover tracks <ArrowRight size={17} />
            </button>
          </div>
          <div className="hero-meta">
            <span><Globe2 size={16} /> ONLINE HACKATHON</span>
            <span><Users size={16} /> TEAMS OF 3–5</span>
            <span><CalendarDays size={16} /> NOVEMBER 2026</span>
          </div>
        </div>
        <div className="hero-visual">
          <Orb />
          <div className="orbit-label label-one">IDEATE <span>✦</span></div>
          <div className="orbit-label label-two">INNOVATE <span>✧</span></div>
          <div className="floating-tag"><span /> INNOVATION MODE: ON</div>
          <div className="hero-index">01 / 05 <span>THE INNOVATION ARENA</span></div>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
          <span>EST. 2026 · IGDTUW</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-kicker">01 — THE EVENT</span>
          <h2>Ideas don't change the world.<br /><span className="gradient-text">Builders do.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p>
              HackRush 2026 is the flagship hackathon of Tech4Hack,
              IGDTUW — bringing together creative minds to turn
              ambitious ideas into meaningful innovation.
            </p>
            <p>
              An online hackathon for Engineering and B-School students,
              welcoming participants from Arts, Commerce, Sciences and
              other academic backgrounds.
            </p>
<p>
  Registration Deadline: 17 August 2026, 11:59 PM.
</p>
<div className="event-note">
              <Zap size={19} />
              <span>Think creatively. Collaborate boldly. Build what matters.</span>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><span>FORMAT</span><strong>ONLINE</strong><small>Hackathon experience</small></div>
            <div className="stat-card"><span>TEAM SIZE</span><strong>03–05</strong><small>Members per team</small></div>
            <div className="stat-card"><span>TRACKS</span><strong>05</strong><small>Innovation domains</small></div>
            <div className="stat-card"><span>FINAL ROUND</span><strong>22 NOV</strong><small>2026 · Online</small></div>
          </div>
        </div>
      </section>

      <section className="tracks section" id="tracks">
        <div className="section-heading">
          <span className="section-kicker">02 — EXPLORE THE DOMAINS</span>
          <h2>Five tracks.<br /><span className="gradient-text">Infinite possibilities.</span></h2>
          <p>Choose a challenge. Challenge the ordinary. Create the extraordinary.</p>
        </div>
        <div className="tracks-grid">
          {tracks.map(({ number, title, desc, icon: Icon, color }) => (
            <article className="track-card" key={number} style={{ "--track-color": color }}>
              <div className="track-top"><span>{number} / 05</span><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="track-bottom"><span>EXPLORE DOMAIN</span><ChevronRight size={17} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section section" id="timeline">
        <div className="section-heading">
          <span className="section-kicker">03 — THE JOURNEY</span>
          <h2>Every moment.<br /><span className="gradient-text">A new milestone.</span></h2>
          <p>Your roadmap through HackRush 2026.</p>
        </div>
        <div className="timeline">
          {timeline.map(([date, title, desc], i) => (
            <div className="timeline-item" key={title}>
              <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
              <div className="timeline-content">
                <span className="timeline-date"><Clock3 size={13} /> {date}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <span className="timeline-arrow"><ArrowUpRight size={18} /></span>
            </div>
          ))}
        </div>
      </section>

      <section className="eligibility section" id="eligibility">
        <div className="eligibility-card">
          <div>
            <span className="section-kicker">04 — WHO CAN PARTICIPATE?</span>
            <h2>Every background.<br /><span className="gradient-text">One innovation spirit.</span></h2>
            <p>
              Open to Arts, Commerce, Sciences and other disciplines,
              Undergraduate and Postgraduate students, Engineering
              students, and Management students.
            </p>
          </div>
          <div className="eligibility-visual"><Target size={100} strokeWidth={0.8} /><span>YOUR IDEA<br />MATTERS HERE</span></div>
        </div>
      </section>

      <section className="awards section" id="awards">
        <div className="section-heading">
          <span className="section-kicker">05 — RECOGNITION</span>
          <h2>Build boldly.<br /><span className="gradient-text">Get recognised.</span></h2>
          <p>Celebrating ideas, teams and outstanding contributions.</p>
        </div>
        <div className="awards-list">
          {awards.map(([number, title, reward]) => (
            <div className="award-row" key={title}>
              <span className="award-number">{number}</span>
              <Trophy size={20} className="award-icon" />
              <h3>{title}</h3>
              <p>{reward}</p>
              <ArrowUpRight size={18} className="award-arrow" />
            </div>
          ))}
        </div>
        <div className="monthly-awards">
  <div><span className="section-kicker">MONTHLY RECOGNITION · HEADS</span><h3>Certificate of Excellence</h3><p>Star of the Month Head</p></div>
  <div><span className="section-kicker">MONTHLY RECOGNITION · MEMBERS</span><h3>Certificate of Recognition</h3><p>Star of the Month Member</p></div>
</div>

<div className="event-note">
  <CalendarDays size={19} />
  <span>
    Award Ceremony: Offline at IGDTUW. Date to be announced.
  </span>
</div>

</section>

      <section className="final-cta">
        <div className="cta-glow" />
        <span className="section-kicker">THE FUTURE IS BUILT BY YOU</span>
        <h2>DON'T JUST<br /><span className="gradient-text">IMAGINE IT.</span></h2>
        <p>Make your next big idea the beginning of something extraordinary.</p>
        <button className="primary-btn" onClick={() => scrollTo("home")}>
          Back to the top <ArrowUpRight size={17} />
        </button>
        <div className="cta-decoration">HACKRUSH<span>2026</span></div>
      </section>

      <footer>
        <a className="brand" href="#home"><span className="brand-icon"><Zap size={17} fill="currentColor" /></span>HACK<span className="brand-accent">RUSH</span><small>2026</small></a>
        <p>THE INNOVATION ARENA · TECH4HACK · IGDTUW</p>
        <span>BUILT FOR THE BOLD. © 2026</span>
      </footer>
    </main>
  );
}
export default App;


