import React, { useState } from "react";
import { useTheme, withTheme } from "styled-components/native";
import { styled } from "styled-components/native";
import { Switch } from 'react-native-switch';
import { MessageIcon, backspaceIcon, calenderminusIcon, dialGreenIcon, leftRightIcon, phoneincomingIcon, voiceMailIcon } from "../../../utils/assets";
import ClientCard from "../../../components/ClientCard";
import ChatUI from "../../../components/ChatUI";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import RetalorUI from "../../../components/RetalorUI";
import { useActions } from "../../../hooks/useActions";
import SurfKeypad from "../call/surfTabs/surfKeypad";
import { dialPad } from "../../../utils/constants";

const CallCenter = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { openModal } = useActions()
    const { colors } = useTheme()
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    return (
        <ScrollView>
            <MainWrapper>
                <TopWrapper>
                    <Switch
                        activeText='ON'
                        inActiveText="Off    "
                        outerCircleStyle={{ width: 60, height: 35, left: 5 }} // Adjust the width and height for the container
                        switchRightPx={8} // Adjust the switchRightPx to fit the container size
                        backgroundActive="green"
                        backgroundInactive="#d3d3d3"
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        switchLeftPx={5}
                        switchRightPx={5}
                        switchWidthMultiplier={2}
                        value={isEnabled}
                        style={{
                            transform: [{ scaleX: .7 }, { scaleY: 0.7 }], // Set the scale to adjust the thumb size
                        }}
                    />
                </TopWrapper>

                <HorizontalWrapper>
                    <CardView>
                        <ImageWrapper source={phoneincomingIcon} />
                        <TextView color={colors.black}>0</TextView>
                    </CardView>
                    <CardView>
                        <ImageWrapper source={MessageIcon} />
                        <TextView color={colors.green}>4</TextView>
                    </CardView>
                    <CardView>
                        <ImageWrapper source={voiceMailIcon} />
                        <TextView color={colors.green}>18</TextView>
                    </CardView>
                    <CardView>
                        <ImageWrapper source={calenderminusIcon} />
                        <TextView color={colors.red}>11</TextView>
                    </CardView>
                </HorizontalWrapper>
                <ClientCard></ClientCard>
                <ChatUI></ChatUI>
                <RetalorUI></RetalorUI>
                <KeyWrapper>
                    <DialedNumberView>
                        <TextView color={colors.black} fontSize={26} fontWeight={700} marginRight={0}>
                            Call
                        </TextView>
                        <TextView color={colors.black} fontSize={26} fontWeight={700} marginRight={0}>
                            (561) 926-9032
                        </TextView>
                    </DialedNumberView>
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
                                            <TextView1 color={colors.black} fontSize={28} fontWeight={700}>{item?.number}</TextView1>
                                    }
                                    {
                                        index != 0 ?
                                            <TextView1 style={{ marginTop: index === 9 ? 12 : 0 }} color={colors.black} fontSize={index === 9 || index === 11 ? 12 : 10} fontWeight={300}>{item?.alpha}</TextView1>
                                            : null
                                    }
                                </KeyPadView>
                            )
                        }}>

                    </FlatList>
                    <KeyPadView>

                        <ImageView1 height={60} width={60} source={dialGreenIcon} />
                    </KeyPadView>
                </KeyWrapper>
                <TouchableOpacity onPress={() => {
                    openModal(
                        'AddNewRealtorSheet',//AddNewRealtorSheet
                        {
                            height: '80%'
                        }
                    )
                }}>
                    <ImageView>
                        <ImageWrapper1 marginBottom={30} marginTop={30} height={30} width={60} source={leftRightIcon}></ImageWrapper1>
                    </ImageView>
                </TouchableOpacity>

            </MainWrapper>
        </ScrollView>
    )
}

export default withTheme(CallCenter);

type TextProps = {
    color: string;
}


type ImageProps = {
    height: number;
    width: number;
    marginTop: number;
    marginBottom: number;
}

type ImageProps1 = {
    height: number;
    width: number;
}
type TextProps1 = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
}


const DialedNumberView = styled.View`
    height:60px;
    border-bottom-width:1px;
    padding-right:16px;
    border-color:gray;
    align-items:center;
    margin-bottom:5px;
    justify-content:center;
    width:50%;
`;


const ImageView1 = styled.Image<ImageProps1>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain
`;


const KeyPadView = styled.View`
    height:60px;
    width:60px;
    border-width:1px;
    justify-content:center;
    align-items:center;
    border-radius:30px;
    border-width:2px;
    margin:4px 8px 8px 0px;
    padding:4px;
    background-color:${({ theme }: any) => theme.colors.white};
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const KeyWrapper = styled.View`
    justify-content:center;
    align-items:center;
    margin:16px;
    border-radius:8px;
    background-color:#fff;
`;

const ImageWrapper1 = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-bottom:${({ marginBottom }: any) => marginBottom}px;
    resize-mode:contain;
`;

const ImageView = styled.View`
    justify-content:center;
    align-items:center;
`;


const TextView1 = styled.Text<TextProps1>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:16px;
    margin-top:5px;
    font-weight:600;
`;

const ImageWrapper = styled.Image`
    height:30px;
    width:30px;
    tint-color:black;
    resize-mode:contain;
`;

const CardView = styled.View`
    height:70px;
    width:70px;
    border-radius:10px;
    background-color:white;
    justify-content:center;
    align-items:center;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin:8px;
`;

const TopWrapper = styled.View`
    padding-bottom:8px;
    background-color:${({ theme }: any) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

const MainWrapper = styled.View`
    background-color:${({ theme }: any) => '#F2F2F2'};
`;