import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl text-red-600 font-bold">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-4">
        {err?.status} – {err?.statusText || "Something went wrong."}
      </p>
      <a href="/" className="text-blue-500 underline mt-4 inline-block">
        Go back to Home
      </a>
    </div>
  );
};

export default Error;
