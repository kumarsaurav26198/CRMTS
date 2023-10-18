import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from 'react-native'
import { styled, useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from '../../../utils/globalStyles'
import { FilterIcon } from '../../../utils/assets'
import CardSwipeWrapper from "../../../components/CardSwipeWrapper";
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Activity from "../../../components/Activity";
import { useIsFocused } from '@react-navigation/native';
import { navigationRef } from "../../../navigation/RootNavigation";
import Snackbar from "react-native-snackbar";

const Properties = (navigation) => {
    const { colors } = useTheme()
    const [topHeight, setTopHeight] = useState(0)
    const [centerHeight, setCenterHeight] = useState(0)
    const [mainHeight, setMainHeight] = useState(0)
    const [visible, setVisible] = useState(false)
    const isFocused = useIsFocused();
    const [selectedTabs, setSelectedTabs] = useState([]);
    const [sendSelectedData, setSendSelectedData] = useState([]);
    const sendDataToParent = (selectedProps) => { // the callback. Use a better name
        setSendSelectedData(selectedProps)
    };
    const { getFilterloading, getFilterData } = useTypedSelector(
        state => state.getFilterData,
    )
    const { contactsloading, contactListData } = useTypedSelector(
        state => state.contactListData,
    )
    const { getAllPropertiesloading, getAllPPropertiesData } = useTypedSelector(
        state => state.getAllPPropertiesData,
    )

    const { clearFilterloading } = useTypedSelector(
        state => state.clearFilterData,
    )

    const {
        openModal,
        getFilter,
        getAllProperties,
        appFilter,
        getContacts,
    } = useActions();

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 2000)
    }, [])

    useEffect(() => {
        setCenterHeight(mainHeight - (topHeight + 30))
    }, [topHeight, mainHeight])

    useEffect(() => {
        if (isFocused) {
            Promise.all[getFilter(), getAllProperties({ limit: 1 }), getContacts()]
        }
    }, [isFocused])


    useEffect(() => {
        setSelectedTabs([])
    }, [clearFilterloading])



    const renderItem = ({ item, index }) => {
        const { data_custom_taxonomy, data_customvalue } = item
        const isSelected = selectedTabs.filter((i) => i === data_customvalue).length > 0; // checking if the item is already selected

        return (
            <TouchableOpacity onPress={() => {
                if (isSelected) {
                    setSelectedTabs((prev) => prev.filter((i) => i !== data_customvalue));
                } else {
                    setSelectedTabs(prev => [...prev, data_customvalue])
                }
                appFilter({ data_custom_taxonomy: item.data_custom_taxonomy, data_customvalue: item.data_customvalue })

            }}>
                <FilterTabs>
                    <ImageWrapper height={20} width={20} source={{ uri: item?.term_image_url }} />
                    <TextWrapper color={isSelected ? colors.primary : colors.black}>{item?.term_name}</TextWrapper>
                    <Divider backgroundColor={isSelected ? colors.primary : colors.white}></Divider>
                </FilterTabs>
            </TouchableOpacity>
        )
    }

    return (
        <MainView>
            {
                getFilterloading ||
                    getAllPropertiesloading ||
                    clearFilterloading ||
                    contactsloading ? <LoaderView>
                    <Activity />
                </LoaderView > : null
            }
            <MainWrapperWhite onLayout={({ nativeEvent }) => {
                const { x, y, width, height } = nativeEvent.layout
                setMainHeight(height)
            }}>
                <ChildWrapper >
                    <TopWrapper onLayout={({ nativeEvent }) => {
                        const { x, y, width, height } = nativeEvent.layout
                        setTopHeight(height)
                    }}>
                        <FlatList
                            data={getFilterData?.data?.Webinfo}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}>
                        </FlatList>

                        <TabWrapper>
                            <FilterBtn>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (sendSelectedData.length === 0) {
                                            Snackbar.show({
                                                backgroundColor: colors.primary,
                                                text: 'Select properties first',
                                                duration: Snackbar.LENGTH_SHORT,
                                            })
                                        } else {
                                            openModal(
                                                'SendSelectedPropertiesSheet',
                                                {
                                                    height: '80%',
                                                    data: contactListData?.data,
                                                    sendSelectedProps: sendSelectedData
                                                },
                                            )
                                        }

                                    }}>
                                    <TabWrapper style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                                        <TextWrapper numberOfLines={1}>  Send Selected Properties</TextWrapper>
                                    </TabWrapper>
                                </TouchableOpacity>
                            </FilterBtn>

                            <FilterBtn >
                                <TouchableOpacity
                                    onPress={() => {
                                        openModal(
                                            'FilterSheet',
                                            {
                                                height: '80%',
                                                data: getFilterData?.data
                                            },
                                        )
                                    }}>
                                    <TabWrapper style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                                        <TextWrapper style={{ marginLeft: 10 }}>Filter</TextWrapper>
                                    </TabWrapper>
                                </TouchableOpacity>


                            </FilterBtn>
                            <FilterBtn>
                                <TouchableOpacity
                                    onPress={() => {
                                        openModal(
                                            'SendSearchCriteriaSheet',
                                            {
                                                height: '90%',
                                                data: contactListData?.data
                                            },
                                        )
                                    }}>
                                    <TabWrapper style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageWrapper height={12} width={16} source={FilterIcon}></ImageWrapper>
                                        <TextWrapper numberOfLines={1}>  Send Search Criteria</TextWrapper>
                                    </TabWrapper>
                                </TouchableOpacity>

                            </FilterBtn>
                        </TabWrapper>

                    </TopWrapper>

                    {
                        visible && <CardSwipeWrapper
                            navigation={navigationRef}
                            height={centerHeight}
                            data={getAllPPropertiesData.data}
                            swipe_Selected={sendDataToParent}></CardSwipeWrapper>
                    }

                </ChildWrapper>
            </MainWrapperWhite>
        </MainView >
    )
}

export default withTheme(Properties)


type ImageProps = {
    height?: number;
    width?: number;
}

type TextProps = {
    color?: string;
}

type DividerProps = {
    backgroundColor?: string;
}

const Divider = styled.View<DividerProps>`
    width:100%;
    height:1px;
    background-color:${({ backgroundColor }: any) => backgroundColor};
`;

const TabWrapper = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
    `;

const FilterBtn = styled.View`
    flex-direction:row;
    width:33%;
    height:30px;
    padding-horizontal:15px;
    justify-content:space-evenly;
    display:inline;
    align-items:center;
    border-radius:10px;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ theme }: any) => theme.colors.white};
`;

const TextWrapper = styled.Text<TextProps>`
    color: ${({ color }: any) => color};
`;

const ImageWrapper = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
`;

const FilterTabs = styled.View`
    margin:8px;
    padding-horizontal:10px;
    align-items:center;
`;

const ChildWrapper = styled.View`
    justify-content:space-between;
    flex:1;
`;

const LoaderView = styled.View`
    height: 100%;
    width: 100%;
    backgroundColor: rgba(0,0,0,.2);
    position: absolute;
    zIndex: 99;
    left: 0;
    top: 0;
`;

const MainView = styled.View`
    flex:1;
`;