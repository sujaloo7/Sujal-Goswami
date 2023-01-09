import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box textAlign={"center"} padding={"10"} >
                <Text color={"gray.400"} fontSize={"20px"}>Coded Wth <span style={{ color: "#5E17EB" }}>❤</span> By <a href="" style={{ textDecoration: "underline", color: "white" }}>sujal</a></Text>
            </Box>
        </>
    )
}

export default Footer