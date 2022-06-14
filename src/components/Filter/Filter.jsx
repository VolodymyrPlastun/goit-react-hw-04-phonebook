import s from './Filter.module.css';
import { PropTypes } from 'prop-types';

export default function Filter({ value, onChange }) {
    return (
    <label className={s.label}>Find contacts by name
        <input className={s.input} type="text" value={value} onChange={onChange} />
    </label>
);
} 

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
