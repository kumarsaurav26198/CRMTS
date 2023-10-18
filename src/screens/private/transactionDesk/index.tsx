import React, { useState } from "react";
import { useTheme } from "styled-components";
import { styled, withTheme } from "styled-components/native";
import { AddIcon, FilterIcon, seacrhIcon } from "../../../utils/assets";
import { FlatList, Platform, SafeAreaView, TouchableOpacity } from "react-native";

const TransactionDesk = ({ navigation }) => {
    const [tab, setTab] = useState(0)
    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <SafeAreaView style={{ flex: 1 }}>
                <SearchWrapperView>
                    <SearchWrapperTextFieldView>
                        <ImageView height={16} width={16} marginLeft={0} source={seacrhIcon}></ImageView>
                        <SearchTextInput style={{ paddingTop: Platform.OS === 'android' && -5, paddingBottom: Platform.OS === 'android' && -5 }} placeholder="Search"></SearchTextInput>
                    </SearchWrapperTextFieldView>
                    <FilterView>
                        <ImageView height={18} width={18} marginLeft={0} source={FilterIcon}></ImageView>
                        {
                            <ImageView height={18} width={18} marginLeft={10} source={AddIcon}></ImageView>
                        }

                    </FilterView>
                </SearchWrapperView>

                <TabsWarpper>
                    <TouchableOpacity onPress={() => { setTab(0) }}>
                        <TabView>
                            <TabText fontSize={12} color={tab === 0 ? colors.primary : colors.black}>Current transactions</TabText>
                            <Divider color={tab === 0 ? colors.primary : 'transparent'}></Divider>
                        </TabView>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setTab(1) }}>
                        <TabView>
                            <TabText fontSize={12} color={tab === 1 ? colors.primary : colors.black}>Closed transactions</TabText>
                            <Divider color={tab === 1 ? colors.primary : 'transparent'}></Divider>
                        </TabView>
                    </TouchableOpacity>
                </TabsWarpper>

                <FlatList
                    data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemWrapper backgroundColor={index + 1 % 2 == 0 ? '#F8F8F8' : '#E2E2E2'}>
                                <HorizotalWrapper>
                                    <TabText fontSize={12} color={colors.black}>ID: 6552212 </TabText>
                                    <TabText fontSize={12} color={colors.black}>28874 SE 186th St. Miami, FL 33168</TabText>
                                </HorizotalWrapper>
                                <TabText fontSize={12} color={colors.black}>Rob Wilson</TabText>
                                <TabText fontSize={12} color={colors.black}>(305) 998-0001</TabText>
                                <TabText fontSize={12} color={colors.black}>robwilson@gottaloveit.com</TabText>
                            </ItemWrapper>
                        )
                    }}
                >

                </FlatList>
            </SafeAreaView>
        </MainWrapperWhite>
    )
}

export default withTheme(TransactionDesk)

type ItemProps = {
    backgroundColor: string;
}

type TextProps = {
    color: string,
    fontSize?: number,
}

type ImageProps = {
    marginLeft?: number,
    height?: number,
    width?: number,
}

const HorizotalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const ItemWrapper = styled.View<ItemProps>`
    background-color:${({ theme, color }: any) => color};
    padding:8px;
`;

const Divider = styled.View<TextProps>`
    height:1px;
    width:100%;
    background-color:${({ theme, color }: any) => color};
`;

const TabText = styled.Text<TextProps>`
    color:${({ theme, color }: any) => color};
    align-self:flex-start;
    font-size:${({ theme, fontSize }: any) => fontSize}px;
    margin-top:5px;
`;

const TabView = styled.View`
width:100%;
`;

const TabsWarpper = styled.View`
    justify-content:space-evenly;
    flex-direction:row;
    margin-left:16px;
    margin-right:16px;
    margin-top:16px;
    margin-bottom:16px;
`;

const FilterView = styled.View`
    flex-direction:row;
    width:30%;
    align-items:center;
    justify-content:flex-end;
`;

const SearchTextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }: any) => theme.colors.text};
    font-size: ${({ theme, fontSize }: any) => theme.fontSize.cardDate}px;
    padding-left: 8px;
`;

const ImageView = styled.Image<ImageProps>`
    margin-left:${({ theme, marginLeft }: any) => marginLeft}px;
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    `;

const SearchWrapperTextFieldView = styled.View`
    flex-direction:row;
    width:70%;
    padding:5px;
    align-items:center;
    border-radius:8px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const SearchWrapperView = styled.View`
    flex-direction:row; 
    justify-content:space-between;
    width:100%;
    padding:10px;
`;

const MainWrapperWhite = styled.View`
  background-color: #FFFFFF;
  padding:10px;
  height:100%;
`;