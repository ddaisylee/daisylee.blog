import React from 'react';
import { ProfileImage } from 'components';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as S from './Introduction.styles';

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

export default function Introduction({ profileImage }: IntroductionProps) {
  return (
    <S.Background>
      <S.Container>
        <ProfileImage profileImage={profileImage} />
        <div>
          <S.Subtitle>Nice to meet you!</S.Subtitle>
          <S.Title>I'm Junior Frontend Developer Daisy.</S.Title>
        </div>
      </S.Container>
    </S.Background>
  );
}
