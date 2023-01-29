import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as S from './ProfileImage.styles';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

function ProfileImage({ profileImage }: ProfileImageProps) {
  return <S.Container image={profileImage} alt="Profile Image" />;
}

export default ProfileImage;
