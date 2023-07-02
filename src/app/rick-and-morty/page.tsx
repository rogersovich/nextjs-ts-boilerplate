"use client"

import { Box, Text, Flex, IconButton } from "@chakra-ui/react"
import { dehydrate, useQuery } from "@tanstack/react-query"
import { fetchCharacters } from "./api/characters"
import ListCharacters from "./components/list-characters"
import getQueryClient from "@/utils/react-query/get-query-client"
import Hydrate from "@/utils/react-query/hydrate.client"
import { TbArrowLeft } from "react-icons/tb"
import { Link } from "@chakra-ui/next-js"
import { BaseResponseCharacters } from "./types/index"
import type { InferGetServerSidePropsType, GetServerSideProps } from "next"

const RickAndMortyPage = ({
  characters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(characters?.results)
  // const client = getQueryClient()
  // await client.prefetchQuery({
  //   queryKey: ["pokemons"],
  //   queryFn: () => fetchCharacters(),
  // })
  // const dehydratedState = dehydrate(client, {
  //   shouldDehydrateQuery: () => true,
  // })
  return (
    <>
      {/* <Hydrate state={dehydratedState}>
      
      </Hydrate> */}
      <Box>
        <Flex flex={2} alignItems={"center"} py={4}>
          <Link href={"/"}>
            <IconButton
              aria-label="hellow"
              variant={"ghost"}
              color={"gray.800"}
            >
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
      </Box>
      <ListCharacters />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  characters: BaseResponseCharacters
}> = async () => {
  const characters: BaseResponseCharacters = await fetchCharacters()
  return { props: { characters } }
}

export default RickAndMortyPage
