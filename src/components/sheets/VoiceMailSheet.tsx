import React from "react";
import { styled, useTheme } from "styled-components/native";
import { withTheme } from "styled-components/native";
import { Slider } from "react-native-elements";
import { callBlueIcon, deleteRedIcon, playIcon, speakerIcon } from "../../utils/assets";


const VoiceMailSheet = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <Divider />
            <ChatWrapper>
                <MessageWrapper>
                    <InnerMessage>
                        <TextView color={colors.black} fontSize={14} fontWeight={500}>
                            Robin Wilson
                        </TextView>
                        <TextView color={colors.black} fontSize={14} fontWeight={500}>
                            10:34 AM
                        </TextView>
                    </InnerMessage>
                    <InnerMessage>
                        <TextView color={colors.black} fontSize={14} fontWeight={300}>
                            Surf Leads
                        </TextView>
                        <TextView color={colors.black} fontSize={14} fontWeight={300}>
                            00:05
                        </TextView>
                    </InnerMessage>
                </MessageWrapper>
            </ChatWrapper>

            <Slider
                minimumValue={0}
                maximumValue={100}
                value={50}
                onValueChange={(value) => console.log(value)}
                trackStyle={{ height: 2, backgroundColor: '#DBDBDB' }}
                thumbStyle={{
                    height: 10,
                    width: 10,
                    backgroundColor: '#DBDBDB',
                }}
            />
            <InnerMessage>
                <TextView marginTop={-10} color={colors.black} fontSize={14} fontWeight={300}>
                    0:00
                </TextView>
                <TextView marginTop={-10} color={colors.black} fontSize={14} fontWeight={300}>
                    0:00
                </TextView>
            </InnerMessage>

            <InnerMessage>
                <ImageView tintColor={colors.primary} height={30} width={30} source={playIcon}></ImageView>
                <InnerMessage>
                    <ImageView height={30} width={30} source={speakerIcon}></ImageView>
                    <ImageView height={30} width={30} source={callBlueIcon}></ImageView>
                    <ImageView height={30} width={30} source={deleteRedIcon}></ImageView>

                </InnerMessage>
            </InnerMessage>

            <TextView color={colors.black} fontSize={17} marginTop={16} fontWeight={500}>
                Transcription
            </TextView>
            <TextView color={colors.black} fontSize={12} marginTop={16} fontWeight={300}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </TextView>
        </MainWrapper>
    )
}

export default withTheme(VoiceMailSheet)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
}

type ImageProps = {
    height: number;
    width: number;
}

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    margin-horizontal:8px;
    margin-top:8px;
    resize-mode:contain;
`;

const Divider = styled.View<TextProps>`
    height:1px;
    width:100%;
    margin-top:8px;
    background-color:${({ theme, color }: any) => theme.colors.gray};
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const InnerMessage = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const MessageWrapper = styled.View`
    flex-direction:column;
    justify-content:space-between;
    width:100%;
`;

const ChatWrapper = styled.View`
    flex-direction:row;
    align-items:center;
   justify-content:center;
   margin-top:8px;
`;


const MainWrapper = styled.View`
    background-color:${({ theme }: any) => theme.colors.white};
    height:100%;
    padding:8px;
`;