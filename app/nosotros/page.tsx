import Link from "next/link";

export default function Nosotros() {
  return (
    <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#9B5DE5', textAlign: 'center', marginBottom: '1.5rem' }}>
          Sobre AllToys
        </h1>
        
        <div style={{ width: '60px', height: '4px', backgroundColor: '#F15BB5', margin: '0 auto 2rem', borderRadius: '2px' }}></div>

        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
          En <strong>AllToys</strong> creemos que la diversión no tiene edad. Nacimos con la misión de llevar alegría a cada hogar, ofreciendo una selección cuidadosa de los juguetes más emocionantes, educativos y de moda para los más pequeños de la casa.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
          Sabemos lo importante que es ver sonreír a un niño, por eso trabajamos de la mano con las mejores marcas para garantizar calidad y seguridad en cada producto. Además, contamos con un servicio de <strong>Delivery rápido y seguro</strong>, para que la sorpresa llegue directo a tu puerta sin complicaciones.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link href="/" style={{ backgroundColor: '#9B5DE5', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Ver Catálogo
          </Link>
          <Link href="/contacto" style={{ backgroundColor: '#FEE440', color: '#2D3142', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Contáctanos
          </Link>
        </div>

      </div>
    </main>
  );
}