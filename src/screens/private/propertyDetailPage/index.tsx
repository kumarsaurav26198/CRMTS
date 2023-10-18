import React, { useEffect, useState } from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { Dimensions, Platform, ScrollView, Text, View } from "react-native";
import { arrowBtnIcon, bathIcon, calenderPropertyIcon, clockIcon, hoasIcon, measuringtapeIcon, newbedIcon, profileIcon, rocketUpIcon, taxDocIcon, taxIcon } from "../../../utils/assets";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LoaderView } from "../../../utils/globalStyles";
import Activity from '../../../components/Activity'
import Swiper from 'react-native-swiper'
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const PropertyDetailPage = (props: any) => {
    const { colors } = useTheme()
    const { ID } = props?.route?.params
    const windowWidth = Dimensions.get('window').width;
    const { getSingleProperty } = useActions()
    const { singlePropertyloading, error, singlePropertyData } = useTypedSelector(
        state => state.getSinglePropertyData,
    );
    const [latLng, setLatLng] = useState({
        latitude: 0.0,
        longitude: 0.0
    })

    useEffect(() => {
        getPropertyDetail()
    }, [])

    const getPropertyDetail = async () => {
        await getSingleProperty({ ID: ID }).then(async (res) => {
            await setLatLng({
                latitude: res?.data?.data?.address?.property_address?.property_latitude,
                longitude: res?.data?.data?.address?.property_address?.property_longitude
            })
        })
    }

    useEffect(() => {
    }, [singlePropertyData])


    return (
        <MainView>
            {
                singlePropertyloading ? <LoaderView>
                    <Activity />
                </LoaderView > :
                    <MainWrapper>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <HorizontalWrapper>
                                <ImageBtnWrapper>
                                    <ImageWrapperTab height={12} width={12} source={clockIcon}></ImageWrapperTab>
                                    <TextWrapper alignSelf={'center'} fontSize={12} color={colors.white} fontWeight={400}>  ShowingTime</TextWrapper>
                                </ImageBtnWrapper>

                                <ImageBtnWrapper>
                                    <ImageWrapperTab height={12} width={12} source={taxIcon}></ImageWrapperTab>
                                    <TextWrapper alignSelf={'center'} fontSize={12} color={colors.white} fontWeight={400}>  Tax History</TextWrapper>
                                </ImageBtnWrapper>

                                <ImageBtnWrapper>
                                    <ImageWrapperTab tintColor={colors.white} height={12} width={12} source={rocketUpIcon}></ImageWrapperTab>
                                    <TextWrapper alignSelf={'center'} fontSize={12} color={colors.white} fontWeight={400}>  Start Transaction</TextWrapper>
                                </ImageBtnWrapper>
                            </HorizontalWrapper>
                            <View style={{ height: 280 }}>
                                <Swiper
                                    height={250}
                                    showsButtons={true}
                                    buttonWrapperStyle={{ height: 270 }}
                                    showsPagination={false}
                                    nextButton={
                                        <ImageWrapperTab tintColor={colors.white} height={28} width={28} source={arrowBtnIcon}></ImageWrapperTab>
                                    }
                                    prevButton={
                                        <ImageWrapperTab style={{ transform: [{ rotate: '180deg' }] }} tintColor={colors.white} height={28} width={28} source={arrowBtnIcon}></ImageWrapperTab>
                                    }
                                    loop={false}>
                                    {
                                        Object.keys(singlePropertyData).length > 0 && singlePropertyData?.data?.property_gallery?.Gallery.map((item) => {
                                            return (
                                                <PropImage width={windowWidth - 16} source={{ uri: item?.guid }}></PropImage>
                                            )
                                        })
                                    }
                                </Swiper>
                            </View>
                            <TextWrapper alignSelf={'center'} color={colors.blue} fontSize={18} fontWeight={800}>
                                {singlePropertyData?.data?.price}
                            </TextWrapper>

                            <TextWrapper style={{ marginTop: 10 }} alignSelf={'center'} color={colors.black} fontSize={16} fontWeight={500}>
                                {singlePropertyData?.data?.title}
                            </TextWrapper>

                            <HorizontalWrapper>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <BottomTabWrapper>
                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={newbedIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.details?.property_details?.bedrooms} Beds
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>

                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={bathIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.details?.property_details?.bathroomsfull} Baths
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>
                                        <ImageWrapperTab tintColor={colors.black} height={28} width={28} source={measuringtapeIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.details?.property_details?.property_size} sq ft
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>

                                        <ImageWrapperTab height={28} width={28} source={hoasIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.hoa_fee}
                                        </TextWrapper>
                                    </BottomTabWrapper>

                                    <BottomTabWrapper>
                                        <ImageWrapperTab height={28} width={28} source={taxDocIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.details?.property_details?.taxes}
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                    <BottomTabWrapper>
                                        <ImageWrapperTab height={28} width={28} source={calenderPropertyIcon}></ImageWrapperTab>
                                        <TextWrapper alignSelf={'center'} color={colors.black} fontSize={14} fontWeight={400}>
                                            {singlePropertyData?.data?.details?.property_details?.yearbuilt}
                                        </TextWrapper>
                                    </BottomTabWrapper>
                                </ScrollView>

                            </HorizontalWrapper>
                            <ListView>
                                <TextWrapper alignSelf={'flex-start'} color={colors.black} fontSize={20} fontWeight={700}>
                                    Showing Instructions
                                </TextWrapper>
                                <TextWrapper alignSelf={'flex-start'} color={colors.black} fontSize={14} fontWeight={400}>
                                    Schedule Online; Security Gate; See Brokers Remarks; The
                                    Property is vacant
                                </TextWrapper>
                            </ListView>
                            <MapWrapper>
                                <MapView
                                    provider={PROVIDER_DEFAULT}
                                    mapType={"standard"}
                                    followsUserLocation
                                    rotateEnabled
                                    showsCompass
                                    showsMyLocationButton
                                    showsUserLocation
                                    zoomEnabled={true}
                                    style={{
                                        height: 250,
                                        width: "100%",
                                        borderRadius: 20
                                    }}
                                    region={{
                                        latitude: parseFloat(latLng?.latitude),
                                        longitude: parseFloat(latLng?.longitude),
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: parseFloat(latLng?.latitude),
                                            longitude: parseFloat(latLng?.longitude),
                                        }}
                                    />
                                </MapView>
                            </MapWrapper>
                        </ScrollView>
                    </MainWrapper>
            }
        </MainView>
    )
}


export default withTheme(PropertyDetailPage)

type ImageProps = {
    height?: number;
    width?: number;
}

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    alignSelf?: string
}

type PropImageProps = {
    width: number;
}

const MapWrapper = styled.View`
    border-radius:16px;
    margin-left:16px;
    margin-right:16px;
    margin-bottom:50px;
`;
const ListView = styled.View`
    padding:8px;
`

const BottomTabWrapper = styled.View`
    justify-content:center;
    align-items:center;
    margin-horizontal:20px;
`;

const BottomWrapper = styled.View`
    background-color:white;
    align-items:center;
    padding:10px;
`;


const PropImage = styled.Image<PropImageProps>`
    height:250px;
    width:${({ width }: any) => width}px;
    margin:8px;
    border-radius:8px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    padding:8px;
    justify-content:space-between;
`;

const TextWrapper = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    align-self:${({ alignSelf }: any) => alignSelf};
`;

const ImageWrapperTab = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
`;

const ImageBtnWrapper = styled.View`
    flex-direction:row;
    background-color:${({ theme }: any) => theme.colors.primary};
    height:30px;
    padding:8px;
    justify-content:center;
    align-items:center;
    border-radius:15px;
`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white};
`;

const MainView = styled.View`
flex:1;
`;