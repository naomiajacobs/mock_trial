import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'


class NewTournamentForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      controlledDate: null
    };
  }

  handleDateChange(event, date) {
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
        <br />
        <DatePicker
          hintText="Tournament Start Date"
          value={this.state.controlledDate}
          onChange={this.handleDateChange.bind(this)}
        />
      </div>
    );
  }
}

export default NewTournamentForm
