import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <section className="cards-container bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((id) => (
          <Link
            className="card bg-white rounded-lg shadow-lg p-6 text-center text-2xl font-bold text-gray-800 hover:bg-gray-200 transition duration-300"
            key={id}
            href={`/photos/${id}`}
            passHref
          >
            {id}
          </Link>
        ))}
      </div>
    </section>
  );
}