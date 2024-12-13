

const Card = ({ }) => {

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-[300px] mx-auto flex flex-col justify-between h-[200px]">
      <p className="text-gray-700"></p>
      <div className="flex flex-col gap-2 mt-auto">
        <button
          className="bg-gray-200 animate-pulse text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          See Me
        </button>
        <button
          className="bg-gray-200 animate-pulse text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Edit Me
        </button>
      </div>
    </div>
  );
};

export default Card;
