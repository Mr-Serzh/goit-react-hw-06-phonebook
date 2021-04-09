import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span className={s.title}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Jennifer Aniston"
          />
        </label>
        <label className={s.label}>
          <span className={s.title}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="777-77-77"
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
