// react-fullpage.d.ts

declare module "@ap.cx/react-fullpage" {
    import { ReactNode } from "react";

    export interface FullpageProps {
        children: ReactNode;
    }

    export function Fullpage(props: FullpageProps): JSX.Element;

    export interface FullPageSectionsProps {
        children: ReactNode;
    }

    export function FullPageSections(props: FullPageSectionsProps): JSX.Element;

    export interface FullpageSectionProps {
        children: ReactNode;
        style?: React.CSSProperties;
    }

    export function FullpageSection(props: FullpageSectionProps): JSX.Element;
}
