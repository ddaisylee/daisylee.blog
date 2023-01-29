import React, { FunctionComponent } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as S from './ProfileImage.styles';

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <S.Container image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
