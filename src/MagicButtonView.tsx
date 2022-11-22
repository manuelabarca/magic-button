import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MagicButtonViewProps } from './MagicButton.types';

const NativeView: React.ComponentType<MagicButtonViewProps> =
  requireNativeViewManager('MagicButton');

export default function MagicButtonView(props: MagicButtonViewProps) {
  return <NativeView {...props} />;
}
