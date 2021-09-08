
const isProd = process.env.NODE_ENV === 'production'
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';


module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/game-board-lesson' :'',
  basePath: isProd ? '/game-board-lesson' : '',
  images: {
    loader: 'imgix'
  },
}