export default function DebugPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🔍 Debug - Variables de Entorno
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Variables de Shopify:</h2>
          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded w-48">SHOPIFY_STORE_DOMAIN:</span>
              <span className="ml-2 font-mono">{process.env.SHOPIFY_STORE_DOMAIN || '❌ No configurada'}</span>
            </div>
            <div className="flex">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded w-48">SHOPIFY_STOREFRONT_ACCESS_TOKEN:</span>
              <span className="ml-2 font-mono">
                {process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ? 
                  `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN.substring(0, 8)}...` : 
                  '❌ No configurada'
                }
              </span>
            </div>
            <div className="flex">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded w-48">SHOPIFY_REVALIDATION_SECRET:</span>
              <span className="ml-2 font-mono">
                {process.env.SHOPIFY_REVALIDATION_SECRET ? 
                  `${process.env.SHOPIFY_REVALIDATION_SECRET.substring(0, 8)}...` : 
                  '❌ No configurada'
                }
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Información del Build:</h2>
          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded w-48">NODE_ENV:</span>
              <span className="ml-2 font-mono">{process.env.NODE_ENV}</span>
            </div>
            <div className="flex">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded w-48">VERCEL_ENV:</span>
              <span className="ml-2 font-mono">{process.env.VERCEL_ENV || 'No disponible'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
