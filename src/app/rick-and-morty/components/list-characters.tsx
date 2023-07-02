"use client"

import { Box, Grid, GridItem, Text, Flex, HStack } from "@chakra-ui/react"
import { fetchCharacters } from "../api/characters"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

import getColorStatus from "../utils/get-color-status"
import getIconGender from "../utils/get-icon-gender"

const ListCharacters = () => {
  const { data: characters } = useQuery({
    queryKey: ["hydrate-fetch-character"],
    queryFn: () => fetchCharacters(),
  })

  return (
    <>
      <Box color={"red.500"}>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {characters?.results.map((ch, key) => (
            <GridItem colSpan={2} key={key}>
              <Flex bgColor={"gray.800"} p={4} rounded={"lg"} gap={3}>
                <Image
                  alt=""
                  src={ch.image}
                  width={120}
                  height={120}
                  priority
                />
                <Box color={"#fff"} w={"full"}>
                  <Text as={"b"} fontSize={18}>
                    {ch.name}
                  </Text>
                  <Text color={"primary.300"} fontSize={16}>
                    {ch.species}
                  </Text>
                  <Flex justifyContent={"space-between"} mb={2} mt={1}>
                    <HStack w={"full"}>
                      <Box
                        bgColor={getColorStatus(ch.status)}
                        boxSize={2.5}
                        rounded={"full"}
                      ></Box>
                      <Text fontSize={14}>{`${ch.status}`}</Text>
                    </HStack>
                    <HStack mt={1} w={"full"}>
                      {getIconGender(ch.gender)}
                      <Text fontSize={14}>{`${ch.gender}`}</Text>
                    </HStack>
                  </Flex>

                  <Text as={"u"} fontSize={14} color={"gray.300"}>
                    {ch.location.name}
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ListCharacters
