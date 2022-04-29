module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 对应设计稿的宽度
      viewportHeight: 667, // 对应设计稿的高度
      unitPrecision: 5, // 指定px转换成视窗单位值的小数位数
      viewportUnit: 'vw', // 指定转换的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false // 允许在媒体查询中转换px

    }
  }
}
