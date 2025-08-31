export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ✅ Página de prueba funcionando
        </h1>
        <p className="text-lg text-gray-600">
          El deploy está funcionando correctamente
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Las variables de Shopify necesitan configurarse en Vercel
        </p>
      </div>
    </div>
  );
}
