import { FlatList } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import { backspaceIcon, dialGreenIcon } from "../../../../../utils/assets";
import React from "react";
import { dialPad } from "../../../../../utils/constants";

const surfKeypad = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <NumberView>

            </NumberView>
            <DialedNumberView>
                <TextView color={colors.black} fontSize={26} fontWeight={700} marginRight={16}>
                    (561) 926-9032
                </TextView>
                <ImageView height={32} width={32} source={backspaceIcon} />
            </DialedNumberView>
            <KeyWrapper>
                <FlatList
                    style={{ marginTop: 5 }}
                    scrollEnabled={false}
                    data={dialPad}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <KeyPadView>
                                {
                                    index === 9 || index === 11 ? null :
                                        <TextView color={colors.black} fontSize={28} fontWeight={700}>{item?.number}</TextView>
                                }

                                {
                                    index != 0 ?
                                        <TextView style={{ marginTop: index === 9 ? 12 : 0 }} color={colors.black} fontSize={index === 9 || index === 11 ? 30 : 10} fontWeight={300}>{item?.alpha}</TextView>
                                        : null
                                }
                            </KeyPadView>
                        )
                    }}>

                </FlatList>
                <KeyPadView>
                    <ImageView height={60} width={60} source={dialGreenIcon} />
                </KeyPadView>
            </KeyWrapper>
        </MainWrapper >
    )
}

export default withTheme(surfKeypad)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
}

type ImageProps = {
    height: number;
    width: number;
}

const KeyPadView = styled.View`
    height:60px;
    width:60px;
    border-width:1px;
    justify-content:center;
    align-items:center;
    border-radius:30px;
    margin:4px 8px 8px 0px;
    padding:4px;
    background-color:${({ theme }: any) => theme.colors.white};
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const KeyWrapper = styled.View`
    width:100%;
    justify-content:center;
    align-items:center;
    margin:8px;
    position:absolute;
    bottom:0;
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
`;

const DialedNumberView = styled.View`
    height:60px;
    border-bottom-width:1px;
    padding-right:16px;
    border-color:gray;
    align-items:center;
    flex-direction:row;
    margin-bottom:5px;
    justify-content:flex-end;
`;

const NumberView = styled.View`
    height:15%;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const MainWrapper = styled.View`
    background-color:#F5F5F5;
    height:100%;
`;