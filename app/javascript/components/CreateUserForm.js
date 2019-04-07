import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';

export default class CreateUserForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      name: null,
      email: null,
      error: null,
    }
  }

  componentDidMount () {
    axios
      .get('/api/v1/user', {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          users: response.data,
        })
      })
      .catch((e) => console.error(e));
  }

  handleInputChange = (field) => (e) => {
    if(field === 'name' || field === 'email') {
      this.setState({
        [field]: e.target.value,
      })
    } else {
      console.warn('Is not an registered field')
    }
  }

  handleFormSubmit = (e) => {
    const { name, email } = this.state;
    e.preventDefault();
    axios
      .post('/api/v1/user', {
        user: {
          name,
          email,
        }
      }, {
        withCredentials: true,
      })
      .then(response => window.location = '/user')
      .catch(e => {
        this.setState({
          error: e.response.data
        })
      })
  }

  render () {
    const { name, email } = this.state;

    return (
      <Container>
        <Row>
          <Col md={{span: 10, offset: 1}}>
            <Form
              onSubmit={this.handleFormSubmit}
            >
              <Form.Group controlId="formBasicName">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleInputChange('name')}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleInputChange('email')}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}