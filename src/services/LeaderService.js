import leaders from "../data/leaders.json";

export const LeaderService = {
    fetchAll
};

function fetchAll() {
    return new Promise((resolve, reject) => resolve(leaders));
}
