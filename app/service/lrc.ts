const BaseService = require('./BaseService')

export default class Lrc extends BaseService {
  async LrcRes (musicId) {
    return this.commonRequest(`http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId=${musicId}&httpsStatus=1`)
  }

  async searchKGLyric (id) {
    return this.ctx.curl(`http://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=Impossible&duration=228022&hash=${id}`)
  }

  async getKGLyric (key, id) {
    return this.ctx.curl(`http://lyrics.kugou.com/download?ver=1&client=pc&id=${id}&accesskey=${key}&fmt=lrc&charset=utf8`)
  }
}
