import React, { useEffect } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { documentUpIcon, tickShadowIcon, usersRoundIcon } from "../../../utils/assets";
import { ScrollView } from "react-native";

const DocumentPortalDetail = (props: any) => {
    const prop = props?.route?.params
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TextView>
                {prop?.screenName}
            </TextView>

            <ScrollView showsVerticalScrollIndicator={false}>
                <MainCardView>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                            return (
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
                                    <TextView1 fontSize={15} color={colors.primary} fontWeight={700} marginTop={0}>Interested
                                        Parties</TextView1>
                                    <ImageView1 height={40} width={40} marginLeft={10} source={tickShadowIcon} />
                                </Card>
                            )
                        })
                    }
                </MainCardView>

                <ButtonView>
                    <TextView style={{ fontSize: 16, color: 'white', marginTop: 0 }}>Prepare Documents</TextView>
                    <ImageView height={30} width={30} marginLeft={10} source={documentUpIcon} />
                </ButtonView>
            </ScrollView>

        </MainWrapper>
    )
}

export default withTheme(DocumentPortalDetail)
type ImageViewProps = {
    marginLeft: number;
    height: number;
    width: number
}

type TextProps = {
    fontSize: number;
    color: string;
    marginTop: number;
    fontWeight?: number;
}

const ButtonView = styled.View`
    background-color:${({ theme }: any) => theme.colors.primary};
    padding:10px;
    align-self:center;
    border-radius:22px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-bottom:30px;
`;

const MainCardView = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
`;

const ImageView = styled.Image<ImageViewProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    justify-content:center;
    align-items:center;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
   
`;



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

const TextView = styled.Text`
    font-size:26px;
    align-self:center;
    margin-top:16px;
    color:${({ theme }: any) => theme.colors.black};
`;

const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;