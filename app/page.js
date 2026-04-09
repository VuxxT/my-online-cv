import './globals.css';

export default function CVPage() {
  return (
    <div className="cv-container">
      {/* Sidebar - Profile & Contact Information */}
      <div className="sidebar">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#334155', margin: '0 auto 15px' }}></div>
          <h2 style={{ fontSize: '18px' }}>Truong Hoang Vu</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Web Developer Fresher</p>
        </div>
        <nav>
          <p style={{ color: '#64748b', fontSize: '16px', letterSpacing: '1px' }}>CONTACT INFORMATION</p>
          <p style={{ fontSize: '16px' }}>📞 (+84) 779989374</p>
          <p style={{ fontSize: '16px' }}>📧 thvu010801@gmail.com</p>
          <p style={{ fontSize: '16px' }}>📍 Vinh Long, Viet Nam</p>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Education Section */}
        <div className="cv-card">
          <h2 className="section-title">🎓 Education</h2>
          <p><strong>Can Tho University of Technology (CTUT)</strong></p>
          <p>Major: Information Systems (2020 - 2025) | GPA Classification: Good</p>
        </div>

        {/* Technical Skills Section */}
        <div className="cv-card">
          <h2 className="section-title">🛠️ Technical Skills</h2>
          <div>
            <strong>Frontend:</strong> <span className="skill-tag">HTML</span><span className="skill-tag">CSS</span><span className="skill-tag">ReactJS</span><span className="skill-tag">Bootstrap</span> 
            <br />
            <strong>Backend:</strong> <span className="skill-tag">Node.js</span><span className="skill-tag">PHP (Symfony)</span><span className="skill-tag">C#</span> 
            <br />
            <strong>Database:</strong> <span className="skill-tag">MySQL</span><span className="skill-tag">MongoDB</span><span className="skill-tag">SQL Server</span> 
            <br />
            <strong>Tools:</strong> <span className="skill-tag">Git</span><span className="skill-tag">GitHub</span><span className="skill-tag">Visual Studio</span> <span className="skill-tag">Vercel</span> 
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="cv-card">
          <h2 className="section-title">🚀 Featured Projects</h2>
          
          {/* AI Health Assistant */}
          <div className="project-item" style={{ borderLeftColor: '#aec21b' }}>
            <h3>AI Health Assistant (Health Consultation System)</h3>
            <p><i>Fullstack Developer | 2026 - Present</i></p>
            <ul>
              <li>Integrated Google Gemini AI to automatically generate 7-day meal plans based on BMI indices.</li>
              <li>Developed tracking features for health metrics including BMI and daily water intake.</li>
              <li>Technologies: ReactJS, Node.js, Express, Gemini AI API.</li>
              <li>Source Code: <a href="https://github.com/VuxxT/SHT_v2" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
            </ul>
          </div>

          {/* Graduation Project */}
          <div className="project-item" style={{ borderLeftColor: '#aec21b'  }}>
            <h3>Online Tourism Planning System (Graduation Project)</h3>
            <p><i>Backend Developer | 2024 - 2025</i></p>
            <ul>
              <li>Developed a travel itinerary management system utilizing the Apriori algorithm for suggestions.</li>
              <li>Backend: PHP (Symfony), MySQL.</li>
              <li>Frontend: HTML, CSS, Bootstrap, JavaScript.</li>
              <li>Source Code: <a href="https://github.com/VuxxT/LV0120-Tourism-Management-System" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
            </ul>
          </div>

          {/* Student Management */}
          <div className="project-item" style={{ borderLeftColor: '#aec21b'  }}>
            <h3>Student Information Management System</h3>
            <p><i>Fullstack Developer | 2023 - 2024</i></p>
            <ul>
              <li>Built a comprehensive system to manage students, subjects, and grading records.</li>
              <li>Frontend: HTML, CSS, JavaScript, Bootstrap.</li>
              <li>Backend: PHP (Symfony), MySQL.</li>
              <li>Source Code: <a href="https://github.com/VuxxT/DoAn3-Student-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
            </ul>
          </div>
        
          {/* Flower Store */}
          <div className="project-item" style={{ borderLeftColor: '#aec21b'  }}>
            <h3>Flower Store E-commerce Platform</h3>
            <p><i>Fullstack Developer | 2022 - 2023</i></p>
            <ul>
              <li>Developed a management system for a retail flower business.</li>
              <li>Frontend: Bootstrap.</li>
              <li>Backend: PHP (OOP) for Admin panel, shopping cart, and product management modules.</li>
              <li>Source Code: <a href="https://github.com/VuxxT/DoAn2-Flower-Store-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
            </ul>
          </div>

          {/* Personnel Management */}
          <div className="project-item" style={{ borderLeftColor: '#aec21b'  }}>
            <h3>Personnel Management System</h3>
            <p><i>Fullstack Developer | 2022 - 2023</i></p>
            <ul>
              <li>Engineered a human resources management solution.</li>
              <li>Backend: Built with C# (Windows Forms - OOP) for employee, department, and rewards modules.</li>
              <li>Source Code: <a href="https://github.com/VuxxT/DoAn1-Personnel-Management" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Foreign Languages Section */}
        <div className="cv-card">
          <h2 className="section-title">🌐 Foreign Languages</h2>
          <p>English: Reading/Translating technical documentation, basic communication</p>
          <p>Japanese: N5 Level</p>
          <p>Chinese: HSK2 Level</p>
        </div>
        <div><h5>Copy right © 2026 Leo Truong. All rights reserved.</h5></div>
      </div>
    </div>
  );
}