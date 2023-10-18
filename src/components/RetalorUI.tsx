import React from "react";
import { styled, withTheme } from "styled-components/native";
import { addUserIcon, chainIcon } from "../utils/assets";
import { TouchableOpacity } from "react-native";
import { useActions } from '../hooks/useActions'


const RetalorUI = () => {

    const { openModal } = useActions();

    return (
        <MainWrapper>
            <VerticleWrapper>
                <TextWrapper fontSize={22}>  </TextWrapper>
                <TextWrapper fontSize={22}>Client</TextWrapper>
                <TouchableOpacity onPress={() => {
                    openModal(
                        'CallsinQueueSheet',
                        {
                            height: '80%'
                        }
                    )
                }}>
                    <ImageWrapper marginBottom={0} marginTop={0} height={24} width={20} source={chainIcon}></ImageWrapper>
                </TouchableOpacity>
            </VerticleWrapper>
            <TouchableOpacity onPress={() => {
                openModal(
                    'AssignaRealtorSheet',
                    {
                        height: '80%',
                    },
                )
            }}>
                <ImageWrapper marginBottom={30} marginTop={30} height={60} width={60} source={addUserIcon}></ImageWrapper>

            </TouchableOpacity>
        </MainWrapper>
    )
}

export default withTheme(RetalorUI)

type TextProps = {
    fontSize: number;
}

type ImageProps = {
    height: number;
    width: number;
    marginTop: number;
    marginBottom: number;
}

const ImageWrapper = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ height }: any) => height}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-bottom:${({ marginBottom }: any) => marginBottom}px;
    resize-mode:contain;
`;

const TextWrapper = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    align-self:center;
    color:${({ theme }: any) => theme.colors.black};
`;

const VerticleWrapper = styled.View`
    flex-direction:row;
    padding:10px;
    width:100%;
    align-items:center;
    justify-content:space-between;
`;


const MainWrapper = styled.View`
    margin:16px;
    border-radius:12px;
    justify-content:center;
    align-items:center;
    padding : 15px;
    background-color:${({ theme }: any) => theme.colors.white};
`;