import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronRight, ArrowRight, Play, Star, CheckCircle,
  Code2, Brain, Cloud, Shield, BarChart3, Users, Award,
  Briefcase, BookOpen, Rocket, Target, Phone, Mail, MapPin,
  MessageCircle, Linkedin, Twitter, Facebook, Instagram, Youtube,
  ChevronLeft, Monitor, Globe, TrendingUp, GraduationCap,
  Building2, FileText, Zap, Clock, UserCheck, Trophy
} from "lucide-react";

/* ── DATA ── */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Internship", href: "#internship" },
  { label: "Placements", href: "#placements" },
  { label: "Projects", href: "#projects" },
  { label: "Corporate Training", href: "#corporate" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const COURSES = [
  { icon: Brain,    name: "Data Science & AI",       duration: "6 Months", techs: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],    color: "#F97316" },
  { icon: Code2,    name: "Full Stack Development",   duration: "5 Months", techs: ["React", "Node.js", "MongoDB", "Express"],           color: "#3B82F6" },
  { icon: Cloud,    name: "DevOps & Cloud",           duration: "4 Months", techs: ["AWS", "Docker", "Kubernetes", "CI/CD"],             color: "#8B5CF6" },
  { icon: BarChart3,name: "Data Analytics",           duration: "3 Months", techs: ["Power BI", "Tableau", "SQL", "Excel"],              color: "#10B981" },
  { icon: Monitor,  name: "Python Programming",       duration: "2 Months", techs: ["Core Python", "OOP", "Flask", "Django"],            color: "#F59E0B" },
  { icon: Shield,   name: "Cyber Security",           duration: "4 Months", techs: ["Ethical Hacking", "Penetration Testing", "Network Security"], color: "#EF4444" },
];

const JOURNEY_STEPS = [
  { icon: UserCheck, label: "Enroll",          desc: "Join the program"    },
  { icon: BookOpen,  label: "Training",        desc: "Expert-led sessions" },
  { icon: FileText,  label: "Assignments",     desc: "Practice & assess"   },
  { icon: Rocket,    label: "Live Projects",   desc: "Real-world work"     },
  { icon: Users,     label: "Mock Interviews", desc: "Interview prep"      },
  { icon: Trophy,    label: "Placement",       desc: "Get hired"           },
];

const PROJECTS = [
  { name: "AI Chatbot",                  desc: "Intelligent conversational assistant using NLP and ML models for customer support automation.",      techs: ["Python","NLP","TensorFlow"],         category: "AI"          },
  { name: "Rice Grain Classification",   desc: "Computer vision model to classify rice grain varieties with 98% accuracy using CNN.",               techs: ["Python","OpenCV","CNN"],             category: "Data Science" },
  { name: "Customer Churn Prediction",   desc: "ML model predicting customer churn with actionable insights for retention strategies.",              techs: ["Python","Scikit-learn","XGBoost"],   category: "Data Science" },
  { name: "Sales Forecasting",           desc: "Time series forecasting model for retail sales prediction using LSTM networks.",                     techs: ["Python","LSTM","Pandas"],            category: "AI"          },
  { name: "E-Commerce Website",          desc: "Full-featured online store with cart, payments, and admin dashboard built with MERN stack.",         techs: ["React","Node.js","MongoDB"],         category: "Full Stack"   },
  { name: "DevOps CI/CD Pipeline",       desc: "Automated deployment pipeline with containerization, monitoring and alerting setup.",                techs: ["Jenkins","Docker","Kubernetes"],      category: "DevOps"       },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma",  role: "Data Scientist at TCS",             avatar: "RS", rating: 5, feedback: "Vibrant Infosystems transformed my career completely. The practical approach and industry expert trainers helped me land my dream job within 2 months of course completion." },
  { name: "Priya Patel",   role: "Full Stack Developer at Infosys",   avatar: "PP", rating: 5, feedback: "The live projects and mock interviews were game changers. I felt confident walking into any interview after completing the Full Stack Development course here." },
  { name: "Amit Kumar",    role: "DevOps Engineer at Wipro",          avatar: "AK", rating: 5, feedback: "Best investment I made in my career. The DevOps & Cloud course gave me hands-on experience with real tools used in the industry. Highly recommended!" },
  { name: "Sneha Reddy",   role: "AI Engineer at Cognizant",          avatar: "SR", rating: 5, feedback: "The AI course content is extremely up-to-date with industry trends. The faculty is always available and the placement support is exceptional." },
];

const BLOGS = [
  { category: "Data Science",    title: "Top 10 Python Libraries Every Data Scientist Must Know in 2024",              date: "June 10, 2024",  readTime: "5 min read" },
  { category: "AI",              title: "How Large Language Models Are Revolutionizing Software Development",           date: "June 5, 2024",   readTime: "7 min read" },
  { category: "DevOps",          title: "Kubernetes vs Docker Swarm: Which Container Orchestration Tool to Choose?",   date: "May 28, 2024",   readTime: "6 min read" },
  { category: "Career Guidance", title: "How to Build a Winning Data Science Portfolio That Gets You Hired",           date: "May 20, 2024",   readTime: "8 min read" },
];

const STATS = [
  { value: "1000+", label: "Students Trained",    icon: GraduationCap },
  { value: "100+",  label: "Workshops Conducted", icon: Building2     },
  { value: "50+",   label: "Industry Projects",   icon: Briefcase     },
  { value: "95%",   label: "Placement Rate",      icon: TrendingUp    },
];

const WHY_CHOOSE = [
  { icon: Users,    title: "Industry Expert Trainers",   desc: "Learn from professionals with 10+ years of real industry experience."       },
  { icon: Rocket,   title: "Live Projects",              desc: "Work on actual client projects to build a strong portfolio."                 },
  { icon: Briefcase,title: "Internship Opportunities",   desc: "Guaranteed internship program with top IT companies."                       },
  { icon: Trophy,   title: "Placement Assistance",       desc: "Dedicated placement cell with 95% placement success rate."                  },
  { icon: Target,   title: "Career Guidance",            desc: "One-on-one mentoring and personalized career roadmap sessions."             },
  { icon: Award,    title: "Industry Certifications",    desc: "Globally recognized certifications to boost your resume."                   },
];

/* ── COMPONENTS ── */

function VibrantLogo({ size }) {
  const large = size === "large";
  return (
    <div className="flex items-center gap-2">
      <svg width={large ? 68 : 48} height={large ? 62 : 44} viewBox="0 0 48 44" fill="none">
        {/* orange left bracket */}
        <path d="M18 4 L4 12 L4 28 L18 36 L14 30 L8 26 L8 14 L14 10 Z" fill="#F97316" opacity="0.15"/>
        <path d="M18 4 L14 10 L8 14 L8 26 L14 30 L18 36" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M10 18 L6 20 L10 22" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* navy right bracket */}
        <path d="M30 4 L44 12 L44 28 L30 36 L34 30 L40 26 L40 14 L34 10 Z" fill="#2D3A8C" opacity="0.12"/>
        <path d="M30 4 L34 10 L40 14 L40 26 L34 30 L30 36" stroke="#2D3A8C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M38 18 L42 20 L38 22" stroke="#2D3A8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* slash */}
        <line x1="22" y1="32" x2="26" y2="8" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`font-bold tracking-tight ${large ? "text-3xl" : "text-xl"}`}>
          <span style={{ color: "#F97316" }}>Vibrant</span>{" "}
          <span style={{ color: "#2D3A8C" }}>Infosystems</span>
        </span>
        <span className={`text-gray-500 tracking-wide font-normal ${large ? "text-sm" : "text-xs"}`}>
          a company of VSpireInnovations
        </span>
      </div>
    </div>
  );
}

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let val = 0;
        const step = (target / 2000) * 16;
        const timer = setInterval(() => {
          val += step;
          if (val >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(val));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className="text-4xl font-bold text-white">{count}{suffix}</div>;
}

/* ── MAIN APP ── */

export default function App() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const filtered = projectFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">

      {/* ══ NAVBAR ══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0F172A] transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <VibrantLogo size="default" />

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <button key={link.label} onClick={() => navTo(link.href)}
                  className="text-gray-300 hover:text-[#F97316] transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-white/5">
                  {link.label}
                </button>
              ))}
              <button onClick={() => navTo("#contact")}
                className="ml-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-lg">
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>

            {/* Hamburger */}
            <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(v => !v)}>
              {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-[#0F172A] border-t border-white/10 px-6 py-4">
            {NAV_LINKS.map(link => (
              <button key={link.label} onClick={() => navTo(link.href)}
                className="block w-full text-left text-gray-300 hover:text-[#F97316] py-3 text-sm font-medium border-b border-white/5">
                {link.label}
              </button>
            ))}
            <button onClick={() => navTo("#contact")} className="mt-4 w-full bg-[#F97316] text-white font-semibold py-3 rounded-lg">
              Enroll Now
            </button>
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" className="min-h-screen bg-[#0F172A] relative overflow-hidden flex items-center pt-20">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#F97316]/5 blur-3xl"/>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl"/>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}/>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full px-4 py-2 mb-6">
                <Zap size={14} className="text-[#F97316]"/>
                <span className="text-[#F97316] text-sm font-semibold uppercase tracking-wide">Learn • Build • Innovate</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6">
                Build Your Career in the{" "}<span className="text-[#F97316]">IT Industry</span>
              </h1>
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Industry-oriented training in Data Science, AI, Full Stack Development, DevOps, Cloud Computing and Data Analytics with 100% practical learning and placement assistance.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={() => navTo("#courses")}
                  className="bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-all shadow-xl hover:-translate-y-0.5">
                  Explore Courses <ChevronRight size={20}/>
                </button>
                <button onClick={() => navTo("#contact")}
                  className="border-2 border-white/20 hover:border-[#F97316] text-white hover:text-[#F97316] font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-all hover:bg-[#F97316]/5">
                  <Play size={18} className="fill-current"/> Book Free Demo
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[{ n:"1000+", l:"Students" },{ n:"95%", l:"Placement" },{ n:"50+", l:"Projects" }].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-black text-[#F97316]">{s.n}</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: code window visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[520px] mx-auto">
                <div className="absolute inset-12 rounded-full bg-[#F97316]/10 blur-2xl"/>
                <div className="absolute inset-8 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="p-8 w-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"/>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                      <div className="w-3 h-3 rounded-full bg-green-500"/>
                      <span className="ml-2 text-gray-500 text-xs" style={{ fontFamily:"monospace" }}>training.py</span>
                    </div>
                    <div className="text-sm space-y-2" style={{ fontFamily:"monospace" }}>
                      <div><span className="text-purple-400">import</span> <span className="text-blue-300">vibrant</span> <span className="text-purple-400">as</span> <span className="text-green-300">vi</span></div>
                      <div><span className="text-gray-500"># Start your journey</span></div>
                      <div><span className="text-blue-300">career</span> <span className="text-white">=</span> <span className="text-green-300">vi</span><span className="text-white">.</span><span className="text-yellow-300">train</span><span className="text-white">(</span></div>
                      <div className="pl-4"><span className="text-orange-300">course</span><span className="text-white">=</span><span className="text-green-400">"Data Science"</span><span className="text-white">,</span></div>
                      <div className="pl-4"><span className="text-orange-300">mode</span><span className="text-white">=</span><span className="text-green-400">"practical"</span></div>
                      <div><span className="text-white">)</span></div>
                      <div className="mt-2"><span className="text-blue-300">career</span><span className="text-white">.</span><span className="text-yellow-300">get_placement</span><span className="text-white">()</span></div>
                      <div className="mt-1 text-green-400 text-xs">Offer Letter Received!</div>
                    </div>
                  </div>
                </div>
                {[
                  { label:"Python", style:{ top:"5%",  left:"5%"  }, color:"#3B82F6" },
                  { label:"AI / ML",style:{ top:"5%",  right:"5%" }, color:"#8B5CF6" },
                  { label:"AWS",    style:{ bottom:"15%",left:"2%" }, color:"#F59E0B" },
                  { label:"React",  style:{ bottom:"5%",right:"5%" }, color:"#06B6D4" },
                ].map(b => (
                  <div key={b.label}
                    className="absolute bg-[#1E293B] border border-white/10 rounded-xl px-4 py-2 text-sm font-bold shadow-xl"
                    style={{ ...b.style, color: b.color }}>
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Why Choose <span className="text-[#F97316]">Vibrant Infosystems</span>?
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              We deliver industry-focused education that transforms students into job-ready professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map(item => (
              <div key={item.title}
                className="group bg-white border border-gray-100 hover:border-[#F97316]/30 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <item.icon size={26} className="text-[#F97316] group-hover:text-white transition-colors duration-300"/>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 bg-[#F97316]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={26} className="text-[#F97316]"/>
                </div>
                <Counter target={parseInt(stat.value.replace(/\D/g,""))} suffix={stat.value.replace(/[0-9]/g,"")}/>
                <div className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section id="courses" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Our Courses</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Explore Our Top <span className="text-[#F97316]">Courses</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              Industry-aligned programs designed with expert practitioners to make you job-ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map(course => (
              <div key={course.name}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#F97316]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="h-2" style={{ backgroundColor: course.color }}/>
                <div className="p-7">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${course.color}18` }}>
                    <course.icon size={28} style={{ color: course.color }}/>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{course.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Clock size={14}/>
                    <span>Duration: <strong className="text-[#0F172A]">{course.duration}</strong></span>
                  </div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.techs.map(t => (
                      <span key={t} className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => navTo("#contact")}
                    className="flex items-center gap-2 font-bold text-sm transition-colors"
                    style={{ color: course.color }}>
                    Learn More <ArrowRight size={16}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEARNING JOURNEY ══ */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize:"28px 28px" }}/>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Learning Journey</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Your Path to <span className="text-[#F97316]">Success</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-[#F97316] to-[#F97316]/20"/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {JOURNEY_STEPS.map((step, idx) => (
                <div key={step.label} className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-[#F97316] flex items-center justify-center mx-auto mb-4 shadow-xl relative z-10">
                    <step.icon size={30} className="text-white"/>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{step.label}</h4>
                  <p className="text-gray-400 text-xs">{step.desc}</p>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center lg:hidden">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Student Work</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Student <span className="text-[#F97316]">Projects</span> Showcase
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["All","Data Science","AI","Full Stack","DevOps"].map(f => (
              <button key={f} onClick={() => setProjectFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${projectFilter === f ? "bg-[#F97316] text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(proj => (
              <div key={proj.name}
                className="group bg-white border border-gray-100 hover:border-[#F97316]/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center relative">
                  <Code2 size={48} className="text-[#F97316]/40"/>
                  <span className="absolute top-3 right-3 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">{proj.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{proj.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.techs.map(t => (
                      <span key={t} className="bg-[#F97316]/10 text-[#F97316] text-xs px-3 py-1 rounded-full font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTERNSHIP ══ */}
      <section id="internship" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Internship Programs</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
                Gain Real <span className="text-[#F97316]">Industry</span> Experience
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Our internship programs bridge the gap between learning and working. Get hands-on experience with real clients and live projects.
              </p>
              <div className="space-y-4">
                {["Data Science Internship","Full Stack Internship","DevOps Internship","AI & ML Internship"].map(prog => (
                  <div key={prog} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-[#F97316]/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-[#F97316]"/>
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">{prog}</p>
                      <p className="text-gray-400 text-sm">3-6 Months • Certificate • Live Projects</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => navTo("#contact")}
                className="mt-8 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-all shadow-xl hover:-translate-y-0.5">
                Apply for Internship <ArrowRight size={18}/>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock,    title:"3-6 Months",   subtitle:"Program Duration"   },
                { icon: Rocket,   title:"Live Projects", subtitle:"Real Client Work"   },
                { icon: Award,    title:"Certificate",   subtitle:"Industry Recognized"},
                { icon: Users,    title:"Mentorship",    subtitle:"Expert Guidance"    },
              ].map(item => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center hover:border-[#F97316]/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon size={22} className="text-[#F97316]"/>
                  </div>
                  <p className="font-black text-[#0F172A] text-xl">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLACEMENTS ══ */}
      <section id="placements" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Placements</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Placement <span className="text-[#F97316]">Assistance</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">End-to-end placement support to help you land your dream job.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              { icon: FileText, title:"Resume Building",       desc:"Craft an ATS-optimized resume that gets noticed by top recruiters and companies."                },
              { icon: Linkedin, title:"LinkedIn Optimization", desc:"Build a powerful LinkedIn profile that attracts recruiters and opportunities."                    },
              { icon: Brain,    title:"Aptitude Preparation",  desc:"Quantitative, logical, and verbal aptitude training for campus and off-campus drives."            },
              { icon: Monitor,  title:"Mock Interviews",       desc:"Practice with real interview scenarios conducted by industry professionals."                       },
              { icon: Users,    title:"HR Preparation",        desc:"Behavioral interview coaching and HR round preparation sessions."                                 },
              { icon: Code2,    title:"Technical Interviews",  desc:"Domain-specific technical round preparation and coding challenge practice."                       },
            ].map(item => (
              <div key={item.title}
                className="flex gap-4 bg-[#F8FAFC] hover:bg-white border border-transparent hover:border-[#F97316]/20 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg group">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316] transition-colors">
                  <item.icon size={22} className="text-[#F97316] group-hover:text-white transition-colors"/>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring partners */}
          <div className="bg-[#0F172A] rounded-3xl p-10 text-center">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">Our Students Work At</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["TCS","Infosys","Wipro","Cognizant","Accenture","HCL","Tech Mahindra","Capgemini"].map(co => (
                <div key={co}
                  className="bg-white/5 hover:bg-[#F97316]/10 border border-white/10 hover:border-[#F97316]/30 rounded-xl px-6 py-3 text-white font-bold text-sm transition-all">
                  {co}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Success Stories</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              What Our <span className="text-[#F97316]">Students</span> Say
            </h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <div className="flex gap-1 mb-6">
                {[...Array(TESTIMONIALS[testimonialIdx].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#F97316] text-[#F97316]"/>
                ))}
              </div>
              <blockquote className="text-xl text-[#0F172A] leading-relaxed mb-8 font-medium">
                "{TESTIMONIALS[testimonialIdx].feedback}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea6c0a] flex items-center justify-center text-white font-black text-lg">
                  {TESTIMONIALS[testimonialIdx].avatar}
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-lg">{TESTIMONIALS[testimonialIdx].name}</p>
                  <p className="text-gray-400 text-sm">{TESTIMONIALS[testimonialIdx].role}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i===testimonialIdx?"32px":"12px", height:"12px", backgroundColor: i===testimonialIdx?"#F97316":"#D1D5DB" }}/>
              ))}
            </div>

            {/* Arrows */}
            <button onClick={() => setTestimonialIdx(i => (i-1+TESTIMONIALS.length)%TESTIMONIALS.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all">
              <ChevronLeft size={20}/>
            </button>
            <button onClick={() => setTestimonialIdx(i => (i+1)%TESTIMONIALS.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all">
              <ChevronRight size={20}/>
            </button>
          </div>
        </div>
      </section>

      {/* ══ CORPORATE TRAINING ══ */}
      <section id="corporate" className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F97316]/5 blur-3xl"/>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Corporate Training</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Empower Your <span className="text-[#F97316]">Organization</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Customized training programs for colleges, companies, and institutions. We bring industry expertise directly to your campus or office.
              </p>
              <div className="space-y-4 mb-8">
                {["Workshops for Students & Faculty","Faculty Development Programs","Corporate Upskilling Programs","Customized Curriculum Design"].map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-white"/>
                    </div>
                    <span className="text-gray-300 font-medium">{s}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => navTo("#contact")}
                className="bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-all shadow-xl hover:-translate-y-0.5">
                Get a Quote <ArrowRight size={18}/>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, count:"25+",   desc:"College partnerships"    },
                { icon: Briefcase, count:"15+",   desc:"Corporate clients"       },
                { icon: Users,     count:"5000+", desc:"Trained professionals"   },
                { icon: Globe,     count:"100+",  desc:"Workshops nationwide"    },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 hover:border-[#F97316]/30 rounded-2xl p-6 text-center transition-all">
                  <item.icon size={28} className="text-[#F97316] mx-auto mb-3"/>
                  <p className="text-3xl font-black text-white mb-1">{item.count}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Blog</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Latest <span className="text-[#F97316]">Insights</span> &amp; Articles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOGS.map(blog => (
              <div key={blog.title}
                className="group bg-white border border-gray-100 hover:border-[#F97316]/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center">
                  <BookOpen size={36} className="text-[#F97316]/50"/>
                </div>
                <div className="p-5">
                  <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full">{blog.category}</span>
                  <h4 className="font-bold text-[#0F172A] mt-3 mb-3 text-sm leading-snug">{blog.title}</h4>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-20 bg-[#F97316] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize:"24px 24px" }}/>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to Start Your <span className="text-[#0F172A]">IT Career</span>?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Join Vibrant Infosystems today and take the first step towards a successful future in technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => navTo("#contact")}
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold px-10 py-4 rounded-xl flex items-center gap-3 transition-all shadow-xl">
              Enroll Now <ArrowRight size={20}/>
            </button>
            <button onClick={() => navTo("#contact")}
              className="bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold px-10 py-4 rounded-xl flex items-center gap-3 transition-all">
              <Phone size={18}/> Book Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block text-[#F97316] font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
              Get in <span className="text-[#F97316]">Touch</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">We would love to help you start your IT journey. Reach out to us!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
              <h3 className="text-2xl font-black text-[#0F172A] mb-6">Send Us a Message</h3>
              <form className="space-y-5"
                onSubmit={e => { e.preventDefault(); alert("Thank you! We will contact you soon."); }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Full Name *</label>
                    <input type="text" placeholder="Your full name" value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-gray-200 focus:border-[#F97316] rounded-xl px-4 py-3 text-sm outline-none transition-all" required/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0F172A] mb-2">Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full border border-gray-200 focus:border-[#F97316] rounded-xl px-4 py-3 text-sm outline-none transition-all" required/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F172A] mb-2">Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full border border-gray-200 focus:border-[#F97316] rounded-xl px-4 py-3 text-sm outline-none transition-all" required/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F172A] mb-2">Course Interested In</label>
                  <select value={form.course}
                    onChange={e => setForm(p => ({ ...p, course: e.target.value }))}
                    className="w-full border border-gray-200 focus:border-[#F97316] rounded-xl px-4 py-3 text-sm outline-none transition-all bg-white">
                    <option value="">Select a course</option>
                    {COURSES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0F172A] mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your background and goals..." value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full border border-gray-200 focus:border-[#F97316] rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"/>
                </div>
                <button type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3">
                  Send Message <ArrowRight size={18}/>
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <VibrantLogo size="large"/>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Vibrant Infosystems is the training and education division of VSpireInnovations, focused on creating industry-ready technology professionals through practical learning.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Phone,          label:"Phone",     value:"+91 98765 43210",               href:"tel:+919876543210"                     },
                  { icon: Mail,           label:"Email",     value:"info@vibrantinfosystems.com",   href:"mailto:info@vibrantinfosystems.com"    },
                  { icon: MapPin,         label:"Address",   value:"Tech Park, IT Hub, Pune, Maharashtra 411001", href:"#"                      },
                  { icon: MessageCircle,  label:"WhatsApp",  value:"+91 98765 43210",               href:"https://wa.me/919876543210"            },
                ].map(c => (
                  <a key={c.label} href={c.href}
                    className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-[#F97316]/30 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316] transition-colors">
                      <c.icon size={20} className="text-[#F97316] group-hover:text-white transition-colors"/>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{c.label}</p>
                      <p className="font-semibold text-[#0F172A] text-sm">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-[#0F172A] mb-3 uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin,  color:"#0077B5" },
                    { Icon: Twitter,   color:"#1DA1F2" },
                    { Icon: Facebook,  color:"#1877F2" },
                    { Icon: Instagram, color:"#E4405F" },
                    { Icon: Youtube,   color:"#FF0000"  },
                  ].map(({ Icon, color }, i) => (
                    <button key={i}
                      className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                      style={{ color }}>
                      <Icon size={18}/>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#0F172A] text-gray-400 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <VibrantLogo size="default"/>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Transforming students into industry-ready IT professionals through practical, hands-on training.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h5>
              <ul className="space-y-2">
                {["Home","About Us","Courses","Internship","Placements"].map(l => (
                  <li key={l}>
                    <button onClick={() => navTo(`#${l.toLowerCase().replace(/ /g,"")}`)}
                      className="text-gray-400 hover:text-[#F97316] text-sm transition-colors">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Courses</h5>
              <ul className="space-y-2">
                {COURSES.map(c => (
                  <li key={c.name}>
                    <button onClick={() => navTo("#courses")}
                      className="text-gray-400 hover:text-[#F97316] text-sm transition-colors">{c.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5 text-[#F97316] flex-shrink-0"/> +91 98765 43210</li>
                <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 text-[#F97316] flex-shrink-0"/> info@vibrantinfosystems.com</li>
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-[#F97316] flex-shrink-0"/> Tech Park, Pune, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Vibrant Infosystems, a company of VSpireInnovations. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <span className="hover:text-[#F97316] cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-[#F97316] cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-[#F97316] cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-200 z-50">
        <MessageCircle size={26} className="text-white fill-white"/>
      </a>
    </div>
  );
}
