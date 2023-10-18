import React, { useEffect } from "react";
import { styled, withTheme } from "styled-components/native";
import ContactSurfUI from "../../../components/ContactSurfUI";
const Retalors = () => {
    useEffect(() => {
    }, [])
    return (
        <MainWrapper>
            <ContactSurfUI data={[1, 1, 1, 1, 1, 1]} sreenName={'Retalors'}></ContactSurfUI>
        </MainWrapper >
    )
}

export default withTheme(Retalors)

const MainWrapper = styled.View``;