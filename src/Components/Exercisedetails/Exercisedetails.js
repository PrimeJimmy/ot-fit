import React from 'react';
import Modal from 'react-responsive-modal';


class Exercisedetails extends React.Component  {
  constructor() {
    super();
    this.state = {
      open: false,
      rows: [{}]
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
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
    const { open } = this.state;
    return (
      <div>
       <button onClick={this.onOpenModal}>Details</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <div className="tc">
          <h1>Customize Your Exercise</h1>
          <h3>Workout Type</h3>
          <h4>Exercise</h4>
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
            <button
              onClick={this.handleAddRow}
            >Add</button>
            <button
            type="submit"
            >Save</button>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}  


export default Exercisedetails;