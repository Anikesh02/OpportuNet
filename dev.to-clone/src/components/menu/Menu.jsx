import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
   aboutIcon,
   contactIcon,
   homeIcon,
   readingListIcon,
   tagIcon,
   FAQIcon,
} from '../../assets/icons';
import { useAuth } from '../../context/auth';
// import { SecondaryBtn } from '../../utils/Buttons';
import SideMenuItem from '../../utils/SideMenuItem';
import Hero from '../Hero';

// const SocialLinkIcon = ({ children, href }) => {
//    return (
//       <Link href={href} target='_blank'>
//          <SecondaryBtn>{children}</SecondaryBtn>
//       </Link>
//    );
// };

const Menu = ({ onClose, heroPadding }) => {
   const user = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const { transformedData } = useSelector((state) => state.transformedData);

   let savedPosts = [];
   if (transformedData) {
      savedPosts = transformedData.filter(
         (postItem) =>
            postItem.saved?.includes(user?.userId) &&
            !postItem.archived?.includes(user?.userId)
      );
   }

   const handleClickHome = () => {
      onClose && onClose();

      if (location.pathname !== '/') {
         navigate('/');
      }

      window.scrollTo(0, 0);
   };

   const handleClickMenu = (route) => {
      onClose && onClose();

      navigate(`/${route}`);
   };

   return (
      <Box>
         {!user && (
            <Box className='shadow' borderRadius='5px' mb='.7rem' p='6' mt='16'>
               <Hero
                  btnWidth='100%'
                  onClose={onClose ? onClose : () => {}}
                  p={heroPadding}
               />
            </Box>
         )}

         <SideMenuItem icon={homeIcon} title='Home' onClick={handleClickHome} />

         {user && (
            <SideMenuItem
               icon={readingListIcon}
               savedPostsCount={savedPosts.length}
               title='Reading List'
               onClick={() => handleClickMenu('readinglist')}
            />
         )}

         <SideMenuItem
            icon={tagIcon}
            title='Create Post'
            onClick={() => handleClickMenu('create-post')}
         />

         

         <SideMenuItem
            icon={contactIcon}
            title='Dashboard'
            onClick={() => handleClickMenu('dashboard')}
         />

         <SideMenuItem
            icon={aboutIcon}
            title='Appearance'
            onClick={() => handleClickMenu('apperance')}
         />

<SideMenuItem
            icon={FAQIcon}
            title='Sign out'
            onClick={() => handleClickMenu('signout-confirm')}
         />
      </Box>
   );
};

export default Menu;
