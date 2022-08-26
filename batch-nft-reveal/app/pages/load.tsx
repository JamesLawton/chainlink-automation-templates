import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Load } from '../components/load'
import { Section, Layout } from '../components/layout'

function LoadPage(): JSX.Element {
  return (
    <>
      <Heading as="h1" mb="8">
        Load NFT Collection
      </Heading>
      <Section>
        <Load />
      </Section>
    </>
  )
}

export default LoadPage