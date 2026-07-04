export default function ProductItem({ product, onViewDetail }) {
  const { name, price, image } = product;

  return (
    <div
      onClick={() => onViewDetail(product)}
      className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
    >
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 h-32 object-contain"
      />
      <p className="mb-1 text-sm text-gray-800">{name}</p>
      <p className="mb-3 text-sm text-gray-600">{price} $</p>
      <button
        type="button"
        onClick={(event) => event.stopPropagation()}
        className="inline-flex items-center gap-2 rounded bg-black px-3 py-1.5 text-xs text-white hover:bg-gray-800"
      >
        add to carts
        <svg
          className="h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 4V2a1 1 0 0 1 2 0v2h6V2a1 1 0 1 1 2 0v2h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3Zm11 6H4v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1h-1v-9Z" />
        </svg>
      </button>
    </div>
  );
}
