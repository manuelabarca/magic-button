import * as React from 'react';

import { MagicButtonViewProps } from './MagicButton.types';

export default function MagicButtonView(props: MagicButtonViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
