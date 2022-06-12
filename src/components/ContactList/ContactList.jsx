import s from './ContactList.module.css';
import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map(({id, name, number}) => (
            <li className={s.item} key={id}>
                <p>{name}: {number}</p>
                <button className={s.btn} onClick={() => onDeleteContact(id)} type="button">Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;