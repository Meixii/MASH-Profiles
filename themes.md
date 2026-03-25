npx shadcn@latest add https://tweakcn.com/r/themes/elegant-luxury.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9779 0.0042 56.3756);
  --foreground: oklch(0.2178 0 0);
  --card: oklch(0.9779 0.0042 56.3756);
  --card-foreground: oklch(0.2178 0 0);
  --popover: oklch(0.9779 0.0042 56.3756);
  --popover-foreground: oklch(0.2178 0 0);
  --primary: oklch(0.4650 0.1470 24.9381);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9625 0.0385 89.0943);
  --secondary-foreground: oklch(0.4847 0.1022 75.1153);
  --muted: oklch(0.9431 0.0068 53.4442);
  --muted-foreground: oklch(0.4444 0.0096 73.6390);
  --accent: oklch(0.9619 0.0580 95.6174);
  --accent-foreground: oklch(0.3958 0.1331 25.7230);
  --destructive: oklch(0.4437 0.1613 26.8994);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9355 0.0324 80.9937);
  --input: oklch(0.9355 0.0324 80.9937);
  --ring: oklch(0.4650 0.1470 24.9381);
  --chart-1: oklch(0.5054 0.1905 27.5181);
  --chart-2: oklch(0.4650 0.1470 24.9381);
  --chart-3: oklch(0.3958 0.1331 25.7230);
  --chart-4: oklch(0.5553 0.1455 48.9975);
  --chart-5: oklch(0.4732 0.1247 46.2007);
  --sidebar: oklch(0.9431 0.0068 53.4442);
  --sidebar-foreground: oklch(0.2178 0 0);
  --sidebar-primary: oklch(0.4650 0.1470 24.9381);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9619 0.0580 95.6174);
  --sidebar-accent-foreground: oklch(0.3958 0.1331 25.7230);
  --sidebar-border: oklch(0.9355 0.0324 80.9937);
  --sidebar-ring: oklch(0.4650 0.1470 24.9381);
  --font-sans: Poppins, sans-serif;
  --font-serif: Libre Baskerville, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 0.375rem;
  --shadow-x: 1px;
  --shadow-y: 1px;
  --shadow-blur: 16px;
  --shadow-spread: -2px;
  --shadow-opacity: 0.12;
  --shadow-color: hsl(0 63% 18%);
  --shadow-2xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
  --shadow-xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
  --shadow-sm: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
  --shadow: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
  --shadow-md: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 2px 4px -3px hsl(0 63% 18% / 0.12);
  --shadow-lg: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 4px 6px -3px hsl(0 63% 18% / 0.12);
  --shadow-xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 8px 10px -3px hsl(0 63% 18% / 0.12);
  --shadow-2xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.30);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2161 0.0061 56.0434);
  --foreground: oklch(0.9699 0.0013 106.4238);
  --card: oklch(0.2685 0.0063 34.2976);
  --card-foreground: oklch(0.9699 0.0013 106.4238);
  --popover: oklch(0.2685 0.0063 34.2976);
  --popover-foreground: oklch(0.9699 0.0013 106.4238);
  --primary: oklch(0.5054 0.1905 27.5181);
  --primary-foreground: oklch(0.9779 0.0042 56.3756);
  --secondary: oklch(0.4732 0.1247 46.2007);
  --secondary-foreground: oklch(0.9619 0.0580 95.6174);
  --muted: oklch(0.2291 0.0060 56.0708);
  --muted-foreground: oklch(0.8687 0.0043 56.3660);
  --accent: oklch(0.5553 0.1455 48.9975);
  --accent-foreground: oklch(0.9619 0.0580 95.6174);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3741 0.0087 67.5582);
  --input: oklch(0.3741 0.0087 67.5582);
  --ring: oklch(0.5054 0.1905 27.5181);
  --chart-1: oklch(0.7106 0.1661 22.2162);
  --chart-2: oklch(0.6368 0.2078 25.3313);
  --chart-3: oklch(0.5771 0.2152 27.3250);
  --chart-4: oklch(0.8369 0.1644 84.4286);
  --chart-5: oklch(0.7686 0.1647 70.0804);
  --sidebar: oklch(0.2161 0.0061 56.0434);
  --sidebar-foreground: oklch(0.9699 0.0013 106.4238);
  --sidebar-primary: oklch(0.5054 0.1905 27.5181);
  --sidebar-primary-foreground: oklch(0.9779 0.0042 56.3756);
  --sidebar-accent: oklch(0.5553 0.1455 48.9975);
  --sidebar-accent-foreground: oklch(0.9619 0.0580 95.6174);
  --sidebar-border: oklch(0.3741 0.0087 67.5582);
  --sidebar-ring: oklch(0.5054 0.1905 27.5181);
  --font-sans: Poppins, sans-serif;
  --font-serif: Libre Baskerville, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 0.375rem;
  --shadow-x: 1px;
  --shadow-y: 1px;
  --shadow-blur: 16px;
  --shadow-spread: -2px;
  --shadow-opacity: 0.12;
  --shadow-color: hsl(0 63% 18%);
  --shadow-2xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
  --shadow-xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
  --shadow-sm: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
  --shadow: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
  --shadow-md: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 2px 4px -3px hsl(0 63% 18% / 0.12);
  --shadow-lg: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 4px 6px -3px hsl(0 63% 18% / 0.12);
  --shadow-xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 8px 10px -3px hsl(0 63% 18% / 0.12);
  --shadow-2xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.30);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}



---


npx shadcn@latest add https://tweakcn.com/r/themes/modern-minimal.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6231 0.1880 259.8145);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9670 0.0029 264.5419);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9514 0.0250 236.8242);
  --accent-foreground: oklch(0.3791 0.1378 265.5222);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9276 0.0058 264.5313);
  --input: oklch(0.9276 0.0058 264.5313);
  --ring: oklch(0.6231 0.1880 259.8145);
  --chart-1: oklch(0.6231 0.1880 259.8145);
  --chart-2: oklch(0.5461 0.2152 262.8809);
  --chart-3: oklch(0.4882 0.2172 264.3763);
  --chart-4: oklch(0.4244 0.1809 265.6377);
  --chart-5: oklch(0.3791 0.1378 265.5222);
  --sidebar: oklch(0.9846 0.0017 247.8389);
  --sidebar-foreground: oklch(0.3211 0 0);
  --sidebar-primary: oklch(0.6231 0.1880 259.8145);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9514 0.0250 236.8242);
  --sidebar-accent-foreground: oklch(0.3791 0.1378 265.5222);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.6231 0.1880 259.8145);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.375rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2046 0 0);
  --foreground: oklch(0.9219 0 0);
  --card: oklch(0.2686 0 0);
  --card-foreground: oklch(0.9219 0 0);
  --popover: oklch(0.2686 0 0);
  --popover-foreground: oklch(0.9219 0 0);
  --primary: oklch(0.6231 0.1880 259.8145);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.2686 0 0);
  --secondary-foreground: oklch(0.9219 0 0);
  --muted: oklch(0.2393 0 0);
  --muted-foreground: oklch(0.7155 0 0);
  --accent: oklch(0.3791 0.1378 265.5222);
  --accent-foreground: oklch(0.8823 0.0571 254.1284);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3715 0 0);
  --input: oklch(0.3715 0 0);
  --ring: oklch(0.6231 0.1880 259.8145);
  --chart-1: oklch(0.7137 0.1434 254.6240);
  --chart-2: oklch(0.6231 0.1880 259.8145);
  --chart-3: oklch(0.5461 0.2152 262.8809);
  --chart-4: oklch(0.4882 0.2172 264.3763);
  --chart-5: oklch(0.4244 0.1809 265.6377);
  --sidebar: oklch(0.2046 0 0);
  --sidebar-foreground: oklch(0.9219 0 0);
  --sidebar-primary: oklch(0.6231 0.1880 259.8145);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.3791 0.1378 265.5222);
  --sidebar-accent-foreground: oklch(0.8823 0.0571 254.1284);
  --sidebar-border: oklch(0.3715 0 0);
  --sidebar-ring: oklch(0.6231 0.1880 259.8145);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.375rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}


---


npx shadcn@latest add https://tweakcn.com/r/themes/tangerine.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9383 0.0042 236.4993);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6397 0.1720 36.4421);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9670 0.0029 264.5419);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9119 0.0222 243.8174);
  --accent-foreground: oklch(0.3791 0.1378 265.5222);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9022 0.0052 247.8822);
  --input: oklch(0.9700 0.0029 264.5420);
  --ring: oklch(0.6397 0.1720 36.4421);
  --chart-1: oklch(0.7156 0.0605 248.6845);
  --chart-2: oklch(0.7875 0.0917 35.9616);
  --chart-3: oklch(0.5778 0.0759 254.1573);
  --chart-4: oklch(0.5016 0.0849 259.4902);
  --chart-5: oklch(0.4241 0.0952 264.0306);
  --sidebar: oklch(0.9030 0.0046 258.3257);
  --sidebar-foreground: oklch(0.3211 0 0);
  --sidebar-primary: oklch(0.6397 0.1720 36.4421);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9119 0.0222 243.8174);
  --sidebar-accent-foreground: oklch(0.3791 0.1378 265.5222);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.6397 0.1720 36.4421);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2598 0.0306 262.6666);
  --foreground: oklch(0.9219 0 0);
  --card: oklch(0.3106 0.0301 268.6365);
  --card-foreground: oklch(0.9219 0 0);
  --popover: oklch(0.2900 0.0249 268.3986);
  --popover-foreground: oklch(0.9219 0 0);
  --primary: oklch(0.6397 0.1720 36.4421);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.3095 0.0266 266.7132);
  --secondary-foreground: oklch(0.9219 0 0);
  --muted: oklch(0.3095 0.0266 266.7132);
  --muted-foreground: oklch(0.7155 0 0);
  --accent: oklch(0.3380 0.0589 267.5867);
  --accent-foreground: oklch(0.8823 0.0571 254.1284);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3843 0.0301 269.7337);
  --input: oklch(0.3843 0.0301 269.7337);
  --ring: oklch(0.6397 0.1720 36.4421);
  --chart-1: oklch(0.7156 0.0605 248.6845);
  --chart-2: oklch(0.7693 0.0876 34.1875);
  --chart-3: oklch(0.5778 0.0759 254.1573);
  --chart-4: oklch(0.5016 0.0849 259.4902);
  --chart-5: oklch(0.4241 0.0952 264.0306);
  --sidebar: oklch(0.3100 0.0283 267.7408);
  --sidebar-foreground: oklch(0.9219 0 0);
  --sidebar-primary: oklch(0.6397 0.1720 36.4421);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.3380 0.0589 267.5867);
  --sidebar-accent-foreground: oklch(0.8823 0.0571 254.1284);
  --sidebar-border: oklch(0.3843 0.0301 269.7337);
  --sidebar-ring: oklch(0.6397 0.1720 36.4421);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}


---


npx shadcn@latest add https://tweakcn.com/r/themes/nature.json


@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9711 0.0074 80.7211);
  --foreground: oklch(0.3000 0.0358 30.2042);
  --card: oklch(0.9711 0.0074 80.7211);
  --card-foreground: oklch(0.3000 0.0358 30.2042);
  --popover: oklch(0.9711 0.0074 80.7211);
  --popover-foreground: oklch(0.3000 0.0358 30.2042);
  --primary: oklch(0.5234 0.1347 144.1672);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9571 0.0210 147.6360);
  --secondary-foreground: oklch(0.4254 0.1159 144.3078);
  --muted: oklch(0.9370 0.0142 74.4218);
  --muted-foreground: oklch(0.4495 0.0486 39.2110);
  --accent: oklch(0.8952 0.0504 146.0366);
  --accent-foreground: oklch(0.4254 0.1159 144.3078);
  --destructive: oklch(0.5386 0.1937 26.7249);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.8805 0.0208 74.6428);
  --input: oklch(0.8805 0.0208 74.6428);
  --ring: oklch(0.5234 0.1347 144.1672);
  --chart-1: oklch(0.6731 0.1624 144.2083);
  --chart-2: oklch(0.5752 0.1446 144.1813);
  --chart-3: oklch(0.5234 0.1347 144.1672);
  --chart-4: oklch(0.4254 0.1159 144.3078);
  --chart-5: oklch(0.2157 0.0453 145.7256);
  --sidebar: oklch(0.9370 0.0142 74.4218);
  --sidebar-foreground: oklch(0.3000 0.0358 30.2042);
  --sidebar-primary: oklch(0.5234 0.1347 144.1672);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8952 0.0504 146.0366);
  --sidebar-accent-foreground: oklch(0.4254 0.1159 144.3078);
  --sidebar-border: oklch(0.8805 0.0208 74.6428);
  --sidebar-ring: oklch(0.5234 0.1347 144.1672);
  --font-sans: Montserrat, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: Source Code Pro, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2683 0.0279 150.7681);
  --foreground: oklch(0.9423 0.0097 72.6595);
  --card: oklch(0.3327 0.0271 146.9867);
  --card-foreground: oklch(0.9423 0.0097 72.6595);
  --popover: oklch(0.3327 0.0271 146.9867);
  --popover-foreground: oklch(0.9423 0.0097 72.6595);
  --primary: oklch(0.6731 0.1624 144.2083);
  --primary-foreground: oklch(0.2157 0.0453 145.7256);
  --secondary: oklch(0.3942 0.0265 142.9926);
  --secondary-foreground: oklch(0.8970 0.0166 142.5518);
  --muted: oklch(0.2926 0.0212 147.7496);
  --muted-foreground: oklch(0.8579 0.0174 76.0955);
  --accent: oklch(0.5752 0.1446 144.1813);
  --accent-foreground: oklch(0.9423 0.0097 72.6595);
  --destructive: oklch(0.5386 0.1937 26.7249);
  --destructive-foreground: oklch(0.9423 0.0097 72.6595);
  --border: oklch(0.3942 0.0265 142.9926);
  --input: oklch(0.3942 0.0265 142.9926);
  --ring: oklch(0.6731 0.1624 144.2083);
  --chart-1: oklch(0.7660 0.1179 145.2950);
  --chart-2: oklch(0.7185 0.1417 144.8887);
  --chart-3: oklch(0.6731 0.1624 144.2083);
  --chart-4: oklch(0.6291 0.1543 144.2031);
  --chart-5: oklch(0.5752 0.1446 144.1813);
  --sidebar: oklch(0.2683 0.0279 150.7681);
  --sidebar-foreground: oklch(0.9423 0.0097 72.6595);
  --sidebar-primary: oklch(0.6731 0.1624 144.2083);
  --sidebar-primary-foreground: oklch(0.2157 0.0453 145.7256);
  --sidebar-accent: oklch(0.5752 0.1446 144.1813);
  --sidebar-accent-foreground: oklch(0.9423 0.0097 72.6595);
  --sidebar-border: oklch(0.3942 0.0265 142.9926);
  --sidebar-ring: oklch(0.6731 0.1624 144.2083);
  --font-sans: Montserrat, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: Source Code Pro, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

---


npx shadcn@latest add https://tweakcn.com/r/themes/quantum-rose.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9692 0.0192 343.9344);
  --foreground: oklch(0.4426 0.1653 352.3762);
  --card: oklch(0.9837 0.0107 339.3288);
  --card-foreground: oklch(0.4426 0.1653 352.3762);
  --popover: oklch(0.9837 0.0107 339.3288);
  --popover-foreground: oklch(0.4426 0.1653 352.3762);
  --primary: oklch(0.6002 0.2414 0.1348);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9230 0.0701 326.1273);
  --secondary-foreground: oklch(0.4426 0.1653 352.3762);
  --muted: oklch(0.9429 0.0363 344.2604);
  --muted-foreground: oklch(0.5740 0.1732 352.0544);
  --accent: oklch(0.8766 0.0828 344.8849);
  --accent-foreground: oklch(0.4426 0.1653 352.3762);
  --destructive: oklch(0.5831 0.1911 6.3410);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.8881 0.0747 344.3866);
  --input: oklch(0.9230 0.0701 326.1273);
  --ring: oklch(0.6002 0.2414 0.1348);
  --chart-1: oklch(0.6002 0.2414 0.1348);
  --chart-2: oklch(0.5979 0.1750 345.0378);
  --chart-3: oklch(0.6009 0.1243 311.7958);
  --chart-4: oklch(0.5849 0.1178 283.2937);
  --chart-5: oklch(0.6479 0.1871 267.9684);
  --sidebar: oklch(0.9629 0.0227 345.7485);
  --sidebar-foreground: oklch(0.4426 0.1653 352.3762);
  --sidebar-primary: oklch(0.6002 0.2414 0.1348);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8766 0.0828 344.8849);
  --sidebar-accent-foreground: oklch(0.4426 0.1653 352.3762);
  --sidebar-border: oklch(0.9311 0.0448 343.3135);
  --sidebar-ring: oklch(0.6002 0.2414 0.1348);
  --font-sans: Poppins, sans-serif;
  --font-serif: Playfair Display, serif;
  --font-mono: Space Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0px;
  --shadow-y: 3px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.18;
  --shadow-color: hsl(330 70% 30% / 0.12);
  --shadow-2xs: 0px 3px 0px 0px hsl(330 70% 30% / 0.09);
  --shadow-xs: 0px 3px 0px 0px hsl(330 70% 30% / 0.09);
  --shadow-sm: 0px 3px 0px 0px hsl(330 70% 30% / 0.18), 0px 1px 2px -1px hsl(330 70% 30% / 0.18);
  --shadow: 0px 3px 0px 0px hsl(330 70% 30% / 0.18), 0px 1px 2px -1px hsl(330 70% 30% / 0.18);
  --shadow-md: 0px 3px 0px 0px hsl(330 70% 30% / 0.18), 0px 2px 4px -1px hsl(330 70% 30% / 0.18);
  --shadow-lg: 0px 3px 0px 0px hsl(330 70% 30% / 0.18), 0px 4px 6px -1px hsl(330 70% 30% / 0.18);
  --shadow-xl: 0px 3px 0px 0px hsl(330 70% 30% / 0.18), 0px 8px 10px -1px hsl(330 70% 30% / 0.18);
  --shadow-2xl: 0px 3px 0px 0px hsl(330 70% 30% / 0.45);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.1808 0.0535 313.7159);
  --foreground: oklch(0.8624 0.1307 326.6356);
  --card: oklch(0.2398 0.0661 313.2337);
  --card-foreground: oklch(0.8624 0.1307 326.6356);
  --popover: oklch(0.2398 0.0661 313.2337);
  --popover-foreground: oklch(0.8624 0.1307 326.6356);
  --primary: oklch(0.7543 0.2319 332.0212);
  --primary-foreground: oklch(0.1608 0.0493 327.5673);
  --secondary: oklch(0.3184 0.0915 319.6465);
  --secondary-foreground: oklch(0.8624 0.1307 326.6356);
  --muted: oklch(0.2701 0.0770 312.3525);
  --muted-foreground: oklch(0.7116 0.1623 327.1132);
  --accent: oklch(0.3558 0.1201 325.7655);
  --accent-foreground: oklch(0.8624 0.1307 326.6356);
  --destructive: oklch(0.6539 0.2441 7.1740);
  --destructive-foreground: oklch(0.9821 0 0);
  --border: oklch(0.3280 0.1202 313.5393);
  --input: oklch(0.3184 0.0915 319.6465);
  --ring: oklch(0.7543 0.2319 332.0212);
  --chart-1: oklch(0.7543 0.2319 332.0212);
  --chart-2: oklch(0.6508 0.2159 317.6331);
  --chart-3: oklch(0.6249 0.2233 292.7656);
  --chart-4: oklch(0.6067 0.1649 278.7172);
  --chart-5: oklch(0.6235 0.2019 268.0521);
  --sidebar: oklch(0.1941 0.0504 311.3983);
  --sidebar-foreground: oklch(0.8624 0.1307 326.6356);
  --sidebar-primary: oklch(0.7543 0.2319 332.0212);
  --sidebar-primary-foreground: oklch(0.1608 0.0493 327.5673);
  --sidebar-accent: oklch(0.3558 0.1201 325.7655);
  --sidebar-accent-foreground: oklch(0.8624 0.1307 326.6356);
  --sidebar-border: oklch(0.3280 0.1202 313.5393);
  --sidebar-ring: oklch(0.7543 0.2319 332.0212);
  --font-sans: Quicksand, sans-serif;
  --font-serif: Playfair Display, serif;
  --font-mono: Space Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0px;
  --shadow-y: 3px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.18;
  --shadow-color: hsl(300 80% 50% / 0.25);
  --shadow-2xs: 0px 3px 0px 0px hsl(300 80% 50% / 0.09);
  --shadow-xs: 0px 3px 0px 0px hsl(300 80% 50% / 0.09);
  --shadow-sm: 0px 3px 0px 0px hsl(300 80% 50% / 0.18), 0px 1px 2px -1px hsl(300 80% 50% / 0.18);
  --shadow: 0px 3px 0px 0px hsl(300 80% 50% / 0.18), 0px 1px 2px -1px hsl(300 80% 50% / 0.18);
  --shadow-md: 0px 3px 0px 0px hsl(300 80% 50% / 0.18), 0px 2px 4px -1px hsl(300 80% 50% / 0.18);
  --shadow-lg: 0px 3px 0px 0px hsl(300 80% 50% / 0.18), 0px 4px 6px -1px hsl(300 80% 50% / 0.18);
  --shadow-xl: 0px 3px 0px 0px hsl(300 80% 50% / 0.18), 0px 8px 10px -1px hsl(300 80% 50% / 0.18);
  --shadow-2xl: 0px 3px 0px 0px hsl(300 80% 50% / 0.45);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

---

npx shadcn@latest add https://tweakcn.com/r/themes/sunset-horizon.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9856 0.0084 56.3169);
  --foreground: oklch(0.3353 0.0132 2.7676);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3353 0.0132 2.7676);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3353 0.0132 2.7676);
  --primary: oklch(0.7357 0.1641 34.7091);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9596 0.0200 28.9029);
  --secondary-foreground: oklch(0.5587 0.1294 32.7364);
  --muted: oklch(0.9656 0.0176 39.4009);
  --muted-foreground: oklch(0.5534 0.0116 58.0708);
  --accent: oklch(0.8278 0.1131 57.9984);
  --accent-foreground: oklch(0.3353 0.0132 2.7676);
  --destructive: oklch(0.6122 0.2082 22.2410);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9296 0.0370 38.6868);
  --input: oklch(0.9296 0.0370 38.6868);
  --ring: oklch(0.7357 0.1641 34.7091);
  --chart-1: oklch(0.7357 0.1641 34.7091);
  --chart-2: oklch(0.8278 0.1131 57.9984);
  --chart-3: oklch(0.8773 0.0763 54.9314);
  --chart-4: oklch(0.8200 0.1054 40.8859);
  --chart-5: oklch(0.6368 0.1306 32.0721);
  --sidebar: oklch(0.9656 0.0176 39.4009);
  --sidebar-foreground: oklch(0.3353 0.0132 2.7676);
  --sidebar-primary: oklch(0.7357 0.1641 34.7091);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8278 0.1131 57.9984);
  --sidebar-accent-foreground: oklch(0.3353 0.0132 2.7676);
  --sidebar-border: oklch(0.9296 0.0370 38.6868);
  --sidebar-ring: oklch(0.7357 0.1641 34.7091);
  --font-sans: Montserrat, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: Ubuntu Mono, monospace;
  --radius: 0.625rem;
  --shadow-x: 0px;
  --shadow-y: 6px;
  --shadow-blur: 12px;
  --shadow-spread: -3px;
  --shadow-opacity: 0.09;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
  --shadow-sm: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
  --shadow: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
  --shadow-md: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 2px 4px -4px hsl(0 0% 0% / 0.09);
  --shadow-lg: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 4px 6px -4px hsl(0 0% 0% / 0.09);
  --shadow-xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 8px 10px -4px hsl(0 0% 0% / 0.09);
  --shadow-2xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.22);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2569 0.0169 352.4042);
  --foreground: oklch(0.9397 0.0119 51.3156);
  --card: oklch(0.3184 0.0176 341.4465);
  --card-foreground: oklch(0.9397 0.0119 51.3156);
  --popover: oklch(0.3184 0.0176 341.4465);
  --popover-foreground: oklch(0.9397 0.0119 51.3156);
  --primary: oklch(0.7357 0.1641 34.7091);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.3637 0.0203 342.2664);
  --secondary-foreground: oklch(0.9397 0.0119 51.3156);
  --muted: oklch(0.2848 0.0159 343.6554);
  --muted-foreground: oklch(0.8378 0.0237 52.6346);
  --accent: oklch(0.8278 0.1131 57.9984);
  --accent-foreground: oklch(0.2569 0.0169 352.4042);
  --destructive: oklch(0.6122 0.2082 22.2410);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3637 0.0203 342.2664);
  --input: oklch(0.3637 0.0203 342.2664);
  --ring: oklch(0.7357 0.1641 34.7091);
  --chart-1: oklch(0.7357 0.1641 34.7091);
  --chart-2: oklch(0.8278 0.1131 57.9984);
  --chart-3: oklch(0.8773 0.0763 54.9314);
  --chart-4: oklch(0.8200 0.1054 40.8859);
  --chart-5: oklch(0.6368 0.1306 32.0721);
  --sidebar: oklch(0.2569 0.0169 352.4042);
  --sidebar-foreground: oklch(0.9397 0.0119 51.3156);
  --sidebar-primary: oklch(0.7357 0.1641 34.7091);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.8278 0.1131 57.9984);
  --sidebar-accent-foreground: oklch(0.2569 0.0169 352.4042);
  --sidebar-border: oklch(0.3637 0.0203 342.2664);
  --sidebar-ring: oklch(0.7357 0.1641 34.7091);
  --font-sans: Montserrat, sans-serif;
  --font-serif: Merriweather, serif;
  --font-mono: Ubuntu Mono, monospace;
  --radius: 0.625rem;
  --shadow-x: 0px;
  --shadow-y: 6px;
  --shadow-blur: 12px;
  --shadow-spread: -3px;
  --shadow-opacity: 0.09;
  --shadow-color: hsl(0 0% 0%);
  --shadow-2xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
  --shadow-sm: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
  --shadow: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
  --shadow-md: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 2px 4px -4px hsl(0 0% 0% / 0.09);
  --shadow-lg: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 4px 6px -4px hsl(0 0% 0% / 0.09);
  --shadow-xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 8px 10px -4px hsl(0 0% 0% / 0.09);
  --shadow-2xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.22);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

---

npx shadcn@latest add https://tweakcn.com/r/themes/mocha-mousse.json

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9529 0.0146 102.4597);
  --foreground: oklch(0.4063 0.0255 40.3627);
  --card: oklch(0.9529 0.0146 102.4597);
  --card-foreground: oklch(0.4063 0.0255 40.3627);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.4063 0.0255 40.3627);
  --primary: oklch(0.6083 0.0623 44.3588);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.7473 0.0387 80.5476);
  --secondary-foreground: oklch(1.0000 0 0);
  --muted: oklch(0.8502 0.0389 49.0874);
  --muted-foreground: oklch(0.5416 0.0512 37.2132);
  --accent: oklch(0.8502 0.0389 49.0874);
  --accent-foreground: oklch(0.4063 0.0255 40.3627);
  --destructive: oklch(0.2225 0.0098 52.9636);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.7473 0.0387 80.5476);
  --input: oklch(0.7473 0.0387 80.5476);
  --ring: oklch(0.6083 0.0623 44.3588);
  --chart-1: oklch(0.6083 0.0623 44.3588);
  --chart-2: oklch(0.5416 0.0512 37.2132);
  --chart-3: oklch(0.7272 0.0539 52.3320);
  --chart-4: oklch(0.7473 0.0387 80.5476);
  --chart-5: oklch(0.6440 0.0405 52.3917);
  --sidebar: oklch(0.8903 0.0278 49.5658);
  --sidebar-foreground: oklch(0.4063 0.0255 40.3627);
  --sidebar-primary: oklch(0.6083 0.0623 44.3588);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.7272 0.0539 52.3320);
  --sidebar-accent-foreground: oklch(1.0000 0 0);
  --sidebar-border: oklch(0.6440 0.0405 52.3917);
  --sidebar-ring: oklch(0.6083 0.0623 44.3588);
  --font-sans: DM Sans, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 0.5rem;
  --shadow-x: 2px;
  --shadow-y: 2px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.11;
  --shadow-color: hsl(20 18% 51% / 0.4);
  --shadow-2xs: 2px 2px 0px 0px hsl(20 18% 51% / 0.06);
  --shadow-xs: 2px 2px 0px 0px hsl(20 18% 51% / 0.06);
  --shadow-sm: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 1px 2px -1px hsl(20 18% 51% / 0.11);
  --shadow: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 1px 2px -1px hsl(20 18% 51% / 0.11);
  --shadow-md: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 2px 4px -1px hsl(20 18% 51% / 0.11);
  --shadow-lg: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 4px 6px -1px hsl(20 18% 51% / 0.11);
  --shadow-xl: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 8px 10px -1px hsl(20 18% 51% / 0.11);
  --shadow-2xl: 2px 2px 0px 0px hsl(20 18% 51% / 0.28);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2721 0.0141 48.1783);
  --foreground: oklch(0.9529 0.0146 102.4597);
  --card: oklch(0.3291 0.0156 50.8936);
  --card-foreground: oklch(0.9529 0.0146 102.4597);
  --popover: oklch(0.3291 0.0156 50.8936);
  --popover-foreground: oklch(0.9529 0.0146 102.4597);
  --primary: oklch(0.7272 0.0539 52.3320);
  --primary-foreground: oklch(0.2721 0.0141 48.1783);
  --secondary: oklch(0.5416 0.0512 37.2132);
  --secondary-foreground: oklch(0.9529 0.0146 102.4597);
  --muted: oklch(0.4063 0.0255 40.3627);
  --muted-foreground: oklch(0.7575 0.0380 50.8610);
  --accent: oklch(0.7473 0.0387 80.5476);
  --accent-foreground: oklch(0.2721 0.0141 48.1783);
  --destructive: oklch(0.6875 0.1420 21.4566);
  --destructive-foreground: oklch(0.2721 0.0141 48.1783);
  --border: oklch(0.4063 0.0255 40.3627);
  --input: oklch(0.4063 0.0255 40.3627);
  --ring: oklch(0.7272 0.0539 52.3320);
  --chart-1: oklch(0.7272 0.0539 52.3320);
  --chart-2: oklch(0.7473 0.0387 80.5476);
  --chart-3: oklch(0.6083 0.0623 44.3588);
  --chart-4: oklch(0.5416 0.0512 37.2132);
  --chart-5: oklch(0.6440 0.0405 52.3917);
  --sidebar: oklch(0.2225 0.0098 52.9636);
  --sidebar-foreground: oklch(0.9529 0.0146 102.4597);
  --sidebar-primary: oklch(0.7272 0.0539 52.3320);
  --sidebar-primary-foreground: oklch(0.2225 0.0098 52.9636);
  --sidebar-accent: oklch(0.7473 0.0387 80.5476);
  --sidebar-accent-foreground: oklch(0.2225 0.0098 52.9636);
  --sidebar-border: oklch(0.4063 0.0255 40.3627);
  --sidebar-ring: oklch(0.7272 0.0539 52.3320);
  --font-sans: DM Sans, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 0.5rem;
  --shadow-x: 2px;
  --shadow-y: 2px;
  --shadow-blur: 0px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.11;
  --shadow-color: hsl(20 18% 30% / 0.5);
  --shadow-2xs: 2px 2px 0px 0px hsl(20 18% 30% / 0.06);
  --shadow-xs: 2px 2px 0px 0px hsl(20 18% 30% / 0.06);
  --shadow-sm: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 1px 2px -1px hsl(20 18% 30% / 0.11);
  --shadow: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 1px 2px -1px hsl(20 18% 30% / 0.11);
  --shadow-md: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 2px 4px -1px hsl(20 18% 30% / 0.11);
  --shadow-lg: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 4px 6px -1px hsl(20 18% 30% / 0.11);
  --shadow-xl: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 8px 10px -1px hsl(20 18% 30% / 0.11);
  --shadow-2xl: 2px 2px 0px 0px hsl(20 18% 30% / 0.28);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

---

npx shadcn@latest add https://tweakcn.com/r/themes/cmmghpcmz000304ldgxplajpo

@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9859 0.0076 48.6568);
  --foreground: oklch(0.4279 0.0265 46.6194);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.4279 0.0265 46.6194);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.4279 0.0265 46.6194);
  --primary: oklch(0.7508 0.1610 2.6024);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9449 0.0110 54.4941);
  --secondary-foreground: oklch(0.4279 0.0265 46.6194);
  --muted: oklch(0.9687 0.0086 44.8919);
  --muted-foreground: oklch(0.6608 0.0272 49.5764);
  --accent: oklch(0.9239 0.0415 1.1045);
  --accent-foreground: oklch(0.5367 0.1530 7.7575);
  --destructive: oklch(0.6256 0.1933 23.0261);
  --destructive-foreground: oklch(0.9921 0.0017 325.5900);
  --border: oklch(0.9138 0.0146 50.7928);
  --input: oklch(0.9138 0.0146 50.7928);
  --ring: oklch(0.7508 0.1610 2.6024);
  --chart-1: oklch(0.7508 0.1610 2.6024);
  --chart-2: oklch(0.5367 0.1530 7.7575);
  --chart-3: oklch(0.7621 0.0581 33.4626);
  --chart-4: oklch(0.8619 0.0551 21.0638);
  --chart-5: oklch(0.8871 0.0223 35.1202);
  --sidebar: oklch(0.9794 0.0060 43.3363);
  --sidebar-foreground: oklch(0.4279 0.0265 46.6194);
  --sidebar-primary: oklch(0.7508 0.1610 2.6024);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9239 0.0415 1.1045);
  --sidebar-accent-foreground: oklch(0.5367 0.1530 7.7575);
  --sidebar-border: oklch(0.9267 0.0154 48.5515);
  --sidebar-ring: oklch(0.7508 0.1610 2.6024);
  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0px;
  --shadow-y: 2px;
  --shadow-blur: 10px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.03;
  --shadow-color: 0 0% 0%;
  --shadow-2xs: 0px 2px 10px 0px hsl(0 0% 0% / 0.01);
  --shadow-xs: 0px 2px 10px 0px hsl(0 0% 0% / 0.01);
  --shadow-sm: 0px 2px 10px 0px hsl(0 0% 0% / 0.03), 0px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow: 0px 2px 10px 0px hsl(0 0% 0% / 0.03), 0px 1px 2px -1px hsl(0 0% 0% / 0.03);
  --shadow-md: 0px 2px 10px 0px hsl(0 0% 0% / 0.03), 0px 2px 4px -1px hsl(0 0% 0% / 0.03);
  --shadow-lg: 0px 2px 10px 0px hsl(0 0% 0% / 0.03), 0px 4px 6px -1px hsl(0 0% 0% / 0.03);
  --shadow-xl: 0px 2px 10px 0px hsl(0 0% 0% / 0.03), 0px 8px 10px -1px hsl(0 0% 0% / 0.03);
  --shadow-2xl: 0px 2px 10px 0px hsl(0 0% 0% / 0.07);
  --tracking-normal: -0.01em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.1979 0.0107 39.2759);
  --foreground: oklch(0.9135 0.0123 43.2722);
  --card: oklch(0.2379 0.0124 44.5317);
  --card-foreground: oklch(0.9135 0.0123 43.2722);
  --popover: oklch(0.2379 0.0124 44.5317);
  --popover-foreground: oklch(0.9135 0.0123 43.2722);
  --primary: oklch(0.7508 0.1610 2.6024);
  --primary-foreground: oklch(0.1979 0.0107 39.2759);
  --secondary: oklch(0.2696 0.0148 39.2735);
  --secondary-foreground: oklch(0.9135 0.0123 43.2722);
  --muted: oklch(0.2696 0.0148 39.2735);
  --muted-foreground: oklch(0.6608 0.0272 49.5764);
  --accent: oklch(0.2964 0.0372 5.9697);
  --accent-foreground: oklch(0.8436 0.0913 2.8077);
  --destructive: oklch(0.6256 0.1933 23.0261);
  --destructive-foreground: oklch(0.9921 0.0017 325.5900);
  --border: oklch(0.2937 0.0152 45.3658);
  --input: oklch(0.2937 0.0152 45.3658);
  --ring: oklch(0.7508 0.1610 2.6024);
  --chart-1: oklch(0.7508 0.1610 2.6024);
  --chart-2: oklch(0.8436 0.0913 2.8077);
  --chart-3: oklch(0.7621 0.0581 33.4626);
  --chart-4: oklch(0.4279 0.0265 46.6194);
  --chart-5: oklch(0.2937 0.0152 45.3658);
  --sidebar: oklch(0.1740 0.0094 42.9895);
  --sidebar-foreground: oklch(0.9135 0.0123 43.2722);
  --sidebar-primary: oklch(0.7508 0.1610 2.6024);
  --sidebar-primary-foreground: oklch(0.1979 0.0107 39.2759);
  --sidebar-accent: oklch(0.2964 0.0372 5.9697);
  --sidebar-accent-foreground: oklch(0.8436 0.0913 2.8077);
  --sidebar-border: oklch(0.2696 0.0148 39.2735);
  --sidebar-ring: oklch(0.7508 0.1610 2.6024);
  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.5rem;
  --shadow-x: 0px;
  --shadow-y: 4px;
  --shadow-blur: 15px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.3;
  --shadow-color: 0 0% 0%;
  --shadow-2xs: 0px 4px 15px 0px hsl(0 0% 0% / 0.15);
  --shadow-xs: 0px 4px 15px 0px hsl(0 0% 0% / 0.15);
  --shadow-sm: 0px 4px 15px 0px hsl(0 0% 0% / 0.30), 0px 1px 2px -1px hsl(0 0% 0% / 0.30);
  --shadow: 0px 4px 15px 0px hsl(0 0% 0% / 0.30), 0px 1px 2px -1px hsl(0 0% 0% / 0.30);
  --shadow-md: 0px 4px 15px 0px hsl(0 0% 0% / 0.30), 0px 2px 4px -1px hsl(0 0% 0% / 0.30);
  --shadow-lg: 0px 4px 15px 0px hsl(0 0% 0% / 0.30), 0px 4px 6px -1px hsl(0 0% 0% / 0.30);
  --shadow-xl: 0px 4px 15px 0px hsl(0 0% 0% / 0.30), 0px 8px 10px -1px hsl(0 0% 0% / 0.30);
  --shadow-2xl: 0px 4px 15px 0px hsl(0 0% 0% / 0.75);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    letter-spacing: var(--tracking-normal);
  }
}

---