import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { AddIcon, MessageBlueIcon, PhoneGreenIcon, mailBlackIcon, vedioGreenIcon } from "../../utils/assets";
import { FlatList, TouchableOpacity, View } from "react-native";
import navigatioStrings from '../../navigation/navigationStrings'
import { profileIcon } from "../../assets";

const InterestedPartiesSheet = ({ navigation }) => {

    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <HeaderWrapper>
                <TextView textAlign="" width="" fontSize={20} color={colors.black} fontWeight={500}>Interested Parties</TextView>
                <ImageView tintColor={colors.primary} height={22} width={22} marginLeft={10} source={AddIcon}></ImageView>
            </HeaderWrapper>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                ListHeaderComponent={<View></View>}
                ListHeaderComponentStyle={{ marginTop: 16 }}
                renderItem={() => {
                    return (
                        <TouchableOpacity onPress={() => {
                        }}>
                            <ListWapper>
                                <HorizontalView>
                                    <ProfileImageWrapper>
                                        <ProfileImage source={profileIcon} />
                                    </ProfileImageWrapper>
                                    <VerticleWrapper>
                                        <TabText fontSize={15} color={colors.black}>Partner contacts</TabText>
                                        <TabText fontSize={12} color={colors.black}>Partner contacts</TabText>
                                    </VerticleWrapper>
                                </HorizontalView>

                                <SocailMediaWrapper>
                                    <ImageView height={24} width={24} marginLeft={0} source={PhoneGreenIcon}></ImageView>
                                    <ImageView height={24} width={24} marginLeft={8} source={MessageBlueIcon}></ImageView>
                                    <ImageView height={24} width={24} marginLeft={8} source={mailBlackIcon}></ImageView>
                                    <ImageView height={24} width={24} marginLeft={8} source={vedioGreenIcon}></ImageView>
                                </SocailMediaWrapper>
                            </ListWapper>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </MainWrapperWhite>
    )
}

export default withTheme(InterestedPartiesSheet)


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

const SocailMediaWrapper = styled.View`
    flex-direction:row;
    align-items:center;
`;

const TabText = styled.Text<TextProps>`
    color:${({ theme, color }: any) => color};
    align-self:flex-start;
    font-size:${({ theme, fontSize }: any) => fontSize}px;
`;

const VerticleWrapper = styled.View`
    align-items:center;
    justify-content:center;
    margin-left:16px;
`;

const ProfileImage = styled.Image`
    height:50px;
    width:50px;
    border-radius:25px;
`;

const ProfileImageWrapper = styled.View``;

const HorizontalView = styled.View`
    flex-direction:row;
`;

const ListWapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    background-color:#F2F2F2;
    border-radius:8px;
    padding:5px;
    margin:5px;
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