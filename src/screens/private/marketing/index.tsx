import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { styled, useTheme, withTheme } from "styled-components/native";
import { dripCampaignIcon, emailTemplateIcon, tagsIcon, textTemplateIcon } from "../../../utils/assets";
import { useActions } from "../../../hooks/useActions";

const data = [
    { title: 'Send an email template', image: emailTemplateIcon },
    {
        title: 'Send a text template', image: textTemplateIcon
    },
    { title: 'Start a drip campaign', image: dripCampaignIcon },
    { title: 'Add a tag', image: tagsIcon },
]
const Marketing = () => {
    const { colors } = useTheme()
    const { openModal } = useActions()
    return (
        <MainWrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextView1 fontSize={18} fontWeight={500} color={colors.black} marginTop={16}>Quick Actions</TextView1>
                <MainCardView>
                    {
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    {
                                        index === 0 ? openModal('EmailTemplatesSheet', {
                                            height: '80%'
                                        }) : index === 1 ? openModal('SMSTemplatesSheet', {
                                            height: '80%'
                                        }) :
                                            index === 2 ? openModal('DripCampaignsSheet', {
                                                height: '80%'
                                            }) : index === 3 ? openModal('AddTagSheet', {
                                                height: '80%'
                                            }) : null
                                    }
                                }}>
                                    <Card style={{
                                        shadowColor: 'black',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowRadius: 6,
                                        shadowOpacity: 0.26,
                                        elevation: 8,
                                        backgroundColor: 'white',
                                        padding: 20,
                                        borderRadius: 10
                                    }}>
                                        <TextView1 fontSize={15} color={colors.primary} fontWeight={700} marginTop={0}>{item.title}</TextView1>
                                        <ImageView1 height={40} width={40} marginLeft={10} source={item.image} />
                                    </Card>
                                </TouchableOpacity>
                            )
                        })
                    }
                </MainCardView>


            </ScrollView>
        </MainWrapper>
    )
}

export default withTheme(Marketing)

type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

type TextProps = {
    fontSize: number;
    color: string;
    marginTop?: number;
    fontWeight?: number;
}

const ImageView1 = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    position:absolute;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    top:0;
    right:0;
`;

const TextView1 = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;

const Card = styled.View`
    height:140px;
    width:140px;
    align-self:center;
    margin:15px;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    position:relative;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const MainCardView = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;