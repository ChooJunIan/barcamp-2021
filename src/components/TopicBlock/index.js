import { VStack, HStack, Text, Box } from '@chakra-ui/layout';
import React from 'react';
import { Image } from '@chakra-ui/image';
import TopicBadge from './../TopicBadge';
import PropTypes from 'prop-types';

const TopicBlock = ({ topic }) => {
  return (
    <HStack
      w="100%"
      p="30px 16px "
      border="1px solid #E9E9E9;"
      borderRadius="8px"
      mb="3"
      mt="45px"
      cursor="pointer"
      transition="all 0.1s ease-in-out"
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 16px 40px rgba(147, 147, 147, 0.25)"
    >
      <Box width="90%">
        <HStack spacing={7} py="0.3em" px={['0rem', '0rem', '0.5em']}>
          <Image d={['none', 'none', 'flex']} h="45px" w="45px" />
          <VStack spacing={2} align="flex-start" w="90%">
            <HStack justifyContent="space-between" w="100%">
              <TopicBadge topic={topic.theme} />
              <Text>Prepared By Shaun</Text>
            </HStack>
            <Text as="h3" fontSize="md" fontFamily="Poppins" fontWeight="600">
              {topic.name}
            </Text>
            <Text as="h6" fontSize="sm" fontWeight="500">
              {topic.description}
            </Text>
          </VStack>
        </HStack>
      </Box>

      <VStack spacing={3}>
        <Text>4TH</Text>
        <Box background="#f5f5f5" borderRadius="8px" p="10px">
          <Text fontSize="sm">241 votes</Text>
        </Box>
      </VStack>
    </HStack>
  );
};

TopicBlock.propTypes = {
  topic: PropTypes.object,
};

export default TopicBlock;
