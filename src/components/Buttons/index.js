import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const PrimaryButton = ({ ...props }) => {
  let children = props.children;
  return (
    <Button bg="#EB202B" {...props}>
      <Text as="h2" fontSize="16px" color="white">
        {children}
      </Text>
    </Button>
  );
};

const SecondaryButton = ({ ...props }) => {
  let children = props.children;
  return (
    <Button
      variant="secondary"
      bg="#1050A0"
      boxShadow="0px 16px 40px rgba(80, 157, 253, 0.25);"
      {...props}
    >
      <Text as="h2" fontSize="16px" color="white">
        {children}
      </Text>
    </Button>
  );
};

const FaqButton = ({ selected, ...props }) => {
  let textRef = useRef(null);
  let children = props.children;
  return (
    <Button
      variant="outlined"
      bg={selected ? '#1050A0' : 'none'}
      border="1px solid #1050A0"
      borderRadius="50px"
      onMouseOver={() => {
        if (selected) return;
        textRef.current.style.color = '#FFFFFF';
      }}
      onMouseLeave={() => {
        if (selected) return;
        textRef.current.style.color = '#1050A0';
      }}
      {...props}
    >
      <Text
        ref={textRef}
        as="h2"
        fontSize="16px"
        color={selected ? 'white' : '#1050A0'}
      >
        {children}
      </Text>
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

FaqButton.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export { PrimaryButton, SecondaryButton, FaqButton };
