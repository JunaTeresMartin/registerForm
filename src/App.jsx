import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});

  const clearForm = () => {
    setName("");
    setAddress("");
    setEmail("");
    setNumber("");
    setGender("");
    setDOB("");
    setCourse("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!address.trim()) newErrors.address = "Address is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!number.trim()) {
      newErrors.number = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Mobile number must be 10 digits.";
    }
    if (!gender) newErrors.gender = "Gender is required.";
    if (!dob) newErrors.dob = "Date of birth is required.";
    if (!course) newErrors.course = "Course selection is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const displayDetails = () => {
    if (validateForm()) {
      alert(
        `Name: ${name}\nAddress: ${address}\nEmail: ${email}\nMobile Number: ${number}\nGender: ${gender}\nDOB: ${dob}\nSelected Course: ${course}`
      );
      clearForm();
    }
  };

  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration Form
        </h2>
        <form
          className="border border-primary rounded p-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              value={address}
              rows="3"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            {errors.address && (
              <div className="text-danger">{errors.address}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={number}
              placeholder="Enter mobile number"
              onChange={(e) => setNumber(e.target.value)}
            />
            {errors.number && (
              <div className="text-danger">{errors.number}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
            {errors.gender && (
              <div className="text-danger">{errors.gender}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Select Course
            </label>
            <select
              className="form-select"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
            {errors.course && (
              <div className="text-danger">{errors.course}</div>
            )}
          </div>

          <div className="d-flex justify-content-between">
            <button
              onClick={displayDetails}
              type="button"
              className="btn btn-primary"
            >
              Register
            </button>
            <button
              onClick={clearForm}
              type="button"
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
