export type ThemePresetKey =
  | 'elegantLuxury'
  | 'modernMinimal'
  | 'tangerine'
  | 'nature'
  | 'quantumRose'
  | 'sunsetHorizon'
  | 'mochaMousse'

export type ThemePresetPalette = {
  accentColor: string
  backgroundColor: string
  label: string
  textColor: string
  value: ThemePresetKey
}

export type ThemeColorSource = {
  accentColor?: string | null
  backgroundColor?: string | null
  textColor?: string | null
  themePreset?: string | null
}

export type ThemeColorFallbacks = {
  accentColor: string
  backgroundColor: string
  textColor: string
}

export const themePresetPalettes: Record<ThemePresetKey, ThemePresetPalette> = {
  elegantLuxury: {
    accentColor: 'oklch(0.4650 0.1470 24.9381)',
    backgroundColor: 'oklch(0.9779 0.0042 56.3756)',
    label: 'Elegant Luxury',
    textColor: 'oklch(0.2178 0 0)',
    value: 'elegantLuxury',
  },
  modernMinimal: {
    accentColor: 'oklch(0.6231 0.1880 259.8145)',
    backgroundColor: 'oklch(1.0000 0 0)',
    label: 'Modern Minimal',
    textColor: 'oklch(0.3211 0 0)',
    value: 'modernMinimal',
  },
  tangerine: {
    accentColor: 'oklch(0.6397 0.1720 36.4421)',
    backgroundColor: 'oklch(0.9383 0.0042 236.4993)',
    label: 'Tangerine',
    textColor: 'oklch(0.3211 0 0)',
    value: 'tangerine',
  },
  nature: {
    accentColor: 'oklch(0.5234 0.1347 144.1672)',
    backgroundColor: 'oklch(0.9711 0.0074 80.7211)',
    label: 'Nature',
    textColor: 'oklch(0.3000 0.0358 30.2042)',
    value: 'nature',
  },
  quantumRose: {
    accentColor: 'oklch(0.6002 0.2414 0.1348)',
    backgroundColor: 'oklch(0.9692 0.0192 343.9344)',
    label: 'Quantum Rose',
    textColor: 'oklch(0.4426 0.1653 352.3762)',
    value: 'quantumRose',
  },
  sunsetHorizon: {
    accentColor: 'oklch(0.7357 0.1641 34.7091)',
    backgroundColor: 'oklch(0.9856 0.0084 56.3169)',
    label: 'Sunset Horizon',
    textColor: 'oklch(0.3353 0.0132 2.7676)',
    value: 'sunsetHorizon',
  },
  mochaMousse: {
    accentColor: 'oklch(0.6083 0.0623 44.3588)',
    backgroundColor: 'oklch(0.9529 0.0146 102.4597)',
    label: 'Mocha Mousse',
    textColor: 'oklch(0.4063 0.0255 40.3627)',
    value: 'mochaMousse',
  },
}

export type ThemePresetVars = {
  '--background': string
  '--foreground': string
  '--card': string
  '--card-foreground': string
  '--popover': string
  '--popover-foreground': string
  '--primary': string
  '--primary-foreground': string
  '--secondary': string
  '--secondary-foreground': string
  '--muted': string
  '--muted-foreground': string
  '--accent': string
  '--accent-foreground': string
  '--destructive': string
  '--destructive-foreground': string
  '--border': string
  '--input': string
  '--ring': string
  '--radius': string
}

export const themePresetDarkVars: Record<ThemePresetKey, ThemePresetVars> = {
  elegantLuxury: {
    '--background':             'oklch(0.2161 0.0061 56.0434)',
    '--foreground':             'oklch(0.9699 0.0013 106.4238)',
    '--card':                   'oklch(0.2685 0.0063 34.2976)',
    '--card-foreground':        'oklch(0.9699 0.0013 106.4238)',
    '--popover':                'oklch(0.2685 0.0063 34.2976)',
    '--popover-foreground':     'oklch(0.9699 0.0013 106.4238)',
    '--primary':                'oklch(0.5054 0.1905 27.5181)',
    '--primary-foreground':     'oklch(0.9779 0.0042 56.3756)',
    '--secondary':              'oklch(0.4732 0.1247 46.2007)',
    '--secondary-foreground':   'oklch(0.9619 0.0580 95.6174)',
    '--muted':                  'oklch(0.2291 0.0060 56.0708)',
    '--muted-foreground':       'oklch(0.8687 0.0043 56.3660)',
    '--accent':                 'oklch(0.5553 0.1455 48.9975)',
    '--accent-foreground':      'oklch(0.9619 0.0580 95.6174)',
    '--destructive':            'oklch(0.6368 0.2078 25.3313)',
    '--destructive-foreground': 'oklch(1.0000 0 0)',
    '--border':                 'oklch(0.3741 0.0087 67.5582)',
    '--input':                  'oklch(0.3741 0.0087 67.5582)',
    '--ring':                   'oklch(0.5054 0.1905 27.5181)',
    '--radius':                 '0.375rem',
  },
  modernMinimal: {
    '--background':             'oklch(0.2046 0 0)',
    '--foreground':             'oklch(0.9219 0 0)',
    '--card':                   'oklch(0.2686 0 0)',
    '--card-foreground':        'oklch(0.9219 0 0)',
    '--popover':                'oklch(0.2686 0 0)',
    '--popover-foreground':     'oklch(0.9219 0 0)',
    '--primary':                'oklch(0.6231 0.1880 259.8145)',
    '--primary-foreground':     'oklch(1.0000 0 0)',
    '--secondary':              'oklch(0.2686 0 0)',
    '--secondary-foreground':   'oklch(0.9219 0 0)',
    '--muted':                  'oklch(0.2393 0 0)',
    '--muted-foreground':       'oklch(0.7155 0 0)',
    '--accent':                 'oklch(0.3791 0.1378 265.5222)',
    '--accent-foreground':      'oklch(0.8823 0.0571 254.1284)',
    '--destructive':            'oklch(0.6368 0.2078 25.3313)',
    '--destructive-foreground': 'oklch(1.0000 0 0)',
    '--border':                 'oklch(0.3715 0 0)',
    '--input':                  'oklch(0.3715 0 0)',
    '--ring':                   'oklch(0.6231 0.1880 259.8145)',
    '--radius':                 '0.375rem',
  },
  tangerine: {
    '--background':             'oklch(0.2598 0.0306 262.6666)',
    '--foreground':             'oklch(0.9219 0 0)',
    '--card':                   'oklch(0.3106 0.0301 268.6365)',
    '--card-foreground':        'oklch(0.9219 0 0)',
    '--popover':                'oklch(0.2900 0.0249 268.3986)',
    '--popover-foreground':     'oklch(0.9219 0 0)',
    '--primary':                'oklch(0.6397 0.1720 36.4421)',
    '--primary-foreground':     'oklch(1.0000 0 0)',
    '--secondary':              'oklch(0.3095 0.0266 266.7132)',
    '--secondary-foreground':   'oklch(0.9219 0 0)',
    '--muted':                  'oklch(0.3095 0.0266 266.7132)',
    '--muted-foreground':       'oklch(0.7155 0 0)',
    '--accent':                 'oklch(0.3380 0.0589 267.5867)',
    '--accent-foreground':      'oklch(0.8823 0.0571 254.1284)',
    '--destructive':            'oklch(0.6368 0.2078 25.3313)',
    '--destructive-foreground': 'oklch(1.0000 0 0)',
    '--border':                 'oklch(0.3843 0.0301 269.7337)',
    '--input':                  'oklch(0.3843 0.0301 269.7337)',
    '--ring':                   'oklch(0.6397 0.1720 36.4421)',
    '--radius':                 '0.75rem',
  },
  nature: {
    '--background':             'oklch(0.2683 0.0279 150.7681)',
    '--foreground':             'oklch(0.9423 0.0097 72.6595)',
    '--card':                   'oklch(0.3327 0.0271 146.9867)',
    '--card-foreground':        'oklch(0.9423 0.0097 72.6595)',
    '--popover':                'oklch(0.3327 0.0271 146.9867)',
    '--popover-foreground':     'oklch(0.9423 0.0097 72.6595)',
    '--primary':                'oklch(0.6731 0.1624 144.2083)',
    '--primary-foreground':     'oklch(0.2157 0.0453 145.7256)',
    '--secondary':              'oklch(0.3942 0.0265 142.9926)',
    '--secondary-foreground':   'oklch(0.8970 0.0166 142.5518)',
    '--muted':                  'oklch(0.2926 0.0212 147.7496)',
    '--muted-foreground':       'oklch(0.8579 0.0174 76.0955)',
    '--accent':                 'oklch(0.5752 0.1446 144.1813)',
    '--accent-foreground':      'oklch(0.9423 0.0097 72.6595)',
    '--destructive':            'oklch(0.5386 0.1937 26.7249)',
    '--destructive-foreground': 'oklch(0.9423 0.0097 72.6595)',
    '--border':                 'oklch(0.3942 0.0265 142.9926)',
    '--input':                  'oklch(0.3942 0.0265 142.9926)',
    '--ring':                   'oklch(0.6731 0.1624 144.2083)',
    '--radius':                 '0.5rem',
  },
  quantumRose: {
    '--background':             'oklch(0.1808 0.0535 313.7159)',
    '--foreground':             'oklch(0.8624 0.1307 326.6356)',
    '--card':                   'oklch(0.2398 0.0661 313.2337)',
    '--card-foreground':        'oklch(0.8624 0.1307 326.6356)',
    '--popover':                'oklch(0.2398 0.0661 313.2337)',
    '--popover-foreground':     'oklch(0.8624 0.1307 326.6356)',
    '--primary':                'oklch(0.7543 0.2319 332.0212)',
    '--primary-foreground':     'oklch(0.1608 0.0493 327.5673)',
    '--secondary':              'oklch(0.3184 0.0915 319.6465)',
    '--secondary-foreground':   'oklch(0.8624 0.1307 326.6356)',
    '--muted':                  'oklch(0.2701 0.0770 312.3525)',
    '--muted-foreground':       'oklch(0.7116 0.1623 327.1132)',
    '--accent':                 'oklch(0.3558 0.1201 325.7655)',
    '--accent-foreground':      'oklch(0.8624 0.1307 326.6356)',
    '--destructive':            'oklch(0.6539 0.2441 7.1740)',
    '--destructive-foreground': 'oklch(0.9821 0 0)',
    '--border':                 'oklch(0.3280 0.1202 313.5393)',
    '--input':                  'oklch(0.3184 0.0915 319.6465)',
    '--ring':                   'oklch(0.7543 0.2319 332.0212)',
    '--radius':                 '0.5rem',
  },
  sunsetHorizon: {
    '--background':             'oklch(0.2569 0.0169 352.4042)',
    '--foreground':             'oklch(0.9397 0.0119 51.3156)',
    '--card':                   'oklch(0.3184 0.0176 341.4465)',
    '--card-foreground':        'oklch(0.9397 0.0119 51.3156)',
    '--popover':                'oklch(0.3184 0.0176 341.4465)',
    '--popover-foreground':     'oklch(0.9397 0.0119 51.3156)',
    '--primary':                'oklch(0.7357 0.1641 34.7091)',
    '--primary-foreground':     'oklch(1.0000 0 0)',
    '--secondary':              'oklch(0.3637 0.0203 342.2664)',
    '--secondary-foreground':   'oklch(0.9397 0.0119 51.3156)',
    '--muted':                  'oklch(0.2848 0.0159 343.6554)',
    '--muted-foreground':       'oklch(0.8378 0.0237 52.6346)',
    '--accent':                 'oklch(0.8278 0.1131 57.9984)',
    '--accent-foreground':      'oklch(0.2569 0.0169 352.4042)',
    '--destructive':            'oklch(0.6122 0.2082 22.2410)',
    '--destructive-foreground': 'oklch(1.0000 0 0)',
    '--border':                 'oklch(0.3637 0.0203 342.2664)',
    '--input':                  'oklch(0.3637 0.0203 342.2664)',
    '--ring':                   'oklch(0.7357 0.1641 34.7091)',
    '--radius':                 '0.625rem',
  },
  mochaMousse: {
    '--background':             'oklch(0.2721 0.0141 48.1783)',
    '--foreground':             'oklch(0.9529 0.0146 102.4597)',
    '--card':                   'oklch(0.3291 0.0156 50.8936)',
    '--card-foreground':        'oklch(0.9529 0.0146 102.4597)',
    '--popover':                'oklch(0.3291 0.0156 50.8936)',
    '--popover-foreground':     'oklch(0.9529 0.0146 102.4597)',
    '--primary':                'oklch(0.7272 0.0539 52.3320)',
    '--primary-foreground':     'oklch(0.2721 0.0141 48.1783)',
    '--secondary':              'oklch(0.5416 0.0512 37.2132)',
    '--secondary-foreground':   'oklch(0.9529 0.0146 102.4597)',
    '--muted':                  'oklch(0.4063 0.0255 40.3627)',
    '--muted-foreground':       'oklch(0.7575 0.0380 50.8610)',
    '--accent':                 'oklch(0.7473 0.0387 80.5476)',
    '--accent-foreground':      'oklch(0.2721 0.0141 48.1783)',
    '--destructive':            'oklch(0.6875 0.1420 21.4566)',
    '--destructive-foreground': 'oklch(0.2721 0.0141 48.1783)',
    '--border':                 'oklch(0.4063 0.0255 40.3627)',
    '--input':                  'oklch(0.4063 0.0255 40.3627)',
    '--ring':                   'oklch(0.7272 0.0539 52.3320)',
    '--radius':                 '0.5rem',
  },
}

export function getThemePresetDarkVars(themePreset: string | null | undefined): ThemePresetVars | null {
  if (!themePreset) return null
  return themePresetDarkVars[themePreset as ThemePresetKey] ?? null
}

export const themePresetOptions = Object.values(themePresetPalettes).map((palette) => ({
  label: palette.label,
  value: palette.value,
}))

export function getThemePresetPalette(themePreset: string | null | undefined) {
  if (!themePreset) {
    return null
  }

  return themePresetPalettes[themePreset as ThemePresetKey] ?? null
}

export function resolveThemeColors(
  source: ThemeColorSource | null | undefined,
  fallbacks: ThemeColorFallbacks
) {
  const preset = getThemePresetPalette(source?.themePreset)

  return {
    accentColor: preset?.accentColor || source?.accentColor || fallbacks.accentColor,
    backgroundColor: preset?.backgroundColor || source?.backgroundColor || fallbacks.backgroundColor,
    textColor: preset?.textColor || source?.textColor || fallbacks.textColor,
    themePreset: preset?.value || null,
    themePresetLabel: preset?.label || 'Custom',
  }
}
