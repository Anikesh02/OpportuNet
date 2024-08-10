import React from 'react';
import { HStack, Image, Text, useColorModeValue } from '@chakra-ui/react';
import IconBadge from './IconBadge';

const SideMenuItem = ({ isActive, icon, title, onClick, savedPostsCount }) => {
   const bgColor = useColorModeValue('light.secondary', 'dark.secondary');
   const color = useColorModeValue('light.linkColor', 'dark.linkColor');
   const activeColor = useColorModeValue(
      'light.headingHover',
      'dark.headingHover'
   );

   return (
      <HStack
         cursor='pointer'
         p='0.9rem'
         borderRadius='5px'
         _hover={{
            bg: useColorModeValue('light.secondary', 'dark.secondary'),
            color: useColorModeValue('light.headingHover', 'dark.headingHover'),
         }}
         onClick={onClick}
         bg={isActive && bgColor}
         color={isActive ? activeColor : color}
         mb={1}
         fontSize='18px'
         marginTop='16px'
      >
         {icon && <Image src={icon} alt='menu_icon' />}

         <Text>{title}</Text>

         {savedPostsCount && <IconBadge value={savedPostsCount} />}
      </HStack>
   );
};

export default SideMenuItem;
