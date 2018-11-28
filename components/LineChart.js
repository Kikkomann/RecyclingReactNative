import React from "react";
import { View } from "react-native";

import moment from "moment";

import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";

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

    getEarliestDateFromFractions(fractions) {
        let dates = fractions.map(fraction =>
            moment(fraction.date, "DD-MM-YYYY")
        );
        return moment.min(dates);
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
        var i,
            j = 0;
        for (i = 0; i < dateArray.length; i++) {
            let currentDaysWeight = 0;
            for (j = 0; j < nonRestFractions.length; j++) {
                if (nonRestFractions[j].date == dateArray[i]) {
                    currentDaysWeight += parseFloat(nonRestFractions[j].weight);
                }
            }
            dateArrayWithWeight.push({
                x: i,
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
        let currentWeekNumber = moment().isoWeek();
        let chartColors = ["orangered", "teal", "gold", "limegreen"];
        let recycledCorrectly = this.props.fractions.filter(
            fraction => fraction.isClean
        );
        let startDate = this.getEarliestDateFromFractions(this.props.fractions);
        let chartObjects = this.getSortedCorrectly(this.props.fractions);

        return (
            <View>
                <VictoryChart>
                    <VictoryLine
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                        ]}
                    />
                </VictoryChart>
            </View>
        );
    }
}
