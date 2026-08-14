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
  ignores: [
    '.output/**',
    '.sa-packages/**',
    '.storybook/**',
    '.tanstack/**',
    '.turbo/**',
    'convex/_generated/**',
    'dist/**',
    'eslint.config.js',
    'node_modules/**',
    'src/routeTree.gen.ts',
    'storybook-static/**',
  ],
})
