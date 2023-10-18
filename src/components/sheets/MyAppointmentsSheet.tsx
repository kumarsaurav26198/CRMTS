import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { FlatList, Platform } from "react-native";
import { profileIcon, seacrhIcon } from "../../utils/assets";

const MyAppointmentsSheet = () => {
    const { colors } = useTheme()

    return (
        <MainWrapperWhite>
            <TextView fontWeight={500} fontColor={colors.black} fontSize={24} textAlign='center'>
                My Appointments
            </TextView>

            <SearchWrapperTextFieldView>
                <ImageView height={16} width={16} marginLeft={0} source={seacrhIcon}></ImageView>
                <SearchTextInput style={{ paddingTop: Platform.OS === 'android' && -5, paddingBottom: Platform.OS === 'android' && -5 }} placeholder="Search"></SearchTextInput>
            </SearchWrapperTextFieldView>

            <FlatList
                data={[1, 1, 1, 1]}
                ListHeaderComponent={<Divider />}
                ItemSeparatorComponent={<Divider />}
                ListFooterComponent={<Divider />}
                renderItem={() => {
                    return (
                        <HorizontalView>
                            <ProfilePic source={profileIcon} />
                            <VerticleWrapper>
                                <TextView fontWeight={500} color={colors.primary} fontSize={14} textAlign='flex-start'>Meeting with Robin Wilson  at 5346
                                    Main St.</TextView>
                                <TextView fontWeight={400} color={colors.black} fontSize={14} textAlign='flex-start'>Today at 10:34 AM</TextView>
                            </VerticleWrapper>
                        </HorizontalView>
                    )
                }}>

            </FlatList>


        </MainWrapperWhite >
    )
}

export default withTheme(MyAppointmentsSheet)

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    textAlign?: string;
    marginTop?: number;
}

type ImageProps = {
    marginLeft?: number,
    height?: number,
    width?: number,
}

const Divider = styled.View`
    width:100%;
    height:1px;
    margin:8px 0px 8px 0px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const VerticleWrapper = styled.View``;

const ProfilePic = styled.Image`
    width:55px;
    height:55px;
    resize-mode:contain;
    border-radius:27px;
    margin-right:16px;
`;

const HorizontalView = styled.View`
    flex-direction:row;
    align-items:center;
    width:80%;
    margin:0px 16px 0px 0px;
`;

const SearchTextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }: any) => theme.colors.text};
    font-size: ${({ theme, fontSize }: any) => theme.fontSize.cardDate}px;
    padding-left: 8px;
`;

const ImageView = styled.Image<ImageProps>`
    margin-left:${({ theme, marginLeft }: any) => marginLeft}px;
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    `;

const SearchWrapperTextFieldView = styled.View`
    flex-direction:row;
    width:100%;
    padding:5px;
    align-items:center;
    border-width:1px;
    margin-top:16px;
    border-radius:8px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ theme }: any) => theme.colors.white};
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    text-align:${({ textAlign }: any) => textAlign};
    flexShrink:1;
    margin-top:${({ marginTop }: any) => marginTop}px
`;
