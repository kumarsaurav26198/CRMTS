import React from 'react';
import { Platform, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type CustomDatePickerProps = {
    showDateTimePicker: boolean;
    setDateTimePicker: (value: boolean) => void;
    handlePickerData: (date: any) => void;
    mode: string;
    date?: any,
    maxDate?: any,
    minDate?: any
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    showDateTimePicker = false,
    handlePickerData,
    setDateTimePicker,
    mode = 'date',
    date,
    maxDate = '',
    minDate = ''
}) => {
    const hideTimePicker = () => {
        setDateTimePicker(false);
    };

    const setTimeValue = (date: any) => {
        handlePickerData(date);
        setDateTimePicker(false);
    };

    const getDateObj = (date: string) => {
        let now = new Date(date);
        return Platform.OS === 'ios' ? new Date(now.getTime()) : new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    }

    return (
        <View>
            <DateTimePickerModal
                isVisible={showDateTimePicker}
                style={{ backgroundColor: 'red' }}
                locale='en_GB'
                is24Hour={true}
                mode={mode}
                date={date === '' ? new Date() : getDateObj(date)}
                onConfirm={setTimeValue}
                minimumDate={minDate}
                maxDate={maxDate}
                onCancel={hideTimePicker}
            />
        </View>
    );
};

export default CustomDatePicker;
