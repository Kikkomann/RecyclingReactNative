import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import moment from "moment";

import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";

import { barChart, styles, ActivityIndicatorSize } from "../styles/styles";
import Colors from "../constants/Colors";

export default class BarChart extends React.Component {
    getTrashTypeFractionsFromWeek(trashType, weeksAgo) {
        let fractionsFromXWeeksAgo = this.props.fractions.filter(
            fraction =>
                moment().diff(moment(fraction.date, "DD-MM-YYYY"), "weeks") ==
                weeksAgo
        );
        return fractionsFromXWeeksAgo
            .filter(fraction => fraction.type == trashType)
            .reduce(
                (acc, currentValue) => acc + parseFloat(currentValue.weight),
                0
            );
    }

    getDatesForXAxis(startDate) {
        let startDateMoment = moment(startDate, "DD-MM-YYYY");
        let difference = moment().diff(startDateMoment);
        let jump = difference / 3;
        let secondDate = startDateMoment.clone().add(jump).format("DD-MM-YYYY");
        let thirdDate = startDateMoment.clone().add(jump * 2).format("DD-MM-YYYY");
        return [startDate, secondDate, thirdDate, moment().format("DD-MM-YYYY")];
    }

    getSortedCorrectly(fractions) {
        let nonRestFractions = fractions.filter(
            fraction =>
                fraction.trashType != "rest" && fraction.trashType != "bio"
        );

        const onlyUnique = (value, index, self) =>
            self.indexOf(value) === index;

        let dateArray = nonRestFractions
            .map(frac => frac.date)
            .filter(onlyUnique);
        dateArray.sort(function(a, b) {
            return (
                moment(a, "DD-MM-YYYY").toDate() -
                moment(b, "DD-MM-YYYY").toDate()
            );
        });
        let totalWeight = fractions.reduce(
            (accumulator, currentFraction) =>
                accumulator + parseFloat(currentFraction.weight),
            0
        );

        let dateArrayWithWeight = [];
        for (var i = 0; i < dateArray.length; i++) {
            let currentDaysWeight = 0;
            for (var j = 0; j < nonRestFractions.length; j++) {
                if (nonRestFractions[j].date == dateArray[i]) {
                    currentDaysWeight += parseFloat(nonRestFractions[j].weight);
                }
            }
            dateArrayWithWeight.push({
                x: dateArray[i],
                y: Math.round((currentDaysWeight / totalWeight) * 100)
            });
        }

        return dateArrayWithWeight;
    }

    momentToString(mom) {
        let date = mom.toDate();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        return (
            (day.toString().length == 1 ? "0" + day : day) +
            "-" +
            (month.toString().length == 1 ? "0" + month : month) +
            "-" +
            date.getFullYear()
        );
    }

    render() {
        let { stillFetching, fractions } = this.props;
        let chartObjects = fractions.length > 0 && !stillFetching ? this.getSortedCorrectly(fractions) : [];
        let categories = chartObjects.length > 0 ?  this.getDatesForXAxis(chartObjects[0].x) : undefined;
        let tickValues = chartObjects.length > 0 ? chartObjects.map(frac => moment().diff(moment(frac.x, "DD-MM-YYYY"), "days")).reverse() : [];
        return (
            <View style={barChart.barChart}>
                {chartObjects.length < 2 ? (
                    <ActivityIndicator
                        style={styles.ActivityIndicator}
                        color={Colors.ActivityIndicatorColor}
                        size={ActivityIndicatorSize}
                    />
                ) : (
                    <VictoryChart>
                    <VictoryAxis
                            dependentAxis
                            label="%"
                            style={barChart}
                            
                        />
                        <VictoryAxis
                        tickValues={tickValues} />
                        <VictoryLine
                            data={chartObjects}
                        />
                    </VictoryChart>
                )}
            </View>
        );
    }
}
