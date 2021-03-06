import React from "react";
import { View, Text } from "react-native";

import moment from "moment";

import {
    VictoryChart,
    VictoryGroup,
    VictoryBar,
    VictoryLegend,
    VictoryAxis
} from "victory-native";

import { charts } from "../styles/styles";

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

    render() {
        let { orientation } = this.props;

        let currentWeekNumber = moment().isoWeek();
        let chartColors = ["orangered", "limegreen", "gold", "teal"];
        let rest2 = this.getTrashTypeFractionsFromWeek("rest", 2);
        let rest1 = this.getTrashTypeFractionsFromWeek("rest", 1);
        let rest0 = this.getTrashTypeFractionsFromWeek("rest", 0);
        let bio2 = this.getTrashTypeFractionsFromWeek("bio", 2);
        let bio1 = this.getTrashTypeFractionsFromWeek("bio", 1);
        let bio0 = this.getTrashTypeFractionsFromWeek("bio", 0);
        let pp2 = this.getTrashTypeFractionsFromWeek("pp", 2);
        let pp1 = this.getTrashTypeFractionsFromWeek("pp", 1);
        let pp0 = this.getTrashTypeFractionsFromWeek("pp", 0);
        let gmp2 = this.getTrashTypeFractionsFromWeek("gmp", 2);
        let gmp1 = this.getTrashTypeFractionsFromWeek("gmp", 1);
        let gmp0 = this.getTrashTypeFractionsFromWeek("gmp", 0);
        let max = Math.ceil(
            Math.max(
                rest0,
                rest1,
                rest2,
                bio2,
                bio1,
                bio0,
                pp2,
                pp1,
                pp0,
                gmp2,
                gmp1,
                gmp0
            )
        );
        return (
            <View
                style={
                    orientation == "LANDSCAPE"
                        ? charts.wrapperLandscape
                        : charts.wrapper
                }>

                {orientation == "LANDSCAPE" ? null : <Text style={charts.chartHeader}>
                            Samlet affald de sidste tre uger:
                        </Text>}
                {orientation == "LANDSCAPE" ? (
                    <View style={charts.legendLandscape}>
                        <VictoryLegend
                            style={charts}
                            // itemsPerRow={2}
                            orientation={"vertical"}
                            colorScale={chartColors}
                            data={[
                                { name: "Rest" },
                                { name: "Bio" },
                                { name: "Pap/papir" },
                                { name: "Glas/metal/plastik" }
                            ]}
                        />
                    </View>
                ) : (
                    undefined
                )}
                <View
                    style={
                        orientation == "LANDSCAPE"
                            ? charts.chartLandscape
                            : charts.chart
                    }>
                    {orientation == "LANDSCAPE" ? <Text style={charts.chartHeader}>
                            Samlet affald de sidste tre uger:
                        </Text> : null}
                    <VictoryChart>
                        <VictoryAxis
                            dependentAxis
                            label="kg."
                            style={charts}
                            tickValues={[
                                0,
                                max * 0.25,
                                max * 0.5,
                                max * 0.75,
                                max
                            ]}
                            tickFormat={t => Math.round(t)}
                        />
                        <VictoryAxis />
                        <VictoryGroup
                            // horizontal={true}
                            offset={20}
                            colorScale={chartColors}
                            categories={{
                                x: [
                                    "Uge " + (currentWeekNumber - 2),
                                    "Uge " + (currentWeekNumber - 1),
                                    "Uge " + currentWeekNumber
                                ]
                            }}>
                            <VictoryBar
                                data={[
                                    {
                                        x: 1,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "rest",
                                            2
                                        )
                                    },
                                    {
                                        x: 2,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "rest",
                                            1
                                        )
                                    },
                                    {
                                        x: 3,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "rest",
                                            0
                                        )
                                    }
                                ]}
                            />
                            <VictoryBar
                                data={[
                                    {
                                        x: 1,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "bio",
                                            2
                                        )
                                    },
                                    {
                                        x: 2,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "bio",
                                            1
                                        )
                                    },
                                    {
                                        x: 3,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "bio",
                                            0
                                        )
                                    }
                                ]}
                            />
                            <VictoryBar
                                data={[
                                    {
                                        x: 1,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "pp",
                                            2
                                        )
                                    },
                                    {
                                        x: 2,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "pp",
                                            1
                                        )
                                    },
                                    {
                                        x: 3,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "pp",
                                            0
                                        )
                                    }
                                ]}
                            />
                            <VictoryBar
                                data={[
                                    {
                                        x: 1,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "gmp",
                                            2
                                        )
                                    },
                                    {
                                        x: 2,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "gmp",
                                            1
                                        )
                                    },
                                    {
                                        x: 3,
                                        y: this.getTrashTypeFractionsFromWeek(
                                            "gmp",
                                            0
                                        )
                                    }
                                ]}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                </View>
                {orientation == "LANDSCAPE" ? (
                    undefined
                ) : (
                    <View style={charts.legend}>
                        <VictoryLegend
                            orientation="horizontal"
                            x={7}
                            style={charts}
                            colorScale={chartColors}
                            data={[
                                { name: "Rest" },
                                { name: "Bio" },
                                { name: "Pap/papir" },
                                { name: "Glas/metal/plastik" }
                            ]}
                        />
                    </View>
                )}
            </View>
        );
    }
}
