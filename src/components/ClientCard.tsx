import React, { useState } from 'react'
import { withTheme } from 'styled-components';
import styled, { useTheme } from 'styled-components/native';
import { BaseIcon, MessageBlueIcon, MessageIcon, NeedleCustom, PhoneGreenIcon, calenderminusIcon, chainIcon, mailBlackIcon, phoneincomingIcon, vedioGreenIcon, voiceMailIcon } from '../utils/assets';
import Speedmeter from './Speedmeter';
import { profileIcon } from '../assets';
import { Switch } from 'react-native-switch';
import { TouchableOpacity, View } from 'react-native';
import { useActions } from '../hooks/useActions';

type ContactCardProps = {

};
const ClientCard: React.FC<ContactCardProps> = ({

}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { colors } = useTheme()
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    const { openModal } = useActions()
    return (
        <MainWrapper>
            <VerticleWrapper>
                <TextWrapper fontSize={22}>  </TextWrapper>
                <TextWrapper fontSize={22}>Client</TextWrapper>
                <ImageWrapper source={chainIcon}></ImageWrapper>
            </VerticleWrapper>

            <VerticleWrapper>
                <TouchableOpacity onPress={() => {
                    openModal(
                        'ContactHeatMap',
                        {
                            height: '80%',
                        },
                    )
                }}>
                    <View>
                        <Speedmeter
                            minValue={0}
                            defaultValue={0}
                            allowedDecimals={0}
                            size={80}
                            needleImage={NeedleCustom}
                            maxValue={100}
                            backgroundColor={'#FFFFFF'}
                            marginTopLebel={-30}
                            labelFontSize={15}
                            labels={[

                            ]}
                            value={20}>
                        </Speedmeter>
                        <ImageViewBottom source={BaseIcon} />
                    </View>
                </TouchableOpacity>


                <ImageCard>
                    <ImageView source={profileIcon} />
                    <OnlineView></OnlineView>
                </ImageCard>

                <Switch
                    activeText='Loan'
                    inActiveText="Loan      "
                    outerCircleStyle={{ width: 60, height: 35, left: 5 }} // Adjust the width and height for the container
                    switchRightPx={8} // Adjust the switchRightPx to fit the container size
                    backgroundActive="green"
                    backgroundInactive="#d3d3d3"
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    switchLeftPx={5}
                    switchRightPx={5}
                    switchWidthMultiplier={2}
                    value={isEnabled}
                    style={{
                        transform: [{ scaleX: .7 }, { scaleY: 0.7 }], // Set the scale to adjust the thumb size
                    }}
                />
            </VerticleWrapper>
            <TextWrapper fontSize={22}>Client Name</TextWrapper>
            <TextWrapper fontSize={20}>+154 5845 845</TextWrapper>
            <TextWrapper fontSize={16}>Client Id:12151</TextWrapper>

            <SocailMediaWrapper>
                <ImageView1 height={26} width={26} marginLeft={0} source={PhoneGreenIcon} />
                <ImageView1 height={26} width={26} marginLeft={8} source={MessageBlueIcon} />
                <ImageView1 height={26} width={26} marginLeft={8} source={mailBlackIcon} />
                <ImageView1 height={26} width={26} marginLeft={8} source={vedioGreenIcon} />
            </SocailMediaWrapper>
        </MainWrapper>
    );
};

export default withTheme(ClientCard)

type TextProps = {
    fontSize: number;
}

type ImageProps = {
    marginLeft?: number,
    height?: number,
    width?: number,
}

const ImageView1 = styled.Image<ImageProps>`
    margin-left:${({ theme, marginLeft }: any) => marginLeft}px;
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    `;

const SocailMediaWrapper = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-top:10px;
`;

const ImageViewBottom = styled.Image`
    height:20px;
    width:80px;
    justify-content:center;
    resize-mode:contain;
    align-items:center;
`;
const OnlineView = styled.View`
    width:10px;
    height:10px;
    background-color:green;
    border-radius:5px;
    position:absolute;
    left:10px;
    top:10px;
`;

const ImageView = styled.Image`
    height:100px;
    width:100px;
    border-radius:50px;
`;

const ImageCard = styled.View`
    position:relative;
`;

const ImageWrapper = styled.Image`
    height:24px;
    width:24px;
    resize-mode:contain;
`;

const TextWrapper = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    align-self:center;
    margin-top:5px;
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
    padding : 15px;
    background-color:${({ theme }: any) => theme.colors.white};
`;