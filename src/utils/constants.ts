
import { Dimensions, Platform } from 'react-native';
import {
    AgentsIcon,
    BlueDocumentIcon,
    CallCenterIcon,
    ContactsIcon,
    FolderIcon,
    MarketingIcon,
    Opportunities,
    PropertiesIcon,
    RetalorsIcon,
    SelfSourcedIcon,
    SurfIconIcon,
    TransactionIcons,
    UsersIconIcon,
    calenderIcon,
    powerOffIcon,
    rocketIcon,
} from './assets';

export const WINDOW_DEVICE_WIDTH = Dimensions.get('window').width;
export const WINDOW_DEVICE_HEIGHT = Dimensions.get('window').height;

export const CURRENT_TIME = 'CURRENT_TIME';

export const sideMenuOptions = [
    { label: "Dashboard  ", value: 1, image: SurfIconIcon },
    { label: "Contacts  ", value: 2, image: ContactsIcon },
    { label: "surf Leads", value: 3, image: UsersIconIcon },
    { label: "Self-sourced Leads", value: 4, image: SelfSourcedIcon },
    { label: "Transactions", value: 5, image: TransactionIcons },
    { label: "Document Portal", value: 6, image: FolderIcon },
    { label: "surf MLP", value: 7, image: PropertiesIcon },
    { label: "Call Center", value: 8, image: CallCenterIcon },
    { label: "Agents", value: 9, image: AgentsIcon },
    { label: "Realtors", value: 10, image: RetalorsIcon },
    { label: "Marketing", value: 11, image: MarketingIcon },
    { label: "Sign Out", value: 12, image: powerOffIcon },
];

export const dialPad = [
    {
        number: 1,
        alpha: ''
    },
    {
        number: 2,
        alpha: 'ABC'
    },
    {
        number: 3,
        alpha: 'DEF'
    },
    {
        number: 4,
        alpha: 'GHI'
    },
    {
        number: 5,
        alpha: 'JKL'
    },
    {
        number: 6,
        alpha: 'MNO'
    },
    {
        number: 7,
        alpha: 'PQRS'
    },
    {
        number: 8,
        alpha: 'TUV'
    },
    {
        number: 9,
        alpha: 'WXYZ'
    },
    {
        alpha: '*'
    },
    {
        number: 0,
        alpha: '.'
    },
    {
        alpha: '#'
    },
]

export const dataCell = [
    {
        title: 'Opportunities',
        subTitle: '142',
        image: Opportunities
    },
    {
        title: 'Transactions',
        subTitle: '$1.92MM',
        image: rocketIcon
    },
    {
        title: 'YTD Earnings',
        subTitle: '$128,000',
        image: calenderIcon
    },
    {
        title: 'Document Portal',
        subTitle: '',
        image: rocketIcon
    },
    {
        title: 'Call Center',
        subTitle: FolderIcon,
        image: calenderIcon
    },
    {
        title: 'Start Transaction',
        subTitle: '',
        image: calenderIcon
    },
]
