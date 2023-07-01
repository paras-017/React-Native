import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name}:IconsProps) => {
switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='#f7cd2e' />
        
    case 'cross':
        return <Icon name='times' size={38} color='#38cc77' />
        
        default:
        return <Icon name='pencil' size={24} color='#000000' />
        break;
}
}

export default Icons

const styles = StyleSheet.create({})