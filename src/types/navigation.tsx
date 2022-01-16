import React from 'react';

export type ScreensType<Params> = Array<{
  name: keyof Params;
  component: React.ComponentType<any>;
}>;

export type IconsType<Params> = { [key in keyof Params]?: string };
