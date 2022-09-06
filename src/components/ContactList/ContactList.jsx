import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { List, Button, ListItem } from './ContactList.styled';


export default function ContactsList() {
    const dispatch = useDispatch();
    const contactItems = useSelector((state) => state.contacts);
    const filterString = useSelector((state) => state.filter);
    const filteredList = contactItems.filter(contact => contact.name.toLowerCase().includes(filterString));

    const delContact = (payload) => {
        dispatch(deleteContact(payload))
    }

    return (
        <List>
              {filteredList.map(({ name, id, number }) => {
                  return (
                      <ListItem key={id}>{name}: {number}
                          <Button onClick={() => delContact(id)}>Delete</Button>
                      </ListItem>
                  );
            })}
        </List>
    )
};

ContactsList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteHandler: PropTypes.func
};