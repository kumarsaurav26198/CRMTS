import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled, useTheme, withTheme } from "styled-components/native";
import { MultiSelect } from "react-native-element-dropdown";
import { Picker, DatePicker } from 'react-native-wheel-pick';
import { useActions } from "../../hooks/useActions";


const FilterSheet = (props: any) => {
    const ref = useRef()
    const [cities, setCities] = useState([])
    const [bathRoomIndex, setBathRoomIndex] = useState(-1)
    const [bedRoomIndex, setBedRoomIndex] = useState(-1)
    const [minSquareFeet, setMinSquareFeet] = useState(['No Min'])
    const [maxSquareFeet, setMaxSquareFeet] = useState(['No Max'])
    const [maxPriceRange, setMaxPriceRange] = useState(['No Min'])
    const [minPricerange, setMinPricerange] = useState(['No Max'])
    const [selectedMoreFilters, setSelectedMoreFilters] = useState([]);
    const { colors } = useTheme()
    const {
        appFilter,
        closeModal
    } = useActions();
    useEffect(() => {

        props.data?.max_square?.map((item, index) => {
            setMaxSquareFeet(old => [...old, item.data_name])
        })

        props.data?.min_square?.map((item, index) => {
            setMinSquareFeet(old => [...old, item.data_name])
        })

        props.data?.min_price?.map((item, index) => {
            setMinPricerange(old => [...old, item.data_name])
        })

        props?.data?.max_price?.map((item, index) => {
            setMaxPriceRange(old => [...old, item.data_name])
        })

    }, [])

    const renderItem = ({ item }) => {
        const { data_custom_taxonomy, data_customvalue } = item
        const isSelected = selectedMoreFilters.filter((i) => i === data_customvalue).length > 0; // checking if the item is already selected

        return (
            <ListWrapper>
                <TouchableOpacity style={{
                    margin: 5, borderRadius: 20, borderWidth: 1,
                    borderColor: colors.black, padding: 10,
                    backgroundColor: isSelected ? colors.black : colors.white,
                    minWidth: 70,
                    width: '100%',
                }} onPress={async () => {
                    if (isSelected) {
                        setSelectedMoreFilters((prev) => prev.filter((i) => i !== data_customvalue));
                    } else {
                        setSelectedMoreFilters(prev => [...prev, data_customvalue])
                    }

                }}>
                    <TextView style={{ alignSelf: 'center' }} numberOfLines={1} fontSize={18}
                        color={isSelected ? colors.white : colors.black} fontWeight={500}>{item?.data_name}</TextView>

                </TouchableOpacity>
            </ListWrapper>
        )
    }
    return (
        <MainWrapperWhite>
            <TextView fontSize={18} color={colors.black} fontWeight={500}>Choose your city</TextView>
            <MultiSelect
                ref={ref}
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={styles.itemTextStyle}
                search
                data={props?.data?.City}
                visibleSelectedItem
                labelField="data_name"
                valueField="data_customvalue"
                placeholder="Select City"
                searchPlaceholder="Search..."
                value={cities}
                valuestyle={{ color: "red" }}
                onChange={async item => {
                    setCities(item)
                    ref.current.close()
                    // appFilter({ data_custom_taxonomy: 'property_city', data_customvalue: item })
                    // closeModal()
                }}
                selectedStyle={styles.selectedStyle}
            />

            <TextView fontSize={18} marginTop={16} color={colors.black} fontWeight={500}>Bedrooms</TextView>
            <FlatList
                data={props?.data?.bedroom}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={async () => {
                            setBedRoomIndex(index)
                        }}>
                            <BorderItem backgroundColor={bedRoomIndex === index ? colors.black : colors.white}>
                                <TextView fontSize={18} color={bedRoomIndex === index ? colors.white : colors.black} fontWeight={500}>{item?.data_name}</TextView>
                            </BorderItem>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>

            <TextView fontSize={18} marginTop={16} color={colors.black} fontWeight={500}>Bathrooms</TextView>
            <FlatList
                data={props?.data?.bathroom}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={async () => {
                            setBathRoomIndex(index)
                        }}>
                            <BorderItem backgroundColor={bathRoomIndex === index ? colors.black : colors.white}>
                                <TextView fontSize={18} color={bathRoomIndex === index ? colors.white : colors.black} fontWeight={500}>{item?.data_name}</TextView>
                            </BorderItem>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>

            <TextView fontSize={18} marginTop={16} color={colors.black} fontWeight={500}>Square Feet</TextView>
            <HorizontalWrapper>
                <Picker
                    textSize={16}
                    style={{ backgroundColor: 'white', width: '50%', height: 215 }}
                    selectedValue='No Min'
                    pickerData={minSquareFeet ? minSquareFeet : []}
                    onValueChange={value => { console.log(value) }}
                />

                <Picker
                    textSize={16}
                    style={{ backgroundColor: 'white', width: '50%', height: 215 }}
                    selectedValue='No Max'
                    pickerData={maxSquareFeet ? maxSquareFeet : []}
                    onValueChange={value => { console.log(value) }}
                />
            </HorizontalWrapper>

            <TextView fontSize={18} marginTop={16} color={colors.black} fontWeight={500}>Price Range</TextView>
            <HorizontalWrapper>

                <Picker
                    textSize={16}
                    style={{ backgroundColor: 'white', width: '50%', height: 215 }}
                    selectedValue='No Min'
                    pickerData={minPricerange ? minPricerange : []}
                    onValueChange={value => { console.log(value) }}
                />

                <Picker
                    textSize={16}
                    style={{ backgroundColor: 'white', width: '50%', height: 215 }}
                    selectedValue='No Max'
                    pickerData={maxPriceRange ? maxPriceRange : []}
                    onValueChange={value => { console.log(value) }}
                />

            </HorizontalWrapper>


            <HorizontalWrapper>
                <FlatList
                    data={props?.data?.more_filter_data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    numColumns={3}
                >
                </FlatList>
            </HorizontalWrapper>
        </MainWrapperWhite>
    )
}

export default withTheme(FilterSheet)

type TextProps = {
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    marginTop?: number;
}

type BorderProps = {
    backgroundColor?: string;
}

const ListWrapper = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:33.33%;
    padding-horizontal:5px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const BorderItem = styled.View<BorderProps>`
    width:70px;
    height:40px;
    margin-top:8px;
    margin-horizontal:3px;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    border-width:1px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ backgroundColor }: any) => backgroundColor};
`;

const TextView = styled.Text<TextProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const styles = StyleSheet.create({
    selectedStyle: {
        borderRadius: 12,
    },
    itemTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 16,
        color: "gray"
    },
    dropdown: {
        marginTop: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#D9D8D8',
        width: "100%",
        marginBottom: 12
    },
})