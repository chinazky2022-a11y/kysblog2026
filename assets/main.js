const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;
document.querySelector('#theme')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

const translations = {
  '技术 · 工具 · 数字生活':'TECH · TOOLS · DIGITAL LIFE','记录技术实践，':'Practical technology,','分享':'useful','有效经验':'experience','。':'shared clearly.','关注工具应用、项目实践与日常观察，持续整理清晰、实用的内容。':'Clear, practical writing on tools, projects and digital life.','实用资源与':'Useful resources','数字化服务。':'and digital services.','经过实际使用和筛选的工具、软件与工作方法。':'Tools, software and workflows selected through practical use.','专业服务':'Professional services','提供博客搭建、页面优化与 AI 工作流配置。':'Blog setup, page optimization and practical AI workflows.','了解服务 →':'Services →','关于序界':'About NEXUS','序界是一个关注技术工具、项目实践与数字生活的独立博客。':'NEXUS is an independent publication about technology, practical projects and digital life.','内容以实际体验为基础，力求准确、清晰，并具有长期参考价值。':'Content is grounded in practical experience and written for clarity and lasting value.','专注实践，持续更新。':'Practical work, regularly updated.','查看资源 →':'Resources →',
  '这条山路，':'This route','暂时走不通。':'doesn’t go anywhere.','返回序界':'Back to NEXUS','这一页，':'This page','尚未抵达未来。':'hasn’t arrived yet.','为什么要在信息过载的时代，重新拥有一块属于自己的写作空间。':'Why keep a small place to write when everything else moves so quickly?','写作，是一种思考方式':'Writing is a way of thinking','接下来写什么':'What comes next','那么，就从这一篇开始。':'So this is where it starts.',
  '个人笔记，不定期更新':'PERSONAL NOTES, UPDATED WHEN READY','把用过的工具，':'Notes on tools,','踩过的坑':'work and life','写下来。':'—as they happen.','这里写技术，也写普通生活。没有宏大叙事，只有亲自试过之后留下的经验。':'I write about technology and ordinary life. No grand theories—just things I have tried and found useful.',
  '我整理的工具，':'Tools I recommend,','以及能帮你做的事。':'and ways I can help.','用过一段时间，确实顺手，才会放到这里。':'Only tools I have used long enough to recommend honestly.','搭博客、改页面，或者把重复工作交给 AI。':'Blogs, better web pages, and practical AI workflows.',
  '这是我的个人博客。我会把学到的东西、做过的项目和偶尔冒出来的想法记在这里。':'This is my personal blog—a place for lessons learned, projects made and thoughts worth keeping.','如果其中一篇刚好帮到你，这个网站就没白做。':'If one note saves you some time, the site has done its job.',
  '少一点选择，':'Fewer choices,','多一点确定。':'better decisions.','这里只收录真正使用过、愿意长期推荐的工具与方法。拒绝堆砌清单，每一项都会附上适用场景和真实体验。':'A short list of tools I actually use. Each recommendation comes with context, trade-offs and an honest take.',
  '高质量 AI 工具箱':'A practical AI toolkit','从写作、研究到自动化，整理真正能进入日常工作流的工具。':'Useful tools for writing, research and automation—without the filler.','个人效率系统':'A simple productivity setup','任务、笔记与资料管理的轻量方案，减少维护，专注产出。':'A lightweight way to manage tasks, notes and files without maintaining a second job.','可复用模板':'Templates worth reusing','博客、项目复盘和内容创作模板，下载后即可开始使用。':'Ready-to-use templates for blogs, project reviews and content work.',
  '部分资源未来可能包含联盟链接。通过这些链接购买不会增加你的费用，序界可能获得少量佣金。推荐标准不会因此改变。':'Some links may become affiliate links. You pay the same price, and NEXUS may receive a small commission. That never changes what gets recommended.',
  '让想法，成为':'Turn an idea into','真正上线的作品。':'something real and live.','面向个人创作者和小型团队，提供清晰、克制、可以长期维护的数字化方案。':'Practical, maintainable websites and workflows for independent creators and small teams.','个人博客搭建':'Personal blog setup','从视觉方向、内容结构到部署上线，交付一个真正属于你的表达空间。':'Design, structure and deployment for a site you actually own.','响应式页面':'Responsive design','基础 SEO 与性能优化':'Basic SEO and performance','AI 工作流配置':'AI workflow setup','梳理重复工作，设计适合个人业务的 AI 辅助流程和提示词系统。':'We map repetitive work and build an AI-assisted process that fits the way you work.','需求与流程诊断':'Workflow review','工具选择与配置':'Tool selection and setup','使用说明与迭代建议':'Clear documentation and next steps','为避免公开个人联系方式，站内联系功能将在安全收件方式确定后启用。':'A private contact form will open once a secure inbox is ready.',
  '本站目前不要求注册账号，也不主动收集姓名、电话、住址等个人身份信息。托管服务商可能为安全和基础运行记录必要的技术数据。':'No account is required. This site does not intentionally collect names, phone numbers or addresses. The hosting provider may process limited technical data needed for security and operation.','本站未来可能使用联盟链接。如果读者通过相关链接购买产品，本站可能获得佣金，但读者支付价格不会因此增加。所有推荐均以实际价值和适用性为首要标准。':'This site may use affiliate links. A purchase may earn the site a commission at no extra cost to you. Recommendations are based on usefulness and fit.','任何付费合作或赞助内容都会在页面中明确标注，不以普通编辑内容的形式隐藏商业关系。':'Paid partnerships and sponsored content will always be clearly labelled.','本站内容仅代表写作者在发布时的个人经验与判断，不构成法律、医疗或投资建议。使用第三方产品前，请自行核实其最新条款与风险。':'The writing reflects personal experience at the time of publication. It is not legal, medical or financial advice. Check current terms and risks before using third-party products.','最后更新：2026 年 7 月 11 日':'Last updated: 11 July 2026',
  '文章':'Notes','资源':'Resources','合作':'Work with me','关于':'About','最近写的':'Latest notes','近期文章':'Latest notes',
  '页面测试':'Page test','临时入口 · 点这里看看 →':'Temporary link · take a look →','临时入口 · 点击查看错误页 →':'Temporary link · take a look →',
  '我在用的工具':'Tools I use','找我一起做':'Work with me','去看看 →':'Browse →','看看能做什么 →':'Services →',
  '精选资源':'Resources','定制服务':'Services','隐私与披露':'Privacy & disclosure','返回首页':'Back home','回到首页':'Back home',
  '随笔':'Notes','技术':'Tech','生活':'Life','从今天开始，认真写点东西':'Starting with a blank page',
  '把复杂的问题，拆成可以开始的小事':'Turn a hard problem into a small first step','散步、阅读，以及不被安排的下午':'A walk, a book, and an unscheduled afternoon',
  '你好，这里是序界。':'Hi, this is NEXUS.','推荐说明':'A note on recommendations','合作入口准备中':'CONTACT — COMING SOON',
  '商务联系表单即将开放':'A private contact form is on the way','访问数据':'Visitor data','联盟链接':'Affiliate links','赞助内容':'Sponsored content','责任说明':'Disclaimer'
};
const titleTranslations = {'序界 NEXUS · 个人博客':'NEXUS · Notes on tools and everyday work','精选资源 · 序界 NEXUS':'Resources · NEXUS','合作与服务 · 序界 NEXUS':'Work with me · NEXUS','隐私与披露 · 序界 NEXUS':'Privacy & disclosure · NEXUS','页面未找到 · 序界 NEXUS':'Page not found · NEXUS','从今天开始，认真写点东西 · 序界 NEXUS':'Starting with a blank page · NEXUS'};
const originalTexts = new WeakMap();
const originalTitle = document.title;
const switcher = document.createElement('div');
switcher.className = 'lang-switch';
switcher.setAttribute('aria-label', 'Language switch');
switcher.innerHTML = '<button data-lang="zh">中</button><button data-lang="en">EN</button>';
document.body.appendChild(switcher);

function setLanguage(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('.lang-switch, script, style')) continue;
    if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
    const source = originalTexts.get(node);
    const key = source.trim();
    node.nodeValue = lang === 'en' && translations[key] ? source.replace(key, translations[key]) : source;
  }
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.title = lang === 'en' ? (titleTranslations[originalTitle] || originalTitle) : originalTitle;
  switcher.querySelectorAll('button').forEach(button => button.classList.toggle('active', button.dataset.lang === lang));
  localStorage.setItem('language', lang);
}
switcher.addEventListener('click', event => event.target.dataset.lang && setLanguage(event.target.dataset.lang));
setLanguage(localStorage.getItem('language') || 'zh');

const searchInput = document.querySelector('#post-search');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const postCards = [...document.querySelectorAll('.post-card')];
let activeFilter = 'all';
function filterPosts() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  postCards.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const text = `${card.textContent} ${card.dataset.search || ''}`.toLowerCase();
    const show = categoryMatch && (!query || text.includes(query));
    card.hidden = !show;
    if (show) visible += 1;
  });
  const empty = document.querySelector('#no-results');
  if (empty) empty.hidden = visible !== 0;
}
searchInput?.addEventListener('input', filterPosts);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  filterPosts();
}));
