import './globals.css';

export default function CVPage() {
  return (
    <div className="cv-container">
      {/* Sidebar - Profile & Contact Information */}
      <div className="sidebar">
        {/* Modernized Header Section */}
        <div style={{ marginBottom: '45px' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
            <div style={{ 
              width: '64px', height: '64px', borderRadius: '16px', 
              background: 'linear-gradient(135deg, #aec21b 0%, #7a8a12 100%)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '26px', color: 'white', fontWeight: '800',
              boxShadow: '0 8px 16px rgba(174, 194, 27, 0.25)'
            }}>
              V
            </div>
            {/* Status Indicator */}
            <div style={{ 
              position: 'absolute', bottom: '-2px', right: '-2px',
              width: '14px', height: '14px', background: '#22c55e',
              borderRadius: '50%', border: '3px solid #0f172a'
            }}></div>
          </div>
          
          <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Truong Hoang Vu
          </h2>
          <div style={{ marginBottom: '15px' }}>
            <span style={{ 
              fontSize: '10px', background: 'rgba(174, 194, 27, 0.15)', 
              color: '#aec21b', padding: '5px 12px', borderRadius: '30px',
              fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px'
            }}>
              Available for Work
            </span>
          </div>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, fontWeight: '500' }}>
            Web Developer Fresher
          </p>
        </div>

        {/* Contact Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div>
            <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', marginBottom: '15px', textTransform: 'uppercase' }}>
              Contact Information
            </p>
            <div style={{ fontSize: '14px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ opacity: 0.7 }}>📞</span> (+84) 779989374
              </p>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ opacity: 0.7 }}>📧</span> thvu010801@gmail.com
              </p>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ opacity: 0.7 }}>📍</span> Vinh Long, Viet Nam
              </p>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Content Wrapper to prevent stretching and improve focus */}
        <div className="content-wrapper">
          
          {/* Education Section */}
          <div className="cv-card">
            <h2 className="section-title">🎓 Education</h2>
            <p style={{ fontSize: '18px', margin: '0 0 8px 0' }}><strong>Can Tho University of Technology (CTUT)</strong></p>
            <p style={{ color: '#64748b', margin: 0 }}>
              Major: Information Systems (2020 - 2025) | <span style={{ color: '#aec21b', fontWeight: '600' }}>GPA Classification: Good</span>
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="cv-card">
            <h2 className="section-title">🛠️ Technical Skills</h2>
            <div style={{ lineHeight: '2' }}>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#475569', marginRight: '10px' }}>Frontend:</strong> 
                <span className="skill-tag">HTML</span><span className="skill-tag">CSS</span><span className="skill-tag">ReactJS</span><span className="skill-tag">Bootstrap</span> 
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#475569', marginRight: '10px' }}>Backend:</strong> 
                <span className="skill-tag">Node.js</span><span className="skill-tag">PHP (Symfony)</span><span className="skill-tag">C#</span> 
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#475569', marginRight: '10px' }}>Database:</strong> 
                <span className="skill-tag">MySQL</span><span className="skill-tag">MongoDB</span><span className="skill-tag">SQL Server</span> 
              </div>
              <div>
                <strong style={{ color: '#475569', marginRight: '10px' }}>Tools:</strong> 
                <span className="skill-tag">Git</span><span className="skill-tag">GitHub</span><span className="skill-tag">Visual Studio</span> <span className="skill-tag">Vercel</span> 
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="cv-card">
            <h2 className="section-title">🚀 Featured Projects</h2>
            
            {/* AI Health Assistant */}
            <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '19px' }}>AI Health Assistant (Health Consultation System)</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}><i>Fullstack Developer | 2026 - Present</i></p>
              <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px' }}>
                <li>Integrated Google Gemini AI to automatically generate 7-day meal plans based on BMI indices.</li>
                <li>Developed tracking features for health metrics including BMI and daily water intake.</li>
                <li>Technologies: ReactJS, Node.js, Express, Gemini AI API.</li>
                <li style={{ marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href="https://github.com/VuxxT/SHT_v2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
              </ul>
            </div>

            {/* Graduation Project */}
            <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '19px' }}>Online Tourism Planning System (Graduation Project)</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}><i>Backend Developer | 2024 - 2025</i></p>
              <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px' }}>
                <li>Developed a travel itinerary management system utilizing the Apriori algorithm for suggestions.</li>
                <li>Backend: PHP (Symfony), MySQL.</li>
                <li>Frontend: HTML, CSS, Bootstrap, JavaScript.</li>
                <li style={{ marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href="https://github.com/VuxxT/LV0120-Tourism-Management-System" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
              </ul>
            </div>

            {/* Student Management */}
            <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '19px' }}>Student Information Management System</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}><i>Fullstack Developer | 2023 - 2024</i></p>
              <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px' }}>
                <li>Built a comprehensive system to manage students, subjects, and grading records.</li>
                <li>Frontend: HTML, CSS, JavaScript, Bootstrap | Backend: PHP (Symfony), MySQL.</li>
                <li style={{ marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href="https://github.com/VuxxT/DoAn3-Student-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
              </ul>
            </div>
          
            {/* Flower Store */}
            <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '19px' }}>Flower Store E-commerce Platform</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}><i>Fullstack Developer | 2022 - 2023</i></p>
              <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px' }}>
                <li>Developed a management system for a retail flower business.</li>
                <li>Backend: PHP (OOP) for Admin panel, shopping cart, and product management modules.</li>
                <li style={{ marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href="https://github.com/VuxxT/DoAn2-Flower-Store-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
              </ul>
            </div>

            {/* Personnel Management */}
            <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '19px' }}>Personnel Management System</h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px' }}><i>Fullstack Developer | 2022 - 2023</i></p>
              <ul style={{ fontSize: '14px', color: '#334155', paddingLeft: '20px' }}>
                <li>Engineered a human resources management solution.</li>
                <li>Backend: Built with C# (Windows Forms - OOP) for employee, department, and rewards modules.</li>
                <li style={{ marginTop: '8px' }}>
                  <strong>Source Code:</strong> <a href="https://github.com/VuxxT/DoAn1-Personnel-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Foreign Languages Section */}
          <div className="cv-card">
            <h2 className="section-title">🌐 Foreign Languages</h2>
            <div style={{ display: 'flex', gap: '30px', fontSize: '15px' }}>
              <p style={{ margin: 0 }}><strong>English:</strong> Reading/Translating technical docs</p>
              <p style={{ margin: 0 }}><strong>Japanese:</strong> N5 Level</p>
              <p style={{ margin: 0 }}><strong>Chinese:</strong> HSK2 Level</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
            <h5 style={{ opacity: 0.5, fontWeight: '500', margin: 0 }}>
              Copyright © 2026 Leo Truong. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}