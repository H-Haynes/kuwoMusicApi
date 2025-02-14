const BaseService = require('./BaseService')

export default class Rank extends BaseService {
  // 榜单
  async index () {
    return this.commonRequest('http://www.kuwo.cn/api/www/bang/bang/bangMenu?&httpsStatus=1')
  }

  // 排行榜音乐
  async getRankMusicList ({ bangId, pn, rn }) {
    return this.commonRequest(`http://www.kuwo.cn/api/www/bang/bang/musicList?bangId=${bangId}&pn=${pn}&rn=${rn}&httpsStatus=1`, {
      headers: {
        Referer: 'http://www.kuwo.cn/rankList',
      },
    })
  }

  // 推荐榜单 --首页
  async getRecBangList () {
    return this.commonRequest('http://www.kuwo.cn/api/www/bang/index/bangList?&httpsStatus=1', {
      headers: {
        Referer: 'http://www.kuwo.cn/rankList',
      },
    })
  }

  // 获取酷狗排行榜列表
  async getKgRankList () {
    return this.ctx.curl('http://m.kugou.com/rank/list&json=true')
  }

  async getKgRankInfo (rankid) {
    return this.ctx.curl(`http://m.kugou.com/rank/info/?rankid=${rankid}&page=1&json=true`)
  }
}
