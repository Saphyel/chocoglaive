import {Store, get, keys, set, del} from "idb-keyval";

const uuidv1 = require("uuid/v1");
const customStore = new Store('saphyel', 'masterglaive');

export const ChocoboService = {
  fetchAll,
  fetch,
  insert,
  remove
};

async function fetchAll() {
  let payload = [];
  const Ids = await keys(customStore);
  for (let i = 0; i < Ids.length; i++) {
    payload.push({id: Ids[i], chocobo: await fetch(Ids[i])})
  }
  return payload;
}

async function fetch(id) {
  return await get(id, customStore);
}

function insert(hp, attack, colour, speed) {
  const id = uuidv1();
  const payload = {
    hp: hp,
    attack: attack,
    speed: speed,
    colour: colour
  };

  set(id, payload, customStore);

  return {id: id, chocobo: payload};
}

async function remove(id) {
  await del(id, customStore);

  return true;
}
