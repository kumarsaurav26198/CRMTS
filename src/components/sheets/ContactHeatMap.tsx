import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { dateCalenderIcon, monthCalenderIcon, waveIcon, weekCalenderIcon } from "../../utils/assets";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useActions } from "../../hooks/useActions";
import { closeModal } from "../../store/global_modal/action-creators";
import LineChart from "../LineChart";

const ContactHeatMap = () => {
    const { colors } = useTheme()
    const { openModal } = useActions()

    return (
        <MainWrapper>
            <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                Heat Map
            </TextView>

            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Favorites</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />

                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>124</TextView1>

                </Card>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Saved Search</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />

                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>8</TextView1>
                </Card>
            </HorizontalWrapper>

            <HorizontalWrapper>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Engagement</TextView1>
                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>00:13:53</TextView1>
                    <HorizontalWrapper style={{ position: 'absolute', bottom: 0, justifyContent: 'space-between' }}>
                        <ImageView source={dateCalenderIcon} />
                        <ImageView source={weekCalenderIcon} />
                        <ImageView source={monthCalenderIcon} />

                    </HorizontalWrapper>
                </Card>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Saved Criteria</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />
                    </HorizontalWrapper1>
                    <TouchableOpacity onPress={async () => {
                        await closeModal()

                        openModal(
                            'SearchCriteriaSheet',
                            {
                                height: '80%',
                            },
                        )
                    }}>
                        <LiveView>
                            <FlatList
                                style={{ height: 80 }}
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
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
                        </LiveView>
                    </TouchableOpacity>
                </Card>
            </HorizontalWrapper>

            <HorizontalWrapper>
                <TouchableOpacity onPress={async () => {
                    await closeModal()
                    openModal(
                        'SearchBehaviorSheet',
                        {
                            height: '80%',
                        },
                    )
                }}>
                    <Card>
                        <TextView1 style={{ position: "absolute", top: 0, left: 0, right: 0, textAlign: "center" }} fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Search Behavior</TextView1>

                        <LineChart />

                    </Card>
                </TouchableOpacity>
                <Card>
                    <HorizontalWrapper1>
                        <TextView1 fontSize={10} color={colors.black} fontWeight={700} marginTop={10}>Search Behavior</TextView1>
                    </HorizontalWrapper1>
                    <TextView1 fontSize={25} color={colors.primary} fontWeight={700} marginTop={0}>$1.8 K</TextView1>

                </Card>
            </HorizontalWrapper>

        </MainWrapper>
    )
}

export default withTheme(ContactHeatMap)

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    marginTop?: number;
}

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

const LineProgressText = styled.Text`
    text-align: right;
    font-size: 7px;
    color: #000;
    position:absolute;
    right:2;
    top:-2
`;

const LineInProgress = styled.View`
    height: 3px;
    width:90%;
    border-radius: 22px;
    background-color: red;
    position:absolute;
    left: 0;
    top: 0;
    bottom: 0;
`;

const LineBarProgress = styled.View`
    width: 100%;
    height: 3px;
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

const HorizontalWrapper1 = styled.View`
    flex-direction:row;
    top:0;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:100%;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
`;

const ImageView = styled.Image`
    height:22px;
    width:22px;
    margin:8px;
    resize-mode:contain;
`;

const ImageView1 = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    position:absolute;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    top:0;
    right:-6;
`;

const TextView1 = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-items:center;
    justify-content:center;
    align-self:center;
`;

const LiveView = styled.View`
    height:80px;
    width:125px;
    margin-top:24px;
    flex:1;
    overflow:hidden;
`;

const Card = styled.View`
    height:130px;
    width:130px;
    margin-bottom:15px;
    margin-top:15px;
    border-radius:15px;
    border-width:2px;
    justify-content:center;
    align-items:center;
    position:relative;
    align-self:center;
    border-color:${({ theme }: any) => theme.colors.primary};
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
    background-color:${({ theme }: any) => theme.colors.white};
    height:100%;
    padding:8px;
    flex: 1;
`;