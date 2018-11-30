import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import moment from "moment";

import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";

import { barChart, styles, ActivityIndicatorSize } from "../styles/styles";
import Colors from "../constants/Colors";

export default class BarChart extends React.Component {
    sortedDateArrayFromFractionsLowToHigh(fractionsAndDates) {
        const onlyUnique = (value, index, self) =>
            self.indexOf(value) === index;

        return fractionsAndDates
            .map(frac => frac.date)
            .filter(onlyUnique)
            .sort(function(a, b) {
                return (
                    moment(a, "DD-MM-YYYY").toDate() -
                    moment(b, "DD-MM-YYYY").toDate()
                );
            });
    }

    getSummedWeightsForUniqueDays(dateArray, fractionsAndDates) {
        let totalWeight = fractionsAndDates.reduce(
            (accumulator, currentFraction) =>
                accumulator + parseFloat(currentFraction.weight),
            0
        );

        let summedWeights = [];
        for (var i = 0; i < dateArray.length; i++) {
            let currentDaysWeight = 0;
            for (var j = 0; j < fractionsAndDates.length; j++) {
                if (fractionsAndDates[j].date == dateArray[i]) {
                    currentDaysWeight += parseFloat(
                        fractionsAndDates[j].weight
                    );
                }
            }
            summedWeights.push(
                Math.round((currentDaysWeight / totalWeight) * 100)
            );
        }
        return summedWeights;
    }

    // Requires: dates.length == weight.length and that all elements corresponds in date <=> weight
    lineChartDataFromDateAndWeightSums(dates, weights) {
        let dateArrayWithWeight = [];
        dates = dates
            .map(date => moment().diff(moment(date, "DD-MM-YYYY"), "days"))
            .reverse();
        for (var i = 0; i < dates.length; i++) {
            dateArrayWithWeight.push({
                x: dates[i],
                y: weights[i]
            });
        }
        return dateArrayWithWeight;
    }

    getDatesSinceTodayAndSummedWeight(fractionsAndDates) {
        let sortedDateArray = this.sortedDateArrayFromFractionsLowToHigh(
            fractionsAndDates
        );
        let summedWeights = this.getSummedWeightsForUniqueDays(
            sortedDateArray,
            fractionsAndDates
        );

        return this.lineChartDataFromDateAndWeightSums(
            sortedDateArray,
            summedWeights
        );
    }

    getSortedCorrectly() {
        let { fractions } = this.props;
        let nonRestFractions = fractions.filter(
            fraction => fraction.type != "rest" && fraction.type != "bio"
        );
        return this.getDatesSinceTodayAndSummedWeight(nonRestFractions);
    }

    render() {
        let { stillFetching, fractions } = this.props;
        let chartObjects =
            fractions.length > 0 && !stillFetching
                ? this.getSortedCorrectly()
                : [];
        return (
            <View style={barChart.barChart}>
                {chartObjects.length < 2 ? (
                    <Text>
                        Du skal have smidt glas, metal, plastik, pap eller papir
                        (alt andet end res og bio) ud på to forskellige dage,
                        før du kan se noget data her.
                        {"\n"}
                        Smid noget ud under "Dump"-fanen, for at se noget data
                        her.
                    </Text>
                ) : (
                    <VictoryChart>
                        <VictoryAxis dependentAxis label="%" style={barChart} />
                        <VictoryAxis />
                        <VictoryLine data={chartObjects} />
                    </VictoryChart>
                )}
            </View>
        );
    }
}
