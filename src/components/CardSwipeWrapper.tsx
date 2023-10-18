// @ts-ignore
import React, { useEffect, useState } from 'react';
import { useTheme, withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';
import Swiper from 'react-native-deck-swiper'
import { BrushIcon, UndoIcon, bathIcon, hoasIcon, measuringtapeIcon, newbedIcon } from '../utils/assets';
import { useActions } from '../hooks/useActions';
import { Platform, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import navigationStrings from '../navigation/navigationStrings';
import dynamicLinks from '@react-native-firebase/dynamic-links';

type CardSwipeProps = {
    height: number,
    data: any,
    navigation: any,
    swipe_Selected: any,
};
const CardSwiperWrapper: React.FC<CardSwipeProps> = ({
    height,
    data = [],
    navigation,
    swipe_Selected = [],
    ...rest
}) => {
    const { colors } = useTheme()
    const { clearFilter,
        getAllProperties
    } = useActions()
    const [indexs, setIndex] = useState(0)
    const [swipeSelected, setSwipeSelected] = useState([])

    useEffect(() => {
    }, [swipeSelected])

    const generateLink = async (ID: number) => {
        try {
            const link = await dynamicLinks().buildShortLink(
                {
                    link: `https://surflokal.page.link/property?propetyID=${ID}`,
                    domainUriPrefix:
                        Platform.OS === 'android'
                            ? 'https://surflokal.page.link/'
                            : 'https://surflokal.page.link',
                    android: {
                        packageName: 'surf.lokal.crm',
                    },
                    ios: {
                        appStoreId: '123456789',
                        bundleId: 'surf.lokal.crm',
                    },
                    navigation: {
                        forcedRedirectEnabled: true,
                    },
                },
                dynamicLinks.ShortLinkType.SHORT,
            );
            setSwipeSelected([...swipeSelected, link])
            swipe_Selected([...swipeSelected, link])
            return link;
        } catch (error) {
            console.log('Generating Link Error:', error);
        }
    };
    return (
        <MainWrapper height={height}>
            {
                data.length > 0 &&
                <Swiper
                    style={{ height: height }}
                    cardStyle={{ height: height - 40, top: 0, backgroundColor: 'white' }}
                    cardHorizontalMargin={0}
                    backgroundColor='#FFFFFF'
                    cardVerticalMargin={0}
                    onSwipedLeft={(item) => {

                    }}
                    onSwipedRight={(item) => {
                        const newTodo1 = data[item].ID
                        generateLink(data[item].ID)
                    }}
                    onTapCard={(item) => {
                    }}
                    verticalSwipe={false}
                    cards={data}
                    renderCard={(card, index) => {
                        return (
                            <CardWapper>
                                <SwiperFlatList
                                    contentContainerStyle={{ height: '100%', width: '100%' }}
                                    style={{ height: '60%', width: '100%' }}
                                    scrollEnabled
                                    data={card?.featured_image_src}
                                    renderItem={({ item, index }) => (
                                        <ImageArea>
                                            <TouchableOpacity style={{
                                                width: 50,
                                                height: '100%',
                                                position: 'absolute',
                                                zIndex: 999
                                            }}
                                                // disabled={indexs >= 0 ? false : true}
                                                onPress={() => {
                                                    setIndex(indexs - 1)
                                                }}>
                                                <TapArea />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                navigation.current.navigate(navigationStrings.PROPERTY_DETAIL, { ID: card?.ID })
                                            }}>
                                                <ImageWrapper style={{ height: '100%', width: '100%' }} source={{ uri: card?.featured_image_src[indexs]?.guid }}></ImageWrapper>

                                            </TouchableOpacity>
                                            <TouchableOpacity style={{
                                                width: 50,
                                                height: '100%',
                                                position: 'absolute',
                                                zIndex: 999,
                                                right: 0,
                                            }}
                                                // disabled={item?.featured_image_src?.length - 1 === indexs ? true : false}
                                                onPress={() => {
                                                    setIndex(indexs + 1)
                                                }}>
                                                <TapArea style={{ right: 0, position: 'absolute', }} />
                                            </TouchableOpacity>
                                        </ImageArea>

                                    )}
                                />

                                <BottomWrapper>
                                    <TextWrapper color={colors.blue} fontSize={18} fontWeight={800}>
                                        {card?.property_price}
                                    </TextWrapper>

                                    <TextWrapper color={colors.black} fontSize={16} fontWeight={500}>
                                        {card?.title}
                                    </TextWrapper>

                                    <HorizontalWrapper>
                                        <BottomTabWrapper>
                                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={newbedIcon}></ImageWrapperTab>
                                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                                {card?.property_bedrooms} Beds
                                            </TextWrapper>
                                        </BottomTabWrapper>
                                        <BottomTabWrapper>

                                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={bathIcon}></ImageWrapperTab>
                                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                                {card?.bathroomsfull} Baths
                                            </TextWrapper>
                                        </BottomTabWrapper>
                                        <BottomTabWrapper>
                                            <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={measuringtapeIcon}></ImageWrapperTab>
                                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                                {card?.property_size} sq ft
                                            </TextWrapper>
                                        </BottomTabWrapper>
                                        <BottomTabWrapper>

                                            <ImageWrapperTab height={28} width={28} source={hoasIcon}></ImageWrapperTab>
                                            <TextWrapper color={colors.black} fontSize={14} fontWeight={400}>
                                                {card?.taxannualamount}
                                            </TextWrapper>
                                        </BottomTabWrapper>

                                    </HorizontalWrapper>

                                </BottomWrapper>
                            </CardWapper>
                        )
                    }}
                >
                </Swiper >
            }

            <BottomWrapperUndo>
                <TouchableOpacity onPress={() => {
                    setSwipeSelected(swipeSelected.slice(0, -1))
                    swipe_Selected(swipeSelected.slice(0, -1))
                }}>
                    <ImageWrapperTab height={20} width={26} source={UndoIcon}></ImageWrapperTab>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    await clearFilter()
                    getAllProperties({ limit: 1 })
                }}>
                    <ImageWrapperTab height={20} width={20} source={BrushIcon}></ImageWrapperTab>
                </TouchableOpacity>
            </BottomWrapperUndo>
        </MainWrapper >

    )
}


// @ts-ignore
export default withTheme(CardSwiperWrapper);
type ImageProps = {
    height?: number;
    width?: number;
}

type MainWrapperProps = {
    height: number;
}

type TextProps = {
    fontSize: number;
    color: string;
    fontWeight: number;
}

const TapArea = styled.View`
    width:50px;
    height:100%;
    position:absolute;
    z-index:999;
`;

const ImageArea = styled.View`
    position:relative;
    height:100%;
    width:100%;
    z-index:-999;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

const BottomWrapperUndo = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
    width:100%;
    bottom:0;
    position:absolute;
`;

const ImageWrapperTab = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    background-color:white;
    resize-mode:contain;
`;

const BottomTabWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;

const TextWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:center;
`;

const BottomWrapper = styled.View`
    background-color:white;
    justify-content:space-between;
    height:40%;
    align-items:center;
    padding:10px;
`;

const ImageWrapper = styled.Image`
    border-radius:10px;
    resize-mode:cover;
`;

const CardWapper = styled.View`
    height:100%;
    border-radius:10px;
    border-width:2px;
    width:95%;
    border-color:${({ theme }: any) => theme.colors.gray};
`;

const MainWrapper = styled.View<MainWrapperProps>`
    height: ${({ height }: any) => height}px;
    justify-content:space-between;
    position:relative;
`;