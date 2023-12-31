import axios from "axios";
const baseUrl = `http://localhost:3001/persons`;

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const deleteIt = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  create: create,
  deleteIt: deleteIt,
};
