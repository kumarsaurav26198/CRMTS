import React from "react";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { styled, useTheme, withTheme } from "styled-components/native";
import TextField from "../TextField";

const AddNewRealtorSheet = () => {
    const { colors } = useTheme()
    return (
        <MainWrapperWhite>
            <TopWrapper>
                <TextView fontSize={18} >Add New Agent</TextView>
            </TopWrapper>

            <TextField
                accessibilityLabel={'Full name'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />

            <TextField
                accessibilityLabel={'Email'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />
            <TextField
                accessibilityLabel={'Mobile Phone'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />
            <TextField
                accessibilityLabel={'Address'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />
            <TextField
                accessibilityLabel={'Brokerage'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />
            <TextField
                accessibilityLabel={'Geographical Coverage Area'}
                accessibilityLabelColor={colors.black}
                borderColor={colors.gray}
                borderRadius={18}
                onChangeText={(value: any) => {
                }}
                placeholder="email"
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                error={null}
            />
        </MainWrapperWhite>
    )
}

export default withTheme(AddNewRealtorSheet)

type TextViewProps = {
    fontSize?: number;
    width?: string;
    textAlign?: string;
}


const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    color:${({ theme }: any) => theme.colors.black};
    margin-top:10px;
`;

const TopWrapper = styled.View`
    justify-content:center;
    align-items:center;
`;