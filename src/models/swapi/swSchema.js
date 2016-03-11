import axios from 'axios'
var DataLoader = require('dataloader');

module.exports.getFilmById = (root, {id}) => {
  /*
  return new DataLoader(function (ids) {
    return axios.all(ids.map(id => {

      var url = Number.isInteger(id) ? `http://swapi.co/api/films/${id}/` : id;

      return axios.get(url)
        .then(res => res.data)
        .catch(e => console.log(e))
    }))
  })
  */

  // TODO follow Udemy but convert all calls to proper graphql not his lib

  return axios.get(`http://swapi.co/api/films/${id}/`)
  .then(function (res) {
    console.log(res.data);
    return res.data
  })
  .catch(e => console.log(e))

}
