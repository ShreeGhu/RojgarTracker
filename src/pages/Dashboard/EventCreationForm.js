import React from "react";

class EventCreationForm extends React.Component {
  state = {
    title: "",
    startTime: "",
    endTime: "",
    color: "", // Default color option
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, startTime, endTime, color } = this.state;
    const { onSelect } = this.props;

    if (title && startTime && endTime) {
      onSelect({
        title,
        start: startTime,
        end: endTime,
        color,
      });

      // Reset the form fields
      this.setState({
        title: "",
        startTime: "",
        endTime: "",
        color: "",
      });
    }
  };

  render() {
    const { title, startTime, endTime, color } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="center">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="datetime-local"
            name="startTime"
            value={startTime}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="datetime-local"
            name="endTime"
            value={endTime}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Color:
          <select name="color" value={color} onChange={this.handleInputChange}>
            <option value="#8ecae6">Hario</option>
            <option value="#2a9d8f">FikaHario</option>
            <option value="#e9c46a">Pahalo</option>
            <option value="#f4a261">Suntala</option>
            <option value="#e76f51">Pakako</option>
            <option value="#ffb703">Dami</option>
            <option value="#3a86ff">Nilo</option>
            <option value="#e71d36">Rato</option>
            <option value="#9d4edd">Kalaji</option>
          </select>
        </label>
        <br />
        <button type="submit" className="submit-Event">
          Add Event
        </button>
      </form>
    );
  }
}

export default EventCreationForm;
