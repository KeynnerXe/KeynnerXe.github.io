export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {year} <strong>Keinner Manuel Ramos Zuñiga</strong><br />
          Diseñado y construido con React + Vite &middot; Cartagena, Colombia
        </p>
        <div className="footer__logo">
          K<span>.</span>R<span>.</span>
        </div>
      </div>
    </footer>
  )
}
