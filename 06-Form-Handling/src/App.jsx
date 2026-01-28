import React from 'react'

const App = () => {
  function formhandling(e){
 e.preventDefault();
 console.log("form submitted");
 
  }
  return (
    <div>
      <div className="form-container">
        <h2>Registration Form</h2>

        <form onSubmit={(e)=>{
          formhandling(e)
        }} >
          {/* Full Name */}
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          {/* Email */}
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          {/* Password */}
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          {/* Gender */}
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" /> Male
            </label>
            <label>
              <input type="radio" name="gender" /> Female
            </label>
            <label>
              <input type="radio" name="gender" /> Other
            </label>
          </div>

          {/* Date of Birth */}
          <label>Date of Birth</label>
          <input type="date" />

          {/* Course */}
          <label>Course</label>
          <select>
            <option>Select course</option>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics</option>
          </select>

          {/* Address */}
          <label>Address</label>
          <textarea placeholder="Enter address"></textarea>

          {/* Submit */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;
