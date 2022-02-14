const BaseService = require('./BaseService')

export default class AlbumInfo extends BaseService {
  async getList ({ albumId, pn, rn }) {
    return this.commonRequest(`http://www.kuwo.cn/api/www/album/albumInfo?albumId=${albumId}&pn=${pn}&rn=${rn}&httpsStatus=1`)
  }

  async getKGAlbumList (page = 1) {
    return this.ctx.curl(`http://m.kugou.com/plist/index&json=true&page=${page}`)
  }

  async getKGAlbumListByTag (tagid, page = 1) {
    return this.ctx.curl(`http://mobilecdnbj.kugou.com/api/v3/tag/specialList?plat=0&page=${page}&tagid=${tagid}&pagesize=30&ugc=1&id=68&sort=2`)
  }

  async getKGAlbumInfo (albumId) {
    return this.ctx.curl(`http://m.kugou.com/plist/list/125032?json=true&specialid=${albumId}`)
  }
}
