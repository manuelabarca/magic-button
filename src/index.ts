import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MagicButton.web.ts
// and on native platforms to MagicButton.ts
import MagicButtonModule from './MagicButtonModule';
import MagicButtonView from './MagicButtonView';
import { ChangeEventPayload, MagicButtonViewProps } from './MagicButton.types';

// Get the native constant value.
export const PI = MagicButtonModule.PI;

export function hello(): string {
  return MagicButtonModule.hello();
}

export async function setValueAsync(value: string) {
  return await MagicButtonModule.setValueAsync(value);
}

const emitter = new EventEmitter(MagicButtonModule ?? NativeModulesProxy.MagicButton);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MagicButtonView, MagicButtonViewProps, ChangeEventPayload };
