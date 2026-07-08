import { Stack, Flex, Text } from "@mantine/core";
import { ClockIcon } from "@phosphor-icons/react";
import styles from './detailTag.module.css';

export function DetailTag({icon,text,color}:{icon:React.ReactNode,text:string,color?:string}){
    return (
        <Flex align="center" className={styles.detailTag} style={{color: color}}>
            {icon}
            <Text>{text}</Text>
        </Flex>
    )
}