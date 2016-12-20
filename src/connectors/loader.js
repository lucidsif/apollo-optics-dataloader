var DataLoader = require('dataloader');
var axios = require('axios');
// TODO: Replace axios with fetch


module.exports = function () {
  // ensure cached per request...
  return {
    character: Character(),
    starship: Starship()
  };
};

function Character() {
  return new DataLoader(function (ids) {
    return axios.all(ids.map(id => {
      var url = Number.isInteger(id) ? `http://swapi.co/api/people/${id}/` : id;
      return axios.get(url).then(res => res.data);
    }));
  });
}

function Starship() {
  return new DataLoader(function (ids) {
    return axios.all(ids.map(id => {
      var url = Number.isInteger(id) ? `http://swapi.co/api/starships/${id}/` : id;
      return axios.get(url).then(res => res.data);
    }));
  });
}


// var film = Film();
// film.loadMany([1, 'http://swapi.co/api/films/3']).then(data => console.log(data));
