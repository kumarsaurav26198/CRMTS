import React from "react";
import styled, { useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { eyeglassIcon, telephoneIcon } from "../../utils/assets";

const ActivitySummarySheet = () => {
    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <HeaderWrapper>
                <TextView textAlign="" width="" fontSize={20} color={colors.black} fontWeight={500}>Activity Summary</TextView>
            </HeaderWrapper>

            <ListView>
                <TextView textAlign="" width="" fontSize={14} color={colors.black} fontWeight={500}>Type</TextView>
                <TextView textAlign="" width="" fontSize={14} color={colors.black} fontWeight={500}>Details</TextView>
                <TextView textAlign="center" width="" fontSize={14} color={colors.black} fontWeight={500}>Date & Time</TextView>
            </ListView>

            <ListViewItem>
                <FirstView width="33%">
                    <ImageView height={16} width={16} marginLeft={5} source={telephoneIcon}></ImageView>
                    <TextView style={{ marginLeft: 16 }} numberOfLines={1} textAlign="center" width="" fontSize={10} color={colors.black} fontWeight={300}>Incoming phone call </TextView>
                </FirstView>
                <FirstView width="33%">
                    <TextView numberOfLines={1} textAlign="flex-end" width="" fontSize={10} color={colors.black} fontWeight={300}>(305) 434-0570</TextView>
                </FirstView>
                <FirstView width="33%">
                    <TextView numberOfLines={1} textAlign='flex-end' width="" fontSize={10} color={colors.black} fontWeight={300}>12:45 PM</TextView>
                </FirstView>
            </ListViewItem>

            <BottomView>
                <TextView numberOfLines={1} textAlign="flex-start" width="" fontSize={12} color={colors.black} fontWeight={300}>Results</TextView>
                <BorderView>
                    <TextWrapper>
                        <TextView numberOfLines={1} textAlign='flex-end' width="" fontSize={12} color={colors.black} fontWeight={500}>John Smith: </TextView>
                        <TextView style={{ flexWrap: 'wrap', flex: 1 }} textAlign='' width="" fontSize={12} color={colors.black} fontWeight={400}> “I think we should move forward with the offer.”</TextView>
                    </TextWrapper>
                    <TextWrapper>
                        <TextView numberOfLines={1} textAlign='flex-end' width="" fontSize={12} color={colors.black} fontWeight={500}>Jessica Kent: </TextView>
                        <TextView style={{ flexWrap: 'wrap', flex: 1 }} textAlign='' width="" fontSize={12} color={colors.black} fontWeight={400}> “I agree, let’s do it.”</TextView>
                    </TextWrapper>
                    <TextWrapper>
                        <TextView numberOfLines={1} textAlign='flex-end' width="" fontSize={12} color={colors.black} fontWeight={500}>John Smith : </TextView>
                        <TextView style={{ flexWrap: 'wrap', flex: 1 }} textAlign='' width="" fontSize={12} color={colors.black} fontWeight={400}> “I will send you the documents in a moment. Please
                            sign and initial them, and they will be sent automatically to the
                            seller for signature.”</TextView>
                    </TextWrapper>
                </BorderView>
            </BottomView>
        </MainWrapperWhite >
    )
}

export default withTheme(ActivitySummarySheet)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    width: string;
    textAlign: string;
}

type FirstViewProps = {
    width: string;
}

type ImageProps = {
    height: number;
    width: number;
    marginLeft: number;
}

const TextWrapper = styled.View`
    flex-direction:row;
    margin-top:8px;
`;

const BorderView = styled.View`
    border-radius:8px;
    border-width:1px;
    border-color:#E0E0E0;
    padding:8px;
    margin-top:16px;
`;

const BottomView = styled.View`
    padding:8px;
    margin-top:25px;
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    resize-mode:contain;
`;

const FirstView = styled.View<FirstViewProps>`
    width:${({ width }: any) => width};
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
`;

const ListViewItem = styled.View`
    flex-direction:row;
    margin-top:16px;
    padding:8px;
    border-radius:16px;
    justify-content:space-between;
    align-items:center;
    background-color:#E0E0E0;
`;

const ListView = styled.View`
    margin-top:20px;
    margin-left:16px;
    margin-right:16px;
    flex-direction:row;
    justify-content:space-between;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    width:${({ width }: any) => width};
    text-align:${({ textAlign }: any) => textAlign};
`;

const HeaderWrapper = styled.View`
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;