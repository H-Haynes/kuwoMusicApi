const BaseController = require('./BaseController')
const Base64 = require('../base64')
const base64 = new Base64()
export default class Lrc extends BaseController {
  async index () {
    const { ctx, service } = this
    const { musicId } = ctx.query

    if (!musicId) {
      ctx.body = {
        code: 500,
        message: '参数错误',
        result: null,
        success: false,
      }
      return false
    }

    const res = await service.lrc.LrcRes(musicId)

    ctx.body = res
  }

  async getKgLyric () {
    const searchResult = await this.service.lrc.searchKGLyric(this.ctx.query.id)
    const list = JSON.parse(searchResult.data.toString()).candidates
    const key = list[0].accesskey
    const id = list[0].id
    // console.log(list[0])
    // console.log(key, id)
    const res = await this.service.lrc.getKGLyric(key, id)
    const lyric = JSON.parse(res.data.toString()).content
    // console.log(res)
    this.ctx.body = {
      code: 200,
      result: base64.decode(lyric),
    }
  }
}
