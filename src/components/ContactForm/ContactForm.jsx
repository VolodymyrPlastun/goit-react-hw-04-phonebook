import { Component } from 'react';
import s from './ContactForm.module.css';
import { PropTypes } from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    onSubmitAdd: PropTypes.func.isRequired,
}

state = {
  name: '',
   number: ''
    }

      handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        const { name, number } = this.state;
    evt.preventDefault();
        this.props.onSubmitAdd(name, number);
    this.reset();
  };

       reset = () => {
    this.setState({ name: '', number: ''});
  };

    render() {
        const { name, number } = this.state;
      return (
          <div className={s.container}>
            <form className={s.form}
                onSubmit={this.handleSubmit}
            >
          <label className={s.label}>Name
            <input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.handleChange}
              /></label>
            <label className={s.label}>Number
              <input className={s.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={this.handleChange}
/>
            </label>
          <button className={s.btn} type="submit">Add contact</button>
          </form> 
          </div>
        )
    }
}

export default ContactForm;