import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { format, addSeconds, distanceInWords } from 'date-fns'
import FollowButton from './FollowButton';

export default class User extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {},
      current_user: {},
      sleepRecord: [],
      error: null,
    }
  }

  componentDidMount () {
    this.getUserData();
    this.getUserSleepRecords();
  }

  getUserData() {
    axios.get(`/api/v1/user/${this.props.params.id}`)
      .then((response) => {
        const {
          user,
          current_user
        } = response.data

        this.setState({
          user,
          current_user,
        })
      })
      .catch((e)=> console.warn(e));
  }

  getUserSleepRecords() {
    axios.get(`/api/v1/user/${this.props.params.id}/sleep-record`)
      .then((response) => {
        const { data } = response;

        this.setState({
          sleepRecord: data,
        })
      })
      .catch((e) => {
        const {
          status,
          data
        } = e.response;

        if(status === 401 && data.error === "Not friend") {
          this.setState({
            error: data.error
          })
        }
      });
  }

  handleStartRecord = () => {
    const {
      current_user,
      sleepRecord
    } = this.state;

    axios
      .post(`/api/v1/user/${current_user.id}/sleep-record`)
      .then((response) => {
        this.setState({
          sleepRecord: [...sleepRecord, response.data]
        })
      })
      .catch((e) => console.error(e))
  }

  handleStopRecord = (id) => () => {
    const {
      current_user,
      sleepRecord
    } = this.state;

    axios
      .put(`/api/v1/user/${current_user.id}/sleep-record/${id}`)
      .then((response) => {
        const updatedSleepRecord = sleepRecord.map((record) => {
          if(record.id === response.data.id) {
            return response.data
          }

          return record;
        })

        this.setState({
          sleepRecord: updatedSleepRecord
        })
      })
      .catch((e) => console.error(e))
  }

  getUsersInfo = () => {
    axios
      .get(`/api/v1/user/${this.state.user.id}`)
      .then(response => {
        const {
          user,
          current_user
        } = response.data

        this.setState({
          user,
          current_user,
        })
      })
      .catch((e) => console.error(e))
  }

  formattedTime (seconds) {
    var helperDate = addSeconds(new Date(0), seconds);
    return distanceInWords(helperDate, new Date(0));
  }

  render () {
    const {
      current_user,
      user,
      error,
      sleepRecord
    } = this.state;

    return (
      <Container className='main-container'>
        <Row>
          <Col md={{span: 10, offset: 1}}>
            <Nav
              variant="tabs"
            >
              <Nav.Item>
                <Nav.Link href="/user">
                  Back to user list
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <h1>Sleep Record</h1>
            <span className="name">
              {user.name}
            </span>
            <span>
              {user.email}
            </span>
            {
              current_user.id === user.id ? (
                <Button
                  size="sm"
                  className='start-record'
                  onClick={this.handleStartRecord}
                > Create Sleep Record </Button>
              ) : (
                <FollowButton
                  currentUserId={current_user.id}
                  relationId={user.relationId}
                  userId={user.id}
                  getUsersInfo={this.getUsersInfo}
                />
              )
            }
            <hr/>
            {
              !error
              ? (
                  sleepRecord.length > 0 ? sleepRecord.map((record) => {
                      return (
                        <div className='list-item' key={record.id}>
                          <span>
                            {format(new Date(record.created_at), 'YYYY/MM/DD - HH:mm')} ~ {format(addSeconds(new Date(record.created_at), record.duration), 'HH:mm')}
                          </span>
                          {
                            user.id === current_user.id &&
                            !record.finished ? (
                              <Button
                                size="sm"
                                className='start-record'
                                onClick={this.handleStopRecord(record.id)}
                              >
                                Stop Record
                              </Button>
                            ) : <span className='duration'>{this.formattedTime(record.duration)}</span>
                          }
                        </div>
                      )
                    }) : <p>No sleep records</p>
                )
              : <p>Follow this user to view sleep records</p>
            }
          </Col>
        </Row>
      </Container>
    );
  }
}