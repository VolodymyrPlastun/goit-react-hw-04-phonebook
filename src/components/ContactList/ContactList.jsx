import s from './ContactList.module.css';
import { PropTypes } from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
    <ul className={s.list}>
        {contacts.map(({id, userName, userNumber}) => (
            <li className={s.item} key={id}>
                <p>{userName}: {userNumber}</p>
                <button className={s.btn} onClick={() => onDeleteContact(id)} type="button">Delete</button>
            </li>
        ))}
    </ul>
);
} 

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
