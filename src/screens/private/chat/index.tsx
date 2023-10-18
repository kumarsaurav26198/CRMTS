import React from "react";
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import { seacrhIcon } from '../../../utils/assets'
import { profileIcon } from "../../../assets";
import navigationStrings from "../../../navigation/navigationStrings";
const Chat = ({ navigation }) => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TopView>
                <TextView color={colors.black} fontSize={20} fontWeight={700}>
                    Messages
                </TextView>

                <SearchWrapperView>
                    <SearchWrapperTextFieldView>
                        <ImageView height={16} width={16} marginLeft={0} source={seacrhIcon} />
                        <SearchTextInput style={{ paddingTop: Platform.OS === 'android' && -5, paddingBottom: Platform.OS === 'android' && -5 }} placeholder="Search"></SearchTextInput>
                    </SearchWrapperTextFieldView>
                </SearchWrapperView>
            </TopView>
            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                ItemSeparatorComponent={<Divider backgroundColor={colors.gray} />}
                renderItem={() => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.MESSAGE_DETAIL) }}>
                            <ChatWrapper>
                                <LeftView>
                                    <OnlineView backgroundColor={colors.green} />
                                    <ImageView height={40} width={40} marginLeft={0} source={profileIcon} />
                                </LeftView>

                                <MessageWrapper>
                                    <InnerMessage>
                                        <TextView color={colors.black} fontSize={14} fontWeight={500}>
                                            Robin Wilson
                                        </TextView>
                                        <TextView color={colors.black} fontSize={14} fontWeight={700}>
                                            10:34 AM
                                        </TextView>
                                    </InnerMessage>
                                    <TextView color={colors.black} fontSize={14} fontWeight={400}>
                                        I’ll meet you there around 12:00 noon.   I’ll meet you there around 12:00 noon.
                                    </TextView>
                                </MessageWrapper>
                            </ChatWrapper>
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(Chat)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
}

type ImageProps = {
    marginLeft?: number,
    height?: number,
    width?: number,
}

type OnlineWrapper = {
    backgroundColor: string;
}

type DrawerWrapperProps = {
    backgroundColor: string;
};

const Divider = styled.View<DrawerWrapperProps>`
  height: 1px;
  margin-left:-16px;
  margin-right:-16px;
  margin-bottom:5px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const LeftView = styled.View`
    width:20%;
    flex-direction:row;
`;

const InnerMessage = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const MessageWrapper = styled.View`
flex-direction:column;
justify-content:space-between;
width:80%;
`;

const OnlineView = styled.View<OnlineWrapper>`
    height:10px;
    width:10px;
    border-radius:5px;
    margin-right:5px;
    background-color:${({ backgroundColor }: any) => backgroundColor};
`;

const ChatWrapper = styled.View`
    flex-direction:row;
    align-items:center;
   justify-content:center;
   padding:8px;
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
    border-radius:8px;
    border-width:0.5px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ theme }: any) => theme.colors.white};
`;

const SearchWrapperView = styled.View`
    flex-direction:row; 
    justify-content:space-between;
    width:100%;
    padding-top:10px;
`;

const TextView = styled.Text<TextProps>`
    color: ${({ theme, color }: any) => color};
    font-size:${({ theme, fontSize }: any) => fontSize}px;
    font-weight:${({ theme, fontWeight }: any) => fontWeight};
`;

const TopView = styled.View`
    padding:16px;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;