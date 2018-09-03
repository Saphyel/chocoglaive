import birthplaces from '../data/birthplaces.json';

export const BirthdayService = {
    fetchAll
};

function fetchAll() {
    return birthplaces;
}
