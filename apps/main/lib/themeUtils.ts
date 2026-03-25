import type React from 'react'
import { getThemePresetDarkVars } from './themePresets'

export function buildProfileThemeVars(
  themePreset: string | null | undefined
): React.CSSProperties {
  const vars = getThemePresetDarkVars(themePreset)
  if (!vars) return {}
  return vars as React.CSSProperties
}
