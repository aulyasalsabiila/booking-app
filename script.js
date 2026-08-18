/* ════════════ SEED DATA ════════════ */
const doctorsSeed = [
  { id:1, name:'dr. Anisa Rahma, Sp.A', spec:'Anak', hospital:'Klinik Sehat Bersama', exp:8, rating:4.9, reviews:142, fee:150000, initials:'AR', color:'#fbeef0', accent:'#c97b84',
    bio:'dr. Anisa Rahma adalah dokter spesialis anak dengan pengalaman 8 tahun. Beliau berspesialisasi dalam tumbuh kembang anak, imunisasi, dan penanganan penyakit infeksi pediatri. Lulusan FK Undip dan PPDS Anak RSCM Jakarta.',
    schedule:[{day:'Sen',time:'08:00–12:00'},{day:'Sel',time:'13:00–17:00'},{day:'Rab',time:'08:00–12:00'},{day:'Kam',time:null},{day:'Jum',time:'08:00–11:00'},{day:'Sab',time:'08:00–10:00'},{day:'Min',time:null}],
    patientReviews:[{author:'Budi S.',date:'10 Jun 2025',stars:5,text:'Dokternya sangat sabar dan teliti. Anak saya langsung merasa nyaman.'},{author:'Rina M.',date:'2 Mei 2025',stars:5,text:'Penjelasannya sangat detail dan mudah dipahami. Recommended!'}]},
  { id:2, name:'dr. Budi Santoso, Sp.JP', spec:'Jantung', hospital:'RS Medika Prima', exp:15, rating:4.8, reviews:289, fee:300000, initials:'BS', color:'#f7ebec', accent:'#a8555c',
    bio:'dr. Budi Santoso adalah konsultan jantung dan pembuluh darah dengan 15 tahun pengalaman klinis. Ahli dalam kardiologi intervensi, ekokardiografi, dan penanganan gagal jantung. Lulusan FK UI dan fellowship di National Heart Centre Singapura.',
    schedule:[{day:'Sen',time:'09:00–13:00'},{day:'Sel',time:null},{day:'Rab',time:'09:00–13:00'},{day:'Kam',time:'14:00–17:00'},{day:'Jum',time:'09:00–12:00'},{day:'Sab',time:null},{day:'Min',time:null}],
    patientReviews:[{author:'Hendra T.',date:'5 Jul 2025',stars:5,text:'Sangat profesional, penjelasan penyakit jantung saya mudah dimengerti.'},{author:'Dewi L.',date:'20 Jun 2025',stars:5,text:'Dokter yang berpengalaman dan ramah. Saya merasa tenang setelah konsultasi.'}]},
  { id:3, name:'drg. Citra Dewi', spec:'Gigi', hospital:'Dental Care Plus', exp:6, rating:4.7, reviews:98, fee:120000, initials:'CD', color:'#eef6ef', accent:'#7aad80',
    bio:'drg. Citra Dewi adalah dokter gigi umum yang berfokus pada estetika gigi dan perawatan ortodonti ringan. Penggemar teknik minimal invasif yang menjaga struktur gigi asli pasien semaksimal mungkin.',
    schedule:[{day:'Sen',time:null},{day:'Sel',time:'10:00–16:00'},{day:'Rab',time:'10:00–16:00'},{day:'Kam',time:'10:00–16:00'},{day:'Jum',time:null},{day:'Sab',time:'09:00–13:00'},{day:'Min',time:null}],
    patientReviews:[{author:'Sari W.',date:'12 Jun 2025',stars:5,text:'Tangan ringan dan tidak sakit sama sekali. Kliniknya juga bersih dan nyaman.'}]},
  { id:4, name:'dr. Dimas Prakoso', spec:'Umum', hospital:'Puskesmas Tembalang', exp:4, rating:4.6, reviews:201, fee:50000, initials:'DP', color:'#faf3e6', accent:'#c49a3c',
    bio:'dr. Dimas Prakoso adalah dokter umum yang melayani pemeriksaan kesehatan rutin, surat keterangan sehat, dan penanganan penyakit umum. Aktif dalam program promotif kesehatan masyarakat.',
    schedule:[{day:'Sen',time:'08:00–14:00'},{day:'Sel',time:'08:00–14:00'},{day:'Rab',time:'08:00–14:00'},{day:'Kam',time:'08:00–14:00'},{day:'Jum',time:'08:00–11:00'},{day:'Sab',time:null},{day:'Min',time:null}],
    patientReviews:[{author:'Lina K.',date:'8 Jul 2025',stars:4,text:'Pelayanan cepat dan biaya terjangkau. Cocok untuk periksa rutin.'},{author:'Agus P.',date:'1 Jul 2025',stars:5,text:'Dokternya ramah dan sabar menjelaskan kondisi saya.'}]},
  { id:5, name:'dr. Eriana Putri, Sp.KK', spec:'Kulit', hospital:'Klinik Kecantikan Medis', exp:9, rating:4.9, reviews:334, fee:200000, initials:'EP', color:'#f5eff8', accent:'#9b8abf',
    bio:'dr. Eriana Putri adalah spesialis kulit dan kelamin dengan keahlian khusus di bidang dermatologi estetik, penanganan jerawat kronis, dan peremajaan kulit. Menggunakan teknologi laser dan radiofrequency terkini.',
    schedule:[{day:'Sen',time:'10:00–16:00'},{day:'Sel',time:'10:00–16:00'},{day:'Rab',time:null},{day:'Kam',time:'10:00–16:00'},{day:'Jum',time:'10:00–14:00'},{day:'Sab',time:'09:00–12:00'},{day:'Min',time:null}],
    patientReviews:[{author:'Maya R.',date:'9 Jul 2025',stars:5,text:'Kulitku jadi jauh lebih bersih setelah treatment. Dokternya sangat detail dan profesional.'},{author:'Feri A.',date:'25 Jun 2025',stars:5,text:'Akhirnya ketemu dokter yang paham masalah kulit saya. Hasilnya luar biasa!'}]},
  { id:6, name:'dr. Fajar Nugroho, Sp.M', spec:'Mata', hospital:'Eye Center Semarang', exp:12, rating:4.7, reviews:176, fee:175000, initials:'FN', color:'#eef4f2', accent:'#5f9488',
    bio:'dr. Fajar Nugroho adalah dokter spesialis mata dengan fokus pada bedah refraktif (LASIK), katarak, dan glaukoma. Telah menangani lebih dari 3.000 kasus bedah mata dengan tingkat keberhasilan tinggi.',
    schedule:[{day:'Sen',time:'08:00–12:00'},{day:'Sel',time:null},{day:'Rab',time:'08:00–12:00'},{day:'Kam',time:'13:00–17:00'},{day:'Jum',time:'08:00–11:00'},{day:'Sab',time:null},{day:'Min',time:null}],
    patientReviews:[{author:'Toni B.',date:'3 Jul 2025',stars:5,text:'Sangat profesional. Mata saya jauh lebih baik setelah prosedur.'}]},
  { id:7, name:'dr. Gita Maharani, Sp.KJ', spec:'Psikiatri', hospital:'RS Jiwa Semarang', exp:7, rating:4.8, reviews:88, fee:250000, initials:'GM', color:'#f2eef6', accent:'#8a72b3',
    bio:'dr. Gita Maharani adalah psikiater yang berspesialisasi dalam penanganan depresi, kecemasan, gangguan tidur, dan burnout. Pendekatan beliau mengintegrasikan psikoterapi dan farmakologi secara holistik.',
    schedule:[{day:'Sen',time:'13:00–17:00'},{day:'Sel',time:'13:00–17:00'},{day:'Rab',time:null},{day:'Kam',time:'13:00–17:00'},{day:'Jum',time:'13:00–16:00'},{day:'Sab',time:null},{day:'Min',time:null}],
    patientReviews:[{author:'Anon.',date:'7 Jul 2025',stars:5,text:'Dokternya membuat saya merasa aman untuk bercerita. Sangat membantu.'},{author:'Anon.',date:'1 Jun 2025',stars:5,text:'Penanganan yang sangat bijak dan tidak menghakimi. Terima kasih dok.'}]},
  { id:8, name:'dr. Hendra Wijaya', spec:'Umum', hospital:'Klinik 24 Jam Banyumanik', exp:3, rating:4.5, reviews:156, fee:75000, initials:'HW', color:'#faf1e4', accent:'#c88a4a',
    bio:'dr. Hendra Wijaya adalah dokter umum yang berpraktek di klinik 24 jam. Tersedia untuk konsultasi mendadak, penanganan gawat darurat ringan, dan pemeriksaan awal.',
    schedule:[{day:'Sen',time:'00:00–24:00'},{day:'Sel',time:'00:00–24:00'},{day:'Rab',time:'00:00–24:00'},{day:'Kam',time:'00:00–24:00'},{day:'Jum',time:'00:00–24:00'},{day:'Sab',time:'00:00–24:00'},{day:'Min',time:'00:00–24:00'}],
    patientReviews:[{author:'Rudi H.',date:'10 Jul 2025',stars:4,text:'Cepat dan tanggap walau tengah malam. Sangat menolong!'},{author:'Nita S.',date:'5 Jul 2025',stars:5,text:'Dokternya responsif dan kliniknya bersih. Harga juga terjangkau.'}]},
];

const bookingsSeed = [
  {id:'MBK-240311',docId:2,docName:'dr. Budi Santoso, Sp.JP',spec:'Jantung',hospital:'RS Medika Prima',initials:'BS',color:'#fef2f2',date:'2026-07-20',time:'09:00',patient:'Aulya Salsabila',phone:'0812-3456-7890',dob:'1996-04-12',gender:'Perempuan',complaint:'Kontrol rutin tekanan darah',payment:'Transfer Bank (BCA)',fee:300000,status:'upcoming',reviewed:false},
  {id:'MBK-231205',docId:5,docName:'dr. Eriana Putri, Sp.KK',spec:'Kulit',hospital:'Klinik Kecantikan Medis',initials:'EP',color:'#fdf4ff',date:'2025-12-05',time:'14:30',patient:'Aulya Salsabila',phone:'0812-3456-7890',dob:'1996-04-12',gender:'Perempuan',complaint:'Konsultasi jerawat',payment:'GoPay / OVO / Dana',fee:200000,status:'completed',reviewed:false},
  {id:'MBK-231102',docId:1,docName:'dr. Anisa Rahma, Sp.A',spec:'Anak',hospital:'Klinik Sehat Bersama',initials:'AR',color:'#eff6ff',date:'2025-11-02',time:'10:00',patient:'Aulya Salsabila',phone:'0812-3456-7890',dob:'2020-02-14',gender:'Laki-laki',complaint:'Imunisasi rutin',payment:'BPJS Kesehatan',fee:150000,status:'cancelled',reviewed:false},
];

const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const WDAYS  = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
const DAYNAMES = ['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
const DOW_TO_SCHED = {1:0,2:1,3:2,4:3,5:4,6:5,0:6}; // JS getDay() -> schedule array index

let doctors = doctorsSeed.map(d=>({...d, patientReviews:[...d.patientReviews]}));
let myBookings = [];
let favorites = new Set();

let currentDoc=null, selectedDate=null, selectedTime=null, calYear, calMonth;
let editingBookingId=null;
let reviewTargetBookingId=null, reviewStars=0;
const fmt = n => 'Rp ' + n.toLocaleString('id-ID');
const todayStr = () => { const t=new Date(); return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`; };

/* ════════════ ICONS ════════════ */
const ICONS = {
  hospital:'<svg class="icon" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/><path d="M9 21v-4h6v4"/><path d="M9 9h1M9 13h1M14 9h1M14 13h1"/></svg>',
  calendar:'<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  clock:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  user:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  card:'<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  star:'<svg class="icon" viewBox="0 0 24 24"><path d="M12 2.5l3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7L2.3 9.6l6.7-1z"/></svg>',
  heart:'<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 8.6a5.5 5.5 0 0 0-9.5-3.8l-1.3 1.3-1.3-1.3A5.5 5.5 0 1 0 3.2 12.4L12 21l8.8-8.6a5.5 5.5 0 0 0 0-3.8z"/></svg>',
  alert:'<svg class="icon" viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  bell:'<svg class="icon" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/></svg>',
};
function stars(rating, size=5){
  let h='';
  for(let i=1;i<=size;i++){
    h += `<svg class="icon${i>rating+0.24?' empty':''}" viewBox="0 0 24 24"><path d="M12 2.5l3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7L2.3 9.6l6.7-1z"/></svg>`;
  }
  return h;
}

/* ════════════ PERSISTENCE ════════════ */
async function loadState(){
  try{
    const res = await window.storage.get('medibook-state');
    if(res && res.value){
      const data = JSON.parse(res.value);
      myBookings = data.bookings && data.bookings.length ? data.bookings : bookingsSeed.map(b=>({...b}));
      favorites = new Set(data.favorites||[]);
      if(data.doctorOverrides){
        for(const ov of data.doctorOverrides){
          const d = doctors.find(x=>x.id===ov.id);
          if(d){ d.rating=ov.rating; d.reviews=ov.reviews; d.patientReviews=ov.patientReviews; }
        }
      }
      return;
    }
  }catch(e){ /* no saved state yet */ }
  myBookings = bookingsSeed.map(b=>({...b}));
  favorites = new Set();
  await saveState();
}
async function saveState(){
  try{
    const doctorOverrides = doctors.map(d=>({id:d.id, rating:d.rating, reviews:d.reviews, patientReviews:d.patientReviews}));
    await window.storage.set('medibook-state', JSON.stringify({
      bookings: myBookings, favorites: Array.from(favorites), doctorOverrides
    }));
  }catch(e){ console.error('Gagal menyimpan data', e); }
}

/* ════════════ PAGE NAV ════════════ */
function goPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.topbar-nav .nav-pill, .mobile-nav .nav-pill').forEach((b,i)=>{
    const idx = i % 2;
    b.classList.toggle('active',(idx===0&&id==='home')||(idx===1&&id==='bookings'));
  });
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='bookings') renderBookings('all');
  closeNotif();
  updateHeaderStats();
}

function toggleMobileNav(){ document.getElementById('mobileNav').classList.toggle('open'); }

/* ════════════ AVATAR ════════════ */
function avatarHtml(color, initials){
  return `<div class="doctor-avatar" style="background:${color};color:var(--text2)">${initials}</div>`;
}

/* ════════════ DOCTORS ════════════ */
function scheduleFor(doctor, dateObj){
  return doctor.schedule[DOW_TO_SCHED[dateObj.getDay()]];
}
function isAvailableToday(doctor){
  const now = new Date();
  return !!scheduleFor(doctor, now).time;
}

function renderDoctorsSkeleton(){
  const g = document.getElementById('doctorGrid');
  g.innerHTML = Array.from({length:6}).map(()=>`
    <div class="skel-card">
      <div style="display:flex;gap:1rem;margin-bottom:1rem">
        <div class="skel-line" style="width:56px;height:56px;border-radius:14px"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:.5rem;padding-top:.3rem">
          <div class="skel-line" style="height:14px;width:70%"></div>
          <div class="skel-line" style="height:10px;width:50%"></div>
        </div>
      </div>
      <div class="skel-line" style="height:10px;width:90%;margin-bottom:.6rem"></div>
      <div class="skel-line" style="height:10px;width:60%"></div>
    </div>`).join('');
}

function renderDoctors(list) {
  const g=document.getElementById('doctorGrid');
  document.getElementById('resultCount').textContent=`Menampilkan ${list.length} dokter`;
  if(!list.length){
    g.innerHTML=`<div class="empty-state" style="grid-column:1/-1">${ICONS.hospital.replace('class="icon"','class="icon"')}<div class="empty-state-title">Tidak ada dokter yang sesuai</div><div class="empty-state-sub">Coba ubah kata kunci atau filter pencarian.</div></div>`;
    return;
  }
  g.innerHTML=list.map(d=>{
    const today = isAvailableToday(d);
    const isFav = favorites.has(d.id);
    return `
    <div class="doctor-card">
      <button class="fav-toggle${isFav?' active':''}" aria-label="${isFav?'Hapus dari favorit':'Simpan ke favorit'}" onclick="event.stopPropagation();toggleFavorite(${d.id})">${ICONS.heart}</button>
      <div class="doctor-card-top" onclick="openDocModal(${d.id})">
        ${avatarHtml(d.color, d.initials)}
        <div style="flex:1">
          <div class="doctor-name">${d.name}</div>
          <div class="doctor-spec">${d.spec}</div>
          <div class="doctor-hospital">${ICONS.hospital} ${d.hospital}</div>
          <div style="margin-top:.45rem"><span class="experience-badge">${d.exp} thn pengalaman</span></div>
        </div>
      </div>
      <div class="doctor-card-bottom">
        <div class="rating-wrap">
          <div class="stars">${stars(d.rating)}</div>
          <span class="rating-num">${d.rating.toFixed(1)}</span>
          <span class="review-cnt">(${d.reviews})</span>
        </div>
        <div class="avail-badge ${today?'today':'busy'}">
          <span class="avail-dot"></span>${today?'Tersedia Hari Ini':'Cek Jadwal'}
        </div>
      </div>
      <div class="doctor-card-price">
        <div><div class="price-lbl">Biaya Konsultasi</div><div class="price-val">${fmt(d.fee)}</div></div>
        <div style="display:flex;gap:.4rem">
          <button class="view-profile-btn" onclick="openDocModal(${d.id})">Profil</button>
          <button class="book-btn" onclick="openBooking(${d.id})">Booking →</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleFavorite(id){
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  saveState();
  updateHeaderStats();
  filterDoctors();
  showToast(favorites.has(id) ? 'Ditambahkan ke favorit ♥' : 'Dihapus dari favorit');
  const dm = document.getElementById('docModalBox');
  if(currentModalDocId===id) refreshDocModalSaveBtn(id);
}

function selectSpec(el) {
  const spec = el.dataset.spec;
  document.querySelectorAll('.spec-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('specFilter').value = spec;
  filterDoctors();
}

function syncSpecChip() {
  const spec = document.getElementById('specFilter').value;
  document.querySelectorAll('.spec-chip').forEach(c=>{
    c.classList.toggle('active', c.dataset.spec === spec);
  });
}

function resetFilters(){
  document.getElementById('searchInput').value='';
  document.getElementById('specFilter').value='';
  document.getElementById('sortFilter').value='rating';
  document.getElementById('availFilter').value='';
  syncSpecChip();
  filterDoctors();
}

function filterDoctors() {
  const q     = (document.getElementById('searchInput').value||'').toLowerCase();
  const spec  = document.getElementById('specFilter').value;
  const sort  = document.getElementById('sortFilter').value;
  const avail = document.getElementById('availFilter').value;
  let list = doctors.filter(d=>{
    const mq = !q || d.name.toLowerCase().includes(q)||d.spec.toLowerCase().includes(q)||d.hospital.toLowerCase().includes(q);
    const ms = !spec || d.spec===spec;
    const ma = avail!=='today' || isAvailableToday(d);
    const mf = avail!=='favorite' || favorites.has(d.id);
    return mq&&ms&&ma&&mf;
  });
  if(sort==='rating')     list.sort((a,b)=>b.rating-a.rating);
  if(sort==='price-asc')  list.sort((a,b)=>a.fee-b.fee);
  if(sort==='price-desc') list.sort((a,b)=>b.fee-a.fee);
  if(sort==='exp')        list.sort((a,b)=>b.exp-a.exp);
  renderDoctors(list);
}

/* ════════════ DOCTOR PROFILE MODAL ════════════ */
let currentModalDocId=null;
function openDocModal(id) {
  const d = doctors.find(x=>x.id===id);
  if(!d) return;
  currentModalDocId=id;
  const schedHtml = DAYNAMES.map((day,i)=>{
    const s = d.schedule[i];
    return `<div class="doc-sched-day${!s.time?' off':''}">
      <div class="doc-sched-name">${s.day}</div>
      <div class="doc-sched-time">${s.time||'Libur'}</div>
    </div>`;
  }).join('');
  const reviewsHtml = d.patientReviews.length ? d.patientReviews.map(r=>`
    <div class="doc-review">
      <div class="doc-review-top"><span class="doc-review-author">${r.author}</span><span class="doc-review-date">${r.date}</span></div>
      <div class="doc-review-stars">${stars(r.stars)}</div>
      <div class="doc-review-text">${r.text}</div>
    </div>`).join('') : `<div class="empty-state" style="padding:1.5rem"><div class="empty-state-sub">Belum ada ulasan.</div></div>`;

  const today = isAvailableToday(d);
  document.getElementById('docModalBox').innerHTML = `
    <div class="doc-modal-hero">
      <button class="doc-modal-close" onclick="closeDocModal()" aria-label="Tutup">✕</button>
      <div class="doc-modal-profile">
        <div class="doc-modal-avatar" style="background:${d.color};color:var(--text2)">${d.initials}</div>
        <div>
          <div class="doc-modal-name">${d.name}</div>
          <div class="doc-modal-spec">${d.spec} · ${d.hospital}</div>
          <div class="doc-modal-badges">
            <span class="doc-modal-badge">${d.exp} thn pengalaman</span>
            <span class="doc-modal-badge">${today?'✅ Tersedia Hari Ini':'🕐 Cek Jadwal Praktik'}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-modal-body">
      <div class="doc-stats">
        <div class="doc-stat"><div class="doc-stat-val">${d.rating.toFixed(1)}</div><div class="doc-stat-lbl">Rating</div></div>
        <div class="doc-stat"><div class="doc-stat-val">${d.reviews}</div><div class="doc-stat-lbl">Ulasan</div></div>
        <div class="doc-stat"><div class="doc-stat-val">${d.exp}+</div><div class="doc-stat-lbl">Thn Exp</div></div>
        <div class="doc-stat"><div class="doc-stat-val" style="font-size:.95rem">${fmt(d.fee)}</div><div class="doc-stat-lbl">Konsultasi</div></div>
      </div>
      <div class="doc-section">
        <div class="doc-section-title">Tentang Dokter</div>
        <div class="doc-bio">${d.bio}</div>
      </div>
      <div class="doc-section">
        <div class="doc-section-title">Jadwal Praktik</div>
        <div class="doc-schedule">${schedHtml}</div>
      </div>
      <div class="doc-section">
        <div class="doc-section-title">Ulasan Pasien</div>
        <div class="doc-reviews">${reviewsHtml}</div>
      </div>
    </div>
    <div class="doc-modal-footer">
      <button class="doc-book-btn" onclick="closeDocModal();openBooking(${d.id})">Booking Sekarang →</button>
      <button class="doc-save-btn" id="modalSaveBtn" onclick="toggleFavorite(${d.id})"></button>
    </div>`;
  refreshDocModalSaveBtn(id);

  document.getElementById('docModal').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('docModal').querySelector('.doc-modal-close').focus();
}
function refreshDocModalSaveBtn(id){
  const btn = document.getElementById('modalSaveBtn');
  if(!btn) return;
  const isFav = favorites.has(id);
  btn.classList.toggle('active', isFav);
  btn.innerHTML = `${ICONS.heart} ${isFav?'Tersimpan':'Simpan'}`;
}

function closeDocModal() {
  document.getElementById('docModal').classList.remove('open');
  document.body.style.overflow='';
}

function handleModalClick(e, which) {
  const overlay = which==='doc' ? document.getElementById('docModal') : document.getElementById('reviewModal');
  if(e.target===overlay){ if(which==='doc') closeDocModal(); else closeReviewModal(); }
}

/* ════════════ BOOKING FLOW ════════════ */
function openBooking(docId, editBookingId=null) {
  currentDoc=doctors.find(d=>d.id===docId);
  if(!currentDoc) return;
  selectedDate=null; selectedTime=null;
  editingBookingId=editBookingId;

  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-booking').classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('breadcrumbDoc').textContent=currentDoc.name;

  document.getElementById('bookingDocInfo').innerHTML=`
    <div class="booking-doc-avatar" style="background:${currentDoc.color};color:var(--text2)">${currentDoc.initials}</div>
    <div>
      <div class="booking-doc-name">${currentDoc.name}</div>
      <div class="booking-doc-spec">${currentDoc.spec} · ${currentDoc.hospital}</div>
    </div>
    <div class="booking-doc-price">${fmt(currentDoc.fee)}</div>`;

  document.getElementById('sumDoc').textContent   = currentDoc.name;
  document.getElementById('sumSpec').textContent  = currentDoc.spec;
  document.getElementById('sumHosp').textContent  = currentDoc.hospital;
  document.getElementById('sumFee').textContent   = fmt(currentDoc.fee);
  document.getElementById('sumTotal').textContent = fmt(currentDoc.fee+5000);
  document.getElementById('sumDate').textContent  = 'Belum dipilih';
  document.getElementById('sumTime').textContent  = 'Belum dipilih';
  document.getElementById('sumPatient').textContent='—';
  document.getElementById('sumPayment').textContent='—';
  document.getElementById('confirmBtn').disabled=true;

  const editing = myBookings.find(b=>b.id===editBookingId);
  document.getElementById('summaryTitle').textContent = editing ? 'Ubah Jadwal Booking' : 'Ringkasan Booking';
  document.getElementById('confirmBtn').textContent = editing ? 'Simpan Perubahan →' : 'Konfirmasi Booking →';

  document.getElementById('patName').value = editing ? editing.patient : '';
  document.getElementById('patPhone').value = editing ? editing.phone : '';
  document.getElementById('patDob').value = editing ? editing.dob : '';
  document.getElementById('patGender').value = editing ? editing.gender : '';
  document.getElementById('patComplaint').value = editing ? editing.complaint : '';
  document.getElementById('patPayment').value = editing ? editing.payment : '';
  ['patName','patPhone','patDob'].forEach(id=>{ document.getElementById(id).classList.remove('err'); document.getElementById('err-'+id).textContent=''; });

  ['s2','s3','s4'].forEach((id,i)=>{
    const el=document.getElementById(id);
    el.textContent=i+2; el.classList.remove('done');
  });
  document.getElementById('timeCard').classList.add('locked');
  document.getElementById('formCard').classList.add('locked');

  const today=new Date();
  calYear=today.getFullYear(); calMonth=today.getMonth();
  renderCalendar();
  if(editing){ updateSummary(); }
}

/* ════════════ CALENDAR (schedule-aware) ════════════ */
function renderCalendar() {
  const today=new Date();
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const daysInPrev=new Date(calYear,calMonth,0).getDate();
  document.getElementById('calMonth').textContent=`${MONTHS[calMonth]} ${calYear}`;
  let html=WDAYS.map(d=>`<div class="cal-day-label">${d}</div>`).join('');
  for(let i=firstDay-1;i>=0;i--) html+=`<div class="cal-day other">${daysInPrev-i}</div>`;
  for(let d=1;d<=daysInMonth;d++) {
    const date=new Date(calYear,calMonth,d);
    const isPast=date<new Date(today.getFullYear(),today.getMonth(),today.getDate());
    const isToday=date.toDateString()===today.toDateString();
    const sched = scheduleFor(currentDoc, date);
    const isOff = !sched.time;
    const ds=`${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isSel=selectedDate===ds;
    let cls='cal-day';
    if(isSel) cls+=' sel';
    else if(isPast) cls+=' past';
    else if(isOff) cls+=' off';
    else cls+=' avail';
    if(isToday&&!isSel) cls+=' today';
    const click=(!isPast&&!isOff)?`onclick="selectDate('${ds}')"`:'';
    const title = isOff && !isPast ? `title="${currentDoc.name.split(',')[0]} libur di hari ${sched.day}"` : '';
    html+=`<button type="button" class="${cls}" ${click} ${title} ${(isPast||isOff)?'disabled':''}>${d}</button>`;
  }
  const total=firstDay+daysInMonth;
  for(let i=1;i<=(total%7===0?0:7-total%7);i++) html+=`<div class="cal-day other">${i}</div>`;
  document.getElementById('calGrid').innerHTML=html;
}

function changeMonth(dir) {
  calMonth+=dir;
  if(calMonth>11){calMonth=0;calYear++;}
  if(calMonth<0){calMonth=11;calYear--;}
  renderCalendar();
}

/* Generate time slots from a doctor's schedule range like "08:00–12:00" */
function genSlots(rangeStr){
  if(!rangeStr) return [];
  const parts = rangeStr.split(/[–-]/);
  let [sh,sm] = parts[0].split(':').map(Number);
  let [eh,em] = parts[1].split(':').map(Number);
  if(eh===24){ eh=23; em=59; }
  const endMin = eh*60+em;
  const slots=[];
  let cur = sh*60+sm;
  const step = 30;
  while(cur+step<=endMin || (endMin-cur)>=step-1){
    if(cur+step>endMin+1) break;
    const h=Math.floor(cur/60), m=cur%60;
    slots.push(String(h).padStart(2,'0')+':'+String(m).padStart(2,'0'));
    cur+=step;
  }
  return slots;
}

/* Deterministic "already booked" slots per doctor+date so it's stable on refresh */
function seededTakenIndices(doctorId, dateStr, total){
  let seed=0;
  const str=doctorId+'|'+dateStr;
  for(let i=0;i<str.length;i++) seed=(seed*31+str.charCodeAt(i))>>>0;
  const rng=()=>{ seed=(seed*1103515245+12345)>>>0; return seed/4294967295; };
  const count=Math.max(1,Math.floor(total*0.22));
  const taken=new Set();
  let guard=0;
  while(taken.size<count && taken.size<total && guard<500){ taken.add(Math.floor(rng()*total)); guard++; }
  return taken;
}

function selectDate(ds) {
  selectedDate=ds; selectedTime=null;
  renderCalendar();
  document.getElementById('timeCard').classList.remove('locked');
  const s2=document.getElementById('s2'); s2.innerHTML='<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>'; s2.classList.add('done');

  const dateObj = new Date(ds+'T00:00:00');
  const sched = scheduleFor(currentDoc, dateObj);
  const slots = genSlots(sched.time);
  const takenIdx = seededTakenIndices(currentDoc.id, ds, slots.length);
  // also block a slot the user already booked with this doctor on this date (from another booking, excluding the one being edited)
  const myTaken = new Set(myBookings.filter(b=>b.docId===currentDoc.id && b.date===ds && b.status==='upcoming' && b.id!==editingBookingId).map(b=>b.time));

  const tg = document.getElementById('timeGrid');
  if(!slots.length){
    tg.innerHTML = `<div class="time-empty">Tidak ada jam praktik pada tanggal ini.</div>`;
  } else {
    tg.innerHTML = slots.map((t,i)=>{
      const taken = takenIdx.has(i) || myTaken.has(t);
      return `<div class="time-slot${taken?' taken':''}" ${!taken?`onclick="selectTime('${t}')"`:''}>${t}</div>`;
    }).join('');
  }

  document.getElementById('sumDate').textContent=dateObj.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('sumTime').textContent='Belum dipilih';
  checkConfirm();
}

function selectTime(t) {
  selectedTime=t;
  document.querySelectorAll('.time-slot').forEach(el=>el.classList.toggle('sel',el.textContent===t));
  document.getElementById('formCard').classList.remove('locked');
  const s3=document.getElementById('s3'); s3.innerHTML='<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>'; s3.classList.add('done');
  document.getElementById('sumTime').textContent=t+' WIB';
  checkConfirm();
}

/* ════════════ FORM VALIDATION ════════════ */
function validateField(id){
  const el = document.getElementById(id);
  const errEl = document.getElementById('err-'+id);
  let msg='';
  const v = el.value.trim();
  if(id==='patName'){
    if(v && v.length<3) msg='Nama minimal 3 karakter.';
    else if(v && !/^[a-zA-Z .']+$/.test(v)) msg='Nama hanya boleh huruf dan spasi.';
  }
  if(id==='patPhone'){
    if(v && !/^(\+62|0)8[0-9]{8,12}$/.test(v.replace(/[\s-]/g,''))) msg='Format nomor tidak valid, contoh: 0812-3456-7890.';
  }
  if(id==='patDob'){
    if(v){
      const dob=new Date(v);
      const now=new Date();
      const minDate=new Date(now.getFullYear()-120,now.getMonth(),now.getDate());
      if(dob>now) msg='Tanggal lahir tidak boleh di masa depan.';
      else if(dob<minDate) msg='Tanggal lahir tidak valid.';
    }
  }
  el.classList.toggle('err', !!msg);
  errEl.textContent = msg;
  return !msg;
}

function updateSummary() {
  const name=document.getElementById('patName').value.trim();
  const pay=document.getElementById('patPayment').value;
  document.getElementById('sumPatient').textContent=name||'—';
  document.getElementById('sumPayment').textContent=pay||'—';
  const s4=document.getElementById('s4');
  if(name){ s4.innerHTML='<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>'; s4.classList.add('done'); }
  else { s4.textContent='4'; s4.classList.remove('done'); }
  checkConfirm();
}

function checkConfirm() {
  const name = document.getElementById('patName').value.trim();
  const phone = document.getElementById('patPhone').value.trim();
  const dob = document.getElementById('patDob').value.trim();
  const validName = name.length>=3 && !document.getElementById('patName').classList.contains('err');
  const validPhone = phone.length>0 && !document.getElementById('patPhone').classList.contains('err');
  const validDob = !dob || !document.getElementById('patDob').classList.contains('err');
  const ok = selectedDate && selectedTime && validName && validPhone && validDob &&
    document.getElementById('patPayment').value;
  document.getElementById('confirmBtn').disabled=!ok;
}

function confirmBooking() {
  const nameOk = validateField('patName');
  const phoneOk = validateField('patPhone');
  const dobOk = validateField('patDob');
  if(!nameOk || !phoneOk || !dobOk) { checkConfirm(); return; }

  const btn=document.getElementById('confirmBtn');
  const isEdit = !!editingBookingId;
  btn.textContent='Memproses...'; btn.disabled=true;
  setTimeout(async ()=>{
    const date=new Date(selectedDate+'T00:00:00');
    const dateStr=date.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    const name=document.getElementById('patName').value.trim();
    const phone=document.getElementById('patPhone').value.trim();
    const dob=document.getElementById('patDob').value;
    const gender=document.getElementById('patGender').value;
    const complaint=document.getElementById('patComplaint').value.trim();
    const payment=document.getElementById('patPayment').value;

    let code;
    if(isEdit){
      const b = myBookings.find(x=>x.id===editingBookingId);
      b.date=selectedDate; b.time=selectedTime; b.patient=name; b.phone=phone; b.dob=dob;
      b.gender=gender; b.complaint=complaint; b.payment=payment; b.status='upcoming';
      code = b.id;
    } else {
      code='MBK-'+Math.floor(Math.random()*900000+100000);
      myBookings.unshift({id:code,docId:currentDoc.id,docName:currentDoc.name,spec:currentDoc.spec,hospital:currentDoc.hospital,initials:currentDoc.initials,color:currentDoc.color,date:selectedDate,time:selectedTime,patient:name,phone,dob,gender,complaint,payment,fee:currentDoc.fee,status:'upcoming',reviewed:false});
    }
    await saveState();

    document.getElementById('successTitle').textContent = isEdit ? 'Jadwal Diperbarui!' : 'Booking Berhasil!';
    document.getElementById('successSub').textContent = isEdit ? 'Jadwal konsultasi Anda telah diperbarui. Pengingat akan dikirim 1 jam sebelum jadwal.' : 'Jadwal konsultasi Anda telah dikonfirmasi. Pengingat akan dikirim 1 jam sebelum jadwal.';
    document.getElementById('successCode').textContent=code;
    document.getElementById('successDetail').innerHTML=`
      <div class="success-row"><span class="success-row-key">Dokter</span><span class="success-row-val">${currentDoc.name}</span></div>
      <div class="success-row"><span class="success-row-key">Spesialisasi</span><span class="success-row-val">${currentDoc.spec}</span></div>
      <div class="success-row"><span class="success-row-key">Klinik</span><span class="success-row-val">${currentDoc.hospital}</span></div>
      <div class="success-row"><span class="success-row-key">Tanggal</span><span class="success-row-val">${dateStr}</span></div>
      <div class="success-row"><span class="success-row-key">Jam</span><span class="success-row-val">${selectedTime} WIB</span></div>
      <div class="success-row"><span class="success-row-key">Pasien</span><span class="success-row-val">${name}</span></div>
      <div class="success-row"><span class="success-row-key">Pembayaran</span><span class="success-row-val">${payment}</span></div>
      <div class="success-row"><span class="success-row-key">Total Bayar</span><span class="success-row-val" style="color:var(--rose)">${fmt(currentDoc.fee+5000)}</span></div>`;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-success').classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
    showToast(isEdit ? 'Jadwal berhasil diperbarui 🎉' : 'Booking berhasil dikonfirmasi! 🎉');
    editingBookingId=null;
    updateHeaderStats();
  },1000);
}

/* ════════════ MY BOOKINGS ════════════ */
function renderBookings(filter) {
  const list=filter==='all'?myBookings:myBookings.filter(b=>b.status===filter);
  const bl=document.getElementById('bookingList');
  const smap={upcoming:'status-upcoming',completed:'status-completed',cancelled:'status-cancelled'};
  const slbl={upcoming:'Mendatang',completed:'Selesai',cancelled:'Dibatalkan'};
  if(!list.length){
    bl.innerHTML=`<div class="empty-state">${ICONS.calendar}<div class="empty-state-title">Belum ada booking</div><div class="empty-state-sub">Booking baru akan muncul di sini.</div></div>`;
    return;
  }
  bl.innerHTML=list.map(b=>{
    const d=new Date(b.date+'T00:00:00');
    const ds=d.toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
    return `
    <div class="booking-item">
      <div class="booking-item-avatar" style="background:${b.color};color:var(--text2)">${b.initials}</div>
      <div class="booking-item-info">
        <div class="booking-item-doc">${b.docName}</div>
        <div class="booking-item-spec">${b.spec} · ${b.hospital}</div>
        <div class="booking-item-meta">
          <span>${ICONS.calendar} ${ds}</span><span>${ICONS.clock} ${b.time} WIB</span>
          <span>${ICONS.user} ${b.patient}</span><span>${ICONS.card} ${fmt(b.fee+5000)}</span>
        </div>
      </div>
      <div class="booking-status ${smap[b.status]}">${slbl[b.status]}</div>
      <div class="booking-item-actions">
        ${b.status==='upcoming'?`
          <button class="action-btn" onclick="openBooking(${b.docId},'${b.id}')">Ubah Jadwal</button>
          <button class="action-btn danger" onclick="cancelBooking('${b.id}')">Batalkan</button>
        `:b.status==='completed'?`
          <button class="action-btn" ${b.reviewed?'disabled':''} onclick="openReviewModal('${b.id}')">${b.reviewed?'Ulasan Terkirim ✓':'Beri Ulasan ★'}</button>
          <button class="action-btn" onclick="openBooking(${b.docId})">Booking Lagi</button>
        `:`<button class="action-btn" onclick="openBooking(${b.docId})">Booking Lagi</button>`}
      </div>
    </div>`;
  }).join('');
}

function filterBookings(filter,btn) {
  document.querySelectorAll('#page-bookings .nav-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderBookings(filter);
}

async function cancelBooking(id) {
  if(!confirm('Yakin ingin membatalkan booking ini?')) return;
  const b=myBookings.find(x=>x.id===id);
  if(b) b.status='cancelled';
  await saveState();
  renderBookings('all');
  document.querySelectorAll('#page-bookings .nav-pill')[0].classList.add('active');
  showToast('Booking dibatalkan');
  updateHeaderStats();
}

/* ════════════ REVIEW MODAL ════════════ */
function openReviewModal(bookingId){
  const b = myBookings.find(x=>x.id===bookingId);
  if(!b) return;
  reviewTargetBookingId=bookingId;
  reviewStars=0;
  document.getElementById('reviewModalBox').innerHTML = `
    <div class="mini-modal-hd">
      <div>
        <div class="mini-modal-title">Beri Ulasan</div>
        <div class="mini-modal-sub">${b.docName} · ${b.spec}</div>
      </div>
      <button class="doc-modal-close" style="position:static;background:var(--bg2);border-color:var(--border);color:var(--text2)" onclick="closeReviewModal()" aria-label="Tutup">✕</button>
    </div>
    <div class="star-picker" id="starPicker">
      ${[1,2,3,4,5].map(n=>`<button type="button" aria-label="${n} bintang" onclick="setReviewStars(${n})">${ICONS.star}</button>`).join('')}
    </div>
    <div class="form-field">
      <label class="form-label" for="reviewText">Ceritakan pengalaman Anda</label>
      <textarea class="form-textarea" id="reviewText" placeholder="Bagaimana pelayanan dokter?"></textarea>
    </div>
    <button class="confirm-btn" style="margin-top:1rem" onclick="submitReview()">Kirim Ulasan</button>
  `;
  document.getElementById('reviewModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function setReviewStars(n){
  reviewStars=n;
  document.querySelectorAll('#starPicker button').forEach((b,i)=>b.classList.toggle('on', i<n));
}
function closeReviewModal(){
  document.getElementById('reviewModal').classList.remove('open');
  document.body.style.overflow='';
  reviewTargetBookingId=null;
}
async function submitReview(){
  if(reviewStars===0){ showToast('Pilih rating bintang terlebih dahulu'); return; }
  const b = myBookings.find(x=>x.id===reviewTargetBookingId);
  if(!b) return;
  const d = doctors.find(x=>x.id===b.docId);
  const text = document.getElementById('reviewText').value.trim() || 'Pelayanan memuaskan.';
  const newRating = ((d.rating*d.reviews)+reviewStars)/(d.reviews+1);
  d.rating = Math.round(newRating*10)/10;
  d.reviews += 1;
  d.patientReviews.unshift({author:b.patient||'Anda', date:new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}), stars:reviewStars, text});
  b.reviewed = true;
  await saveState();
  closeReviewModal();
  const labelToFilter={'Semua':'all','Mendatang':'upcoming','Selesai':'completed','Dibatalkan':'cancelled'};
  const activeLabel = document.querySelector('#page-bookings .nav-pill.active')?.textContent || 'Semua';
  renderBookings(labelToFilter[activeLabel] || 'all');
  filterDoctors();
  showToast('Terima kasih atas ulasan Anda! ⭐');
}

/* ════════════ NOTIFICATIONS ════════════ */
function toggleNotif(e){
  e.stopPropagation();
  const panel = document.getElementById('notifPanel');
  panel.classList.contains('open') ? closeNotif() : openNotif();
}
function openNotif(){
  const upcoming = myBookings.filter(b=>b.status==='upcoming').sort((a,b)=>a.date.localeCompare(b.date));
  const toReview = myBookings.filter(b=>b.status==='completed' && !b.reviewed);
  const panel = document.getElementById('notifPanel');
  let items='';
  upcoming.forEach(b=>{
    const d=new Date(b.date+'T00:00:00').toLocaleDateString('id-ID',{day:'numeric',month:'short'});
    items += `<div class="notif-item">${ICONS.calendar}<div><div class="notif-item-title">Jadwal dengan ${b.docName.split(',')[0]}</div><div class="notif-item-sub">${d} · ${b.time} WIB</div></div></div>`;
  });
  toReview.forEach(b=>{
    items += `<div class="notif-item">${ICONS.star}<div><div class="notif-item-title">Beri ulasan untuk ${b.docName.split(',')[0]}</div><div class="notif-item-sub">Konsultasi Anda telah selesai</div></div></div>`;
  });
  panel.innerHTML = `<div class="notif-panel-hd">Notifikasi</div>${items || `<div class="notif-empty">Tidak ada notifikasi baru</div>`}`;
  panel.classList.add('open');
  updateNotifBadge();
}
function closeNotif(){ document.getElementById('notifPanel').classList.remove('open'); }
function updateNotifBadge(){
  const count = myBookings.filter(b=>b.status==='upcoming').length + myBookings.filter(b=>b.status==='completed' && !b.reviewed).length;
  const badge = document.getElementById('notifBadge');
  if(count>0){ badge.hidden=false; badge.textContent=count; } else { badge.hidden=true; }
}
document.addEventListener('click',(e)=>{
  const panel=document.getElementById('notifPanel');
  if(panel.classList.contains('open') && !panel.contains(e.target) && e.target.id!=='notifBtn') closeNotif();
});

function updateHeaderStats(){
  document.getElementById('statBookings').textContent = myBookings.filter(b=>b.status!=='cancelled').length;
  document.getElementById('statFav').textContent = favorites.size;
  updateNotifBadge();
}

/* ════════════ TOAST ════════════ */
let toastTimer;
function showToast(msg) {
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3200);
}

/* ════════════ ESC CLOSE MODAL ════════════ */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ closeDocModal(); closeReviewModal(); closeNotif(); }
});

/* ════════════ INIT ════════════ */
(async function init(){
  renderDoctorsSkeleton();
  await loadState();
  filterDoctors();
  updateHeaderStats();
})();