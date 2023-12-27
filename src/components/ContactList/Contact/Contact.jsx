
import PropTypes from 'prop-types';

import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts-operations";

export const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    // console.log(id);
    dispatch(deleteContact(id));
  }

  return <>
     <li onClick={showDetail}>
      <div >
        <p>{contact.name}</p>
        <p
          name={contact.name}>
          {contact.number}
        </p>
      </div>
      <button 
        type="button" 
        onClick={() => handleDeleteContact(contact.id)}
      >
        delete
      </button>
    </li>
  </>
}



const showDetail = (evt) => {
  // console.log(evt.currentTarget);
  const liRef = evt.currentTarget;
  const btnRef = liRef.childNodes[1];
  const contactRef = liRef.childNodes[0];
  const numberRef = contactRef.childNodes[1];

  numberRef.classList.toggle()
  btnRef.classList.toggle()
}

Contact.propTypes = {
  contact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
}