//import
const path = require('path')
const _dirname = path.resolve();
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// _dirname 은 해당하는 파일의 실제 경로를 나타내는 
// node.js의 전역적 변수




// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // = parcel main.js
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(_dirname, 'dist'),
    // filename: 'main.js',
    clean: true // 새로운 빌드명령을 돌렸을때 이전 것 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css로 끝나는 확장자 찾기
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }

      ]
    })
  ],

  devServer : {
    host: 'localhost'
  }
}




