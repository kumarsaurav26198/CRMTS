import React, { useEffect } from "react";
import { profileIcon } from '../../../assets';
import { styled, useTheme, withTheme } from "styled-components/native";
import { FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Speedmeter from "../../../components/Speedmeter";
import { BaseIcon, NeedleCustom } from "../../../utils/assets";
import { dataCell } from '../../../utils/constants'
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useIsFocused } from '@react-navigation/native';
import { LoaderView } from "../../../utils/globalStyles";
import Activity from "../../../components/Activity";

const Dashboard = () => {
    const { colors } = useTheme();
    const isFocused = useIsFocused();
    const {
        openModal,
        getDashboardInfo
    } = useActions();
    const { dashboardInfoData, dashboardInfoloading } = useTypedSelector(
        state => state.dashboardInfoData,
    )
    const { loading, error, isAuthenticated, totalactivity, u_first_name, u_last_name } = useTypedSelector(
        state => state.auth,
    );
    const { s_loading, s_isAuthenticated, s_totalactivity, first_name, last_name } = useTypedSelector(
        state => state.socialLogin,
    );

    useEffect(() => {
        if (isFocused) {
            getDashboardInfo()
        }
    }, [isFocused])

    return (
        <MainView>
            {
                dashboardInfoloading ? <LoaderView>
                    <Activity />
                </LoaderView > : null
            }
            <MainWrapper>
                <OnlineWrapper>
                    <FlatList
                        data={dashboardInfoData?.data?.currentusers}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <RenderImage source={item.User_image ? { uri: item?.User_image } : profileIcon}></RenderImage>
                            )
                        }}
                    >
                    </FlatList>
                </OnlineWrapper>
                <ScrollView>
                    <ScrollWraper>
                        <TextWrapper fontWeight={300} fontSize={18} color={colors.black}>
                            Welcome {isAuthenticated ? u_first_name : first_name}  {isAuthenticated ? u_last_name : last_name}
                        </TextWrapper>

                        <TouchableOpacity onPress={() => {
                            openModal(
                                'HeatMapSheet',
                                {
                                    height: '80%',
                                    data: dashboardInfoData,
                                },
                            )
                        }}>
                            <Speedmeter
                                minValue={0}
                                defaultValue={0}
                                allowedDecimals={0}
                                size={200}
                                needleImage={NeedleCustom}
                                maxValue={100}
                                labels={[

                                ]}
                                value={isAuthenticated ? totalactivity : s_totalactivity}>
                            </Speedmeter>
                        </TouchableOpacity>
                        <ImageView source={BaseIcon}></ImageView>

                        <MainCardView>
                            {
                                dataCell.map((item, index) => {
                                    return (
                                        <Card style={{
                                            shadowColor: 'black',
                                            shadowOffset: { width: 0, height: 2 },
                                            shadowRadius: 6,
                                            shadowOpacity: 0.26,
                                            elevation: 8,
                                            backgroundColor: 'white',
                                            padding: 20,
                                            borderRadius: 10
                                        }}>

                                            <CardItemView style={{
                                                shadowOffset: { width: -2, height: 4 },
                                                shadowOpacity: 0.2,
                                                shadowRadius: 3,
                                            }} >
                                                <ItemImage source={item.image}></ItemImage>
                                            </CardItemView>
                                            <TextWrapper style={{ marginTop: index === 3 || index === 5 ? 0 : 10 }} fontWeight={500} fontSize={15} color={colors.black}>{item.title}</TextWrapper>
                                            {
                                                index === 3 || index === 5 ? null :
                                                    <TextWrapper fontWeight={800} fontSize={18} color={colors.primary}>{index === 0 ? dashboardInfoData?.data?.opportunities :
                                                        index === 1 ? dashboardInfoData?.data?.transactions :
                                                            index === 3 ? dashboardInfoData?.data?.YTD_earnings : item.subTitle}</TextWrapper>

                                            }
                                        </Card>
                                    )
                                })
                            }
                        </MainCardView>
                    </ScrollWraper>
                </ScrollView>

            </MainWrapper>
        </MainView>
    )
}

export default withTheme(Dashboard)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number
}

const Card = styled.View`
    height:140px;
    width:140px;
    align-self:center;
    margin:15px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    position:relative;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const MainCardView = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    margin-bottom:50px;
`;

const ItemImage = styled.Image`
    height:12;
    width:12;
`;

const ImageView = styled.Image`
    height:35px;
    width:130px;
    justify-content:center;
    resize-mode:contain;
    align-items:center;
`;

const CardItemView = styled.View`
    height:30px;
    width:30px;
    border-radius:15px;
    background-color:white;
    position:absolute;
    right:10px;
    top:10px;
    z-index:9;
    padding:2px;
    justify-content:center;
    align-items:center;
`;

const ScrollWraper = styled.View`
    margin-top:10px;
    align-items:center;
`;

const TextWrapper = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    align-self:center;
    margin-top:20px;
    font-weight:${({ fontWeight }: any) => fontWeight};
`;

const RenderImage = styled.Image`
    height:40px;
    width:40px;
    border-radius:20px;
    margin-top:10px;
    margin-horizontal:10px;
    border-width:1px;
    border-color: ${({ theme }: any) => theme.colors.green};
`
const OnlineWrapper = styled.View`
    width:100%;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
`;

const MainWrapper = styled.View``;

const MainView = styled.View`
    flex:1;
`;