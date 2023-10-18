import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { phoneincomingIcon } from "../../../../../utils/assets";
import { FlatList } from "react-native";

const surfRecents = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TextView marginLeft={16} marginTop={16} color={colors.black} fontSize={20} fontWeight={500}>Recents</TextView>
            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1]}
                ItemSeparatorComponent={<Divider />}
                renderItem={({ index }) => {
                    return (
                        <ListWrapper>
                            <ListWrapper>
                                <ImageView tintColor={index === 2 ? 'red' : colors.black} height={18} width={18} source={phoneincomingIcon} ></ImageView>
                                <TextView color={index === 2 ? 'red' : colors.black} fontSize={14} fontWeight={500} marginLeft={8}>Robin Wilson</TextView>
                            </ListWrapper>
                            <TextView color={index === 2 ? 'red' : colors.black} fontSize={14} fontWeight={500}>11:59 AM</TextView>
                        </ListWrapper>
                    )
                }}>

            </FlatList>

        </MainWrapper>
    )
}

export default withTheme(surfRecents)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
}

type ImageProps = {
    height: number;
    width: number;
}

const Divider = styled.View`
    width:100%;
    height:1px;
    margin-top:8px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain
`;

const ListWrapper = styled.View`
    justify-content:space-between;
    flex-direction:row;
    margin:8px 8px 0px 8px;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const MainWrapper = styled.View`
    background-color:#F5F5F5;
    height:100%;
`;