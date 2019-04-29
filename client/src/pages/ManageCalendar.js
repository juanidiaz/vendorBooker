import React, { Component } from 'react';
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Calendar from "../components/Calendar"
class ManagerCalendar extends Component {
    state={
        events: []
    }

    loadEvents = () => {
        API.getCalendars()
          .then(res => this.setState({ events: res.data }))
          console.log(this.state.events)
          // .catch(err => console.log(err));
      };

      render() {
        const { auth } = this.props;
          if (!auth.uid) return <Redirect to='/signin' />
        return (<div>

        <Calendar
        events= {this.state.events}
        />
        </div>
        )}
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth
    }
  }

  export default compose(
    connect(mapStateToProps)
  )(Booking);