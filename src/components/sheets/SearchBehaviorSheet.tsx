import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import LineChart from "../LineChart";

const SearchBehaviorSheet = () => {
    const { colors } = useTheme()
    const [tab, setTab] = useState(1)
    return (
        <MainWrapper>
            <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                Search Behavior
            </TextView>

            <HorizontalWrapper>
                <TabView backgroundColor={tab === 1 ? colors.primary : colors.white}>
                    <TouchableOpacity onPress={() => { setTab(1) }}>
                        <TextView fontWeight={300} color={tab === 1 ? colors.white : colors.black} fontSize={20} textAlign='center'>
                            Daily
                        </TextView>
                    </TouchableOpacity>
                </TabView>

                <TabView backgroundColor={tab === 2 ? colors.primary : colors.white}>
                    <TouchableOpacity onPress={() => { setTab(2) }}>
                        <TextView fontWeight={300} color={tab === 2 ? colors.white : colors.black} fontSize={20} textAlign='center'>
                            Weekly
                        </TextView>
                    </TouchableOpacity>
                </TabView>

                <TabView backgroundColor={tab === 3 ? colors.primary : colors.white}>
                    <TouchableOpacity onPress={() => { setTab(3) }}>
                        <TextView fontWeight={300} color={tab === 3 ? colors.white : colors.black} fontSize={20} textAlign='center'>
                            Monthly
                        </TextView>
                    </TouchableOpacity>
                </TabView>
            </HorizontalWrapper>

            <ChartWrapper>
                <LineChart></LineChart>
            </ChartWrapper>
        </MainWrapper>
    )
}

export default withTheme(SearchBehaviorSheet)

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    marginTop?: number;
}

type TabViewProps = {
    backgroundColor: string;
}

const ChartWrapper = styled.View`
    padding:16px;
    flex:1;
`;

const TabView = styled.View<TabViewProps>`
    width:33.33%;
    height:40px;
    margin-top:16px;
    justify-content:center;
    align-items:center;
    background-color:${({ backgroundColor }: any) => backgroundColor};
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    text-align:${({ textAlign }: any) => textAlign};
    flexShrink:1;
    margin-top:${({ marginTop }: any) => marginTop}px
`;

const MainWrapper = styled.View`
    flex: 1;
    height:100%;
`;