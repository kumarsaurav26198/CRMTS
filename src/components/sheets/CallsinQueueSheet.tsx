import React from "react";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled, withTheme } from "styled-components/native";
import { phoneincomingIcon } from "../../utils/assets";
import { FlatList, View } from "react-native";

const CallsinQueueSheet = () => {
    return (
        <MainWrapperWhite>
            <TopWrapper>
                <TextView fontSize={18} >Calls in Queue</TextView>
            </TopWrapper>

            <HeadingWrapper>
                <TextView fontSize={14} >Incoming Number</TextView>
                <TextView fontSize={14} >Duration in Queue</TextView>
                <TextView fontSize={14} >Accept?</TextView>
            </HeadingWrapper>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                ItemSeparatorComponent={<View style={{ marginTop: 8 }}></View>}
                renderItem={() => {
                    return (
                        <ListView>
                            <LeftWrapper width="45%">
                                <ImageView height={26} width={26} marginLeft={2} source={phoneincomingIcon} />
                                <TextView fontSize={14} >    (561) 555-4444</TextView>
                            </LeftWrapper>
                            <LeftWrapper width="40%">
                                <TextView fontSize={14} >00:02:14</TextView>

                            </LeftWrapper>

                            <LeftWrapper width="15%">
                                <ImageView height={26} width={26} marginLeft={2} source={phoneincomingIcon} />
                            </LeftWrapper>
                        </ListView>
                    )
                }}>

            </FlatList>


        </MainWrapperWhite>
    )
}

export default withTheme(CallsinQueueSheet)

type TextViewProps = {
    fontSize?: number;
    width?: string;
    textAlign?: string;
}

type LeftProps = {
    width: string;
}

type ImageProps = {
    height: number;
    width: number;
    marginLeft: number;
}

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height};
    width:${({ width }: any) => width};
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    resize-mode:contain;
`;

const LeftWrapper = styled.View<LeftProps>`
    flex-direction:row;
    width:${({ width }: any) => width};
    justify-content:center;
    align-items:center;
`;

const ListView = styled.View`
    border-radius:20px;
    flex-direction:row;
    padding:8px;
    background-color:#F2F2F2;
`;

const HeadingWrapper = styled.View`
    justify-content:space-between;
    flex-direction:row;
    margin-bottom:10px;
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ theme }: any) => theme.colors.black};
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
    margin-bottom:40px;
`;