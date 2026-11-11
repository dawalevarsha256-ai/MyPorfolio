import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone,
  Sparkles, GraduationCap
} from "lucide-react";
import SiteNav from "./components/SiteNav";
import SectionHeading from "./components/SectionHeading";
import InfoCard from "./components/InfoCard";
import { awards, certifications, experiences, profile, skills } from "./data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

function App() {
  return (
    <div className="min-h-screen bg-canvas text-body">
      <SiteNav />
      <main>
        <section id="home" className="section-shell scroll-mt-24 pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-accent shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> OPEN TO LEARNING & OPPORTUNITIES
              </div>
              <p className="mb-3 font-heading text-lg font-semibold text-accent">{profile.eyebrow}</p>
              <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl xl:text-7xl">
                {profile.name}<span className="text-accent">.</span>
              </h1>
              <h2 className="mt-5 max-w-xl font-heading text-xl font-semibold leading-snug text-slate-700 sm:text-2xl">{profile.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.highlights.map((item) => <span key={item} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">{item}</span>)}
              </div>
              <p className="mt-7 max-w-xl text-base leading-8 text-body">{profile.intro}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} className="text-accent" />{profile.location}</div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button-primary" href="#certifications">Explore portfolio <ArrowDown size={17} /></a>
                <a className="button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a className="button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              </div>
              <div className="mt-12 grid max-w-lg grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                <div><p className="font-heading text-lg font-bold text-ink">AI / ML</p><p className="mt-1 text-xs text-slate-500">Area of study</p></div>
                <div><p className="font-heading text-lg font-bold text-ink">2024–2028</p><p className="mt-1 text-xs text-slate-500">Undergraduate journey</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl border border-blue-200" />
              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-blue-100/70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-surface shadow-lift">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.classList.add("hidden");
                    event.currentTarget.parentElement?.classList.add("photo-fallback");
                  }}
                />
                <div className="photo-fallback-content hidden min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-accent">VD</div>
                  <p className="font-heading text-xl font-bold text-ink">{profile.name}</p>
                  <p className="text-sm text-body">Add your profile photo to <code>public/images/</code></p>
                </div>
              </div>
              <div className="absolute -bottom-7 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-lift sm:right-[-24px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-accent"><Sparkles size={20} /></div>
                  <div><p className="text-sm font-bold text-ink">Curious by nature</p><p className="text-xs text-slate-500">Building, learning, growing</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-14">
          <div className="section-shell">
            <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-center">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-accent">A little about me</p>
                <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">Technology meets curiosity.</h2>
              </div>
              <div>
                <p className="leading-7 text-body">I am pursuing my B.Tech at {profile.university}, with a focus on Computer Science Engineering and AI/ML. My interests span software development and hands-on electronics, including microcontroller-based work.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => <span key={skill} className="rounded-lg border border-slate-200 bg-canvas px-3 py-2 text-xs font-medium text-slate-600">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-shell scroll-mt-24 py-20 sm:py-24">
          <SectionHeading kicker="Learning journey" title="Certifications" description="A collection of courses and credentials documenting my ongoing learning. Open a certificate to view its verification page." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            
{certifications.map((item, index) => (
  <motion.div
    key={item.image}
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    transition={{ delay: (index % 3) * 0.06 }}
  >
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">

      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={`${item.organization} certificate`}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-ink">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-body">
          {item.organization}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {item.date}
        </p>
      </div>

    </article>
  </motion.div>
))}

          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">The supplied certificate filenames are listed in the project configuration. Replace generic titles and dates with the exact course details when confirmed.</p>
        </section>

        <section id="awards" className="scroll-mt-24 bg-slate-100/80 py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading kicker="Recognition" title="Awards & honours" description="Selected achievement highlights. Add the official award names, organizers, dates, and descriptions in the portfolio data file." />
            <div className="grid gap-6 md:grid-cols-2">
              {awards.map((item, index) => (
                <motion.div key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }}>
                  <InfoCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell scroll-mt-24 py-20 sm:py-24">
          <SectionHeading kicker="Beyond the classroom" title="Experience & conferences" description="Events, conferences, and experiences that contribute to my professional growth." />
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((item) => <InfoCard key={item.title} {...item} />)}
            <article className="flex flex-col justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent"><GraduationCap size={21} /></div>
              <h3 className="font-heading text-xl font-bold text-ink">{profile.degree}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-600">{profile.university}</p>
              <p className="mt-2 text-sm text-slate-500">{profile.educationDates}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-ink py-20 text-white sm:py-24">
          <div className="section-shell">
            <div className="grid gap-12 md:grid-cols-[1fr_.9fr] md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-blue-300">Get in touch</p>
                <h2 className="max-w-xl font-heading text-4xl font-bold leading-tight sm:text-5xl">Let&apos;s build something meaningful.</h2>
                <p className="mt-5 max-w-lg leading-7 text-slate-300">Have an opportunity, collaboration, or idea to discuss? I&apos;d be happy to connect.</p>
                <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-ink transition hover:bg-blue-50">
                  <Mail size={17} /> Email me <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="space-y-3">
                <a href={`mailto:${profile.email}`} className="contact-row"><Mail size={19} /><span><small>Email</small>{profile.email}</span><ArrowUpRight className="ml-auto" size={17} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row"><Linkedin size={19} /><span><small>LinkedIn</small>Connect professionally</span><ArrowUpRight className="ml-auto" size={17} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row"><Github size={19} /><span><small>GitHub</small>Explore my repositories</span><ArrowUpRight className="ml-auto" size={17} /></a>
                {profile.phone && <a href={`tel:${profile.phone}`} className="contact-row"><Phone size={19} /><span><small>Phone</small>{profile.phone}</span><ArrowUpRight className="ml-auto" size={17} /></a>}
                <div className="contact-row !cursor-default"><MapPin size={19} /><span><small>Location</small>{profile.location}</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink px-6 pb-8 text-center text-xs text-slate-400">
        <div className="section-shell border-t border-slate-700 pt-6">© {new Date().getFullYear()} {profile.name}. Designed with care.</div>
      </footer>
    </div>
  );
}

export default App;
