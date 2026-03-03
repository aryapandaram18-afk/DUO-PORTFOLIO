
  (function() {
    // ---------- TYPING ANIMATION ----------
    const typingElement = document.getElementById('typingText');
    const phrases = ['UI/UX design', 'web development', 'creative direction', 'product design'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      setTimeout(typeEffect, isDeleting ? 80 : 120);
    }
    typeEffect();

    // ---------- SINGLE CIRCLE TIMER (3 sec) ----------
    const circleImg = document.getElementById('circleImg');
    const nameA = document.getElementById('nameA');
    const nameB = document.getElementById('nameB');
    const circleDiv = document.getElementById('mainCircle');
    const images = [
      { src: 'images/black.jpg', name: 'Arya' },
      { src: 'images/white.jpg', name: 'Nanmathi' }
    ];
    images.forEach(item => { (new Image()).src = item.src; });
    let idx = 0;
    function update() {
      const cur = images[idx];
      circleImg.src = cur.src;
      if (cur.name === 'arya') {
        nameA.className = 'active-name'; nameB.className = 'inactive-name';
      } else {
        nameA.className = 'inactive-name'; nameB.className = 'active-name';
      }
      circleDiv.style.animation = 'none';
      circleDiv.offsetHeight;
      circleDiv.style.animation = 'softFloat 5s infinite ease-in-out';
    }
    function next() { idx = (idx + 1) % images.length; update(); }
    setInterval(next, 3000);
    circleDiv.addEventListener('click', next);

    // ---------- PROJECT 3-CARD SYSTEM ----------
    const catCase = document.getElementById('catCase');
    const catWeb = document.getElementById('catWeb');
    const catPpt = document.getElementById('catPpt');
    const panelTitle = document.getElementById('panelTitle');
    const panelContent = document.getElementById('panelContent');

    const caseData = [
            { title: 'Consumer & Gen z', meta: 'product case', desc: 'End-to-end UI flow for a photo booth application including capture, preview, printing, and reveal.', link: 'https://www.figma.com/proto/lBkvROzKjev3W2aE1sg4B7/App-for-photobooth?node-id=1-254&p=f&t=Z1v1714qDR9k54OQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A254', linkText: 'Open figma →' },
      { title: 'Todo-list', meta: 'case study · 2026', desc: 'A user-centered task management app prototype focused on clarity, efficiency, and productivity.', link: 'https://www.figma.com/proto/XefS7vMySHs3dTpQH3TC8c/Todo-List?page-id=0%3A1&node-id=11-141&p=f&viewport=161%2C18%2C0.65&t=HSOYaVO3s7eAPoyh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2', linkText: 'Open figma →' },
      { title: 'Social Good & Accessibility', meta: 'case study · 2026', desc: 'Designing inclusive and accessible digital experiences that create meaningful social impact for everyone.', link: 'https://www.figma.com/proto/9aVA9efxe2hGmIJvtj2mEc/SocialApp?node-id=0-3&p=f&t=fgHfoFNzxa5nw2Cb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1', linkText: 'Open figma →' }
    ];
    const webData = [
      { title: 'Discrete-Math Companion', meta: 'Web + Ui/ux', desc: 'Learning resource for discrete mathematics concepts.', link: 'https://aryapandaram18-afk.github.io/Discmath_w/', linkText: 'try prototype →' },
      { title: 'Web-Camping ', meta: 'Web', desc: 'Trekking and Camping Adventures', link: 'https://aryapandaram18-afk.github.io/web_camping/', linkText: 'try prototype →' },
      { title: 'IEE-Techopedia website', meta: 'web + print', desc: 'Website for the Institute of Electrical and Electronics Engineers(Remake)', link: 'https://github.com/aryapandaram18-afk/web_iee', linkText: 'try prototype →' }
    ];
    const pptData = [
      { title: 'Card-1', meta: 'UI/UX design', desc: 'Working in many flowcharts and attractive designsing pages.', link: 'https://1drv.ms/w/c/3bcfe80553e90d01/IQDYFfSU8hyGTofVb1IUFEaSAX_8iEcKzJdhjmBQoFS2TWA?e=Xj7fDv', linkText: 'view deck →' },
      { title: 'Card-2', meta: 'PPT UI/UX design', desc: 'User journey & wireframes presentation.', link: 'https://1drv.ms/w/c/3bcfe80553e90d01/IQDYFfSU8hyGTofVb1IUFEaSAX_8iEcKzJdhjmBQoFS2TWA?e=Xj7fDv', linkText: 'view deck →' },
      { title: 'Card-3', meta: 'Flowchart design', desc: 'Visual representation of processes and workflows.', link: 'https://1drv.ms/w/c/3bcfe80553e90d01/IQDYFfSU8hyGTofVb1IUFEaSAX_8iEcKzJdhjmBQoFS2TWA?e=Xj7fDv', linkText: 'view deck →' }
    ];

    function renderPanel(category) {
      let data, title;
      if (category === 'case') { data = caseData; title = 'case studies'; }
      else if (category === 'web') { data = webData; title = 'web ui/ux · figma'; }
      else { data = pptData; title = 'ppt decks & slides'; }
      panelTitle.innerText = title;
      panelContent.innerHTML = data.map(item => `
        <a href="${item.link}" target="_blank" class="detail-card">
          <h5>${item.title}</h5>
          <div class="meta">${item.meta}</div>
          <p>${item.desc}</p>
          <span class="link-icon">${item.linkText}</span>
        </a>
      `).join('');
      [catCase, catWeb, catPpt].forEach(c => c.classList.remove('active-cat'));
      document.getElementById(`cat${category.charAt(0).toUpperCase()+category.slice(1)}`).classList.add('active-cat');
    }
    renderPanel('case');
    catCase.addEventListener('click', () => renderPanel('case'));
    catWeb.addEventListener('click', () => renderPanel('web'));
    catPpt.addEventListener('click', () => renderPanel('ppt'));

    // ---------- ACTIVE NAV OBSERVER ----------
    const sections = {
      home: document.querySelector('.hero'),
      about: document.getElementById('about'),
      projects: document.getElementById('projects'),
      skills: document.getElementById('skills')
    };
    const navLinks = {
      home: document.getElementById('nav-home'),
      about: document.getElementById('nav-about'),
      projects: document.getElementById('nav-projects'),
      skills: document.getElementById('nav-skills')
    };
    function removeActive() { Object.values(navLinks).forEach(l => l.classList.remove('active')); }
    function setActive(id) { removeActive(); if (navLinks[id]) navLinks[id].classList.add('active'); }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (e.target.classList.contains('hero')) setActive('home');
          else if (e.target.id === 'about') setActive('about');
          else if (e.target.id === 'projects') setActive('projects');
          else if (e.target.id === 'skills') setActive('skills');
        }
      });
    }, { threshold: 0.3 });
    observer.observe(sections.home); observer.observe(sections.about); observer.observe(sections.projects); observer.observe(sections.skills);

    Object.keys(navLinks).forEach(id => {
      navLinks[id].addEventListener('click', (e) => {
        e.preventDefault();
        removeActive(); navLinks[id].classList.add('active');
        if (id === 'home') sections.home.scrollIntoView({ behavior: 'smooth' });
        else document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      });
    });

    document.getElementById('resumeBtn').addEventListener('click', () => alert('📄 our combined resume – crafted with intent'));
    setActive('home');
  })();
