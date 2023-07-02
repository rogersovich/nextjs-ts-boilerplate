"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import RickMortyLogo from "@/assets/img/rick-morty-logo.png"

export default function Home() {
  const router = useRouter()
  const MotionFlex = motion(Flex)

  const features = [
    {
      key: "rick-and-morty",
      title: "Rick And Morty",
      desc: " Come and see the world of crazy Scientist",
      img: RickMortyLogo,
      color: {
        bgColor: "primary.500",
        _hover: { bgColor: "primary.700" },
      },
    },
  ]

  const routeToFeature = (routeKey: string) => {
    router.push(routeKey)
  }

  return (
    <Box>
      <Box px={8} py={8} bg={"#fff"} w={"full"}>
        <Box textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={26}>
            Rogersovich Universe
          </Text>
        </Box>
      </Box>
      <Box px={12}>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {features.map((feature, fKey) => (
            <GridItem colSpan={2} key={fKey}>
              <MotionFlex
                alignItems={"center"}
                bgColor={feature.color.bgColor}
                _hover={feature.color._hover}
                rounded={"xl"}
                p={3}
                gap={4}
                cursor={"pointer"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => routeToFeature(feature.key)}
              >
                <Image
                  alt="rick-morty"
                  src={feature.img}
                  width={100}
                  priority
                />
                <Box color={"#fff"}>
                  <Text fontWeight={"bold"} fontSize={20}>
                    {feature.title}
                  </Text>
                  <Text fontSize={14}>{feature.desc}</Text>
                </Box>
              </MotionFlex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
