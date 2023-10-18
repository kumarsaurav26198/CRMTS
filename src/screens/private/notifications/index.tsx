import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MessageIcon, pulseIcon, transactionDeskIcon } from "../../../utils/assets";
import { FlatList, TouchableOpacity } from "react-native";
import { chatTabIcon, phoneTabIcon } from "../../../assets";
import navigationStrings from '../../../navigation/navigationStrings'
import { navigationRef } from '../../../navigation/RootNavigation'

const data = [
    {
        label: 'surf Mail',
        image: MessageIcon,
        count: 1,
    },
    {
        label: 'surf Phone',
        image: phoneTabIcon,
        count: 6,
    },
    {
        label: 'surf Text',
        image: chatTabIcon,
        count: 5,
    },
    {
        label: 'Transaction Desk',
        image: transactionDeskIcon,
        count: 1,
    },
    {
        label: 'Lead Activities',
        image: pulseIcon,
        count: 4,
    }
]
const Notifications = ({ navigation }) => {
    const { colors } = useTheme()


    return (
        <MainWrapper>
            <FlatList
                data={data}
                ItemSeparatorComponent={<Divider />}
                ListFooterComponent={<Divider />}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            index === 0 ? navigationRef.current.navigate(navigationStrings.TAB_BAR_MESSAGE) :
                                index === 3 ? navigationRef.current.navigate(navigationStrings.TRANSACTION_DESK) : null
                        }}>
                            <ItemWrapper style={{ padding: 16 }}>
                                <ItemWrapper>
                                    <ImageView tintColor={colors.black} source={item.image} />
                                    <TextView>{item.label}</TextView>
                                </ItemWrapper>
                                <BadgeView>
                                    <TextView>{item.count}</TextView>
                                </BadgeView>
                            </ItemWrapper>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(Notifications)

type TextProps = {
    color?: number
}

const Divider = styled.View`
    height:1px;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const BadgeView = styled.View`
    height:30px;
    width:30px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    background-color:#00D8FF;
`;

const TextView = styled.Text<TextProps>`
    font-size:16px;
    font-weight:500;
    color:${({ color }: any) => color};
`;

const ImageView = styled.Image`
    height:22px;
    width:22px;
    margin-right:16px;
    resize-mode:contain;
`;

const ItemWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:3px;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;