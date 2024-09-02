import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
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
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="3"
              placeholder="Enter address"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
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
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date of Birth
            </label>
            <input type="date" className="form-control" id="date" name="date" />
          </div>

          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Select Course
            </label>
            <select className="form-select" id="course">
              <option value="" disabled selected>
                Select
              </option>
              <option value="2">Biology</option>
              <option value="3">Computer Science</option>
              <option value="4">Commerce</option>
              <option value="5">Humanities</option>
            </select>
          </div>

          {/* <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <button type="submit" className="btn btn-primary w-100">
          Cancel
        </button> */}
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary">
              Register
            </button>
            <button type="button" class="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
