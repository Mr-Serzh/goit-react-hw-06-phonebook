import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts, getContacts } from '../../redux/selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ReactComponent as DeleteIcon } from '../../images/bin.svg';
import transition from '../../transitions/transitions.module.css';
import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <>
      <CSSTransition
        in={!contacts.length}
        timeout={250}
        classNames={transition}
        mountOnEnter
        unmountOnExit
      >
        <p>Your phonebook is empty. Please add contact.</p>
      </CSSTransition>
      <TransitionGroup component="ul" className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames={transition}
          >
            <li className={s.item}>
              <p className={s.info}>
                {name}: {number}
              </p>
              <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon width="24" height="24" />
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
