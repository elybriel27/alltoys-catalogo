import { client } from "@/sanity/lib/client";
import Catalogo from "@/components/Catalogo";

async function getProductos() {
  const query = `*[_type == "product" && image != null] {
    _id,
    name,
    price,
    tag,
    "imageUrl": image.asset->url
  }`;
  
  return await client.fetch(query, {}, { cache: 'no-store' });
}

export default async function Home() {
  const productos = await getProductos();

  return (
    <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      
      {/* 1. BANNER PRINCIPAL (HERO SECTION) */}
      <section style={{ 
        background: 'linear-gradient(135deg, #9B5DE5 0%, #F15BB5 100%)', 
        padding: '4rem 1rem', 
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1.2' }}>
            ¡Bienvenido a AllToys! 🧸
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Encuentra los mejores juguetes para los más pequeños de la casa. Calidad, diversión y entrega rápida garantizada.
          </p>
          <a 
            href="#catalogo"
            style={{ 
              backgroundColor: '#FEE440', 
              color: '#2D3142', 
              padding: '12px 30px', 
              borderRadius: '30px', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '1.1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* 2. FRANJA DE BENEFICIOS (NUEVO) */}
      <section style={{ backgroundColor: 'white', padding: '1.5rem 1rem', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontWeight: '600' }}>
            <span style={{ fontSize: '1.5rem' }}>🚚</span> Delivery Rápido
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontWeight: '600' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span> Pago 100% Seguro
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4b5563', fontWeight: '600' }}>
            <span style={{ fontSize: '1.5rem' }}>⭐</span> Calidad Garantizada
          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO CON BÚSQUEDA Y FILTROS (Componente) */}
      <Catalogo productos={productos} />

    </main>
  );
}