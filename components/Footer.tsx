import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 1rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        
        {/* Columna 1: Logo y descripción */}
        <div>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', display: 'inline-block', marginBottom: '1rem' }}>
            <img 
              src="/logo.png?v=2" 
              alt="AllToys Logo" 
              style={{ height: '40px', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Tu tienda de confianza para encontrar los mejores juguetes. Diversión garantizada para todas las edades.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FEE440' }}>Enlaces Rápidos</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href="/" style={{ color: '#d1d5db', textDecoration: 'none' }}>Inicio</Link></li>
            <li><a href="#productos" style={{ color: '#d1d5db', textDecoration: 'none' }}>Catálogo</a></li>
            <li><a href="https://wa.me/584241234567" target="_blank" style={{ color: '#d1d5db', textDecoration: 'none' }}>Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FEE440' }}>Síguenos</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://instagram.com/tu_usuario" target="_blank" style={{ color: 'white', backgroundColor: '#9B5DE5', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/584241234567" target="_blank" style={{ color: 'white', backgroundColor: '#25D366', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '1rem' }}>
            Atención al cliente 24/7 vía WhatsApp.
          </p>
        </div>

      </div>

      {/* Línea divisoria y Copyright */}
      <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem' }}>
        <p>© {new Date().getFullYear()} AllToys. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}