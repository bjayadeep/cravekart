/* eslint-disable no-unused-vars */
const withTopRatedLabel = (Component) => {
  return (props) => (
    <div className="relative">
      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
        TOP RATED
      </span>
      <Component {...props} />
    </div>
  );
};

export default withTopRatedLabel;
