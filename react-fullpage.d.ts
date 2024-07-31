// src/react-fullpage.d.ts

declare module "@ap.cx/react-fullpage" {
    import * as React from "react";

    export interface FullPageSectionsProps {
        children: React.ReactNode;
    }

    export const FullPageSections: React.FC<FullPageSectionsProps>;

    export interface FullpageSectionProps {
        style?: React.CSSProperties;
        children: React.ReactNode;
    }

    export const FullpageSection: React.FC<FullpageSectionProps>;

    export interface FullpageProps {
        goto?: () => void;
        children: React.ReactNode;
    }

    const Fullpage: React.FC<FullpageProps>;
    export default Fullpage;
}
