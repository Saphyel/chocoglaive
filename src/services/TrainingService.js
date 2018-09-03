import training from '../data/training.json';

export const TrainingService = {
    fetchAll
};

function fetchAll() {
    return training;
}
