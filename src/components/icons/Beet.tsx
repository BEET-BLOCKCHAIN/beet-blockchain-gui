import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as beetIcon } from './images/beet.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={beetIcon} viewBox="0 0 150 58" {...props} />;
}
