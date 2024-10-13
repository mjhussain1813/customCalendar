import './App.css';
import {useState} from 'react'
import CustomCalender from './CustomCalender';

function App() {

  return (
    <div>
 <CustomCalender/>
    </div>
  );
}

export default App;



























// import './App.css';
// import {useState} from 'react'
// import FormComponent from './File';
// import DisplayComponent from './Display';
// function App() {
//   const [formData, setFormData] = useState({ username: '', email: '' });
//   const [displayData, setDisplayData] = useState(null);

//   const handleSubmit = (data) => {
//     setDisplayData(data); 
//   };

//   const handleClear = () => {
//     setDisplayData(null);
//   };

//   return (
//     <div>
//       <h2>App Component</h2>
//       <FormComponent formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
//       <DisplayComponent data={displayData} onClear={handleClear} />
//     </div>
//   );
// }

// export default App;





