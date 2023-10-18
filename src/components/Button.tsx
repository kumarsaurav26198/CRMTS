// @ts-ignore
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';

type PrimaryButtonProps = {
    onPress: Function;
    btnText: string;
    loading?: boolean;
    backgroundColor?: string;
    heightBT?: number;
    color?: string;
    borderColor?: string;
    width?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    onPress,
    btnText,
    loading = false,
    backgroundColor,
    borderColor = 'white',
    heightBT,
    color = 'white',
    width,
}) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <PrimaryButton__Wrapper
                borderColor={borderColor}
                backgroundColor={backgroundColor}
                height={heightBT}
                width={width}>
                <PrimaryButton__Wrapper__Text color={color}>
                    {loading ? 'Loading...' : btnText}
                </PrimaryButton__Wrapper__Text>
            </PrimaryButton__Wrapper>
        </TouchableOpacity>
    );
};

// @ts-ignore
export default withTheme(PrimaryButton);

type Props = {
    color: string;
}

type PrimaryProps = {
    borderColor: string
}
const PrimaryButton__Wrapper = styled.View<PrimaryProps>`
  justify-content: center;
  align-items: center;
  border-color:${({ borderColor }: any) => borderColor};
  background-color: ${({ theme, backgroundColor }: any) =>
        backgroundColor ? backgroundColor : theme.colors.greenColor};
  height: ${({ height }: any) => (height ? height : 55)}px;
  border-radius: 26px;
  border-width:1px;
  width: ${({ width }: any) => (width ? width : 180)}px;
`;
const PrimaryButton__Wrapper__Text = styled.Text<Props>`
  color: ${({ theme, color }: any) => color};
  padding: 10px;
`;