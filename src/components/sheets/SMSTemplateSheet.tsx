import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { withTheme } from "styled-components";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled } from "styled-components/native";
import { arrowDownBorderIcon, arrowUpIcon, smsIcon, tickShadowIcon } from "../../utils/assets";
import { colors } from "react-native-elements";
import { dataCell } from "../../utils/constants";
import Collapsible from 'react-native-collapsible';
import TextField from "../TextField";


const SMSTemplatesSheet = () => {

    const [isCollapsed, setIsCollapsed] = useState(true)
    const [position, setPosition] = useState(-1)
    return (
        <MainWrapperWhite>
            <ImageView height={50} width={50} style={{ position: 'absolute', }} source={arrowUpIcon} />
            <TopWrapper >
                <ImageView height={30} width={30} source={smsIcon} />
                <TextView marginTop={10} fontSize={18}>SMS Templates</TextView>
            </TopWrapper>

            <FlatList
                data={dataCell}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <ItemView>
                                <HorizontalWrapper justifyContent="flex-start">
                                    <ImageView height={30} width={30} source={tickShadowIcon} />
                                    <TextView marginTop={0} marginLeft={10} fontSize={14}>New Saved Search</TextView>
                                </HorizontalWrapper>

                                <TouchableOpacity onPress={() => {
                                    setPosition(index)
                                    setIsCollapsed(!isCollapsed)
                                }}>
                                    <HorizontalWrapper justifyContent="flex-end">
                                        <VerticleLine />
                                        <TextView color={colors.text_gray} marginTop={0} fontSize={14}>Choose a contact  </TextView>
                                        <ImageView height={25} width={26} source={arrowDownBorderIcon} />
                                    </HorizontalWrapper>
                                </TouchableOpacity>

                            </ItemView>
                            {
                                index === position && <Collapsible collapsed={isCollapsed}>
                                    <CollapseView >
                                        <TextView marginTop={10} fontSize={14}>Search</TextView>
                                        <TextField
                                            color={colors.black}
                                            placeholder='Enter name of contact'
                                            placeholderColor='#C1C1C1'
                                            borderColor='#C1C1C1'
                                            borderRadius={18}>

                                        </TextField>

                                        <FlatList
                                            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                                            ItemSeparatorComponent={<Divider />}
                                            renderItem={() => {
                                                return (
                                                    <TouchableOpacity onPress={() => { setIsCollapsed(true) }}>
                                                        <ListItem>
                                                            <TextView color={colors.black} marginTop={10} fontSize={14} fontWeight={300}>Janet Aaronson</TextView>
                                                        </ListItem>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        >

                                        </FlatList>
                                    </CollapseView>
                                </Collapsible>
                            }
                        </View>

                    )
                }}>

            </FlatList >
        </MainWrapperWhite >
    )
}

export default withTheme(SMSTemplatesSheet)

type TextViewProps = {
    fontSize: number;
    marginLeft?: number;
    marginTop?: number;
    color?: number;
}

type ImageProps = {
    height: number;
    width: number;
}

type HorizontalProps = {
    justifyContent: string;
}

const Divider = styled.View`
    height:1px;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.gray};

`;

const ListItem = styled.View`
    padding:5px;
`;

const CollapseView = styled.View`
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    border-color:#F2F2F2;
    padding:10px;
    border-width:1px;
    background-color:${({ theme }: any) => theme.colors.white};
`;
const VerticleLine = styled.View`
    width:1px;
    height:40px;
    margin-right:8px;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const HorizontalWrapper = styled.View<HorizontalProps>`
    flex-direction:row;
    align-items:center;
    justify-content:${({ justifyContent }: any) => justifyContent};
`;

const ItemView = styled.View`
    background-color:${({ theme }: any) => '#F5F5F5'};
    border-radius:8px;
    flex-direction:row;
    margin-top:10px;
    padding:0px 8px;
    justify-content:space-between;
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;