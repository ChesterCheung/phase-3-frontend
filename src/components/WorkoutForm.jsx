import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const WorkoutForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(4),
        width: '35ch',
      },
    },
  }));
  const classes = useStyles();

  const [formData, setFormData] = useState({
      name:'',
      muscle:'',
      image:'',
      description:''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  console.log(formData)
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div><Typography variant="h6" className={classes.title}>Name</Typography><TextField onChange={handleChange} id="outlined-name"  variant="outlined" value={formData.name}/></div>
        <div><Typography variant="h6" className={classes.title}>Muscle Group</Typography><TextField onChange={handleChange} id="outlined-muscle" variant="outlined" value={formData.muscle}/></div>
        <div><Typography variant="h6" className={classes.title}>Image URL</Typography><TextField onChange={handleChange} id="outlined-ImageUrl" variant="outlined" value={formData.image}/></div>
        <div><Typography variant="h6" className={classes.title}>Description</Typography><TextField onChange={handleChange} id="outlined-multiline-static" multiline rows={4} defaultValue="Describe it!" variant="outlined" value={formData.description}/></div>
        <input type="submit" />
      </form>    
    </div>
  )
}

export default WorkoutForm

     
