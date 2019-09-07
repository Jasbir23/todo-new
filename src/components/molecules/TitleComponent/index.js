import React from 'react';

import LargeTitleText from '../../atoms/LargeTitleText';
import SmallTitleText from '../../atoms/SmallTitleText';
import WrapperContainer from '../../atoms/WrapperContainer';

import styles from './styles';

const TitleComponent = ({textLarge, nameText}) => {
  return (
    <WrapperContainer style={styles.titleContainer}>
      <LargeTitleText text={textLarge} />
      <SmallTitleText text={nameText} />
    </WrapperContainer>
  );
};

export default TitleComponent;
