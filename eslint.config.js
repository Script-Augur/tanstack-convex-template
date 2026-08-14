// @ts-check

import convexPlugin from '@convex-dev/eslint-plugin'
import { createScriptAugurEslintConfig } from '@script-augur/eslint-config'
import { tanstackConfig } from '@tanstack/eslint-config'
import reactPlugin from 'eslint-plugin-react'

export default createScriptAugurEslintConfig({
  tanstackConfig,
  convexConfigs: convexPlugin.configs.recommended,
  reactPlugin,
  aliasPattern: '@/**',
})
