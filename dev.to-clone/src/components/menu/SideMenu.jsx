import React from 'react';
import {
   Drawer,
   DrawerBody,
   DrawerCloseButton,
   DrawerContent,
   DrawerHeader,
   DrawerOverlay,
   useColorModeValue,
   useDisclosure,
} from '@chakra-ui/react';
import { SecondaryBtn } from '../../utils/Buttons';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from './Menu';

const SideMenu = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <SecondaryBtn
            name='menu_icon'
            display={{ base: 'block', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
         >
            <AiOutlineMenu size={25} />
         </SecondaryBtn>

         <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent
               maxW='290px'
               bg={useColorModeValue('light.bg', 'dark.bg')}
            >
               <DrawerHeader
                  padding='.9rem .5rem .5rem'
                  display='flex'
                  justifyContent='space-between'
               >
                  opportuNet Community
                  <DrawerCloseButton
                     pos='static'
                     _hover={{
                        bg: useColorModeValue(
                           'light.secondary',
                           'dark.secondary'
                        ),
                        color: useColorModeValue(
                           'light.headingHover',
                           'dark.headingHover'
                        ),
                     }}
                  />
               </DrawerHeader>

               <DrawerBody p='.5rem'>
                  <Menu onClose={onClose} heroPadding='.5rem' />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   );
};

export default SideMenu;
