import React from "react";
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";

const SelfSourcedLeads = () => {
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]} sreenName='Self Sourced Leads'></ContactSurfUI>
        </MainWrapper>
    )
}

export default withTheme(SelfSourcedLeads)


const MainWrapper = styled.View`
    width:100%;
    height:100%;
    background-color:white;
`;