// import React, { useState } from "react";

// function Register() {
//   const [submitdata, setSubmitData] = useState(null);
//   const [formdata, setFormData] = useState({
//     fname: "",
//     email: "",
//     password: "",
//     c_password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formdata, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitData(formdata);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="enter your name"
//           name="fname"
//           onChange={handleChange}
//         />
//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="enter email"
//           name="email"
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="enter password"
//           name="password"
//           onChange={handleChange}
//            required
//         />
//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="confirm password"
//           name="c_password"
//           onChange={handleChange}
//         />
//         <br />
//         <br />

//         <button type="submit">Register</button>
//       </form>

//       {submitdata && (
//         <div>
//           <h3>Submitted Data:</h3>
//           <p>Name: {submitdata.fname}</p>
//           <p>Email: {submitdata.email}</p>
//           <p>Password: {submitdata.password}</p>
//           <p>Confirm Password: {submitdata.c_password}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;





import React, { useState } from "react";

function SkillsForm() {
  const [formdata, setFormData] = useState({
    skills: [], // multiple selected skills
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      // add skill
      setFormData({
        ...formdata,
        skills: [...formdata.skills, value],
      });
    } else {
      // remove skill
      setFormData({
        ...formdata,
        skills: formdata.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Skills:", formdata.skills);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleChange}
        />
        React
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Node.js"
          onChange={handleChange}
        />
        Node.js
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="MongoDB"
          onChange={handleChange}
        />
        MongoDB
      </label>
      <br />
      <button type="submit">Submit</button>

      <p>Selected: {formdata.skills.join(", ")}</p>
    </form>
  );
}

export default SkillsForm;
