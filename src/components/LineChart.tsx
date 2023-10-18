import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme, styled, useTheme } from "styled-components/native";

const LineChart = () => {
    const { colors } = useTheme()
    return (
        <View style={{ position: "relative", height: "100%", width: "100%", flexDirection: "row", alignItems: "flex-end", flex: 1 }}>
            <View style={{
                position: "relative", height: "100%", width: "90%", marginTop: 12, paddingHorizontal: 12,
                alignItems: "flex-end", justifyContent: "flex-start", paddingVertical: 12, flexDirection: "row",
                paddingLeft: 1, flex: 1
            }}>
                <View style={styles.leftnum}>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>{Math.round(1 / 1)} -</Text>
                    <Text style={styles.nummain}>0 -</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", height: "80%", borderBottomWidth: 1, borderBottomColor: "gray", width: '100%' }}>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 50 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >M</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 20 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >T</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 40 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >W</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 55 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >T</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 65 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >F</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 5 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >S</Text>
                    </View>
                    <View style={styles.mainlymain}>
                        <View style={styles.covertop}>
                            <View style={{ backgroundColor: colors.primary, height: 17 }}></View>
                        </View>
                        <Text style={styles.maincoverbar} >S</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default withTheme(LineChart)

const styles = StyleSheet.create({
    nummain: { fontSize: 8, textAlign: "center", },
    leftnum: {
        height: "100%",
        justifyContent: "space-between",
    },
    mainlymain: { position: "relative", width: 12, marginHorizontal: 2, },
    covertop: { height: "100%", justifyContent: "flex-end", position: "relative" },
    maincoverbar: { fontSize: 8, textAlign: "center", marginTop: 2 },

})