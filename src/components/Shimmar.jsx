const Shimmer = () => {
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-pulse">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-full max-w-[16rem] bg-white rounded-xl shadow overflow-hidden"
          >
            <div className="w-full h-36 bg-gray-200" />
            <div className="p-3 space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-2/3 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
