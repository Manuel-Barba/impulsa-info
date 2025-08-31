import type { Metadata } from 'next';

import Prose from 'components/prose';
import { getPage, getPages } from 'lib/shopify';
import { notFound } from 'next/navigation';

// Generar rutas estáticas para todas las páginas disponibles
export async function generateStaticParams() {
  try {
    console.log('🔍 Iniciando generateStaticParams...');
    
    const pages = await getPages();
    console.log('📄 Páginas obtenidas de Shopify:', pages.length);
    console.log('📋 Handles de páginas:', pages.map(p => p.handle));
    
    const params = pages.map((page) => ({
      page: page.handle
    }));
    
    console.log('✅ Parámetros generados:', params);
    return params;
  } catch (error) {
    console.error('❌ Error en generateStaticParams:', error);
    console.error('🔧 Detalles del error:', {
      message: error instanceof Error ? error.message : 'Error desconocido',
      stack: error instanceof Error ? error.stack : 'No disponible',
      name: error instanceof Error ? error.name : 'Error'
    });
    return [];
  }
}

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
