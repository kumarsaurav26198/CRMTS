import React from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import { styled, withTheme } from "styled-components/native";
import { attachmentIcon } from "../utils/assets";

const ChatUI = () => {
    const { colors } = useTheme()

    return (
        <MainWrapper>
            <TitleWrapper color={colors.black} fontSize={20}>
                Live Chat
            </TitleWrapper>
            <PrimaryView>
                <TitleWrapper color={colors.white} fontSize={20}>
                    Jessica Kent
                </TitleWrapper>
            </PrimaryView>
            <ListView>
                <FlatList
                    data={[1, 1, 1, 1, 1, 1]}
                    nestedScrollEnabled
                    renderItem={(item) => {
                        return (
                            <RenderView>
                                <LeftView>
                                    <ChatText color={colors.black}>
                                        Great What is the loan status, and what can we expect at closing
                                    </ChatText>
                                </LeftView>
                                <ChatWrapper>
                                    <RightView>
                                        <ChatText color={colors.white}>
                                            Great What is the loan status, and what can we expect at closing
                                        </ChatText>
                                    </RightView>
                                </ChatWrapper>
                            </RenderView>
                        )
                    }}>
                </FlatList>
                <SendChatView>
                    <SendView>
                        <SendTextView>
                            Type a message
                        </SendTextView>

                        <ImageView source={attachmentIcon} />
                    </SendView>
                    <ImageView source={attachmentIcon} />
                </SendChatView>
            </ListView>

        </MainWrapper>
    )
}

export default withTheme(ChatUI)

type TextProps = {
    color: string;
    fontSize: number;
}

type ChatTextProps = {
    color: string;
}

const ImageView = styled.Image`
    height:16px;
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
    width:85%;
    border-radius:17px;
    justify-content:space-between;
    align-items:center;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const SendChatView = styled.View`
    margin-top:10px;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

const ListView = styled.View`
    height:350px;
`;

const RenderView = styled.View`
    margin-top:10px;
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
    background-color:${({ theme }: any) => theme.colors.primary};
    width:50%;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    border-bottom-left-radius:8px;
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

const PrimaryView = styled.View`
    padding:10px;
    background-color:${({ theme }: any) => theme.colors.primary};
    margin-left:-16px;
    margin-right:-16px;
    margin-top:5px;
`;

const TitleWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    align-self:center;
`;

const MainWrapper = styled.View`
    margin:16px;
    border-radius:12px;
    padding : 15px;
    background-color:${({ theme }: any) => theme.colors.white};
`;