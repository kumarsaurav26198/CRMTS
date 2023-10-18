import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { forwardArrowIcon, replyAllArrowIcon, replyArrowIcon, trashIcon } from "../../../utils/assets";
import { profileIcon } from "../../../assets";
import { ScrollView } from "react-native";

const MailView = ({ navigation }) => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TopView>
                <ImageView height={20} width={20} source={replyArrowIcon} />
                <ImageView height={20} width={20} source={replyAllArrowIcon} />
                <ImageView height={20} width={20} source={forwardArrowIcon} />
            </TopView>
            <DeleteView>
                <ImageView height={26} width={26} source={trashIcon} />
            </DeleteView>
            <MailViewWrapper>
                <TextView color={colors.black} fontSize={17} fontWeight={700}>Surf lokal app edits</TextView>
            </MailViewWrapper>

            <ChatWrapper>
                <LeftView>
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
                        To: Daniel Kinney
                    </TextView>
                </MessageWrapper>
            </ChatWrapper>

            <Divider />
            <ScrollView>
                <TextView color={colors.black} fontSize={14} fontWeight={400}>
                    Hi Dan, {'\n'}

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis.

                </TextView>
            </ScrollView>
            <BottomView >
                <TopView>
                    <ImageView height={20} width={20} source={replyArrowIcon} />
                    <ImageView height={20} width={20} source={replyAllArrowIcon} />
                    <ImageView height={20} width={20} source={forwardArrowIcon} />
                </TopView>
            </BottomView>

        </MainWrapper>
    )
}

export default withTheme(MailView)

type ImageProps = {
    height: number;
    width: number;
    marginLeft?: number;
}

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
}

const BottomView = styled.View`
    justify-content:center;
    align-items:center;
    bottom:0;
    margin-bottom:16px;
    right:35%;
    position:absolute;
`;

const Divider = styled.View`
    width:100%;
    margin:16px -16px 16px -16px;
    height:1px;
    background-color:${({ theme }: any) => theme.colors.gray};
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


const LeftView = styled.View`
    width:20%;
    flex-direction:row;
`;

const ChatWrapper = styled.View`
    flex-direction:row;
    align-items:center;
   justify-content:center;
`;

const MailViewWrapper = styled.View`
margin:16px 0px 16px 0px;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight}px;
`;

const DeleteView = styled.View`
    position:absolute;
    right:0;
    margin-top:16px;
`;

const ImageView = styled.Image<ImageProps>`
    resize-mode:contain;
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    margin-horizontal:16px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
`;

const MailActionView = styled.View`
    flex-direction:row;
`;

const TopView = styled.View`
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

const MainWrapper = styled.View`
    background-color:${({ theme }: any) => theme.colors.white};
    height:100%;
    width:100%;
    padding:16px;
`;