export default function Modal({ product, onClose }) {
  if (!product) return null;

  const { name, price, image, description, shortDescription, quantity } = product;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl rounded-lg bg-white shadow-lg"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
          <img src={image} alt={name} className="mx-auto h-48 object-contain" />
          <div>
            <p className="mb-2 text-xl font-bold text-red-600">{price} $</p>
            <p className="mb-2 text-sm text-gray-500">Còn lại: {quantity} đôi</p>
            <p className="mb-2 text-sm italic text-gray-600">{shortDescription}</p>
            <p className="whitespace-pre-line text-sm text-gray-700">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-gray-200 px-5 py-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Đóng
          </button>
          <button
            type="button"
            className="rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            Add to carts
          </button>
        </div>
      </div>
    </div>
  );
}
