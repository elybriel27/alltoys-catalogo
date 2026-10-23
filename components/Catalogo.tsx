"use client";

import { useState } from "react";
import Link from "next/link"; // <-- Agregamos Link

export default function Catalogo({ productos }: { productos: any[] }) {
  const [busqueda, setBusqueda] = useState("");
  const [filtroTag, setFiltroTag] = useState("Todos");

  const tagsUnicos = ["Todos", ...Array.from(new Set(productos.map((p) => p.tag).filter(Boolean)))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.name.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTag = filtroTag === "Todos" || producto.tag === filtroTag;
    return coincideBusqueda && coincideTag;
  });

  return (
    <section id="catalogo" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem', gap: '1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2D3142', display: 'inline-block' }}>Nuestros Juguetes</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#9B5DE5', margin: '10px auto 0', borderRadius: '2px' }}></div>
        </div>

        <div style={{ width: '100%', maxWidth: '500px' }}>
          <input type="text" placeholder="Buscar juguete por nombre..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} style={{ width: '100%', padding: '15px 20px', borderRadius: '30px', border: '2px solid #e5e7eb', fontSize: '1rem', outline: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {tagsUnicos.map((tag) => (
            <button key={tag as string} onClick={() => setFiltroTag(tag as string)} style={{ padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s', backgroundColor: filtroTag === tag ? '#9B5DE5' : '#e5e7eb', color: filtroTag === tag ? 'white' : '#4b5563' }}>
              {tag as string}
            </button>
          ))}
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af', fontSize: '1.2rem' }}>No se encontraron juguetes. 🧸</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {productosFiltrados.map((juguete: any) => (
            <div key={juguete._id} style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              
              {/* Enlace a la página de detalle */}
              <Link href={`/producto/${juguete._id}`} style={{ textDecoration: 'none' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', backgroundColor: '#ffffff', overflow: 'hidden', padding: '15px' }}>
                  <img src={`${juguete.imageUrl}?w=500&h=500&fit=crop`} alt={juguete.name || "Juguete"} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  {juguete.tag && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#FEE440', color: '#1f2937', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '9999px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>{juguete.tag}</span>
                  )}
                </div>

                <div style={{ padding: '1.5rem 1rem 0 1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2D3142', lineHeight: '1.4' }}>{juguete.name}</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '0.5rem', color: '#9B5DE5' }}>${juguete.price}</p>
                </div>
              </Link>

              <div style={{ padding: '0 1rem 1.5rem 1rem', marginTop: 'auto' }}>
                <a href={`https://wa.me/584241234567?text=Hola, me interesa el juguete: ${juguete.name}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', width: '100%', backgroundColor: '#9B5DE5', color: 'white', fontWeight: '600', padding: '10px 0', borderRadius: '0.75rem', textDecoration: 'none' }}>
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}