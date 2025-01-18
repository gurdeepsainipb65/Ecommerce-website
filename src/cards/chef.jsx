export default function CheifCard({ name, title, image }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    );
  }