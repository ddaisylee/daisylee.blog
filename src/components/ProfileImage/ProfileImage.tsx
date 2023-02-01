import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as S from './ProfileImage.styles';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

export default function ProfileImage({ profileImage }: ProfileImageProps) {
  return <S.Container image={profileImage} alt="Profile Image" />;
}
