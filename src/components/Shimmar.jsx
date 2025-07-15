const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="res-card shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line short"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line small"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;