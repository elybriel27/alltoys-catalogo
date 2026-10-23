import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProducto(id: string) {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    name,
    price,
    tag,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch(query, { id }, { cache: 'no-store' });
}

// AQUÍ ESTÁ EL CAMBIO: params ahora es una Promesa
export default async function ProductoDetalle({ params }: { params: Promise<{ id: string }> }) {
  
  // Esperamos a que los params se resuelvan
  const resolvedParams = await params;
  const producto = await getProducto(resolvedParams.id);

  if (!producto) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
        
        {/* Imagen Grande */}
        <div style={{ flex: '1 1 400px', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
          <img 
            src={`${producto.imageUrl}?w=800&h=800&fit=crop`} 
            alt={producto.name} 
            style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>

        {/* Información */}
        <div style={{ flex: '1 1 400px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {producto.tag && (
            <span style={{ alignSelf: 'flex-start', backgroundColor: '#FEE440', color: '#1f2937', fontSize: '0.85rem', fontWeight: 'bold', padding: '0.3rem 1rem', borderRadius: '9999px', marginBottom: '1rem' }}>
              {producto.tag}
            </span>
          )}

          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2D3142', marginBottom: '1rem', lineHeight: '1.2' }}>
            {producto.name}
          </h1>

          <p style={{ fontSize: '2rem', fontWeight: '800', color: '#9B5DE5', marginBottom: '2rem' }}>
            ${producto.price}
          </p>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#4b5563', marginBottom: '0.5rem' }}>Descripción</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Este increíble juguete es perfecto para despertar la imaginación y creatividad. Fabricado con materiales de alta calidad y 100% seguro para los niños. ¡Un regalo que no puede faltar!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/584241234567?text=Hola, me interesa comprar este juguete: ${producto.name}`}
              target="_blank"
              style={{ flex: 1, minWidth: '200px', textAlign: 'center', backgroundColor: '#25D366', color: 'white', fontWeight: 'bold', padding: '15px', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1.1rem' }}
            >
              Comprar por WhatsApp
            </a>
            <Link 
              href="/"
              style={{ flex: 1, minWidth: '200px', textAlign: 'center', backgroundColor: '#e5e7eb', color: '#2D3142', fontWeight: 'bold', padding: '15px', borderRadius: '0.75rem', textDecoration: 'none', fontSize: '1.1rem' }}
            >
              Volver al Catálogo
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}