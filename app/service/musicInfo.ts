const BaseService = require('./BaseService')

export default class MusicInfo extends BaseService {
  async getList (mid) {
    return this.commonRequest(`http://www.kuwo.cn/api/www/music/musicInfo?mid=${mid}&httpsStatus=1`)
  }

  async getMusicUrl (mid, format = 'mp3') {
    return this.ctx.curl(`http://antiserver.kuwo.cn/anti.s?type=convert_url&rid=${mid}&format=${format}`)
  }
}
