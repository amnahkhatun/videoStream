import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderedInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}></input>
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    // this.props.history.push("/");
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          autoComplete="off"
          component={this.renderedInput}
          label="Enter title"
        />
        <Field
          name="description"
          autoComplete="off"
          component={this.renderedInput}
          label="Enter Description"
        />
        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You forgot to enter Title";
  }
  if (!formValues.description) {
    errors.description = "You forgot to enter description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
