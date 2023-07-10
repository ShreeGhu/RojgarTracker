import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventCreationForm from "./EventCreationForm";

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.eventCreationRef = React.createRef();
  }

  state = {
    weekendsVisible: true,
    currentEvents: [],
    isCreatingEvent: false,
    selectInfo: null,
    shouldRefresh: false,
    selectedEvent: null,
  };

  componentDidMount() {
    const eventsFromStorage = localStorage.getItem("calendarEvents");
    if (eventsFromStorage) {
      this.setState({ currentEvents: JSON.parse(eventsFromStorage) });
    }

    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  handleWeekendsToggle = () => {
    this.setState((prevState) => ({
      weekendsVisible: !prevState.weekendsVisible,
    }));
  };

  handleDateSelect = (selectInfo) => {
    if (this.state.selectedEvent) {
      this.setState({ selectedEvent: null });
    } else {
      this.setState({ isCreatingEvent: true, selectInfo });
    }
  };

  handleEventCreate = (eventData) => {
    const { selectInfo } = this.state;
    const { title, start, end, color } = eventData;

    selectInfo.view.calendar.unselect();

    const isSingleDayEvent = start === end;

    const newEvent = {
      id: this.generateEventId(),
      title,
      start,
      end,
      backgroundColor: color,
      borderColor: color,
      textColor: "white",
      allDay: isSingleDayEvent,
    };

    this.setState(
      (prevState) => ({
        currentEvents: [...prevState.currentEvents, newEvent],
        isCreatingEvent: false,
        shouldRefresh: true,
      }),
      () => {
        localStorage.setItem(
          "calendarEvents",
          JSON.stringify(this.state.currentEvents)
        );
      }
    );
  };

  handleEventClick = (clickInfo) => {
    const { event } = clickInfo;
    this.setState({ selectedEvent: event });
  };

  handleEventDelete = () => {
    const { selectedEvent, currentEvents } = this.state;
    const updatedEvents = currentEvents.filter(
      (event) => event.id !== selectedEvent.id
    );
    this.setState({ currentEvents: updatedEvents, selectedEvent: null }, () => {
      localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
    });
  };

  handleOutsideClick = (event) => {
    if (
      this.eventCreationRef.current &&
      !this.eventCreationRef.current.contains(event.target) &&
      this.state.isCreatingEvent
    ) {
      this.setState({ isCreatingEvent: false, selectInfo: null });
    }
    if (this.state.selectedEvent && !event.target.closest(".fc-event")) {
      this.setState({ selectedEvent: null });
    }
  };

  handleCalendarRefresh = () => {
    if (this.state.shouldRefresh) {
      this.setState({ shouldRefresh: false }, () => {
        window.location.reload(); // Reload the page after adding or updating an event
      });
    }
  };

  generateEventId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  render() {
    const { isCreatingEvent, selectInfo, selectedEvent } = this.state;

    return (
      <div className="demo-app">
        <div className="demo-app-main">
          {isCreatingEvent && selectInfo ? (
            <div className="event-creation-overlay">
              <div
                className="event-creation-container"
                ref={this.eventCreationRef}
              >
                <EventCreationForm
                  onSelect={this.handleEventCreate}
                  start={selectInfo.startStr}
                  end={selectInfo.endStr}
                />
              </div>
            </div>
          ) : null}
          <div className="calendar-container">
            <FullCalendar
              ref={this.calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,today",
                center: "title",
                right: "next",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={this.state.weekendsVisible}
              select={this.handleDateSelect}
              eventContent={renderEventContent}
              eventClick={this.handleEventClick}
              events={this.state.currentEvents}
              datesRender={this.handleCalendarRefresh}
            />
          </div>
          {selectedEvent && (
            <div className="delete-options-overlay">
              <div className="delete-options-container">
                <h3>Selected Event:</h3>
                <p>{selectedEvent.title}</p>
                <button
                  onClick={this.handleEventDelete}
                  className="delete-button"
                >
                  Delete Event
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
