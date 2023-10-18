import React, { useEffect, useState } from "react";
import { styled, withTheme } from "styled-components/native";
import { Switch } from 'react-native-switch';
import { useTheme } from "styled-components";
import { MessageBlueIcon, PhoneGreenIcon, editIcon, mailBlackIcon, noteIcon, sendIcon, vedioGreenIcon } from "../../../utils/assets";
import { profileIcon } from "../utils/assets";
import { ScrollView, TextInput } from "react-native";

const ContactSurfUI = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { colors } = useTheme()
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };

    return (
        <MainWrapper>
            <ScrollView style={{ marginLeft: 16, marginRight: 16, paddingTop: 16 }} showsVerticalScrollIndicator={false}>
                <TopWrapper>
                    <Switch
                        activeText='READY'
                        inActiveText="READY    "
                        outerCircleStyle={{ width: 60, height: 35, left: 15 }} // Adjust the width and height for the container
                        switchRightPx={8} // Adjust the switchRightPx to fit the container size
                        backgroundActive="green"
                        backgroundInactive="#d3d3d3"
                        inactiveTextStyle={{ fontSize: 10, marginRight: 8 }}
                        activeTextStyle={{ fontSize: 10, marginLeft: 8 }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        switchLeftPx={5}
                        switchRightPx={15}
                        switchWidthMultiplier={2.5}
                        value={isEnabled}
                        style={{
                            transform: [{ scaleX: .7 }, { scaleY: 0.7 }], // Set the scale to adjust the thumb size
                        }}
                    />
                    <ImageWrapper>
                        <ImageView height={34} width={34} marginLeft={0} source={editIcon} />
                        <ImageView height={24} width={24} marginLeft={8} source={sendIcon} />
                    </ImageWrapper>
                </TopWrapper>

                <ProfileWrapper>
                    <OnlineView></OnlineView>
                    <ProfileImage height={120} width={120} source={profileIcon} />
                </ProfileWrapper>

                <TextView fontSize={36} color={colors.black} marginTop={20} fontWeight={300}>
                    Jessica Robbins
                </TextView>

                <TextView fontSize={18} color={colors.black} marginTop={8} fontWeight={300}>
                    (305) 954-5610
                </TextView>

                <SocailMediaWrapper>
                    <ImageView height={34} width={34} marginLeft={0} source={PhoneGreenIcon} />
                    <ImageView height={34} width={34} marginLeft={8} source={MessageBlueIcon} />
                    <ImageView height={34} width={34} marginLeft={8} source={mailBlackIcon} />
                    <ImageView height={34} width={34} marginLeft={8} source={vedioGreenIcon} />
                    <ImageView height={34} width={34} marginLeft={8} source={noteIcon} />
                </SocailMediaWrapper>

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
            </ScrollView>
        </MainWrapper>
    )
}

export default withTheme(ContactSurfUI)

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}
type ImageProps = {
    height: number;
    width: number;
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

const Divider = styled.View`
    height:1px;
    margin-top:30px;
    margin-bottom:70px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const NoteView = styled.View`
    height:100px;
    padding:8px;
    border-radius:8px;
    border-width:1px;
    margin-top:10px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const HorizontalText = styled.View<HorizontalTextProps>`
    flex-direction:row;
    justify-content:${({ justifyContent }: any) => justifyContent};
    align-items:${({ alignItems }: any) => alignItems};
`;

const SocailMediaWrapper = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:16px;
    justify-content:center;
`;

const TextView = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;

const OnlineView = styled.View`
    background-color:green;
    height:14px;
    width:14px;
    border-radius:7px;
    top:30;
    left:-48;
    z-index:9;
    postion:absolute;
`;

const ProfileImage = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
`;

const ProfileWrapper = styled.View`
    justify-content:center;
    align-items:center;
    position:relative;
`;

const ImageView = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
`;

const ImageWrapper = styled.View`
    flex-direction:row;
    align-items:center;
`;

const TopWrapper = styled.View`
    padding-bottom:8px;
    flex-direction:row;
    justify-content:space-between;
`;

const MainWrapper = styled.View`
    border-radius:12px;
    height:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;