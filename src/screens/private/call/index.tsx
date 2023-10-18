import React from "react";
import { styled, useTheme } from "styled-components/native";
import { withTheme } from "styled-components/native";
const Call = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>


        </MainWrapper>
    )
}

export default withTheme(Call);

const MainWrapper = styled.View`
    background-color:#F5F5F5;
    height:100%;
`;