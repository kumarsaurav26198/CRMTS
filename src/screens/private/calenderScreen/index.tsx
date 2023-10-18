import React, { useState } from 'react'
import { styled, useTheme, withTheme } from 'styled-components/native'
import { Agenda, DateData } from 'react-native-calendars';
import { Text, TouchableOpacity, } from 'react-native';
import { plusIcon } from '../../../utils/assets'
import { useActions } from '../../../hooks/useActions';

const CalerderScreen = ({ navigation }) => {
    const [items, setItems] = useState({})
    const { colors } = useTheme()
    const { openModal } = useActions();

    const loadItems = (day: DateData) => {
        const timeToString = (time: number) => {
            const date = new Date(time);
            return date.toISOString().split('T')[0];
        }
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }

            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems)
        }, 1000);
    };

    const renderDay = (item) => {
        return (
            <TouchableOpacity>
                <HorizontalWrapper>
                    <VerticleView height={50} backgroundColor={colors.black}></VerticleView>
                    <HorizontalWrapper>
                        <TextView>{item.name}</TextView>
                        <TextView>All Day</TextView>
                    </HorizontalWrapper>
                </HorizontalWrapper>

            </TouchableOpacity>
        )
    }
    return (
        <MainWrapper>
            <Agenda
                style={{ marginBottom: 60 }}
                items={items}
                loadItemsForMonth={loadItems}
                numColumns={2}
                ListHeaderComponent={<Divider />}
                removeClippedSubviews
                theme={{
                    dotColor: colors.primary,
                    agendaKnobColor: colors.primary,
                    selectedDayBackgroundColor: colors.primary,
                    backgroundColor: '#ffffff',
                    calendarBackground: colors.white,
                    reservationsBackgroundColor: colors.white,
                }}
                selected={'2023-10-17'}
                renderItem={renderDay}>
            </Agenda>

            <TouchableOpacity onPress={() => {
                openModal('MyAppointmentsSheet', {
                    height: '80%'
                })
            }}>
                <TextWrapper>Appointment List</TextWrapper>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                openModal('NewAppointmentSheet', {
                    height: '80%'
                })
            }}>
                <AddView>
                    <ImageView source={plusIcon}>

                    </ImageView>
                </AddView>
            </TouchableOpacity>
        </MainWrapper>
    )
}

export default withTheme(CalerderScreen)

type VerticleViewProps = {
    backgroundColor?: string;
    height?: number;
}

const Divider = styled.View`
    height:1px;
    bckground-color:${({ theme }: any) => theme.colors.black};
    width:100%;
`;

const TextWrapper = styled.Text`
    font-size:16px;
    color:${({ theme }: any) => theme.colors.primary};
    position:absolute;
    bottom:26;
    left:16;
`;
const TextView = styled.Text`
    margin:5px;
`;

const VerticleView = styled.View<VerticleViewProps>`
    width:3px;
    height:${({ height }: any) => height}px;
    border-radius:5px;
    background-color:${({ backgroundColor }: any) => backgroundColor}

`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    width:100%;
    padding:8px 0px 8px 8px;
    align-items:center;
    justify-content:space-between;
    background-color:${({ theme }: any) => theme.colors.white}
`;
const ImageView = styled.Image`
    height:16px;
    width:16px;
    resize-mode:contain;
`;
const AddView = styled.View`
    height:50px;
    width:50px;
    border-radius:25px;
    position:absolute;
    bottom:16;
    right:16;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }: any) => theme.colors.primary}

`;

const MainWrapper = styled.View`
    height:100%;
    width:100%;
    background-color:${({ theme }: any) => theme.colors.white}
`;


