'use client'
import Link from "next/link";
import { useState } from "react";
import { FaLock, FaUserAlt, FaEdit, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib";
import {AiFillCar} from "react-icons/ai"


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    age:0,
    mobile_number: 0,
  });
  const navigate = useRouter();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    registerUser(formData, navigate)
  }

  return (
    <div className="">
      <div className="">
      <h1 className="text-2xl m-5 text-center md:text-left md:text-3xl font-bold lg:text-4xl cursor-pointer flex items-center">
        <AiFillCar/>Explora
        </h1>
      </div>
      <div className="login-page">
        <form className="p4 m3" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="fullname">FullNames: </label>
            <br></br>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              pattern="^(?!.*@).*"
              placeholder="Enter your full names"
              className="input-field  focus:bg-blue-600"
              title="Email addresses are not allowed as names."
              required
            />
            <FaUserAlt id="email-icon" />
          </div>
          <div className="relative">
            <label htmlFor="age">Age: </label>
            <br></br>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              pattern="^(?!.*@).*"
              placeholder="Enter your age"
              className="input-field  focus:bg-blue-600"
              title="Age must be between 18 and 65 years."
              required
            />
             <FaUserAlt id="email-icon" />
          </div>
          <div className="relative">
            <label htmlFor="mobile_number">Mobile Number: </label>
            <br></br>
            <input
              type="number"
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              pattern="^(?!.*@).*"
              placeholder="Enter your phone number"
              className="input-field  focus:bg-blue-600"
              title="valid mobile numbers must begin with 254"
              required
            />
             <FaPhone id="email-icon" />
          </div>
          <div className="relative">
            <label htmlFor="email">Email: </label>
            <br></br>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="input-field  focus:bg-blue-600"
              required
            />
            <MdEmail id="email-icon" />
          </div>
          <div className="relative">
            <label htmlFor="password">Password :</label>
            <br></br>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              minLength={8}
              required
              className="input-field focus:bg-blue-600"
            />
            <FaLock id="password-icon" />
          </div>
          <input
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <span> {!showPassword ? "Show" : "Hide"} Password</span>
          <p className="pt-3">
            By continuing, you agree to the{" "}
            <a className="login__link">Terms and Conditions</a>
          </p>
          <button type="submit" className="login-button">
            <FaEdit /> Register
          </button>
        </form>
        <br></br>
        <div className="shadow-lg border p-2 border-blue-500">
          Already signed up? <br className="hidden lg:block" />
          <Link href="/login" className="login__link">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
}