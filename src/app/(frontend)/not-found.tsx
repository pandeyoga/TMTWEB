import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="ty-section ty-404 ty-dotgrid">
      <div className="ty-container ty-stack" style={{ maxWidth: 720 }}>
        <span className="numeral">404</span>
        <h1 className="heading-2">Halaman tidak ditemukan</h1>
        <p className="lead ty-muted" style={{ margin: 0 }}>Alamat yang Anda buka mungkin sudah dipindahkan. Kembali ke beranda atau lihat layanan kami.</p>
        <div className="ty-hero__cta">
          <Link className="ty-btn" href="/">Ke Beranda</Link>
          <Link className="ty-btn ty-btn--secondary" href="/layanan">Lihat Layanan</Link>
        </div>
      </div>
    </section>
  )
}
