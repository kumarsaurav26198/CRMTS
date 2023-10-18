import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import { useActions } from "../../../../hooks/useActions";

const surfCallVoiceMail = ({ navigation }) => {
    const { colors } = useTheme()
    const { openModal } = useActions()

    return (
        <MainWrapper>
            <HorizontalWrapper>
                <TextView color={colors.black} fontSize={20} fontWeight={500}>Contacts</TextView>
                <TouchableOpacity onPress={() => {
                    openModal('GreetingSheet', {
                        height: '80%'
                    })
                }}>
                    <TextView color={colors.primary} fontSize={16} fontWeight={500}>Greeting</TextView>
                </TouchableOpacity>
                <TextView color={colors.primary} fontSize={16} fontWeight={500}>Edit</TextView>
            </HorizontalWrapper>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                ListHeaderComponent={<View></View>}
                ListHeaderComponentStyle={{ marginTop: 16 }}
                ItemSeparatorComponent={() => { return (<Divider />) }}
                renderItem={() => {
                    return (
                        <TouchableOpacity onPress={() => {
                            openModal(
                                'VoiceMailSheet',
                                {
                                    height: '80%'
                                })
                        }}>
                            <ChatWrapper>
                                <MessageWrapper>
                                    <InnerMessage>
                                        <TextView color={colors.black} fontSize={14} fontWeight={500}>
                                            Robin Wilson
                                        </TextView>
                                        <TextView color={colors.black} fontSize={14} fontWeight={300}>
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
                        </TouchableOpacity>
                    )
                }}>

            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(surfCallVoiceMail)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
}


const Divider = styled.View<TextProps>`
    height:1px;
    width:100%;
    margin-top:8px;
    background-color:${({ theme, color }: any) => theme.colors.gray};
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
   padding:8px 8px 0px 8px;
`;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:16px 8px 0px 8px;
    align-content:center;
`;

const MainWrapper = styled.View`
    background-color:#F5F5F5;
    height:100%;
`;