
const dv = n => 'icons/' + n + '.svg'; // local icons (works offline)

/* ---- DATA (edit freely) ---- */

const skills = [
    { n: 'HTML', i: dv('html5'), d: 'Semantic page structure, forms and accessible layouts.' },
    { n: 'CSS', i: dv('css3'), d: 'Flexbox, Grid, animations, Bootstrap and responsive design.' },
    { n: 'JavaScript', i: dv('javascript'), d: 'DOM, events, fetch/AJAX and interactive front ends.' },
    { n: 'React', i: dv('react'), d: 'React Native for mobile UIs, components and state handling.' },
    { n: 'Java', i: dv('java'), d: 'OOP, Java SE/EE, JSP/Servlets, JDBC and design patterns (Singleton, Factory, Observer, MVC...).' },
    { n: 'Python', i: dv('python'), d: 'Scripting and hardware-side logic for IoT projects.' },
    { n: 'MySQL', i: dv('mysql'), d: 'Schema design, normalization, joins and queries for web and desktop apps.' },
    { n: 'Firebase', i: dv('firebase'), d: 'Realtime NoSQL data, authentication and cloud backend for mobile apps.' },
    { n: 'Arduino', i: dv('arduino'), d: 'Sensors, actuators and microcontroller programming.' },
    { n: 'ESP32', i: dv('esp32'), d: 'Wi-Fi enabled IoT boards, sending sensor data to apps and the cloud.' },
    { n: 'Android', i: dv('android'), d: 'Native Android apps with Java, activities, adapters and Firebase.' },
    { n: 'Database', i: dv('database'), d: 'Relational and NoSQL modelling, ER diagrams and data integrity.' },
    { n: 'Git / GitHub', i: dv('git'), d: 'Version control with Git, source code hosting on GitHub and publishing sites with GitHub Pages.' }
];

const ides = [
    { n: 'NetBeans', i: dv('netbeans'), d: 'Main IDE for Java SE/EE, JSP, Servlets and server deployment.' },
    { n: 'VS Code', i: dv('vscode'), d: 'Web front ends, JavaScript, React Native and Python.' },
    { n: 'IntelliJ IDEA', i: dv('intellij'), d: 'Larger Java projects with powerful refactoring and debugging.' },
    { n: 'Arduino IDE', i: dv('arduino'), d: 'Writing and uploading firmware to Arduino and ESP32 boards.' },
    { n: 'Android Studio', i: dv('androidstudio'), d: 'Building, emulating and debugging Android apps.' },
    { n: 'MySQL Workbench', i: dv('mysql'), d: 'Designing schemas, ER diagrams and running queries.' }
];

/*
    Demo: put a real URL (e.g. 'https://yoursite.com')
    to show a live iframe. Leave '' for animated preview.
*/

const projects = [
    {
        t: 'Tuition Center Management System',
        tg: ['Java', 'Desktop', 'MySQL'],
        s: 'Desktop application to manage students, teachers, classes, attendance and payments for a tuition center.',
        f: [
            'Student & teacher registration',
            'Class and payment tracking',
            'Reports and search',
            'MySQL database'
        ],
        demo: ''
    },
    {
        t: 'AgroLink Android App',
        tg: ['Android', 'Java', 'Firebase'],
        s: 'Android apps that help farmers sell their products directly to customers, without a middle man. Includes a separate Farmer app and Customer app.',
        f: [
            'Farmer app and Customer app',
            'Direct farmer-to-customer sales',
            'Built with Java for Android',
            'Firebase backend'
        ],
        demo: ''
    },
    {
        t: 'Modern Shoes Web Store',
        tg: ['Java', 'JSP/Servlets', 'MySQL'],
        s: 'E-commerce website with a Java back end and MySQL database for browsing and ordering shoes.',
        f: [
            'Product catalog',
            'Cart and orders',
            'Java back end',
            'MySQL data layer'
        ],
        demo: ''
    },
    {
        t: 'Driver Monitoring System',
        tg: ['Python', 'MediaPipe', 'ESP32'],
        s: 'IoT prototype that shows the driver’s state with LED lights, to help detect tired or distracted driving. A camera checks the face and eyes, and an ESP32 shows the result.',
        f: [
            'Camera checks face and eyes (Python and MediaPipe)',
            'ESP32-S3 shows the driver state with LED lights',
            'Green = normal, blue = eyes glancing aside',
            'Yellow = looking away, red = eyes closed'
        ],
        demo: ''
    },
    {
        t: 'GlobalTrade Supply Chain System',
        tg: ['Jakarta EE', 'EJB', 'MySQL'],
        s: 'Web system that manages the supply chain work of a logistics company: shipments, vendors, inventory, orders, routes and customs documents. Built for the BCD II academic project.',
        f: [
            'MySQL database: Shipment, Vendor, Inventory, Order, Route, Customs Document, User/Role',
            'EJB timers, interceptors and transactions',
            'Role-based access control',
            'JSP/JSTL web layer with EJB business layer (MVC-style), deployed on Payara 6'
        ],
        demo: ''
    }
];

/* ---- BUILD ---- */

const ico = s => s.i
    ? `<img src="${s.i}" alt="${s.n}" onerror="this.outerHTML='<i>${s.n.slice(0, 3)}</i>'">`
    : `<i>${s.n === 'Database' ? 'DB' : 'ESP'}</i>`;

const st = document.getElementById('pin');
const grid = document.createElement('div');

grid.className = 'skgrid';

skills.forEach((s, k) => {
    const e = document.createElement('div');

    e.className = 'sk';
    e.dataset.t = (0.05 + k / skills.length * 0.8).toFixed(2);

    e.innerHTML = `<div class="ic">${ico(s)}</div><small>${s.n}</small>`;

    grid.appendChild(e);
});

st.appendChild(grid);

/*
    ---- EDUCATION (edit freely) ----

    show: true  -> displays that item
    show: false -> hides that item
    status      -> 'Ongoing' / 'Completed' / anything you like
                   ('' = no badge)
    inst        -> optional, leave '' to hide
*/

const education = [
    {
        g: 'Degrees (Undergraduate)',
        items: [
            {
                show: true,
                n: 'BEng in Software Engineering',
                inst: 'JIAT (IIC University)',
                period: 'Since Apr 2023',
                status: 'Ongoing'
            },
            {
                show: true,
                n: 'BSc (Hons) Cloud Computing',
                inst: 'SLTC',
                period: 'Since Jun 2026',
                status: 'Ongoing'
            }
        ]
    },
    {
        g: 'Diplomas (JIAT)',
        items: [
            {
                show: true,
                n: 'Advanced Diploma in Software Engineering II',
                inst: 'JIAT',
                period: 'May 2026 – Apr 2027',
                status: 'Ongoing'
            },
            {
                show: true,
                n: 'Professional Higher Diploma in Software Engineering',
                inst: 'JIAT',
                period: 'Mar 2025 – Feb 2026',
                status: 'Completed'
            },
            {
                show: true,
                n: 'Professional Diploma in Software Engineering',
                inst: 'JIAT',
                period: 'Oct 2023 – Oct 2024',
                status: 'Completed'
            }
        ]
    }
];

document.getElementById('eduBox').innerHTML = education.map(g => {
    const v = g.items.filter(i => i.show);

    if (!v.length) return '';

    return `<div class="grp">
        <b class="gh">${g.g}</b>
        ${v.map(i => `
            <div class="ed">
                ${i.n}
                ${i.status ? `
                    <span class="st${/^completed$/i.test(i.status) ? ' done' : ''}">${i.status}</span>
                ` : ''}
                <small>${[i.inst, i.period].filter(Boolean).join(' · ')}</small>
            </div>
        `).join('')}
    </div>`;
}).join('');

document.getElementById('skCards').innerHTML = skills.map(s => `
    <div class="card rv">
        <h4>${s.i ? `<img src="${s.i}" alt="">` : ''}${s.n}</h4>
        <p>${s.d}</p>
    </div>
`).join('');

document.getElementById('ideCards').innerHTML = ides.map(s => `
    <div class="card rv">
        <h4><img src="${s.i}" alt="">${s.n}</h4>
        <p>${s.d}</p>
    </div>
`).join('');

document.getElementById('pGrid').innerHTML = projects.map((p, i) => `
    <div class="card pc rv" onclick="openP(${i})">
        <span class="no">0${i + 1}</span>
        <h4>${p.t}</h4>
        <div class="tags">${p.tg.map(t => `<span>${t}</span>`).join('')}</div>
        <p>${p.s}</p>
        <br>
        <em>▶ Click for live demo</em>
    </div>
`).join('');

function openP(i) {
    const p = projects[i];

    document.getElementById('mb').innerHTML = `
        <button class="x" onclick="closeP()">×</button>

        <h2 style="font-size:1.6rem">${p.t}</h2>

        <div class="tags">
            ${p.tg.map(t => `<span>${t}</span>`).join('')}
        </div>

        <p style="color:#bbb;line-height:1.7">${p.s}</p>

        <div class="demo">
            <div class="top">
                <i></i>
                Live demo ${(p.video || p.demo) ? '' : '(animated preview)'}
            </div>

            ${p.video
                ? (/\.(mp4|webm)$/i.test(p.video)
                    ? `<video src="${p.video}" controls playsinline style="width:100%;max-height:440px;background:#000"></video>`
                    : `<iframe src="${p.video}" allowfullscreen loading="lazy"></iframe>`)
                : p.demo
                    ? `<iframe src="${p.demo}" loading="lazy"></iframe>`
                    : `<div class="mock">
                        <div class="sd">
                            <b></b>
                            <b></b>
                            <b></b>
                            <b></b>
                        </div>
                        <div class="mn">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>`
            }
        </div>

        ${p.demo ? `
            <a class="btn f" href="${p.demo}" target="_blank" rel="noopener">
                Open live site ↗
            </a>
        ` : ''}

        ${p.apk ? `
            <a class="btn" href="${p.apk}" download>Download APK</a>
        ` : ''}

        ${p.repo ? `
            <a class="btn" href="${p.repo}" target="_blank" rel="noopener">
                Source code
            </a>
        ` : ''}

        <br><br>

        <b style="color:var(--red)">Key features</b>

        <ul>
            ${p.f.map(f => `<li>${f}</li>`).join('')}
        </ul>
    `;

    document.getElementById('modal').classList.add('on');
}

function closeP() {
    document.getElementById('modal').classList.remove('on');
}

document.getElementById('modal').onclick = e => {
    if (e.target.id === 'modal') closeP();
};

addEventListener('keydown', e => e.key === 'Escape' && closeP());

document.getElementById('yr').textContent = new Date().getFullYear();

/* typing effect */

const roles = [
    'Full-Stack Developer',
    'Java Developer',
    'Android Developer',
    'IoT Enthusiast',
    'Software Engineer'
   //  'Future Cloud Architect'
];

let ri = 0,
    ci = 0,
    del = false;

const ty = document.getElementById('typed');

(function tick() {
    const w = roles[ri];

    ty.textContent = w.slice(0, ci);

    if (!del && ci++ === w.length) {
        del = true;
        return setTimeout(tick, 1300);
    }

    if (del && --ci < 0) {
        del = false;
        ci = 0;
        ri = (ri + 1) % roles.length;
    }

    setTimeout(tick, del ? 40 : 90);
})();

/*
    Scroll logic: the front-facing photo stays in Home
    and fades out as you scroll to About.
*/

const $ = id => document.getElementById(id);
const stage = $('stage');

const navs = [
    ...document.querySelectorAll('nav a[href^="#"]:not(.logo)')
];

const cl = v => Math.min(1, Math.max(0, v));
const lp = (a, b, t) => a + (b - a) * t;
const ez = t => t * t * (3 - 2 * t);

const abs = id => $(id).getBoundingClientRect().top + scrollY;

function onScroll() {
    const y = scrollY,
        vh = innerHeight,
        mob = innerWidth < 850,
        mid = vh * 0.5;

    const aT = abs('about'),
        sT = abs('skStage');

    const p1 = ez(cl(y / (aT * 0.7))); // home -> about: photo fades away
    const p5 = cl((y - sT + vh * 0.1) / (vh * 0.9)); // skills icons reveal one by one

    const x = mob ? 0 : 24,
        s = lp(1, 0.92, p1),
        o = lp(mob ? 0.35 : 1, 0, p1);

    stage.style.setProperty('--x', x + 'vw');
    stage.style.setProperty('--y', '0vh');
    stage.style.setProperty('--s', s);
    stage.style.opacity = o;

    document.querySelectorAll('.sk').forEach(e => {
        e.classList.toggle('in', p5 >= +e.dataset.t);
    });

    const T = id => $(id).getBoundingClientRect().top;

    const cur = T('contact') < mid
        ? 'contact'
        : T('projects') < mid
            ? 'projects'
            : T('skills') < mid
                ? 'skills'
                : T('about') < mid
                    ? 'about'
                    : 'home';

    navs.forEach(a => {
        a.classList.toggle('on', a.getAttribute('href') === '#' + cur);
    });
}

addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

onScroll();

const io = new IntersectionObserver(
    es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')),
    { threshold: 0.15 }
);

document.querySelectorAll('.rv').forEach(e => io.observe(e));
