export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="card bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo {id}</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
          metus vitae urna bibendum tempor.
        </p>
      </div>
    </div>
  );
}