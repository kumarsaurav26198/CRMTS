import React, { useEffect } from "react";
import { styled, withTheme } from "styled-components/native";
import DocumentPortal from "../documentPortal";

const ContactCardStartTransaction = (props: any) => {
    return (
        <MainWrapper>
            <DocumentPortal from={props.route.params.from}></DocumentPortal>
        </MainWrapper>
    )
}

export default withTheme(ContactCardStartTransaction)

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:white;
`;