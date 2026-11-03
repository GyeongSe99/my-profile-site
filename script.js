// ===== 데이터 (여기만 수정하면 내용이 바뀝니다) =====
const skills = [
  { category: 'Backend', items: ['JAVA', 'Spring'] },
  { category: 'Frontend', items: ['JavaScript', 'HTML', 'CSS'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git'] },
];

// TODO: 실제 프로젝트 정보로 교체하세요 (현재는 예시)
const projects = [
  { title: '프로젝트 이름 1', description: '프로젝트에 대한 간단한 설명을 입력하세요.', tags: ['JAVA', 'Spring', 'MySQL'], link: 'https://github.com/GyeongSe99' },
  { title: '프로젝트 이름 2', description: '프로젝트에 대한 간단한 설명을 입력하세요.', tags: ['Spring', 'PostgreSQL'], link: 'https://github.com/GyeongSe99' },
  { title: '프로젝트 이름 3', description: '프로젝트에 대한 간단한 설명을 입력하세요.', tags: ['JavaScript', 'HTML', 'CSS'], link: 'https://github.com/GyeongSe99' },
];

const cardClass = 'reveal rounded-2xl bg-white dark:bg-nightcard border border-emerald-900/10 dark:border-emerald-100/10 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition';
const badgeClass = 'px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// ===== 렌더링 =====
const skillsGrid = document.getElementById('skills-grid');
skills.forEach(({ category, items }) => {
  const card = el('div', cardClass);
  card.appendChild(el('h3', 'font-bold text-slate-900 dark:text-white mb-4', category));
  const wrap = el('div', 'flex flex-wrap gap-2');
  items.forEach((i) => wrap.appendChild(el('span', badgeClass, i)));
  card.appendChild(wrap);
  skillsGrid.appendChild(card);
});

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(({ title, description, tags, link }) => {
  const card = el('article', cardClass + ' flex flex-col');
  card.appendChild(el('h3', 'text-lg font-bold text-slate-900 dark:text-white', title));
  card.appendChild(el('p', 'mt-2 text-sm text-slate-600 dark:text-slate-400 flex-1', description));
  const wrap = el('div', 'mt-4 flex flex-wrap gap-2');
  tags.forEach((t) => wrap.appendChild(el('span', badgeClass, t)));
  card.appendChild(wrap);
  if (link) {
    const a = el('a', 'mt-5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline', 'GitHub에서 보기 →');
    a.href = link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    card.appendChild(a);
  }
  projectsGrid.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();

// ===== 다크 모드 =====
document.getElementById('theme-toggle').addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

// ===== 모바일 메뉴 =====
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// ===== 스크롤 reveal =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((n) => revealObserver.observe(n));

// ===== 현재 섹션 네비 하이라이트 =====
const links = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));
