import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'


class NewTournamentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledDate: null
    };
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date,
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Chicago Fire"
          floatingLabelText="Tournament Title"
        />
        <DatePicker
          hintText="Tournament Start Date"
          value={this.state.controlledDate}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default NewTournamentForm
