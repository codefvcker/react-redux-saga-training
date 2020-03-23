import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../../redux/actionsCreator";
import { Alert } from "../Alert";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  submitHandler = e => {
    e.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      this.props.showAlert("Input cant be empty");
      return;
    }

    const newPost = {
      title,
      id: Date.now().toString()
    };

    this.props.createPost(newPost);

    this.setState({
      title: ""
    });
  };

  changeInputHandler = e => {
    e.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Password</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
          {this.props.alert ? <Alert /> : null}
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    );
  }
}

export default connect(
  ({ app }) => ({
    alert: app.alert
  }),
  { createPost, showAlert, hideAlert }
)(PostForm);
