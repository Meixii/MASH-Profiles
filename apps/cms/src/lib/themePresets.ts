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

export const themePresetOptions = Object.values(themePresetPalettes).map((palette) => ({
  label: palette.label,
  value: palette.value,
}))

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
