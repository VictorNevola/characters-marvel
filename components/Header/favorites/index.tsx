import { favorites } from '@/store/favorites';
import Link from 'next/link'
import { useRecoilValue } from 'recoil';

import { ProfileWrapper, ProfileIcon, ProfileCount } from "./styles";

const Favorites = () => {
  const favoritesState = useRecoilValue(favorites);

  return (
    <Link href="/favoritos" passHref>
      <ProfileWrapper>
        <ProfileIcon> 
          <ProfileCount>
            {
              favoritesState.length
            }
          </ProfileCount>
        </ProfileIcon>
      </ProfileWrapper>
    </Link>
  )
};

export default Favorites;