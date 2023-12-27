
const baseURL = 'https://658b172eba789a9622386c30.mockapi.io/contacts';


export const getAllContacts = async() => {
  return await fetch(`${baseURL}`).then(response => response.json());
}

export const addContact = async(data) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => response.json());
  return response;
}

export const deleteContact = async (id) => {
  // console.log(id);
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  }).then(response => response.json());
  return response;
}

