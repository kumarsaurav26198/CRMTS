import React from "react";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled, useTheme, withTheme } from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { FilterIcon, MenuIcon, arrowUpIcon, blueTagIcon, closeIcon, seacrhIcon, tagIcon, tickRoundIcon } from "../../utils/assets";
import { Platform, TouchableOpacity } from "react-native";

const AddTagSheet = () => {
    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageView height={50} width={50} style={{ position: 'absolute', }} source={arrowUpIcon} />
                <TopWrapper >
                    <ImageView height={30} width={30} source={tagIcon} />
                    <TextView marginTop={10} fontSize={18}>SMS Templates</TextView>
                </TopWrapper>

                <TextView textAlign='center' marginTop={30} fontSize={11}>Start by choosing your contacts</TextView>
                <SelectedTabsBC>
                    {[1, 1, 1].map(() => {
                        return (
                            <BorderView>
                                <TextView textAlign='center' marginTop={0} fontSize={11}>Adam Black</TextView>
                                <ImageView height={10} width={10} source={closeIcon} />
                            </BorderView>
                        )
                    })}

                </SelectedTabsBC>

                <TagView>
                    <BlueTagImage source={blueTagIcon} />
                </TagView>

                <SearchWrapperView style={{ marginTop: -16 }}>
                    <SearchWrapperTextFieldView>
                        <SearchWrapperView>

                            <ImageView tintColor={colors.black} height={16} width={16} marginLeft={10} source={seacrhIcon} />

                            <SearchTextInput style={{ paddingTop: Platform.OS === 'android' && -5, paddingBottom: Platform.OS === 'android' && -5 }} placeholder="Search"></SearchTextInput>

                            <Dashline></Dashline>

                            <TouchableOpacity onPress={() => { }}>
                                <ImageView style={{
                                    transform: [
                                        { scaleX: -1 }
                                    ]
                                }} height={16} width={16} marginLeft={10} source={FilterIcon} tintColor={colors.black} />
                            </TouchableOpacity>
                        </SearchWrapperView>
                    </SearchWrapperTextFieldView>
                </SearchWrapperView>

                <SelectedTabsBC style={{ backgroundColor: colors.white }}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                        return (
                            <BorderView>
                                <TextView textAlign='center' marginTop={0} fontSize={11}>Pickleball</TextView>
                            </BorderView>
                        )
                    })}

                </SelectedTabsBC>

                <TagView>
                    <ImageView height={50} width={50} source={tickRoundIcon} />
                </TagView>
            </ScrollView>
        </MainWrapperWhite>
    )
}

export default withTheme(AddTagSheet)


type ImageProps = {
    height: number;
    width: number;
}

type TextViewProps = {
    fontSize: number;
    marginLeft?: number;
    marginTop?: number;
    color?: number;
    textAlign?: string;
}

const SearchTextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }: any) => theme.colors.text};
    font-size: ${({ theme, fontSize }: any) => theme.fontSize.cardDate}px;
    padding-left: 8px;
`;

const Dashline = styled.View`
    height:35px;
    width:1px;
    margin-top:-5px;
    margin-bottom:-5px;
    margin-left:5px;
    background-color:${({ theme }: any) => theme.colors.gray};
`;

const SearchWrapperTextFieldView = styled.View`
    flex-direction:row;
    width:100%;
    align-items:center;
    border-radius:8px;
    border-width:0.5px;
    border-color:${({ theme }: any) => theme.colors.gray};
    background-color:${({ theme }: any) => theme.colors.white};
`;

const SearchWrapperView = styled.View`
    flex-direction:row; 
    justify-content:center;
    align-items:center;
    width:100%;
    padding:5px;
`;

const TagView = styled.View`
    justify-content:center;
    align-items:center;
`;

const BlueTagImage = styled.Image`
    justify-content:center;
    align-items:center;
    margin-top:-16px;
    height:100px;
    width:45px;
    resize-mode:contain;
`;

const BorderView = styled.View`
    border-radius:16px;
    border-width:1px;
    padding:8px;
    margin:8px;
    align-self:center;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border-color:${({ theme }: any) => theme.colors.black};
`;

const SelectedTabsBC = styled.View`
    background-color:#f2f2f2;
    border-radius:16px;
    width:100%;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:center;
    margin-top:16px;

`;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ color }: any) => color};
    margin-top:${({ marginTop }: any) => marginTop}px;
    margin-left:${({ marginLeft }: any) => marginLeft}px;
    text-align:${({ textAlign }: any) => textAlign}
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;