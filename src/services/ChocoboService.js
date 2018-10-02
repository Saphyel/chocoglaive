import {get, keys, set, del} from "idb-keyval";

const uuidv1 = require("uuid/v1");

export const ChocoboService = {
  fetchAll,
  fetch,
  insert,
  remove
};

function fetchAll() {
  let payload = [];
  const Ids = keys();
  for (var i = 0; i < Ids.length; i++) {
    payload.push({id: Ids[i], chocobo: get(Ids[i])})
  }
  return payload;
}

function fetch(id) {
  return get(id);
}

function insert(hp, attack, colour, speed) {
  const id = uuidv1();
  const payload = {
    hp: hp,
    attack: attack,
    speed: speed,
    colour: colour
  };

  set(id, payload);

  return {id: id, chocobo: payload};
}

function remove(id) {
  del(id);

  return true;
}
