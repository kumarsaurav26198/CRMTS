import React from "react";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled, useTheme, withTheme } from "styled-components/native";
import { BaseIcon, MessageBlueIcon, NeedleCustom, PhoneGreenIcon, downCircleIcon, mailBlackIcon, tickCircleIcon, updownIcon, vedioGreenIcon } from "../../utils/assets";
import { profileIcon } from "../../assets";
import { FlatList, View } from "react-native";
import Speedmeter from '../Speedmeter';

const AssignaRealtorSheet = () => {

    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <TopWrapper>
                <TextView fontSize={18} >Assign a Realtor</TextView>
            </TopWrapper>

            <HeaderWrapper>
                <LeftWrapper width="40%">
                    <LeftText fontSize={14} width="" textAlign='flex-start'>Geographical Area</LeftText>
                    <ImageView height={16} width={16} marginLeft={5} source={downCircleIcon} />
                </LeftWrapper>
                <LeftWrapper width="40%">
                    <LeftText fontSize={14} width="" textAlign='center'>surf Score</LeftText>
                    <ImageView height={16} width={16} marginLeft={5} source={updownIcon} />
                </LeftWrapper>
                <LeftWrapper width="20%">
                    <LeftText fontSize={14} width="" textAlign='flex-end'>Assign?</LeftText>
                </LeftWrapper>
            </HeaderWrapper>


            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                ItemSeparatorComponent={<View style={{ height: 5 }}></View>}
                renderItem={() => {
                    return (
                        <ListItem>
                            <LeftWrapper width="45%">
                                <ProfileWrapper >
                                    <ProfilePic source={profileIcon} />
                                    <View>
                                        <LeftText numberOfLines={1} fontSize={14} width="70%" textAlign='center'>Janet Levinstein</LeftText>

                                        <SocailMediaWrapper>
                                            <ImageView height={26} width={26} marginLeft={2} source={PhoneGreenIcon} />
                                            <ImageView height={26} width={26} marginLeft={2} source={MessageBlueIcon} />
                                            <ImageView height={26} width={26} marginLeft={2} source={mailBlackIcon} />
                                            <ImageView height={26} width={26} marginLeft={2} source={vedioGreenIcon} />
                                        </SocailMediaWrapper>
                                    </View>

                                </ProfileWrapper>
                            </LeftWrapper>

                            <LeftWrapper width="40%">
                                <View>
                                    <Speedmeter
                                        minValue={0}
                                        defaultValue={0}
                                        allowedDecimals={0}
                                        size={50}
                                        needleImage={NeedleCustom}
                                        maxValue={100}
                                        backgroundColor={'#F2F2F2'}
                                        marginTopLebel={-17}
                                        labelFontSize={8}
                                        labels={[

                                        ]}
                                        value={20}>
                                    </Speedmeter>
                                    <ImageViewBottom source={BaseIcon} />
                                </View>
                            </LeftWrapper>

                            <LeftWrapper width="15%">
                                <ImageView height={26} width={26} marginLeft={5} source={tickCircleIcon} />

                            </LeftWrapper>
                        </ListItem>
                    )
                }}
            >

            </FlatList>
        </MainWrapperWhite>
    )
}

export default withTheme(AssignaRealtorSheet)

type TextViewProps = {
    fontSize?: number;
    width?: string;
    textAlign?: string;
}

type ImageProps = {
    height: number;
    width: number;
    marginLeft: number;
}

type LeftProps = {
    width: string;
}

const ImageViewBottom = styled.Image`
    height:20px;
    width:50px;
    margin-top:-10px;
    justify-content:center;
    resize-mode:contain;
    align-items:center;
`;

const SocailMediaWrapper = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:5px;
`;

const ProfileWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const ProfilePic = styled.Image`
    height:50px;
    width:50px;
    border-radius:25px;
`;

const ListItem = styled.View`
    border-radius:10px;
    flex-direction:row;
    padding:8px;
    background-color:#F2F2F2;
`;

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

const LeftText = styled.Text<TextViewProps>`
    width:${({ width }: any) => width};
    text-align:${({ textAlign }: any) => textAlign};
`;

const HeaderWrapper = styled.View`
    flex-direction:row;
    margin-top:16px;
    margin-bottom:16px;
`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ theme }: any) => theme.colors.black};
    margin-top:10px;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;