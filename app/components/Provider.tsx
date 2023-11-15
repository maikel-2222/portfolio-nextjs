//children => verwijst naar de inhoud die wordt doorgegeven tussen de openings- en sluitingstags van een component.
//vanaf nu is de theme provider bereikbaar vanaf elke route
//voor 'class' kijk in -> tailwind.config
"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Provider({children}: {children: ReactNode}) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>
}