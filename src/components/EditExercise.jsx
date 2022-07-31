import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const EditExercise = ({exercises, handleUpdateExercise, setIsEditing}) => {
  const classes = useStyles();
  const {id, instructions} = exercises
  
  const [updatedInstructions, setUpdatedInstructions] = useState(instructions)
  
  const handleEditForm = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ instructions: updatedInstructions}),
    })
      .then((r) => r.json())
      .then((data) => handleUpdateExercise(data));
      setIsEditing(false)
  }

  const editForm = 
    <form onSubmit={handleEditForm}>
      <label>Instructions:</label>
      <input
        id="instructions"
        type="text"
        name="instructions"
        value={updatedInstructions}
        onChange={(e) => setUpdatedInstructions(e.target.value)}
        />
        <input type="submit" value="Save" />
    </form>

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={exercises.url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">{exercises.name}</Typography>
                <Typography variant="body2" color="textSecondary">{editForm}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default EditExercise
