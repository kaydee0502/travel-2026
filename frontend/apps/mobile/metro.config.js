const { getDefaultConfig } = require('expo/metro-config')
const { withTamagui } = require('@tamagui/metro-plugin')
const path = require('path')

const config = getDefaultConfig(__dirname)

config.watchFolders = [path.resolve(__dirname, '../../packages')]

module.exports = withTamagui(config, {
  config: '../../packages/config/tamagui.config.ts',
})
