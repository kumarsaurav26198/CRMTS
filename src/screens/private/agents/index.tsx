import React, { useEffect } from "react";
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Agents = () => {
    useEffect(() => {
    }, [])
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]} sreenName={'Agents'}></ContactSurfUI>
        </MainWrapper >
    )
}

export default withTheme(Agents)

const MainWrapper = styled.View``;