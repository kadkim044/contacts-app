import Header from "./Components/Header.jsx"
import ContactList from "./Components/ContactList.jsx"
import {Routes,Route} from "react-router-dom"
import AddContact from "./Components/AddContact.jsx"
import { useEffect, useState } from "react";
import ContactDetail from "./Components/ContactDetail.jsx";
import DeleteConfirmation from "./Components/DeleteConfirmation";
import api from "./api/contacts.js";
import {v4 as uuid} from "uuid";
import EditContact from "./Components/EditContact.jsx";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setContacts] =useState([]);
  async function retreivecontacs() {
    const request=await api.get("/contacts");
    return request.data;
  }
  useEffect(()=>{
    const getAllContacts=async()=>{
      const allContacts=await retreivecontacs();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[])
  async function addContactHandler(contact) {
    const request={
      id:uuid(),
      ...contact}
    const response=await api.post("/contacts",request);
    setContacts([...contacts,response.data]);
  }
  async function deleteContactHandler(id) {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  async function EditContactHandler(contact){
    const request={
      id:contact.id,
      ...contact
    }
    const response =await api.put(`/contacts/${contact.id}`,request);
    setContacts((contacts.map((c)=>{
      return c.id===contact.id?response.data:c;
    })));
  }
  return (
    <>
        <Header/>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          <Route path="/" element={<ContactList contacts={contacts} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
          <Route path="/contacts/:id" element={<ContactDetail contacts={contacts}/>}/>
          <Route path="/delete/:id" element={<DeleteConfirmation deleteContactHandler={deleteContactHandler}/>}/>
          <Route path="/edit/:id" element={<EditContact EditContactHandler={EditContactHandler}/>}/>
        </Routes>

    </>
  )
}

export default App
