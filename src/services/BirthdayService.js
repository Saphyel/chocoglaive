import birthplaces from "../data/birthplaces.json";

export const BirthdayService = {
    fetchAll
};

function fetchAll() {
    return new Promise((resolve, reject) => resolve(birthplaces));
}
