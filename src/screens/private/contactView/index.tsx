import React, { useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { AddIcon, arrowDownIcon, editIcon, messageIcon, rocketRoundIcon, sendIcon, usersRoundIcon, waveIcon } from "../../../utils/assets";
import ClientCard from "../../../components/ClientCard";
import { FlatList, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useActions } from "../../../hooks/useActions";

const ContactView = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { colors } = useTheme()
    const {
        openModal,
    } = useActions();
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    return (
        <MainWrapper >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopWrapper>
                    <ImageWrapper>
                        <ImageView height={34} width={34} marginLeft={0} source={editIcon} />
                        <ImageView height={24} width={24} marginLeft={8} source={sendIcon} />
                    </ImageWrapper>
                </TopWrapper>

                <ClientCardWrapper>
                    <ClientCard></ClientCard>
                </ClientCardWrapper>

                <HorizontalText justifyContent='flex-start' alignItems="flex-start">
                    <TextView fontSize={14} color={colors.black} fontWeight={700} marginTop={25}>Ph:</TextView>
                    <TextView fontSize={14} color={colors.black} fontWeight={500} marginTop={25}> (305) 954-5610</TextView>
                </HorizontalText>

                <HorizontalText justifyContent='flex-start' alignItems="flex-start">
                    <TextView fontSize={14} color={colors.black} fontWeight={700} marginTop={10}>Email:</TextView>
                    <TextView fontSize={14} color={colors.black} fontWeight={500} marginTop={10}> jkent@smallville.com</TextView>
                </HorizontalText>

                <HorizontalText justifyContent='flex-start' alignItems="flex-start">
                    <TextView fontSize={14} color={colors.black} fontWeight={700} marginTop={10}>Address:</TextView>
                    <TextView fontSize={14} color={colors.black} fontWeight={500} marginTop={10}> 123 Main Street | Smallville, KS 46532</TextView>
                </HorizontalText>
                <HorizontalText justifyContent='flex-start' alignItems="flex-start">
                    <TextView fontSize={14} color={colors.black} fontWeight={700} marginTop={20}>Notes:</TextView>
                </HorizontalText>

                <NoteView>
                    <TextInput
                        placeholder="Notes">

                    </TextInput>
                </NoteView>

                <Divider />

                <HorizontalText justifyContent='center' alignItems="center">
                    <TextView fontSize={24} color={colors.black} fontWeight={700} marginTop={0}>Transactions</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={AddIcon} />
                </HorizontalText>

                <FlatList
                    data={[1, 1, 1, 1, 1]}
                    renderItem={() => {
                        return (
                            <HorizontalText justifyContent='center' alignItems="center">
                                <TextView fontSize={12} color={colors.black} fontWeight={300} marginTop={10}>ID: 241335</TextView>
                                <TextView style={{ textDecorationLine: "underline" }} fontSize={12} color={colors.primary} fontWeight={300} marginTop={10}>295 Market St. Miami, FL 33169</TextView>

                            </HorizontalText>
                        )
                    }}>
                </FlatList>

                <Divider />
                <HorizontalText justifyContent='center' alignItems="center">
                    <TextView fontSize={24} color={colors.black} fontWeight={700} marginTop={0}>Dispositions & Activities</TextView>
                </HorizontalText>

                <HorizontalText style={{ marginTop: 10, marginBottom: -16 }} justifyContent='space-between' alignItems="flex-start">
                    <TextView fontSize={10} color={colors.black} fontWeight={700} marginTop={0}>Last Activity</TextView>
                    <TextView fontSize={10} color={colors.black} fontWeight={300} marginTop={0}>Scheduled a showing for 8-30-2023</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={null} />
                </HorizontalText>
                <Divider />
                <HorizontalText style={{ marginTop: -5 }} justifyContent='space-between' alignItems="flex-start">
                    <TextView fontSize={10} color={colors.black} fontWeight={700} marginTop={0}>Current Disposition</TextView>
                    <TextView fontSize={10} color={colors.black} fontWeight={300} marginTop={0}>n/a</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={arrowDownIcon} />

                </HorizontalText>
                <Divider style={{ marginTop: 8 }} />

                <HorizontalText style={{ marginTop: -5 }} justifyContent='space-between' alignItems="flex-start">
                    <TextView fontSize={10} color={colors.black} fontWeight={700} marginTop={0}>Current Disposition</TextView>
                    <TextView fontSize={10} color={colors.black} fontWeight={300} marginTop={0}>n/a</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={arrowDownIcon} />

                </HorizontalText>
                <Divider style={{ marginTop: 8 }} />

                <HorizontalText style={{ marginTop: -5 }} justifyContent='space-between' alignItems="flex-start">
                    <TextView fontSize={10} color={colors.black} fontWeight={700} marginTop={0}>Current Disposition</TextView>
                    <TextView fontSize={10} color={colors.black} fontWeight={300} marginTop={0}>n/a</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={arrowDownIcon} />

                </HorizontalText>
                <Divider style={{ marginTop: 8 }} />
                <HorizontalText justifyContent='center' alignItems="center">
                    <TextView fontSize={24} color={colors.black} fontWeight={700} marginTop={0}>Tags</TextView>
                    <ImageView height={16} width={16} marginLeft={10} source={AddIcon} />
                </HorizontalText>

                <TabWrapeer>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,].map(() => {
                            return (
                                <TagView>
                                    Tags
                                </TagView>
                            )
                        })
                    }
                </TabWrapeer>

                <TouchableOpacity onPress={() => {
                    openModal(
                        'ActivityLogSheet',
                        {
                            height: '80%',
                        },
                    )
                }}>
                    <Card>
                        <TextView1 fontSize={15} color={colors.primary} fontWeight={700} marginTop={0}>Activity Log</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={waveIcon} />
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    openModal(
                        'ActivitySummarySheet',
                        {
                            height: '80%',
                        },
                    )
                }}>
                    <Card>
                        <TextView1 fontSize={15} color={colors.primary} fontWeight={700} marginTop={0}>Interested
                            Parties</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={usersRoundIcon} />
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    openModal(
                        'InterestedPartiesSheet',
                        {
                            height: '80%',
                        },
                    )
                }}>
                    <Card>
                        <TextView1 fontSize={15} color={colors.primary} fontWeight={700} marginTop={0}>Start
                            Transaction</TextView1>
                        <ImageView1 height={40} width={40} marginLeft={10} source={rocketRoundIcon} />
                    </Card>
                </TouchableOpacity>

                <BottomView>
                    <ImageView height={60} width={60} source={messageIcon} marginLeft={0} />
                </BottomView>
            </ScrollView>

        </MainWrapper>
    )
}

export default withTheme(ContactView)

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

type TextProps = {
    fontSize: number;
    color: string;
    marginTop: number;
    fontWeight?: number;
}

type HorizontalTextProps = {
    justifyContent: string;
    alignItems: string;
}

const BottomView = styled.View`
    justify-content:flex-end;
    align-items:flex-end;
`;
const Card = styled.View`
    height:120px;
    width:120px;
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

const TabWrapeer = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
`;

const TagView = styled.Text`
    border-radius:15px;
    align-self:center;
    margin:8px;
    padding:5px;
    align-items:center;
    justify-content:center;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.primary};
    `;

const TextView1 = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;

const TextView = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;
const Divider = styled.View`
    height:1px;
    margin-top:30px;
    margin-bottom:10px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const NoteView = styled.View`
    height:100px;
    padding:8px;
    margin-left:16px;
    margin-right:16px;
    border-radius:8px;
    border-width:1px;
    margin-top:10px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const HorizontalText = styled.View<HorizontalTextProps>`
    flex-direction:row;
    margin-left:16px;
    margin-right:16px;
    justify-content:${({ justifyContent }: any) => justifyContent};
    align-items:${({ alignItems }: any) => alignItems};
`;

const ClientCardWrapper = styled.View`
    margin-left:-15px;
    margin-right:-15px;
`;

const ImageView1 = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    position:absolute;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    top:0;
    right:0;
`;

const ImageView = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    position:relative;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
`;

const ImageWrapper = styled.View`
    flex-direction:row;
    align-items:center;
`;

const TopWrapper = styled.View`
    flex-direction:row;
    justify-content:flex-end;
    margin-left:16px;
    margin-right:16px;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;