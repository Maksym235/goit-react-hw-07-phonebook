import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/selectors";

export const useContacts = () => useSelector(selectFilteredContacts)