import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class FollowButton extends Component {

  handleBuildRelationship = (followed_id)=> () => {
    const { getUsersInfo } = this.props;
    axios
      .post('/api/v1/relationships', {
        relationship: {
          followed_id
        }
      })
      .then(response => {
        getUsersInfo();
      })
      .catch(e => console.warn(e));
  }

  handleRemoveRelationship = (followed_id)=> () => {
    axios
      .delete(`/api/v1/relationships/${followed_id}`)
      .then(response => {
        this.props.getUsersInfo();
      })
      .catch(e => console.warn(e));
  }

  render () {
    const {
      relationId,
      userId
    } = this.props

    return relationId ? (
      <Button
        size="sm"
        className='follow'
        onClick={this.handleRemoveRelationship(relationId)}
      >
        UnFollow
      </Button>
    ) : (
      <Button
        size="sm"
        className='follow'
        onClick={this.handleBuildRelationship(userId)}
      >
        Follow
      </Button>
    );
  }
}