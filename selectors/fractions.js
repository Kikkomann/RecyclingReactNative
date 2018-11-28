export const allFractions = state => state.fractions.allFractions;

export const fractionsByUserId = state => {
    return allFractions(state).filter(fraction => fraction.userId == props.id);
    
};
