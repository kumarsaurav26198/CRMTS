import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import { profileIcon } from "../../../assets";
import { MicIcon, addGrayIcon, nochIcon } from "../../../utils/assets";

const MessageDetail = ({ navigation }) => {
    const { colors } = useTheme()

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <HeaderView>
                    <HeadrImageView source={profileIcon}></HeadrImageView>
                    <TextView fontSize={16} color={colors.white}>
                        Robin Wilson
                    </TextView>

                </HeaderView>
            )

        })
    }, [])
    return (
        <MainWrapper>
            <FlatList
                data={[1, 1, 1, 1, 1, 1]}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                renderItem={(item) => {
                    return (
                        <RenderView>
                            <LeftView>
                                <ChatText color={colors.black}>
                                    Great What is the loan status, and what can we expect at closing
                                </ChatText>
                            </LeftView>
                            <ChatWrapper style={{ position: "relative", paddingRight: 10 }}>
                                <RightView>
                                    <ChatText color={colors.white}>
                                        Great What is the loan status, and what can we expect at closing
                                        Great What is the loan status, and what can we expect at closing
                                        Great What is the loan status, and what can we expect at closing
                                        Great What is the loan status, and what can we expect at closing
                                    </ChatText>
                                </RightView>
                                <Image style={{ position: "absolute", zIndex: 9, bottom: -2, right: 2 }} source={nochIcon}></Image>
                            </ChatWrapper>
                        </RenderView>
                    )
                }}>
            </FlatList>
            <SendChatView>
                <TouchableOpacity onPress={() => { }}>
                    <ImageView height={32} source={addGrayIcon} />
                </TouchableOpacity>
                <SendView>
                    <SendTextView>
                        Type a message
                    </SendTextView>

                    <TouchableOpacity onPress={() => { }}>
                        <ImageView height={20} source={MicIcon} />

                    </TouchableOpacity>
                </SendView>
            </SendChatView>
        </MainWrapper>
    )
}



export default withTheme(MessageDetail)

type TextProps = {
    color: string;
    fontSize: number;

}

type ChatTextProps = {
    color: string;
}


type ImageProps = {
    height: number;
}
const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    resize-mode:contain;
    justify-content:center;
    align-items:center;
`;

const SendTextView = styled.Text`
    width:75%;
    height:35px;
    padding-left:16px;
    padding:7px;
`;

const SendView = styled.View`
    flex-direction:row;
    width:80%;
    border-radius:17px;
    justify-content:space-between;
    align-items:center;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const SendChatView = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:16px;
`;

const ChatWrapper = styled.View`
    width:100%;
    justify-content:flex-end;
    align-items:flex-end;
`;

const ChatText = styled.Text<ChatTextProps>`
    font-size:16px;
    color:${({ color }: any) => color};
`;

const RightView = styled.View`
    background-color:#3B82F6;
    width:50%;
    border-top-left-radius:12px;
    border-top-right-radius:12px;
    border-bottom-left-radius:12px;
    padding:10px;
`;

const LeftView = styled.View`
    background-color:${({ theme }: any) => theme.colors.gray};
    width:50%;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
    padding:10px;
`;

const RenderView = styled.View`
    margin-top:10px;
`;

const ListView = styled.View`
    height:350px;
`;

const HeadrImageView = styled.Image`
    height:30px;
    width:30px;
    border-radius:15px;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    margin-bottom:5px;
`;

const HeaderView = styled.View`
    justify-content:center;
    align-items:center;
    height:150px;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
    padding:16px;
`;