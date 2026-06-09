import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "Business Analytics & Strategy Analyst with experience in financial modeling, portfolio analytics, BI reporting, market intelligence, and data-driven growth strategy across banking and marketing environments. Built SQL and Power BI dashboards for 1,000+ companies, analyzed CRM and transaction data, and delivered portfolio recommendations that expanded client engagement by 10% and increased cross-sell revenue by 12%. Proficient in Python, R, SQL, Tableau, Power BI, Advanced Excel, predictive analytics, competitive analysis, and segmentation, with exposure to $20M+ portfolios and $500K+ revenue generation.";

  const experience = [
    {
      company: "HSBC Bank",
      role: "Senior Relationship Manager, Commercial Portfolio Analytics",
      location: "Mumbai, India",
      dates: "Sep 2023 - Jun 2025",
      highlights: [
        "Architected Power BI dashboards to model credit risk drivers across 1,000+ monitored companies, extracting and transforming portfolio data via SQL to inform risk, exposure, and portfolio strategy decisions.",
        "Evaluated portfolio, CRM, and transaction datasets to identify cross-sell opportunities, delivering senior management recommendations that expanded active client engagement by 10%.",
        "Modeled product performance and pricing viability across Targeted Lending, Foreign Exchange, and Transactional Banking products, generating $500K+ in revenue across 40+ multinational clients.",
        "Performed billing reconciliation and discrepancy analysis across internal finance and portfolio management systems, supporting $20M+ in managed portfolio exposure and reducing compliance breaches by 25%.",
        "Advised HSBC India's Chief Compliance Officer on workflow analysis, identifying process inefficiencies and recommending improvements that reduced manual processing hours by 15% for 10K+ employees.",
        "Conducted competitive analysis across 50+ firms to identify market positioning gaps, improving prospect conversion by 15% and competitor customer acquisition by 12%."
      ]
    },
    {
      company: "RankMantra, AI-Driven Marketing and Analytics Firm",
      role: "Business Marketing Analyst",
      location: "Mumbai, India",
      dates: "May 2023 - Aug 2023",
      highlights: [
        "Analyzed B2B campaign performance, lead generation funnels, and marketing engagement data, increasing targeted engagement by 15% and qualified lead conversion by 22%.",
        "Translated campaign insights into market segmentation and positioning recommendations, improving targeted B2B audience reach by 18% and strengthening brand awareness across priority customer segments."
      ]
    }
  ];

  const projects = [
    {
      title: "Predictive Customer Analytics & Member Segmentation",
      subtitle: "ASCP Duke Capstone",
      category: "Predictive Analytics",
      introduction: "Implemented predictive models and Tableau dashboards to forecast purchase likelihood across 3-year certification cycles for a 50K+ member base.",
      problem: "Membership organizations need better prediction of certification purchase likelihood and clearer segmentation for outreach timing.",
      objective: "Forecast purchase behavior and identify high-value member cohorts to support senior leadership outreach decisions.",
      methodology: [
        "Implemented Survival Analysis, Random Forest, and Logistic Regression models using R and Python.",
        "Analyzed certification-cycle behavior across a 50K+ member base.",
        "Designed Tableau segmentation dashboards for high-value cohort identification."
      ],
      results: [
        "Forecasted purchase likelihood across 3-year certification cycles.",
        "Optimized outreach timing through segmentation dashboards.",
        "Presented predictive insights to senior leadership."
      ],
      conclusion: "The project combined predictive modeling and BI dashboards to support data-driven member engagement strategy."
    },
    {
      title: "Market Entry & Financial Modeling Strategy",
      subtitle: "Social Enterprise Case Competition",
      category: "Growth Strategy",
      introduction: "Conducted market research and built financial models to evaluate market opportunity, revenue projections, and growth strategy for a social enterprise.",
      problem: "Social enterprises require rigorous market sizing, revenue modeling, and data-backed recommendations to assess expansion opportunities.",
      objective: "Evaluate market entry potential and develop a financially grounded growth strategy.",
      methodology: [
        "Conducted market research using R, SQL, and Tableau.",
        "Built financial models to evaluate revenue projections and market opportunity.",
        "Translated analysis into data-backed recommendations for competition judges."
      ],
      results: [
        "Won The Adelaide University Social Enterprise Case Competition representing India.",
        "Delivered data-backed recommendations with Dean's List honorable mention.",
        "Produced market entry and financial modeling strategy for a social enterprise."
      ],
      conclusion: "The project demonstrated market research, strategy modeling, and executive presentation skills in a competitive setting."
    },
    {
      title: "Pricing Optimization & Consumer Segmentation Strategy",
      subtitle: "Python, SQL, PCA, K-Means, Gabor Granger",
      category: "Pricing Analytics",
      introduction: "Applied PCA, K-means clustering, and Gabor Granger pricing analysis to identify consumer segments across a $3.9B gaming market.",
      problem: "Gaming market pricing requires segmentation, willingness-to-pay analysis, and market sizing to identify acquisition and revenue opportunities.",
      objective: "Develop a pricing and acquisition strategy grounded in segmentation and consumer analytics.",
      methodology: [
        "Applied PCA and K-means clustering using Python and SQL.",
        "Conducted Gabor Granger pricing analysis.",
        "Evaluated segment-level willingness to pay and market sizing."
      ],
      results: [
        "Identified 3 consumer segments across a $3.9B gaming market.",
        "Developed pricing and acquisition strategy.",
        "Identified $39.7M in first-year net revenue potential."
      ],
      conclusion: "The analysis translated segmentation and pricing research into revenue opportunity sizing."
    },
    {
      title: "Business Performance & CPG Expansion Strategy",
      subtitle: "Chipotle Case Competition",
      category: "Business Performance",
      introduction: "Queried and analyzed operational datasets to identify performance gaps and develop a 4-pillar CPG expansion strategy.",
      problem: "Consumer brands need operational insights and financial validation before launching new CPG expansion strategies.",
      objective: "Develop a data-backed expansion strategy with revenue projection and operational load analysis.",
      methodology: [
        "Queried and analyzed operational datasets using SQL and Power BI.",
        "Built financial models to validate expansion strategy and operational impact.",
        "Presented a 4-pillar CPG expansion strategy to competition judges."
      ],
      results: [
        "Projected $155M in revenue from the proposed strategy.",
        "Validated a 15-20% operational load reduction.",
        "Placed 2nd among 20 teams."
      ],
      conclusion: "The project combined SQL analysis, Power BI reporting, financial modeling, and strategic storytelling."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming & Databases',
      skills: ['Python', 'R', 'SQL', 'Snowflake', 'Advanced Excel', 'Microsoft Dynamics CRM']
    },
    {
      icon: TrendingUp,
      title: 'BI & Reporting',
      skills: ['Power BI', 'Tableau', 'Looker Studio', 'Google Analytics']
    },
    {
      icon: Users,
      title: 'Analytics & Modeling',
      skills: ['Financial Modeling', 'Regression Analysis', 'Predictive Analytics', 'Quantitative Analysis', 'Statistical Analysis', 'Data Transformation', 'Data Cleaning']
    },
    {
      icon: Lightbulb,
      title: 'Marketing Analytics',
      skills: ['SEO', 'SEM', 'Social Media Analytics', 'Market Segmentation', 'Competitive Analysis', 'Customer Analytics', 'Campaign Performance Analysis']
    },
    {
      icon: Rocket,
      title: 'Business Analysis',
      skills: ['Portfolio Analytics', 'Credit Risk Analysis', 'Pricing Analysis', 'Revenue Forecasting', 'Market Sizing', 'KPI Reporting', 'Executive Dashboards']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Science in Quantitative Management, Business Analytics",
      location: "Durham, NC",
      dates: "May 2026",
      details: "Graduate business analytics education focused on quantitative analysis, strategy, finance, and data-driven decision-making."
    },
    {
      school: "NMIMS University",
      degree: "Bachelor of Business Administration, Marketing",
      location: "Mumbai, India",
      dates: "May 2023",
      details: "Business and marketing foundation with applied experience in campaign analytics, market intelligence, and competitive strategy."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 md:flex-none min-w-0 pr-4 md:pr-0 text-lg sm:text-xl md:text-2xl font-display text-black tracking-wide leading-tight truncate">
              <span className="md:hidden">SHAURYA</span>
              <span className="hidden md:inline">SHAURYA SHELENDER SAHNI</span>
            </div>

            <div className="hidden md:flex items-center justify-end gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? "text-black font-medium" : "text-brown hover:text-black"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Shaurya Shelender Sahni"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              SHAURYA SHELENDER SAHNI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              BUSINESS ANALYTICS & STRATEGY ANALYST | PORTFOLIO ANALYTICS, FINANCIAL MODELING & BI
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'COMPANIES MODELED', value: '1,000+', detail: 'Power BI Credit Risk Dashboards' },
              { label: 'REVENUE GENERATED', value: '$500K+', detail: 'Across 40+ Multinational Clients' },
              { label: 'PORTFOLIO EXPOSURE', value: '$20M+', detail: 'Managed Portfolio Support' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Analytics and strategy professional connecting portfolio data, BI reporting, market intelligence, financial modeling, and growth recommendations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Portfolio Analytics',
                detail: 'Model credit risk drivers, portfolio exposure, CRM behavior, transaction data, and cross-sell opportunities for commercial banking clients.'
              },
              {
                icon: Rocket,
                title: 'Business Intelligence',
                detail: 'Build Power BI, Tableau, SQL, and dashboard workflows that translate financial and operating data into executive-ready insight.'
              },
              {
                icon: Lightbulb,
                title: 'Growth Strategy',
                detail: 'Use segmentation, pricing analysis, market sizing, campaign analytics, and competitive intelligence to support revenue and acquisition strategy.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Commercial portfolio analytics, banking strategy, BI reporting, marketing analytics, and competitive intelligence experience.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Predictive analytics, market entry, pricing optimization, and CPG expansion strategy projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Programming, BI reporting, analytics, modeling, marketing analytics, and business analysis capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in business analytics, strategy, and finance.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss portfolio analytics, financial modeling, business intelligence, strategy, or growth analytics opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19196415056"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (919) 641-5056
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/shaurya-sahni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:shauryasahni03@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                shauryasahni03@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Shaurya Shelender Sahni | Business Analytics, Strategy & Portfolio Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
