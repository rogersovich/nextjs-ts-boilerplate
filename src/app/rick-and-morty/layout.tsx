"use client"

import { Box } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box px={8} py={4}>
        {children}
      </Box>
    </>
  )
}
