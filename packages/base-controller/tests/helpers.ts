import type { RestrictedMessenger } from '@metamask/base-controller';

/* eslint-disable @typescript-eslint/no-explicit-any */
// We don't care about the types marked with `any` for this type.
export type ExtractAvailableAction<Messenger> =
  Messenger extends RestrictedMessenger<any, infer Action, any, any, any>
    ? Action
    : never;
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// We don't care about the types marked with `any` for this type.
export type ExtractAvailableEvent<Messenger> =
  Messenger extends RestrictedMessenger<any, any, infer Event, any, any>
    ? Event
    : never;
/* eslint-enable @typescript-eslint/no-explicit-any */
