/**
 * Seeds the CMS with starter content condensed from the Triyasa company deck.
 * Contact details and the site logo are PLACEHOLDERS — replace them in the CMS.
 *
 *   pnpm seed            → seed only when the database has no pages
 *   pnpm seed --reset    → delete seeded collections first, then seed
 */
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload, type Payload } from 'payload'
import config from '../payload.config'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const asset = (p: string) => path.resolve(dirname, 'assets', p)
const ctx = { disableRevalidate: true }

/* ---------- Lexical helpers ---------- */
const t = (text: string, format = 0) => ({ type: 'text', text, format, style: '', mode: 'normal', detail: 0, version: 1 })
const base = { direction: 'ltr' as const, format: '' as const, indent: 0, version: 1 }
const p = (text: string) => ({ ...base, type: 'paragraph', children: [t(text)], textFormat: 0, textStyle: '' })
const pi = (text: string) => ({ ...base, type: 'paragraph', children: [t(text, 2)], textFormat: 2, textStyle: '' })
const h = (text: string, tag: 'h2' | 'h3' = 'h2') => ({ ...base, type: 'heading', tag, children: [t(text)] })
const ul = (items: string[]) => ({
  ...base,
  type: 'list',
  listType: 'bullet',
  tag: 'ul',
  start: 1,
  children: items.map((x, i) => ({ ...base, type: 'listitem', value: i + 1, children: [t(x)] })),
})
const doc = (children: unknown[]) => ({ root: { ...base, type: 'root', children } }) as any

/* ---------- Content ---------- */
const SERVICES = [
  {
    title: 'Internet Service Provider',
    slug: 'internet-service-provider',
    tagline: 'Reliable Connectivity for Business',
    icon: 'globe',
    order: 1,
    excerpt: 'Dedicated, broadband, dan point-to-point untuk kantor pusat, cabang, hingga lokasi operasional.',
    hero: {
      type: 'status',
      heading: 'Koneksi internet yang *stabil* untuk operasional bisnis',
      lead: 'Koneksi yang dirancang sesuai skala perusahaan Anda, dari kantor pusat, cabang, sampai lokasi operasional yang kompleks.',
      statusCards: [
        { icon: 'globe', title: 'Dedicated Internet', meta: 'Kantor pusat', status: 'Aktif', tone: 'ok' },
        { icon: 'server', title: 'Point-to-Point', meta: 'Pusat ↔ Gudang', status: 'Aktif', tone: 'ok' },
        { icon: 'wifi', title: 'Broadband', meta: 'Kantor cabang', status: 'Online', tone: 'ok' },
      ],
    },
    scope: {
      heading: 'Pilihan koneksi untuk *setiap kebutuhan*',
      items: [
        { icon: 'globe', title: 'Dedicated Internet', text: 'Koneksi dengan performa dan bandwidth yang didedikasikan untuk kebutuhan bisnis.' },
        { icon: 'wifi', title: 'Broadband Internet', text: 'Koneksi fleksibel untuk operasional dan aktivitas bisnis sehari-hari.' },
        { icon: 'network', title: 'Point-to-Point Connection', text: 'Koneksi private antar lokasi untuk komunikasi data yang aman dan andal.' },
        { icon: 'server', title: 'Network Connectivity', text: 'Menghubungkan berbagai lokasi, sistem, dan infrastruktur perusahaan.' },
      ],
    },
    industries: {
      heading: 'Untuk bisnis yang *tidak boleh terputus*',
      items: [
        { icon: 'building', title: 'Manufaktur & tekstil', text: 'Koneksi stabil untuk kantor, pabrik, gudang, dan sistem produksi.' },
        { icon: 'network', title: 'Perkantoran multi-cabang', text: 'Kantor pusat dan cabang terhubung dalam satu jaringan.' },
        { icon: 'wifi', title: 'Perhotelan & resort', text: 'Internet untuk operasional dan kenyamanan tamu.' },
      ],
    },
  },
  {
    title: 'Managed Services',
    slug: 'managed-services',
    tagline: 'IT Infrastructure, Managed Professionally',
    icon: 'activity',
    order: 2,
    excerpt: 'Pemantauan dan dukungan teknis yang responsif, agar jaringan tetap stabil dan tim Anda fokus pada bisnis.',
    hero: {
      type: 'status',
      heading: 'Infrastruktur IT Anda, *dikelola* secara profesional',
      lead: 'Kami menjaga stabilitas, keamanan, performa, dan kontinuitas infrastruktur Anda, sehingga tim internal bisa fokus pada hal strategis.',
      statusCards: [
        { icon: 'globe', title: 'Link utama', meta: 'Kantor pusat', status: 'Online', tone: 'ok' },
        { icon: 'server', title: 'Link cadangan', meta: 'Failover otomatis', status: 'Siaga', tone: 'info' },
        { icon: 'ticket', title: 'Tiket #2041', meta: 'Ganti SFP · Gudang C', status: 'Selesai', tone: 'ok' },
      ],
    },
    scope: {
      heading: 'Yang kami *kelola* untuk Anda',
      items: [
        { icon: 'activity', title: 'Pemantauan jaringan', text: 'Kondisi koneksi dan perangkat dipantau agar gangguan cepat diketahui.' },
        { icon: 'ticket', title: 'Dukungan teknis responsif', text: 'Tim teknis profesional siap menangani kendala operasional.' },
        { icon: 'shield', title: 'Keamanan & kontinuitas', text: 'Menjaga infrastruktur tetap aman dan berjalan tanpa henti.' },
        { icon: 'server', title: 'Pemeliharaan berkala', text: 'Perangkat dan konfigurasi dirawat agar performa tetap optimal.' },
      ],
    },
  },
  {
    title: 'Network & IT Infrastructure',
    slug: 'network-it-infrastructure',
    tagline: 'Building a Strong Foundation',
    icon: 'network',
    order: 3,
    excerpt: 'Fiber optic, structured cabling, WiFi enterprise, dan integrasi perangkat yang siap berkembang.',
    hero: {
      type: 'status',
      heading: 'Fondasi jaringan yang *rapi, aman, dan siap tumbuh*',
      lead: 'Dari backbone fiber optic sampai titik WiFi terakhir di lantai gudang, kami merancang dan memasang infrastruktur yang terstruktur dan terdokumentasi.',
      statusCards: [
        { icon: 'server', title: 'Core switch', meta: 'Rack server utama', status: 'Online', tone: 'ok' },
        { icon: 'network', title: 'Fiber backbone', meta: 'Singlemode · antar gedung', status: 'Aktif', tone: 'ok' },
        { icon: 'wifi', title: 'AP outdoor', meta: 'Area gudang', status: 'Online', tone: 'ok' },
      ],
    },
    scope: {
      heading: 'Dikerjakan *end-to-end* oleh satu tim',
      items: [
        { icon: 'network', title: 'Fiber optic & backbone', text: 'Penarikan, terminasi, dan uplink fiber antar gedung dan ruang server.' },
        { icon: 'server', title: 'Structured cabling', text: 'Kabel LAN Cat6 yang rapi dari titik perangkat ke hub panel.' },
        { icon: 'wifi', title: 'WiFi enterprise', text: 'Access point indoor dan outdoor dengan switch PoE.' },
        { icon: 'shield', title: 'Rack, daya & UPS', text: 'Rack, PDU, dan UPS agar perangkat tetap menyala saat listrik terganggu.' },
        { icon: 'building', title: 'Integrasi antar lokasi', text: 'Menghubungkan gedung, gudang, dan kantor dalam satu jaringan.' },
        { icon: 'check', title: 'Dokumentasi instalasi', text: 'Setiap pekerjaan disertai dokumentasi untuk perawatan selanjutnya.' },
      ],
    },
  },
  {
    title: 'Pengadaan Barang & Jasa Teknologi',
    slug: 'pengadaan-teknologi',
    tagline: 'Technology Procurement Made Simple',
    icon: 'package',
    order: 4,
    excerpt: 'Perangkat jaringan dan IT sesuai spesifikasi, dari merek tepercaya, lengkap dengan instalasinya.',
    hero: {
      type: 'simple',
      heading: 'Pengadaan teknologi yang *tepat spesifikasi*',
      lead: 'Kami membantu perusahaan mendapatkan perangkat dan solusi IT yang sesuai kebutuhan, efisien, dan siap dipasang.',
    },
    scope: {
      heading: 'Satu pintu untuk *perangkat dan jasa*',
      items: [
        { icon: 'network', title: 'Perangkat jaringan', text: 'Switch, router, access point, dan modul transceiver.' },
        { icon: 'server', title: 'Server & perangkat IT', text: 'Perangkat sesuai spesifikasi dan kebutuhan operasional.' },
        { icon: 'shield', title: 'Rack, UPS & kelistrikan', text: 'Pendukung infrastruktur agar perangkat aman dan stabil.' },
        { icon: 'check', title: 'Instalasi & konfigurasi', text: 'Penawaran kami sudah termasuk pemasangan di lokasi.' },
      ],
    },
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    tagline: 'Digital Solutions Built Around Your Business',
    icon: 'code',
    order: 5,
    excerpt: 'Aplikasi dan sistem yang mengikuti proses bisnis Anda dan terhubung dengan infrastruktur yang ada.',
    hero: {
      type: 'simple',
      heading: 'Solusi digital yang *dibangun di sekitar* bisnis Anda',
      lead: 'Dari aplikasi hingga solusi digital terintegrasi, kami membantu mengoptimalkan proses kerja dan meningkatkan efisiensi.',
    },
    scope: {
      heading: 'Software yang *mengikuti cara kerja* Anda',
      items: [
        { icon: 'code', title: 'Aplikasi bisnis', text: 'Dikembangkan sesuai kebutuhan dan proses bisnis pelanggan.' },
        { icon: 'network', title: 'Integrasi sistem & ERP', text: 'Menghubungkan aplikasi dengan sistem yang sudah berjalan.' },
        { icon: 'sparkles', title: 'Solusi digital terintegrasi', text: 'Pengalaman digital yang lebih baik untuk tim dan pelanggan.' },
      ],
    },
  },
  {
    title: 'RFID Solutions',
    slug: 'rfid-solutions',
    tagline: 'Smart Identification. Better Visibility',
    icon: 'scan',
    order: 6,
    excerpt: 'Pelacakan aset dan inventaris yang akurat, lengkap dengan infrastruktur WiFi dan jaringan pendukungnya.',
    hero: {
      type: 'coverage',
      heading: 'Visibilitas aset dan inventaris *secara real time*',
      lead: 'Kami menyiapkan solusi RFID beserta infrastrukturnya: access point, jaringan, fiber ke ruang server, dan daya cadangan.',
    },
    scope: {
      heading: 'Dari tag RFID sampai *infrastruktur pendukung*',
      items: [
        { icon: 'scan', title: 'Identifikasi & pelacakan aset', text: 'Aset dan barang tercatat otomatis saat bergerak.' },
        { icon: 'activity', title: 'Monitoring inventaris', text: 'Data stok lebih akurat untuk keputusan yang lebih cepat.' },
        { icon: 'wifi', title: 'Infrastruktur WiFi & jaringan', text: 'AP indoor dan outdoor, switch PoE, dan fiber ke ruang server.' },
        { icon: 'network', title: 'Integrasi sistem', text: 'Data RFID terhubung dengan sistem gudang dan bisnis Anda.' },
      ],
    },
    industries: {
      heading: 'Dirancang untuk *area operasional*',
      items: [
        { icon: 'building', title: 'Manufaktur & tekstil', text: 'Pelacakan bahan dan barang jadi di beberapa gudang.' },
        { icon: 'package', title: 'Gudang & logistik', text: 'Transit, retur, dan inspeksi dalam satu alur data.' },
      ],
    },
  },
]

const FAQS = [
  { key: 'layanan', question: 'Layanan apa saja yang bisa ditangani Triyasa?', answer: 'Konektivitas internet (dedicated, broadband, point-to-point), managed services, infrastruktur jaringan dan IT, pengadaan perangkat, software development, dan solusi RFID. Semua bisa ditangani satu tim, dari konsultasi sampai maintenance.', general: true, order: 1 },
  { key: 'waktu', question: 'Berapa lama estimasi pengerjaan proyek?', answer: 'Untuk proyek infrastruktur, estimasi pengiriman dan pengerjaan sekitar 10 hari kalender setelah PO atau SPK diterima. Jadwal pasti mengikuti hasil survei dan skala proyek.', general: true, order: 2 },
  { key: 'harga', question: 'Apakah harga penawaran sudah termasuk instalasi?', answer: 'Ya. Penawaran kami sudah termasuk biaya instalasi, material, dan perizinan penempatan perangkat di lokasi.', general: true, order: 3 },
  { key: 'rfid', question: 'Apakah Triyasa juga menyiapkan jaringan untuk sistem RFID?', answer: 'Ya. Kami menyiapkan access point indoor dan outdoor, switch PoE, jalur fiber optic ke ruang server, rack, dan UPS pendukung agar sistem RFID berjalan stabil.', general: false, order: 4 },
]

const PROCESS = [
  { title: 'Konsultasi', text: 'Kami memahami kebutuhan, lokasi, dan tujuan bisnis Anda.' },
  { title: 'Desain', text: 'Rancangan topologi, titik perangkat, dan penawaran yang jelas.' },
  { title: 'Pengadaan', text: 'Perangkat sesuai spesifikasi dari merek dan mitra tepercaya.' },
  { title: 'Implementasi', text: 'Instalasi, terminasi, pengujian, dan dokumentasi lengkap.' },
  { title: 'Maintenance', text: 'Pemantauan dan dukungan teknis setelah sistem berjalan.' },
]

const CLIENTS = [
  { name: 'Lenzing', file: 'Klien/lenzing.png', industry: 'Tekstil' },
  { name: 'Kanda Fabrics', file: 'Klien/kanda-fabrics.png', industry: 'Tekstil' },
  { name: 'Kain Nusantara', file: 'Klien/kain-nusantara.png', industry: 'Tekstil' },
  { name: 'Lembang Asri Resort', file: 'Klien/lembang-asri-resort.png', industry: 'Perhotelan' },
]
const PARTNERS = [
  { name: 'Lintasarta', file: 'Partner/lintasarta.png' },
  { name: 'Telkom Indonesia', file: 'Partner/telkom-indonesia.png' },
  { name: 'FiberStar', file: 'Partner/fiberstar.png' },
  { name: 'Melsa', file: 'Partner/melsa.png' },
  { name: 'Ruijie', file: 'Partner/ruijie.png' },
  { name: 'MikroTik', file: 'Partner/mikrotik.png' },
  { name: 'Melvar Prima Solusi', file: 'Partner/melvar-prima-solusi.png' },
]

/* ---------- Seed ---------- */
async function wipe(payload: Payload) {
  for (const collection of ['pages', 'services', 'faqs', 'clients', 'partners', 'media'] as const) {
    await payload.delete({ collection, where: { id: { exists: true } }, overrideAccess: true, context: ctx })
  }
}

async function upload(payload: Payload, file: string, alt: string) {
  return payload.create({ collection: 'media', data: { alt }, filePath: asset(file), overrideAccess: true, context: ctx })
}

async function main() {
  const payload = await getPayload({ config })
  const reset = process.argv.includes('--reset')
  const existing = await payload.count({ collection: 'pages', overrideAccess: true })
  if (existing.totalDocs > 0 && !reset) {
    payload.logger.info('Konten sudah ada. Jalankan `pnpm seed --reset` untuk mengisi ulang.')
    process.exit(0)
  }
  if (reset) await wipe(payload)

  payload.logger.info('Mengunggah logo…')
  // Logos from the company deck. Kept in the media library but NOT set as the site logo (placeholder is used until a final logo is uploaded).
  await upload(payload, 'Logo/triyasa-logo.png', 'Logo PT Triyasa Mitra Teknologi (versi bersusun, dari deck)')
  await upload(payload, 'Logo/triyasa-logo-horizontal.png', 'Logo PT Triyasa Mitra Teknologi (versi mendatar, dari deck)')
  await upload(payload, 'Logo/triyasa-mark.png', 'Simbol Triyasa (dari deck)')

  for (const [i, c] of CLIENTS.entries()) {
    const logo = await upload(payload, c.file, `Logo ${c.name}`)
    await payload.create({ collection: 'clients', data: { name: c.name, logo: logo.id, order: i + 1, visible: true, permission: false, industry: c.industry }, overrideAccess: true, context: ctx })
  }
  for (const [i, c] of PARTNERS.entries()) {
    const logo = await upload(payload, c.file, `Logo ${c.name}`)
    await payload.create({ collection: 'partners', data: { name: c.name, logo: logo.id, order: i + 1, visible: true, official: false }, overrideAccess: true, context: ctx })
  }

  payload.logger.info('Membuat FAQ…')
  const faqIds: Record<string, number> = {}
  for (const f of FAQS) {
    const { key, ...data } = f
    const d = await payload.create({ collection: 'faqs', data, overrideAccess: true, context: ctx })
    faqIds[key] = d.id
  }

  payload.logger.info('Membuat layanan…')
  const serviceIds: Record<string, number> = {}
  for (const s of SERVICES) {
    const faqs = s.slug === 'rfid-solutions' ? [faqIds.rfid, faqIds.waktu] : s.slug === 'network-it-infrastructure' ? [faqIds.waktu, faqIds.harga] : [faqIds.layanan]
    const d = await payload.create({
      collection: 'services',
      data: { ...(s as any), faqs, _status: 'published' },
      overrideAccess: true,
      context: ctx,
    })
    serviceIds[s.slug] = d.id
  }

  payload.logger.info('Membuat halaman…')
  const mk = async (data: any) => payload.create({ collection: 'pages', data: { ...data, _status: 'published' }, overrideAccess: true, context: ctx })

  const contactLink = (label: string) => ({ label, type: 'contact' })

  const layanan = await mk({
    title: 'Layanan',
    slug: 'layanan',
    hero: { type: 'simple', eyebrow: 'Solusi & Layanan', heading: 'Teknologi yang *menggerakkan* bisnis Anda', lead: 'Enam lini layanan yang bisa berdiri sendiri atau dikerjakan bersama oleh satu tim.' },
    layout: [
      { blockType: 'servicesGrid', theme: 'light' },
      { blockType: 'process', useShared: true, eyebrow: 'Cara Kami Bekerja', heading: 'Dari konsultasi *sampai maintenance*', theme: 'navy' },
      { blockType: 'faq', eyebrow: 'Pertanyaan Umum', heading: 'Sebelum Anda *menghubungi kami*', theme: 'light' },
      { blockType: 'cta', useShared: true, showForm: false, theme: 'navy' },
    ],
    meta: { description: 'Internet Service Provider, Managed Services, Network & IT Infrastructure, pengadaan teknologi, software development, dan RFID Solutions dari PT Triyasa Mitra Teknologi.' },
  })

  const tentang = await mk({
    title: 'Tentang Kami',
    slug: 'tentang-kami',
    hero: {
      type: 'simple',
      eyebrow: 'Tentang Kami',
      heading: 'Menghubungkan teknologi, *menguatkan bisnis*',
      lead: 'PT Triyasa Mitra Teknologi adalah mitra teknologi yang menyediakan solusi konektivitas, jaringan, infrastruktur IT, managed services, pengadaan perangkat, dan software untuk perusahaan.',
    },
    layout: [
      {
        blockType: 'split',
        eyebrow: 'Profil',
        heading: 'Solusi yang berangkat dari *kebutuhan bisnis*',
        body: doc([
          p('Setiap perusahaan memiliki tantangan, kebutuhan, dan tujuan yang berbeda. Karena itu kami selalu memulai dengan memahami proses bisnis pelanggan, lalu menghadirkan solusi teknologi yang tepat, efektif, dan berkelanjutan.'),
          p('Bagi kami, teknologi bukan sekadar koneksi, perangkat, atau sistem. Teknologi harus memberi nilai nyata: operasional yang lebih efisien, produktivitas yang lebih tinggi, keamanan yang terjaga, dan fondasi yang siap berkembang.'),
        ]),
        theme: 'light',
      },
      { blockType: 'statement', eyebrow: 'Visi', text: 'Menjadi perusahaan teknologi terpercaya yang menghubungkan inovasi, teknologi, dan kebutuhan bisnis melalui solusi digital yang andal, terintegrasi, dan berkelanjutan.', theme: 'sunken', anchor: 'visi' },
      {
        blockType: 'features',
        eyebrow: 'Misi',
        heading: 'Enam hal yang *kami kerjakan* setiap hari',
        columns: '3',
        anchor: 'misi',
        theme: 'light',
        items: [
          { icon: 'globe', title: 'Konektivitas yang andal', text: 'Jaringan yang stabil, aman, dan berkesinambungan untuk kelancaran operasional.' },
          { icon: 'network', title: 'Solusi terintegrasi', text: 'IT, jaringan, dan infrastruktur yang fleksibel dan scalable.' },
          { icon: 'users', title: 'Mitra yang profesional', text: 'Managed services dan dukungan teknis yang responsif.' },
          { icon: 'activity', title: 'Mendorong transformasi digital', text: 'Teknologi yang meningkatkan efisiensi, keamanan, dan daya saing.' },
          { icon: 'handshake', title: 'Kepercayaan jangka panjang', text: 'Kemitraan yang dibangun atas integritas dan transparansi.' },
          { icon: 'sparkles', title: 'Berinovasi untuk masa depan', text: 'Solusi yang relevan dan adaptif terhadap perkembangan industri.' },
        ],
      },
      {
        blockType: 'features',
        eyebrow: 'Nilai Perusahaan',
        heading: 'Cara kami *bekerja bersama* Anda',
        columns: '3',
        theme: 'navy',
        items: [
          { icon: 'shield', title: 'Integrity', text: 'Menjalankan bisnis dengan integritas, kejujuran, dan tanggung jawab.' },
          { icon: 'check', title: 'Excellence', text: 'Standar layanan terbaik melalui kualitas dan profesionalisme.' },
          { icon: 'sparkles', title: 'Innovation', text: 'Terus berkembang dan menghadirkan solusi yang relevan.' },
          { icon: 'handshake', title: 'Collaboration', text: 'Kolaborasi yang kuat dengan pelanggan, partner, dan stakeholder.' },
          { icon: 'target', title: 'Customer Focus', text: 'Kebutuhan dan keberhasilan pelanggan sebagai prioritas utama.' },
        ],
      },
      { blockType: 'cta', useShared: true, showForm: false, theme: 'navy' },
    ],
    meta: { description: 'Profil PT Triyasa Mitra Teknologi: visi, misi, dan nilai perusahaan sebagai mitra teknologi untuk bisnis.' },
  })

  const klien = await mk({
    title: 'Klien & Mitra',
    slug: 'klien-mitra',
    hero: { type: 'simple', eyebrow: 'Klien & Mitra', heading: 'Dipercaya perusahaan, *didukung mitra* teknologi', lead: 'Kami bekerja bersama klien dari industri tekstil, manufaktur, dan perhotelan, didukung mitra jaringan dan teknologi terkemuka.' },
    layout: [
      { blockType: 'logoStrip', source: 'clients', display: 'grid', eyebrow: 'Klien', heading: 'Perusahaan yang *bekerja bersama kami*', theme: 'light' },
      { blockType: 'logoStrip', source: 'partners', display: 'grid', eyebrow: 'Mitra & Teknologi', heading: 'Jaringan dan teknologi *yang kami gunakan*', theme: 'sunken' },
      { blockType: 'cta', useShared: true, showForm: false, theme: 'navy' },
    ],
  })

  const kontak = await mk({
    title: 'Kontak',
    slug: 'kontak',
    hero: { type: 'none' },
    layout: [{ blockType: 'contact', eyebrow: 'Hubungi Kami', heading: 'Mari diskusikan *kebutuhan Anda*', lead: 'Isi form singkat ini atau chat langsung lewat WhatsApp. Kami akan membalas pada jam kerja.', theme: 'light' }],
    meta: { description: 'Hubungi PT Triyasa Mitra Teknologi untuk konsultasi kebutuhan internet, jaringan, infrastruktur IT, dan RFID.' },
  })

  const privasi = await mk({
    title: 'Kebijakan Privasi',
    slug: 'kebijakan-privasi',
    hero: { type: 'simple', eyebrow: 'Legal', heading: 'Kebijakan Privasi' },
    layout: [
      {
        blockType: 'richText',
        width: 'narrow',
        theme: 'light',
        content: doc([
          pi('Draf awal. Tinjau bersama penasihat hukum sebelum website dipublikasikan.'),
          p('PT Triyasa Mitra Teknologi ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan data pribadi yang kami kumpulkan melalui website ini dan cara kami menggunakannya, sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.'),
          h('Data yang kami kumpulkan'),
          ul(['Nama dan nama perusahaan', 'Nomor WhatsApp dan alamat email', 'Layanan yang Anda minati dan isi pesan', 'Halaman asal pengiriman form']),
          h('Tujuan penggunaan'),
          p('Data dipakai hanya untuk menanggapi permintaan konsultasi, menyusun penawaran, dan menghubungi Anda terkait layanan yang diminta. Kami tidak menjual data Anda kepada pihak lain.'),
          h('Penyimpanan dan keamanan'),
          p('Data disimpan di server yang dikelola perusahaan dan hanya dapat diakses oleh tim yang berwenang. Data disimpan selama diperlukan untuk tujuan di atas atau sesuai ketentuan hukum.'),
          h('Hak Anda'),
          p('Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi Anda dengan menghubungi kami melalui kontak yang tercantum di website ini.'),
        ]),
      },
    ],
    meta: { noIndex: false },
  })

  await mk({
    title: 'Beranda',
    slug: 'beranda',
    hero: {
      type: 'network',
      eyebrow: 'Connecting Technology, Empowering Business',
      heading: 'Infrastruktur IT yang *siap tumbuh* bersama Anda',
      lead: 'Internet, jaringan, perangkat, dan pengelolaan IT dari satu mitra. Dari konsultasi sampai maintenance.',
      primaryCta: contactLink('Jadwalkan Konsultasi'),
      secondaryCta: { label: 'Lihat Layanan', type: 'page', page: layanan.id },
      statusCards: [
        { icon: 'wifi', title: 'AP-Gudang-B', meta: '42 perangkat · 5 GHz', status: 'Online', tone: 'ok' },
        { icon: 'globe', title: 'Dedicated Internet', meta: 'Kantor pusat', status: 'Aktif', tone: 'ok' },
      ],
    },
    layout: [
      { blockType: 'logoStrip', source: 'clients', display: 'marquee', eyebrow: 'Dipercaya oleh', theme: 'light' },
      { blockType: 'servicesGrid', eyebrow: 'Layanan Kami', heading: 'Satu mitra untuk *seluruh kebutuhan IT* perusahaan Anda', lead: 'Dari koneksi internet, jaringan di gedung dan gudang, sampai pengelolaan harian. Semua dirancang, dipasang, dan dirawat oleh satu tim.', theme: 'sunken' },
      { blockType: 'statement', eyebrow: 'Our Commitment', text: 'Bagi kami, teknologi bukan sekadar koneksi, perangkat, atau sistem. Teknologi harus memberi nilai nyata bagi bisnis Anda.', theme: 'light' },
      {
        blockType: 'bento',
        eyebrow: 'Solusi',
        heading: 'Untuk berbagai *skala dan kebutuhan*',
        theme: 'navy',
        items: [
          { tag: 'Corporate & Enterprise', title: 'Jaringan andal untuk operasional yang kompleks', text: 'Konektivitas dan infrastruktur IT untuk perusahaan dengan banyak sistem dan pengguna.', variant: 'default', art: 'corporate' },
          { tag: 'Multi-Branch Connectivity', title: 'Kantor pusat dan cabang dalam satu jaringan', text: 'Koneksi antar lokasi yang aman, stabil, dan terintegrasi.', variant: 'accent', art: 'branch' },
          { tag: 'IT Infrastructure', title: 'Fondasi IT yang siap tumbuh', text: 'Rack, switching, daya cadangan, dan kabel terstruktur yang rapi dan terdokumentasi.', variant: 'navy', art: 'infra' },
          { tag: 'Managed IT Services', title: 'Dikelola tim kami, dipantau setiap hari', text: 'Tanpa harus membangun seluruh tim IT internal.', variant: 'default', art: 'managed' },
        ],
      },
      { blockType: 'process', useShared: true, eyebrow: 'Cara Kami Bekerja', heading: 'Dari konsultasi *sampai maintenance*', theme: 'navy' },
      {
        blockType: 'features',
        eyebrow: 'Mengapa Triyasa',
        heading: 'Lebih dari *penyedia teknologi*',
        columns: '3',
        theme: 'light',
        items: [
          { icon: 'target', title: 'One stop technology partner', text: 'Konektivitas, jaringan, perangkat, dan pengelolaan IT ditangani satu mitra.' },
          { icon: 'check', title: 'Reliable & professional', text: 'Kualitas layanan, profesionalisme, dan keandalan di setiap solusi.' },
          { icon: 'users', title: 'Customer oriented', text: 'Solusi dirancang dari permasalahan dan tujuan bisnis Anda.' },
          { icon: 'network', title: 'Integrated solution', text: 'Dari konsultasi, desain, pengadaan, implementasi, hingga maintenance.' },
          { icon: 'handshake', title: 'Long-term partnership', text: 'Kami membangun hubungan jangka panjang, bukan sekadar transaksi.' },
        ],
      },
      {
        blockType: 'stats',
        theme: 'light',
        items: [
          { value: 6, label: 'Lini layanan dalam satu mitra teknologi' },
          { value: 7, label: 'Mitra teknologi dan jaringan' },
          { value: 10, suffix: 'hari', label: 'Estimasi pengerjaan setelah PO atau SPK diterima' },
        ],
      },
      { blockType: 'coverageMap', eyebrow: 'RFID Solutions', heading: 'Jangkauan WiFi yang *direncanakan*, bukan ditebak', lead: 'Kami memetakan setiap gudang sebelum memasang: titik akses, reader RFID, jalur fiber ke ruang server, dan jangkauan sinyal di antara rak.', theme: 'sunken' },
      { blockType: 'logoStrip', source: 'partners', display: 'marquee', eyebrow: 'Mitra & Teknologi', theme: 'light' },
      { blockType: 'faq', eyebrow: 'Pertanyaan Umum', heading: 'Yang sering *ditanyakan*', theme: 'light' },
      { blockType: 'cta', useShared: true, showForm: true, theme: 'navy' },
    ],
    meta: { description: 'PT Triyasa Mitra Teknologi: internet bisnis, managed services, infrastruktur jaringan & IT, pengadaan teknologi, software, dan RFID untuk perusahaan.' },
  })

  payload.logger.info('Mengisi pengaturan global…')
  await payload.updateGlobal({
    slug: 'site-settings',
    context: ctx,
    data: {
      siteName: 'PT Triyasa Mitra Teknologi',
      tagline: 'Connecting Technology, Empowering Business',
      logo: null,
      logoOnDark: null,
      logoHeight: 40,
      // PLACEHOLDER — ganti dengan nomor resmi (format 62xxxxxxxxxx)
      whatsappNumber: '6280000000000',
      whatsappMessage: 'Halo Tim Triyasa, saya ingin konsultasi kebutuhan IT perusahaan kami.',
      phone: '+62 800-0000-0000',
      email: 'halo@triyasa.example',
      address: 'GoWork Tower, Jl. Gatot Subroto No. 271 Lv. 3 No. 01\nCibangkong, Batununggal, Kota Bandung 40273',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=GoWork+Tower+Jl.+Gatot+Subroto+No.+271+Bandung',
      hours: 'Senin–Jumat, 08.00–17.00 WIB',
      defaultDescription: 'PT Triyasa Mitra Teknologi menyediakan internet bisnis, managed services, infrastruktur jaringan dan IT, pengadaan perangkat, software development, dan solusi RFID untuk perusahaan.',
      socials: [],
    },
  })
  await payload.updateGlobal({
    slug: 'header',
    context: ctx,
    data: {
      items: [
        { link: { label: 'Beranda', type: 'url', url: '/' } },
        { link: { label: 'Tentang', type: 'page', page: tentang.id } },
        { link: { label: 'Layanan', type: 'page', page: layanan.id }, showServices: true },
        { link: { label: 'Klien & Mitra', type: 'page', page: klien.id } },
        { link: { label: 'Kontak', type: 'page', page: kontak.id } },
      ],
      cta: contactLink('Jadwalkan Konsultasi'),
    } as any,
  })
  await payload.updateGlobal({
    slug: 'footer',
    context: ctx,
    data: {
      about: 'Solusi konektivitas, infrastruktur IT, managed services, dan pengadaan teknologi untuk bisnis.',
      columns: [
        { title: 'Layanan', autoServices: true, links: [] },
        {
          title: 'Perusahaan',
          autoServices: false,
          links: [
            { link: { label: 'Tentang Kami', type: 'page', page: tentang.id } },
            { link: { label: 'Klien & Mitra', type: 'page', page: klien.id } },
            { link: { label: 'Kontak', type: 'page', page: kontak.id } },
            { link: { label: 'Kebijakan Privasi', type: 'page', page: privasi.id } },
          ],
        },
      ],
      bottomNote: 'Connecting Technology, Empowering Business',
    } as any,
  })
  await payload.updateGlobal({
    slug: 'chat-widget',
    context: ctx,
    data: {
      enabled: true,
      buttonLabel: 'Butuh bantuan?',
      title: 'Tim Triyasa',
      responseTime: 'Biasanya membalas dalam 1 jam kerja',
      greeting: 'Halo, ada yang bisa kami bantu?',
      days: ['1', '2', '3', '4', '5'],
      openTime: '08:00',
      closeTime: '17:00',
      offlineMessage: 'Kami sedang di luar jam kerja. Pesan Anda tetap kami balas pada jam kerja berikutnya.',
      options: [
        { label: 'Konsultasi layanan baru', description: 'Pilih layanan, lanjut chat WhatsApp', action: 'whatsapp-services', message: 'Halo Tim Triyasa, saya ingin konsultasi tentang {layanan}. (Dari halaman: {halaman})' },
        { label: 'Minta penawaran atau survei lokasi', description: 'Isi form singkat di halaman Kontak', action: 'contact' },
        { label: 'Dukungan teknis pelanggan', description: 'Laporkan kendala layanan lewat WhatsApp', action: 'whatsapp', message: 'Halo Tim Triyasa, saya pelanggan dan butuh dukungan teknis. (Dari halaman: {halaman})' },
        { label: 'Email atau telepon', description: 'Lihat alamat dan kontak lengkap', action: 'contact' },
      ],
    } as any,
  })
  await payload.updateGlobal({
    slug: 'announcement',
    context: ctx,
    data: { enabled: false, text: 'Konsultasi awal kebutuhan jaringan dan IT tanpa biaya.', tone: 'navy', link: { label: 'Hubungi kami', type: 'contact' } } as any,
  })
  await payload.updateGlobal({
    slug: 'shared-sections',
    context: ctx,
    data: {
      process: PROCESS,
      cta: {
        eyebrow: 'Mulai Konsultasi',
        heading: 'Siap mengembangkan *infrastruktur teknologi* bisnis Anda?',
        lead: 'Ceritakan kebutuhan Anda. Kami bantu menyusun solusi yang tepat.',
        primaryCta: contactLink('Jadwalkan Konsultasi'),
        secondaryCta: { label: 'Chat WhatsApp', type: 'whatsapp' },
      },
      form: {
        submitLabel: 'Kirim Permintaan',
        successMessage: 'Terima kasih, tim kami akan menghubungi Anda melalui WhatsApp pada jam kerja berikutnya.',
        consentText: 'Saya setuju data ini dipakai untuk menghubungi saya sesuai',
      },
    } as any,
  })

  payload.logger.info(`Selesai. ${SERVICES.length} layanan, 6 halaman, ${FAQS.length} FAQ, ${CLIENTS.length} klien, ${PARTNERS.length} mitra.`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
