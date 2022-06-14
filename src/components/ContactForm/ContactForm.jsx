import { useState } from 'react';
import s from './ContactForm.module.css';
import { PropTypes } from 'prop-types';



export default function ContactForm({onSubmitAdd}) {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  // const handleChange = evt => {
  //     const { name, value } = evt.target;
  //     switch (name) {
  //       case "userName":
  //         setUserName(value)
  //         break;
        
  //       case "userNumber":
  //         setUserNumber(value)
  //         break;
      
  //       default:
  //         return;
  //     }
  //   };

  const handleNameChange = evt => {
    setUserName(evt.target.value);
  }
  
  const handleNumberChange = evt => {
    setUserNumber(evt.target.value);
  }

 const handleSubmit = evt => {
      evt.preventDefault();
        onSubmitAdd(userName, userNumber);
    reset();
  };

    const reset = () => {
      setUserName('');
      setUserNumber('');
  };

      return (
          <div className={s.container}>
            <form className={s.form}
                onSubmit={handleSubmit}
            >
          <label className={s.label}>Name
            <input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={userName}
                onChange={handleNameChange}
              /></label>
            <label className={s.label}>Number
              <input className={s.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={userNumber}
                onChange={handleNumberChange}
/>
            </label>
          <button className={s.btn} type="submit">Add contact</button>
          </form> 
          </div>
        )
}

ContactForm.propTypes = {
  onSubmitAdd: PropTypes.func.isRequired,
}
