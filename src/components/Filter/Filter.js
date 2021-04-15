import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import { getFilter, getContacts } from '../../redux/selectors';
import { CSSTransition } from 'react-transition-group';
import transition from '../../transitions/transitions.module.css';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={transition}
      mountOnEnter
      unmountOnExit
    >
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
          name="filter"
          placeholder="input name"
        />
      </label>
    </CSSTransition>
  );
}
