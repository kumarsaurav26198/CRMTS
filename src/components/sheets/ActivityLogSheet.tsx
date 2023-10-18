import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { AddIcon, eyeglassIcon, landlineIcon, messageIcon, telephoneIcon, videoRoundIcon, websiteIcon } from "../../utils/assets";
import { chatTabIcon } from "../../assets";
import { TouchableOpacity, View } from "react-native";

const ActivityLogSheet = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <HeaderWrapper>
                <TextView textAlign="" width="" fontSize={20} color={colors.black} fontWeight={500}>Activity Log</TextView>
                <ImageView tintColor={colors.primary} height={22} width={22} marginLeft={10} source={AddIcon}></ImageView>
            </HeaderWrapper>

            <ListView>
                <TextView textAlign="" width="15%" fontSize={14} color={colors.black} fontWeight={500}>Type</TextView>
                <TextView textAlign="" width="25%" fontSize={14} color={colors.black} fontWeight={500}>Description</TextView>
                <TextView textAlign="center" width="60%" fontSize={14} color={colors.black} fontWeight={500}>Date Created</TextView>
            </ListView>

            <Divider />
            <TouchableOpacity onPress={() => { }}>
                <ListViewItem>
                    <FirstView width="15%">
                        <ImageView height={20} width={20} marginLeft={0} source={telephoneIcon}></ImageView>
                    </FirstView>
                    <FirstView width="40%">
                        <TextDiv >
                            <TextView numberOfLines={1} textAlign="start" width="" fontSize={12} color={colors.black} fontWeight={300}>Virtual Video Tour</TextView>
                        </TextDiv>
                    </FirstView>
                    <FirstView width="45%">
                        <TextView numberOfLines={1} textAlign='flex-start' width="" fontSize={12} color={colors.black} fontWeight={300}>08-30-2023</TextView>
                        <ImageView height={20} width={20} marginLeft={5} source={eyeglassIcon}></ImageView>
                    </FirstView>
                </ListViewItem>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => { }}>
                <ListViewItem>
                    <FirstView width="15%">
                        <ImageView height={20} width={20} marginLeft={0} source={videoRoundIcon}></ImageView>
                    </FirstView>
                    <FirstView width="40%">
                        <TextDiv >
                            <TextView numberOfLines={1} textAlign="start" width="" fontSize={12} color={colors.black} fontWeight={300}>Chat handoff from website</TextView>
                        </TextDiv>
                    </FirstView>
                    <FirstView width="45%">
                        <TextView numberOfLines={1} textAlign='flex-start' width="" fontSize={12} color={colors.black} fontWeight={300}>08-30-2023</TextView>
                        <ImageView height={20} width={20} marginLeft={5} source={eyeglassIcon}></ImageView>

                    </FirstView>
                </ListViewItem>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => { }}>
                <ListViewItem>
                    <FirstView width="15%">
                        <ImageView tintColor={colors.black} height={20} width={20} marginLeft={0} source={chatTabIcon}></ImageView>
                    </FirstView>
                    <FirstView width="40%">
                        <TextDiv >
                            <TextView numberOfLines={1} textAlign="start" width="" fontSize={12} color={colors.black} fontWeight={300}>Left Voicemail</TextView>
                        </TextDiv>
                    </FirstView>
                    <FirstView width="45%">
                        <TextView numberOfLines={1} textAlign='flex-start' width="" fontSize={12} color={colors.black} fontWeight={300}>08-30-2023</TextView>
                        <ImageView height={20} width={20} marginLeft={5} source={eyeglassIcon}></ImageView>
                    </FirstView>
                </ListViewItem>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => { }}>
                <ListViewItem>
                    <FirstView width="15%">
                        <ImageView height={20} width={20} marginLeft={0} source={landlineIcon}></ImageView>
                    </FirstView>
                    <FirstView width="40%">
                        <TextDiv>
                            <TextView numberOfLines={1} textAlign="start" width="" fontSize={12} color={colors.black} fontWeight={300}>Called and scheduled a showing</TextView>
                        </TextDiv>
                    </FirstView>
                    <FirstView width="45%">
                        <TextView numberOfLines={1} textAlign='flex-start' width="" fontSize={12} color={colors.black} fontWeight={300}>08-30-2023</TextView>
                        <ImageView height={20} width={20} marginLeft={5} source={eyeglassIcon}></ImageView>
                    </FirstView>
                </ListViewItem>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => { }}>
                <ListViewItem>
                    <FirstView width="15%">
                        <ImageView height={20} width={20} marginLeft={0} source={websiteIcon}></ImageView>
                    </FirstView>
                    <FirstView width="40%">
                        <TextDiv>
                            <TextView numberOfLines={1} textAlign="start" width="" fontSize={12} color={colors.black} fontWeight={300}>Registered on website </TextView>
                        </TextDiv>
                    </FirstView>
                    <FirstView width="45%">
                        <TextView numberOfLines={1} textAlign='flex-start' width="" fontSize={12} color={colors.black} fontWeight={300}>08-30-2023</TextView>
                        <ImageView height={20} width={20} marginLeft={5} source={eyeglassIcon}></ImageView>

                    </FirstView>
                </ListViewItem>
            </TouchableOpacity>
            <Divider />

        </MainWrapper>
    )
}

export default withTheme(ActivityLogSheet)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    width: string;
    textAlign: string;
}

type ImageProps = {
    height: number;
    width: number;
    marginLeft: number;
}

type FirstViewProps = {
    width: string;
}

const TextDiv = styled.View`
    width:100%;
`;
const Divider = styled.View`
    width:100%;
    height:1px;
    margin-top:10px;
    background-color:${({ theme }: any) => theme.colors.gray};

`;

const FirstView = styled.View<FirstViewProps>`
    width:${({ width }: any) => width};
    flex-direction:row;
    justify-content:center;
`;

const ListViewItem = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const ListView = styled.View`
    margin-top:20px;
    margin-left:16px;
    margin-right:16px;
    flex-direction:row;
    justify-content:space-between;
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    resize-mode:contain;
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

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;