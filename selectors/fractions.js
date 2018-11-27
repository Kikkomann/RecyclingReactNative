export const allFractions = state => state.fractions.allFractions;

export const fractionsByUser = (state, userId) => {
    allFractions(state).filter(fraction => fraction.userId == userId);
};
