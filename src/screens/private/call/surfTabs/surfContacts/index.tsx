import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { AddIcon, MessageBlueIcon, PhoneGreenIcon } from "../../../../../utils/assets";
import { AlphabetList } from "react-native-section-alphabet-list";
import { Text, View } from "react-native";
import { profileIcon } from "../../../../../assets";

const data = [
    { value: 'Lillie-Mai Allen', key: 'lCUTs2' },
    { value: 'Emmanuel Goldstein', key: 'TXdL0c' },
    { value: 'Winston Smith', key: 'zqsiEw' },
    { value: 'William Blazkowicz', key: 'psg2PM' },
    { value: 'Gordon Comstock', key: '1K6I18' },
    { value: 'Philip Ravelston', key: 'NVHSkA' },
    { value: 'Rosemary Waterlow', key: 'SaHqyG' },
    { value: 'Julia Comstock', key: 'iaT1Ex' },
    { value: 'Mihai Maldonado', key: 'OvMd5e' },
    { value: 'Murtaza Molina', key: '25zqAO' },
    { value: 'Peter Petigrew', key: '8cWuu3' },
]


const surfCallContacts = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <HorizontalWrapper>
                <TextView color={colors.black} fontSize={20} fontWeight={500}>Contacts</TextView>
                <ImageView height={22} width={22} source={AddIcon} />
            </HorizontalWrapper>
            <AlphabetList
                style={{ height: '100%', marginTop: 16 }}
                data={data}
                indexLetterStyle={{
                    color: 'black',
                    fontSize: 13,
                }}
                stickyHeaderHiddenOnScroll={false}
                renderCustomItem={(item) => (
                    <ListWrapper>
                        <HorizontalWrapper style={{ marginRight: 30 }}>
                            <HorizontalWrapper>
                                <ImageView height={32} width={32} source={profileIcon} />
                                <TextView marginLeft={8} color={colors.black} fontSize={19} fontWeight={300}>{item.value}</TextView>
                            </HorizontalWrapper>

                            <HorizontalWrapper>
                                <ImageView marginRight={8} height={26} width={26} source={PhoneGreenIcon} />
                                <ImageView height={26} width={26} source={MessageBlueIcon} />
                            </HorizontalWrapper>
                        </HorizontalWrapper>
                        <Divider />
                    </ListWrapper>
                )}
                renderCustomSectionHeader={(section) => { return (null) }}
            />
        </MainWrapper>
    )
}

export default withTheme(surfCallContacts)

type TextProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
}

type ImageProps = {
    height: number;
    width: number;
    marginRight?: number;
}

const Divider = styled.View`
    height:1px;
    margin-top:4px;
    margin-bottom:4px;
    margin-right:26px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
    margin-right:${({ marginRight }: any) => marginRight}px;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;

const ListWrapper = styled.View``;

const TextView = styled.Text<TextProps>`
    color:${({ color }: any) => color};
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    margin-right:${({ marginRight }: any) => marginRight}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    margin-top:${({ marginTop }: any) => marginTop}px;
`;

const MainWrapper = styled.View`
    background-color:#F5F5F5;
    height:100%;
    padding:16px;
`;