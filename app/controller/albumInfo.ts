const BaseController = require('./BaseController')

export default class AlbumInfo extends BaseController {
  async index () {
    const { ctx, service } = this
    const { albumId, pn = 1, rn = 30 } = ctx.query

    if (!albumId) {
      ctx.body = {
        code: 500,
        message: '参数错误',
        result: null,
        success: false,
      }
      return false
    }
    const res = await service.albumInfo.getList({ albumId, pn, rn })
    ctx.body = res
  }

  async getKGAlbumList () {
    const res = await this.ctx.service.albumInfo.getKGAlbumList(this.ctx.request.query.page)
    this.ctx.body = res.data.toString()
  }

  async getKGAlbumListByTag () {
    const res = await this.ctx.service.albumInfo.getKGAlbumListByTag(this.ctx.request.query.tagid, this.ctx.request.query.page)
    this.ctx.body = res.data.toString()
  }

  async getKGAlbumInfo () {
    const res = await this.ctx.service.albumInfo.getKGAlbumInfo(this.ctx.request.query.albumId)
    this.ctx.body = res.data.toString()
  }
}
