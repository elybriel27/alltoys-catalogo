export default function Contacto() {
    return (
      <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9B5DE5', marginBottom: '1.5rem' }}>
            ¡Estamos para Ayudarte!
          </h1>
          
          <div style={{ width: '60px', height: '4px', backgroundColor: '#F15BB5', margin: '0 auto 2rem', borderRadius: '2px' }}></div>
  
          <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '3rem' }}>
            ¿Tienes dudas sobre un juguete o quieres coordinar tu delivery? Contáctanos por cualquiera de nuestros canales y te atenderemos al instante.
          </p>
  
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            {/* Botón WhatsApp */}
            <a href="https://wa.me/584241234567" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '2rem', backgroundColor: '#f0fdf4', borderRadius: '1rem', border: '1px solid #bbf7d0' }}>
              <div style={{ backgroundColor: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>WhatsApp</h3>
              <p style={{ color: '#15803d', fontSize: '0.9rem' }}>Respuesta inmediata</p>
            </a>
  
            {/* Botón Instagram */}
            <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '2rem', backgroundColor: '#fdf2f8', borderRadius: '1rem', border: '1px solid #fbcfe8' }}>
              <div style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <h3 style={{ color: '#831843', marginBottom: '0.5rem' }}>Instagram</h3>
              <p style={{ color: '#9d174d', fontSize: '0.9rem' }}>Mira nuestras novedades</p>
            </a>
  
          </div>
  
          {/* Info de Delivery */}
          <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#F8F9FA', borderRadius: '1rem', border: '1px dashed #9B5DE5' }}>
            <h3 style={{ color: '#9B5DE5', marginBottom: '0.5rem' }}>🚚 Delivery Disponible</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
              Hacemos envíos a domicilio en toda la ciudad. Coordinamos el pago y la entrega directamente por WhatsApp.
            </p>
          </div>
  
        </div>
      </main>
    );
  }