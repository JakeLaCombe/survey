
const SCORING_GUIDE = {
    0: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
    },
    1: {
        0: 10,
        1: 7,
        2: 5,
        3: 1,
    },
    2: {
        0: 10,
        1: 5,
        2: 3,
        3: 1,
    },
    3: {
        0: 10,
        1: 7,
        2: 3,
        3: 0,
    },
    4: {
        0: 10,
        1: 5,
        2: 3,
        3: 0,
    },
    5: {
        0: 10,
        1: 7,
        2: 3,
        3: 1,
    },
    6: {
        0: 10,
        1: 7,
        2: 5,
        3: 1,
    },
    7: {
        0: 10,
        1: 7,
        2: 3,
        3: 0,
    },
    8: {
        0: 10,
        1: 7,
        2: 3,
        3: 1,
    },
    9: {
        0: 10,
        1: 5,
        2: 5,
        3: 1,
    },
    10: {
        0: 10,
        1: 10,
        2: 5,
        3: 1,
    },
}

const ScoreCalculation = (scores) => {
    let score = 0;

    for (var i in scores) {
        score += SCORING_GUIDE[i][scores[i]];
    }

    return score;
}

export default ScoreCalculation;