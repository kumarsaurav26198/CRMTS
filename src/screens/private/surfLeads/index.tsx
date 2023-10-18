import React from "react";
import { withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
import { styled } from "styled-components/native";
const surfLeads = () => {
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1, 1, 1, 1]} sreenName='surfLeads'></ContactSurfUI>
        </MainWrapper>
    )
}

export default withTheme(surfLeads)


const MainWrapper = styled.View``;