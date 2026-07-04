import { useState } from "react";
import Modal from "./modal.jsx";
import ProductList from "./productList.jsx";
import products from "../../data.json";

export default function ShoeStore() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex min-h-screen">
      <aside className="w-48 border-r border-gray-200 p-4">
        <nav className="flex flex-col gap-2 text-sm">
          <a
            href="#"
            className="rounded border border-blue-300 px-3 py-1 text-blue-600"
          >
            Home
          </a>
          <a href="#" className="px-3 py-1 text-gray-700 hover:text-blue-600">
            Shop
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          Shoes shop
        </h1>
        <ProductList
          products={products}
          onViewDetail={(product) => setSelectedProduct(product)}
        />
      </main>

      <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
