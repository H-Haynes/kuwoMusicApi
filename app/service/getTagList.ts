const BaseService = require('./BaseService')

export default class TagList extends BaseService {
  async index () {
    return this.commonRequest('http://www.kuwo.cn/api/www/playlist/getTagList?&httpsStatus=1')
  }

  async getKGHotTag () {
    return this.ctx.curl('http://mobilecdnbj.kugou.com/api/v3/tag/recommend?showtype=3&apiver=2&plat=0')
  }

  async getKGHighTag () {
    return this.ctx.curl('http://mobilecdnbj.kugou.com/api/v3/tag/list?pid=0&apiver=2&plat=0')
  }
}
