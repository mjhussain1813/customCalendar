// import React from 'react';

// function FormComponent({ formData, setFormData, onSubmit }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);  
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormComponent;
