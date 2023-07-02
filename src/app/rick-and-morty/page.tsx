"use client"

import { Box, Text, Flex, IconButton } from "@chakra-ui/react"
import { dehydrate } from "@tanstack/react-query"
import { fetchCharacters } from "./api/characters"
import ListCharacters from "./components/list-characters"
import getQueryClient from "@/utils/react-query/get-query-client"
import Hydrate from "@/utils/react-query/hydrate.client"
import { TbArrowLeft } from "react-icons/tb"
import { Link } from "@chakra-ui/next-js"

const RickAndMortyPage = () => {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(["hydrate-fetch-character", { page: "1" }], () =>
    fetchCharacters({
      page: "1",
    })
  )
  const dehydratedState = dehydrate(queryClient)
  return (
    <>
      <Box>
        <Flex flex={2} alignItems={"center"} py={4}>
          <Link href={"/"}>
            <IconButton aria-label="" variant={"ghost"} color={"gray.800"}>
              <TbArrowLeft size={30} />
            </IconButton>
          </Link>
          <Text
            flex={1}
            textAlign={"center"}
            fontSize={26}
            as={"b"}
            color={"gray.800"}
          >
            List Characters
          </Text>
        </Flex>
        <br />
        <Hydrate state={dehydratedState}>
          <ListCharacters />
        </Hydrate>
      </Box>
    </>
  )
}

export default RickAndMortyPage
