import React from "react";
import { styled, useTheme, withTheme } from "styled-components/native";
import { draftsIcon, inboxIcon, sendHorizontalIcon, trashIcon } from '../utils/assets'
import { FlatList } from "react-native";

const surfMailCustomDrawer = () => {
    const { colors } = useTheme()
    return (
        <MainWrapper>
            <TextView fontSize={16} fontWeight={500} color={colors.black}>
                Email Folders
            </TextView>

            <FlatList
                style={{ marginLeft: -16, marginRight: -16 }}
                data={[{ label: 'Inbox', image: inboxIcon },
                { label: 'Sent', image: sendHorizontalIcon },
                { label: 'Drafts', image: draftsIcon },
                { label: 'Trash', image: trashIcon }]}
                ListHeaderComponent={<Divider />}
                ListHeaderComponentStyle={{ marginTop: 10 }}
                ItemSeparatorComponent={<Divider />}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem >
                            <ImageView marginRight={10} height={20} width={20} source={item.image} />
                            <TextView fontSize={18} fontWeight={400} color={colors.black}>
                                {item.label}
                            </TextView>
                            {index === 0 && <BadgeView style={{ marginTop: -15 }}>
                                <TextView alignSelf="center" fontSize={14} fontWeight={400} color={colors.black}>
                                    5
                                </TextView>
                            </BadgeView>}
                        </ListItem>
                    )
                }}
            >
            </FlatList>
        </MainWrapper>
    )
}

export default withTheme(surfMailCustomDrawer)

type TextViewProps = {
    color: string;
    fontSize: number;
    fontWeight: number;
    alignSelf?: string;
}

type ImageProps = {
    height: number;
    width: number;
    marginRight: number;
}

const Divider = styled.View`
    height:1px;
    margin-top:16px;
    margin-left:-16px;
    margin-right:-16px;
    background-color:${({ theme }: any) => theme.colors.gray
    };
`;

const BadgeView = styled.View`
    height:20px;
    width:20px;
    margin-left:10px;
    justify-content:center;
    align-content:center;
    border-radius:10px;
    background-color:${({ theme }: any) => theme.colors.green};
`;

const ImageView = styled.Image<ImageProps>`
    height:${({ height }: any) => height}px;
    width:${({ width }: any) => width}px;
    resize-mode:contain;
    margin-right:${({ marginRight }: any) => marginRight}px;
`;

const ListItem = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:12px;
    margin-left:16px;
    `;

const TextView = styled.Text<TextViewProps>`
    font-size:${({ fontSize }: any) => fontSize}px;
    font-weight:${({ fontWeight }: any) => fontWeight};
    color:${({ color }: any) => color};
    align-self:${({ alignSelf }: any) => alignSelf};
`;

const MainWrapper = styled.View`
    background-color:white;
    padding:16px;
`;