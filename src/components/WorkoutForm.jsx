import React from 'react';


const WorkoutForm = ({formData, handleChange, handleSubmit}) => {
  // const [formData, setFormData] = useState({
  //     name:'',
  //     muscle:'',
  //     image:'',
  //     description:''
  // })
  
  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value})
  // }
  
  return (
    <div>
      <form onSubmit={handleSubmit}style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label>Name</label>
        <input
        type="text"
        name="name"
        aria-label="name"
        value={formData.name}
        onChange={handleChange}
        ></input>
        <label>Muscle</label>
        <input
        type="text"
        name="muscle"
        aria-label="muscle"
        value={formData.muscle}
        onChange={handleChange}
        ></input>
        <label>Image URL</label>
        <input
        name="image"
        aria-label="image"
        value={formData.image}
        onChange={handleChange}
        ></input>
        <label>Description</label>
        <input
        type="text"
        name="description"
        aria-label="description"
        value={formData.description}
        onChange={handleChange}
        ></input>
        <input type="submit" />
      </form> 
    </div>
  )
}

export default WorkoutForm

     
