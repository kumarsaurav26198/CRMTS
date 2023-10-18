import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';

enum IconPosition {
    left = 'left',
    right = 'right',
}

type PrimaryButtonProps = {
    onPress: Function;
    width?: string;
    btnText: string;
    loading?: boolean;
    height?: number;
    icon?: string;
    isIconLeft?: boolean;
    fontSize?: number;
    style?: object;
    showIcon?: boolean;
    disable?: boolean;
};

const SecondaryButton: React.FC<PrimaryButtonProps> = ({
    onPress,
    btnText,
    width = '100',
    loading = false,
    height = 50,
    icon,
    isIconLeft = true,
    fontSize,
    style,
    showIcon = false,
    disable = false,
}) => {
    return (
        <TouchableOpacity disabled={disable} onPress={() => onPress()}>
            <SecondaryButton__Wrapper flexDirection={isIconLeft ? 'row-reverse' : 'row'} width={width} height={height} style={style}>
                <SecondaryButton__Wrapper__Text fontSize={fontSize}>
                    {loading ? 'Loading...' : btnText}
                </SecondaryButton__Wrapper__Text>
                {
                    showIcon && <ImageWrapperRight>
                        <ImageWrapperRight__Image tintColor={'white'} source={icon} />
                    </ImageWrapperRight>
                }
            </SecondaryButton__Wrapper>
        </TouchableOpacity>
    );
};

// @ts-ignore
export default withTheme(SecondaryButton);

type SecondaryButton__WrapperProps = {
    iconPosition: string;
};

type FontSizeProps = {
    fontSize: number;
};

const ImageWrapperRight = styled.View`
    background-color: ${({ theme }: any) => theme.colors.primary};
    padding: 8px;
    border-radius: 8px;
`;

const ImageWrapperRight__Image = styled.Image`
    height:16px;
    width:16px;
    resize-mode:contain;
`;

const SecondaryButton__Wrapper = styled.View<SecondaryButton__WrapperProps>`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: any) => theme.colors.primary};
    height: ${({ height }: any) => height}px;
    border-radius: 25px;
    padding: 0 6px 0 6px;
    margin-left:auto;
    flex-direction:${({ flexDirection }: any) => flexDirection};
    width:${({ width }: any) => width}px
`;
const SecondaryButton__Wrapper__Text = styled.Text<FontSizeProps>`
    color: ${({ theme }: any) => theme.colors.white};
    font-size: ${({ theme, fontSize }: any) => fontSize}px;
`;
