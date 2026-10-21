const english = {
  skip:'Skip to content',navAbout:'About',navExplore:'Exploration',navContact:'Contact',hello:'HELLO, GLAD YOU’RE HERE',role:'Computer Science Undergraduate · Kean University',intro:'Staying curious. Exploring computer science through learning and practice. I’m especially interested in artificial intelligence.',meet:'About me',portraitCaption:'Learning, exploring, finding my direction.',scroll:'A little more about me',aboutTitle:'Curious by nature.\nLearning by doing.',aboutOne:'I’m Tianhao Li, a Computer Science undergraduate at Kean University. I’m exploring different areas of the field, with a growing interest in artificial intelligence.',aboutTwo:'Right now, I’m building my technical foundation through coursework and hands-on projects. Along the way, I’m discovering the questions and research directions I want to pursue in the long term.',studyLabel:'FIELD OF STUDY',studyValue:'Computer Science',schoolLabel:'UNIVERSITY',focusLabel:'CURRENT INTEREST',focusValue:'Artificial Intelligence',exploreTitle:'Following my curiosity',exploreNote:'My direction is still taking shape.\nEach new experience brings a little more clarity.',aiTitle:'Artificial intelligence',aiBody:'Exploring AI methods and applications, while looking for specific questions I’d like to understand more deeply.',foundationsTitle:'The foundations',foundationsBody:'Building a solid foundation in computer science through coursework, preparing for future projects and research.',practiceTitle:'Hands-on exploration',practiceBody:'Putting what I learn into practice, deepening my understanding and discovering new interests along the way.',githubTitle:'Find me on GitHub',contactTitle:'It starts with\na conversation.',contactBody:'About learning, artificial intelligence, or an interesting idea.\nFeel free to say hello.',copy:'Copy email',back:'Back to top'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const chinese = Object.fromEntries(nodes.map(node => [node.dataset.i18n,node.innerHTML]));
const languageButton = document.querySelector('[data-language]');
let language = 'zh';
function setLanguage(next){
  language = next;
  document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN';
  nodes.forEach(node=>{
    const key = node.dataset.i18n;
    if(next==='en'){
      node.textContent = english[key];
      if(['aboutTitle','contactTitle','contactBody','exploreNote'].includes(key)) node.style.whiteSpace='pre-line';
    } else {node.innerHTML = chinese[key];node.style.whiteSpace='';}
  });
  languageButton.innerHTML = `${next==='en'?'中文':'EN'} <span aria-hidden="true">↗</span>`;
  languageButton.setAttribute('aria-label',next==='en'?'切换到中文':'Switch to English');
  document.querySelector('[data-nav]').setAttribute('aria-label',next==='en'?'Main navigation':'主导航');
  document.querySelector('.portrait-frame img').alt=next==='en'?'Portrait of Tianhao Li':'Tianhao Li 的个人照片';
  document.querySelector('[data-copy-status]').textContent='';
  document.querySelector('meta[name="description"]').content=next==='en'?'Tianhao Li — Computer Science undergraduate at Kean University, exploring artificial intelligence and learning through practice.':'Tianhao Li — Kean University 计算机科学本科生，正在探索人工智能、计算机科学与项目实践。';
  try{localStorage.setItem('tianhao-language',next)}catch{}
}
languageButton.addEventListener('click',()=>setLanguage(language==='zh'?'en':'zh'));
try{if(localStorage.getItem('tianhao-language')==='en')setLanguage('en')}catch{}
document.querySelector('[data-year]').textContent=new Date().getFullYear();
document.querySelector('[data-copy]').addEventListener('click',async()=>{
  const status=document.querySelector('[data-copy-status]');
  try{
    if(!navigator.clipboard)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('litianh@kean.edu');
    status.textContent=language==='en'?'Email copied. See you in my inbox!':'邮箱已复制，期待你的来信。';
  }catch{
    status.textContent=language==='en'?'Select and copy: litianh@kean.edu':'请选中并复制：litianh@kean.edu';
  }
});
