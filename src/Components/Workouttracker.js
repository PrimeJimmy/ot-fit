import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Workouttracker = () => {

  const addColumn = () => {
    console.log("Hello")
    let tracker = document.getElementById("tracker");
   
   }

  return (
    <div className="pa4">
      <article className="ba bw1 w-100 center" >
        <h1 className="tc">Track Your Workout</h1>
        <div className="pa4">
          <div className="overflow-auto">
            <table id="tracker" className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr className="pa1">
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Exercise</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Set 1</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Set 2</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Set 3</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Set 4</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Set 5</th>
                </tr>
              </thead>
              <thead>
                <tr className="pa1">
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="type"></input></th>
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="Weight"></input><input placeholder="Reps"></input></th>
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="Weight"></input><input placeholder="Reps"></input></th>
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="Weight"></input><input placeholder="Reps"></input></th>
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="Weight"></input><input placeholder="Reps"></input></th>
                  <th className="sheet fw6 bb b--black-20 tl pb3 pr3 bg-white"><input placeholder="Weight"></input><input placeholder="Reps"></input></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <Button 
          variant="fab" 
          color="primary" 
          aria-label="add" 
          onClick={() => addColumn()}
          >
          <AddIcon />
        </Button>
      </article>
    </div>
    )
}

export default Workouttracker;