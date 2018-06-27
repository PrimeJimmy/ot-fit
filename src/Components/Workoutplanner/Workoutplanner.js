import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Exercisedetails from '../Exercisedetails/Exercisedetails';



class Workoutplanner extends React.Component {
  constructor() {
    super();
    this.state= {
      rows: [{}],
    }
  };

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
    const { onRouteChange } =this.props
    return (
    <div className="pa4">
      <article className="ba bw1 w-100 center" >
        <h1 className="tc">Plan Your Workout</h1>
        <button 
         className=""
         onClick={() => onRouteChange('workouttracker')}
        >Start
        </button>
        <div className="pa4">
          <div className="overflow-auto">
            <table id="tracker" className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr className="pa1">
                  <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white">#</th>
                  <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white">Workout Type</th>
                  <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white pl4">Excerise</th>
                  <th className="fw6 bb b--black-20 tc pb3 pr3 bg-white">Details</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td className="w-10">{idx + 1}</td>
                      <td className="w-20">
                        <select name="workouttype">
                          <option value="Warmup">Warm-Up</option>
                          <option value="Gym">Gym</option>
                          <option value="Run">Run</option>
                          <option value="Sport-Specific">Sport-Specific</option>
                        </select>
                      </td>
                      <td className="w-20 pl4">
                        <input
                          type="text"
                          name="excerise"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                        />
                      </td>
                      <td className="w-20">
                      <Exercisedetails />
                      </td>
                      <td className="w-20">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
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
    );
  }
  
}

export default Workoutplanner;