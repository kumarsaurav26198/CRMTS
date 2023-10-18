import React, { useEffect } from "react";
import { styled, withTheme } from "styled-components/native";
import { buildingIcon, docIcon, dollarHomeIcon, formsIcon, rocketMoneyIcon } from "../../../utils/assets";
import { FlatList, TouchableOpacity } from "react-native";
import navigationStrings from "../../../navigation/navigationStrings";
import { navigationRef } from "../../../navigation/RootNavigation";

const data = [
    {
        image: dollarHomeIcon,
        title: 'Buyer’s Agent Packet'
    },
    {
        image: rocketMoneyIcon,
        title: 'Listing Agent Packet'
    },
    {
        image: docIcon,
        title: 'Residential Lease Packet'
    },
    {
        image: buildingIcon,
        title: 'Commercial Lease Packet'
    },
    {
        image: formsIcon,
        title: 'All Florida Realtor Forms'
    }
]

const DocumentPortal = (props: any) => {
    return (
        <MainWrapper>
            {
                props?.from === 'Contacts' ?
                    <TextView style={{ fontSize: 24, marginTop: 10 }}>Start Transaction</TextView> : null

            }
            <FlatList
                data={data}
                ItemSeparatorComponent={<Divider />}
                ListFooterComponent={<Divider />}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            index === 0 ? navigationRef.current.navigate(navigationStrings.DOCUMENT_PORTAL_DETAIL, { screenName: 'Buyer’s Agent Packet' }) :
                                index === 1 ? navigationRef.current.navigate(navigationStrings.DOCUMENT_PORTAL_DETAIL, { screenName: data[1].title }) : null
                        }}>
                            <RenderView>
                                <ImageView source={item.image} />
                                <TextView>{item.title}</TextView>
                            </RenderView>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(DocumentPortal)

const TextView = styled.Text`
    color:black;
    align-items:center;
    align-self:center;
    justify-content:center;
    margin-left:16px;
`;

const ImageView = styled.Image`
    height:40px;
    width:40px;
    resize-mode:contain;
`;

const Divider = styled.View`
    height:1px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const RenderView = styled.View`
    flex-direction:row;
    padding:10px;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;