declare module '@tabler/icons-react' {
  import { SVGProps } from 'react';

  export interface TablerIconsProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
  }

  export function IconBrain(props: TablerIconsProps): JSX.Element;
  export function IconLock(props: TablerIconsProps): JSX.Element;
  export function IconCoin(props: TablerIconsProps): JSX.Element;
  export function IconShieldLock(props: TablerIconsProps): JSX.Element;
  export function IconNetwork(props: TablerIconsProps): JSX.Element;
  export function IconDeviceAnalytics(props: TablerIconsProps): JSX.Element;
  export function IconBrandGithub(props: TablerIconsProps): JSX.Element;
  export function IconBrandTwitter(props: TablerIconsProps): JSX.Element;
  export function IconBrandDiscord(props: TablerIconsProps): JSX.Element;
} 