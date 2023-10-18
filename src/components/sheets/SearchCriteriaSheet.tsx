import React from "react";
import styled, { withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { FlatList } from "react-native";
import PieChart from 'react-native-pie-chart'

const SearchCriteriaSheet = () => {
    const widthAndHeight = 250
    const series = [123, 321, 153, 789, 537]
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

    return (
        <MainWrapperWhite>
            <ChildWrapper>
                <FlatList
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    data={[1, 1, 1, 1, 1, 1,]}
                    renderItem={() => {
                        return (
                            <LineBarView>
                                <LineBarText>
                                    4 Bedrooms
                                </LineBarText>
                                <LineBarProgress>
                                    <LineInProgress>
                                    </LineInProgress>
                                    <LineProgressText>10</LineProgressText>
                                </LineBarProgress>
                            </LineBarView>
                        )
                    }}>
                </FlatList>

                <PieWrapper>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverFill={'#FFF'}
                    />
                </PieWrapper>
            </ChildWrapper>
        </MainWrapperWhite>
    )
}

export default withTheme(SearchCriteriaSheet)

const PieWrapper = styled.View`
    width:100%;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
`;

const LineProgressText = styled.Text`
    text-align: right;
    font-size: 7px;
    color: #000;
    margin-left:5px;
    top:-2
`;

const LineInProgress = styled.View`
    height: 11px;
    width:90%;
    background-color: red;
    left: 0;
`;

const LineBarProgress = styled.View`
    width: 100%;
    border-radius: 22px;
    flex-direction:row;
    display:flex;
`;

const LineBarText = styled.Text`
    font-size: 11px;
    margin-bottom: 4px;
    width: 100%; 
`;

const LineBarView = styled.View`
    width: 100%;
    margin-bottom: 2px;  
`;

const ChildWrapper = styled.View`
    justify-content:space-between;
    height:100%;
`;