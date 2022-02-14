const BaseService = require('./BaseService')

export default class PlayUrl extends BaseService {
  async getPlayUrl (mid, type = 'music') {
    return this.commonRequest(`http://www.kuwo.cn/api/v1/www/music/playUrl?mid=${mid}&type=${type}&httpsStatus=1`)
  }

  async getKGPlayInfo (id) {
    return this.ctx.curl(`http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=${id}`)
  }
}
