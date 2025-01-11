import "tailwindcss/tailwind.css";

const DoctorThankYou = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_960_720.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
          Thank You, Doctors!
        </h1>
        <p className="text-lg mb-8 animate-fade-in">
          Your dedication and unwavering commitment to serving humanity inspire us every day. We salute your efforts in making the world a healthier place.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-bounce"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DoctorThankYou;