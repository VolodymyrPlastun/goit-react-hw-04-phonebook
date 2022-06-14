import s from './Section.module.css';
import { PropTypes } from 'prop-types';

export default function Section({ title, children }) {
    return (
    <section className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {children}
    </section>
);
} 

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}