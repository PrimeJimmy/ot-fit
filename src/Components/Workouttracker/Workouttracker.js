import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


class Workouttracker extends React.Component {
  constructor() {
    super();
    this.state= {
      rows: [{}],
      workouttype: '',
      excerise: '',
      sets: ''
    }
  };

  //function that pulls data from Workoutplanner
  //1. workouttype
  //2. excerise
  //3. sets
  // function that creates a card within a table with the above information
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

   handleRemoveRow = () => {
      this.setState({
        rows: this.state.rows.slice(0, -1)
      });
    };
    handleRemoveSpecificRow = (idx) => () => {
      const rows = [...this.state.rows]
      rows.splice(idx, 1)
      this.setState({ rows })
    };


  render() {
    return (
      <div className='pa4'>
        <article className="ba bw1 w-100 center">
         <h1>Track Your Workout</h1>
         <h2>Workout Type</h2>
         <h3>Exercise</h3>
          <div className='pa4'>
            <table id="tracker" className="f6 w-100 mw8 center dt" cellSpacing="0">
                <thead>
                  <tr className="pa1">
                    <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white pl3 dtc">Set</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white pl3 dtc">Reps</th>
                    <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white pl3 dtc">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td className="w-10">{idx + 1}</td>
                      <td className="w-20 pl4">
                        <input
                          type="text"
                          name="reps"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                        />
                      </td>
                      <td className="w-20 pl3">
                        <input
                          type="text"
                          name="weight"
                          value={this.state.rows[idx].mobile}
                          onChange={this.handleChange(idx)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
          <Button 
          variant="fab" 
          color="primary" 
          aria-label="add" 
          onClick={this.handleAddRow}
          >
          <AddIcon />
        </Button>
        </article> 
      </div>

    )
  }
  
}

export default Workouttracker;