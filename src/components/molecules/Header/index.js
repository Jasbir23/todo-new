import React from 'react';

import HeaderButton from '../../atoms/HeaderButton';
import WrapperContainer from '../../atoms/WrapperContainer';

import styles from './styles';
import themes from '../../../themes';

const {colors, fontSizes} = themes;

const Header = ({leftIcon, rightIcon, handlePress}) => {
  return (
    <WrapperContainer style={styles.genericHeaderContainer}>
      <HeaderButton
        handlePress={handlePress}
        isFirst
        iconSize={fontSizes.medium}
        iconName={leftIcon}
        iconColor={colors.fontsPrimary}
      />
      <HeaderButton
        iconSize={fontSizes.medium}
        iconName={rightIcon}
        iconColor={colors.fontsPrimary}
      />
    </WrapperContainer>
  );
};

export default Header;
