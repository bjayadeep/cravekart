const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">About Me</h1>
      <div className="text-gray-700 space-y-3">
        <p><strong>Name:</strong> Naga Jayadeep B</p>
        <p><strong>Location:</strong> Visakhapatnam, Andhra Pradesh</p>
        <p><strong>College:</strong> IIIT Kottayam</p>
        <p><strong>Email:</strong> <a href="mailto:jayadeepbaggam@gmail.com" className="text-blue-600 underline">jayadeepbaggam@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 8121063930</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/bjayadeep" target="_blank" className="text-blue-600 underline">github.com/bjayadeep</a></p>
      </div>
    </div>
  );
};


export default About;
