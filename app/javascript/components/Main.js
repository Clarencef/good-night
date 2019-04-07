import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Container, Row, Col, Link, Button } from 'react-bootstrap';

import FollowButton from './FollowButton';

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      current_user: {},
    }
  }

  componentDidMount () {
    this.getUsersInfo();
  }

  getUsersInfo = () => {
    axios
      .get('/api/v1/user')
      .then(response => {
        const { current_user, users } = response.data
        this.setState({
          users: users,
          current_user: current_user,
        })
      })
      .catch((e) => console.error(e))
  }

  render () {
    const { current_user, users } = this.state;
    return (
      <Container className='main-container'>
        <Row>
          <Col md={{span: 10, offset: 1}}>
            <div className='list-item'>
              <p>Current User Info</p>
              <a href={`/user/${current_user.id}`}>
                {current_user.name}
              </a>
              <Button
                href='/'
                className='change-user'
              >
                Change User
              </Button>
            </div>
            <hr/>
            <p>Other User Info</p>
            {
              users.map((user) => {
                return (
                  <div className='list-item' key={user.id}>
                    <span>{user.name}</span>
                    <Button
                      size="sm"
                      className='view-record'
                      href={`/user/${user.id}`}
                    >
                      Sleep Records
                    </Button>
                    <FollowButton
                      currentUserId={current_user.id}
                      relationId={user.relationId}
                      userId={user.id}
                      getUsersInfo={this.getUsersInfo}
                    />
                  </div>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    );
  }
}