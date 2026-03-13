import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/api";

function Signup() {

  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    password: "",
    aadhaar: "",
    pan: "",
    bankUsername: "",
    bankPassword: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await signupUser({ ...formData, paymentType });

      alert("Signup Successful");

      navigate("/login");

    } catch (error) {

      console.error(error);
      alert("Signup Failed");

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">

      <div className="bg-white shadow-2xl rounded-xl p-8 w-[420px]">

        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Personal Info */}
          <h3 className="font-semibold text-gray-600 mb-2">Personal Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          {/* Identity */}
          <h3 className="font-semibold text-gray-600 mt-4 mb-2">
            Identity Details
          </h3>

          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400"
          />

          {/* Payment */}
          <h3 className="font-semibold text-gray-600 mt-4 mb-2">
            Payment Method
          </h3>

          <select
            onChange={(e) => setPaymentType(e.target.value)}
            className="w-full border p-3 rounded mb-3"
          >
            <option value="">Select Payment Method</option>
            <option value="netbanking">Net Banking</option>
            <option value="card">Card</option>
          </select>

          {/* NetBanking Fields */}
          {paymentType === "netbanking" && (
            <>
              <input
                type="text"
                name="bankUsername"
                placeholder="NetBanking Username"
                onChange={handleChange}
                className="w-full border p-3 rounded mb-3"
              />

              <input
                type="password"
                name="bankPassword"
                placeholder="NetBanking Password"
                onChange={handleChange}
                className="w-full border p-3 rounded mb-3"
              />
            </>
          )}

          {/* Card Fields */}
          {paymentType === "card" && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleChange}
                className="w-full border p-3 rounded mb-3"
              />

              <input
                type="text"
                name="expiry"
                placeholder="Expiry MM/YY"
                onChange={handleChange}
                className="w-full border p-3 rounded mb-3"
              />

              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                onChange={handleChange}
                className="w-full border p-3 rounded mb-3"
              />
            </>
          )}

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold mt-3 transition">
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?
          <a href="/login" className="text-blue-500 ml-1 font-semibold">
            Login
          </a>
        </p>

      </div>

    </div>
  );
}

export default Signup;