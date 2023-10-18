import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme, withTheme } from "styled-components/native";
import { MainWrapperWhite } from "../../utils/globalStyles";
import { UsersIconIcon, alarmIcon, pencilBorderIcon, plusIcon, uncheckIcon } from "../../utils/assets";
import TextField from "../TextField";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import CustomDatePicker from "../DatePicker";
import { format } from 'date-fns';

const NewAppointmentSheet = () => {
    const { colors } = useTheme()
    const ref = useRef()
    const [cities, setCities] = useState([])
    const [visibleDate, setVisibleDate] = useState<boolean>(false);
    const [calederMode, setCalenderMode] = useState<string>('date');
    const [calType, setCalType] = useState<string>('startDate')
    const [minDate, setMinDate] = useState(new Date())
    const [startDate, setStartDate] = useState(format(
        new Date(),
        'dd/MM/yyyy',
    ));
    const [startTime, setStartTime] = useState(format(
        new Date(),
        'HH:mm',
    ));
    const [endDate, setEndDate] = useState(format(
        new Date(),
        'dd/MM/yyyy',
    ));
    const [endTime, setEndTime] = useState(format(
        new Date(),
        'HH:mm',
    ));

    return (
        <MainWrapperWhite>
            <TextWrapper marginTop={0} color={colors.black} fontSize={22} fontWeight={700}>New Appointment</TextWrapper>
            <HorizontalWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 50 }} height={22} width={22} source={pencilBorderIcon}></ImageView>
                <TextField
                    width={'90%'}
                    accessibilityLabel={'Email'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.darkGray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="email"
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={null}
                />
            </HorizontalWrapper>
            <HorizontalWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 16 }} height={22} width={22} source={alarmIcon}></ImageView>
                <TouchableOpacity onPress={() => {
                    setMinDate(new Date())
                    setCalenderMode('date')
                    setCalType('startDate')
                    setVisibleDate(true)
                }}>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>{startDate}</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setCalenderMode('time')
                    setVisibleDate(true)
                    setCalType('startTime')
                }}>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>{startTime}</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>

                <TextWrapper marginTop={10} color={colors.darkGray} fontSize={10} fontWeight={400}>to</TextWrapper>

                <TouchableOpacity onPress={() => {
                    setCalenderMode('date')
                    setVisibleDate(true)
                    setCalType('endDate')
                }}>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>{endDate}</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCalenderMode('time')
                    setCalType('endTime')
                    setVisibleDate(true)
                }}>
                    <BorderTextView>
                        <TextWrapper marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>{endTime}</TextWrapper>
                    </BorderTextView>
                </TouchableOpacity>
            </HorizontalWrapper>

            <CheckBoxWrapper style={{ marginLeft: 44 }}>
                <ImageView style={{ marginTop: 0 }} height={22} width={22} source={uncheckIcon}></ImageView>
                <TextWrapper style={{ marginLeft: 8, textAlign: 'center', alignSelf: 'center' }} marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>All day event</TextWrapper>
            </CheckBoxWrapper>

            <HorizontalWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 50 }} height={22} width={22} source={alarmIcon}></ImageView>
                <TextField
                    width={'90%'}
                    accessibilityLabel={'Add a location'}
                    accessibilityLabelColor={colors.black}
                    borderColor={colors.darkGray}
                    borderRadius={18}
                    onChangeText={(value: any) => {
                    }}
                    placeholder="email"
                    keyboardType={'address'}
                    autoCapitalize={'none'}
                    error={null}
                />
            </HorizontalWrapper>

            <CheckBoxWrapper>
                <ImageView tintColor={colors.black} style={{ marginTop: 25 }} height={22} width={22} source={UsersIconIcon}></ImageView>
                <VerticleWrapper>
                    <TextWrapper style={{ marginLeft: 0, textAlign: 'center', alignSelf: 'flex-start' }} marginTop={16} color={colors.black} fontSize={14} fontWeight={400}>Add invitees</TextWrapper>
                    <MultiSelect
                        ref={ref}
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={styles.itemTextStyle}
                        placeholderTextColor="red"
                        search
                        value={cities}
                        data={[{ data_name: '1jj', data_customvalue: '1j' }, { data_name: '2', data_customvalue: '2' }, { data_name: '3', data_customvalue: '3' }]}
                        visibleSelectedItem
                        labelField="data_name"
                        valueField="data_customvalue"
                        placeholder="Select City"
                        searchPlaceholder="Search..."
                        valuestyle={{ color: "red" }}
                        onChange={async item => {
                            setCities(item)
                        }}
                        selectedStyle={styles.selectedStyle}
                    />

                </VerticleWrapper>
            </CheckBoxWrapper>

            <TextWrapper style={{ marginLeft: 44, textAlign: 'center', alignSelf: 'flex-start' }} marginTop={16} color={colors.black} fontSize={14} fontWeight={400}>Message for invitees</TextWrapper>
            <BorderView>

            </BorderView>

            <HorizontalWrapper>
                <CheckBoxWrapper style={{ marginLeft: 44 }}>
                    <ImageView style={{ marginTop: 0 }} height={22} width={22} source={uncheckIcon}></ImageView>
                    <TextWrapper style={{ marginLeft: 8, textAlign: 'center', alignSelf: 'center' }} marginTop={0} color={colors.darkGray} fontSize={10} fontWeight={400}>All day event</TextWrapper>
                </CheckBoxWrapper>

                <TouchableOpacity onPress={() => {

                }}>
                    <AddView>
                        <ImageView height={22} width={22} source={plusIcon}>

                        </ImageView>
                    </AddView>
                </TouchableOpacity>
            </HorizontalWrapper>

            <CustomDatePicker
                showDateTimePicker={visibleDate}
                minDate={minDate}
                handlePickerData={(date: any) => {
                    setVisibleDate(false);
                    setMinDate(date)
                    {
                        calType === 'startDate' ? setStartDate(format(
                            new Date(
                                date,
                            ),
                            'dd/MM/yyyy',
                        )) : calType === 'startTime' ? setStartTime(
                            format(
                                new Date(
                                    date,
                                ),
                                'HH:mm',
                            )
                        ) : calType === 'endDate' ? setEndDate(
                            format(
                                new Date(
                                    date,
                                ),
                                'dd/MM/yyyy',
                            )
                        ) : setEndTime(format(
                            new Date(
                                date,
                            ),
                            'HH:mm',
                        ))
                    }
                    // setFieldValue(
                    //     'complainantDOB',
                    //     format(date, 'yyyy-MM-dd') +
                    //     'T00:00:00.000',
                    // );
                }}
                date={
                    ''
                }
                mode={calederMode}
                setDateTimePicker={setVisibleDate}
            />
        </MainWrapperWhite>
    )
}

export default withTheme(NewAppointmentSheet)

type TextProps = {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    marginTop?: number;
}

const AddView = styled.View`
    height:50px;
    width:50px;
    margin:16px;
    border-radius:25px;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }: any) => theme.colors.primary}

`;

const BorderView = styled.View`
    height:100px;
    width:88%;
    border-radius:16px;
    margin-top:8;
    margin-left:44px;
    border-width:1px;
`;

const VerticleWrapper = styled.View`
    width:90%;
    margin-left:16px;
`;

const CheckBoxWrapper = styled.View`
    flex-direction:row;
    margin-top:16px;
`;

const BorderTextView = styled.View`
    border-color:${({ theme }: any) => theme.colors.darkGray};
    padding:8px;
    margin-top:12px;
    border-width:1px;
    border-radius:15px;
    text-center:center;
    color:${({ theme }: any) => theme.colors.gray};
`;

const ImageView = styled.Image`
    height:${({ theme, height }: any) => height}px;
    width:${({ theme, width }: any) => width}px;
    resize-mode:contain;
`;

const HorizontalWrapper = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

const TextWrapper = styled.Text<TextProps>`
    color: ${({ theme, color }: any) => color};
    font-size: ${({ theme, fontSize }: any) => fontSize}px;
    font-weight: ${({ theme, fontWeight }: any) => fontWeight};
    margin-top:${({ theme, marginTop }: any) => marginTop}px;
`;

const styles = StyleSheet.create({
    selectedStyle: {
        borderRadius: 12,
    },
    itemTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 16,
        color: "gray"
    },
    dropdown: {
        marginTop: 8,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 28,
        padding: 12,
        borderWidth: 1,
        borderColor: '#707070',
        width: "100%",
        marginBottom: 12
    },
})