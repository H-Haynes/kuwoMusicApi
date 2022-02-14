const BaseController = require('./BaseController')

export default class Mv extends BaseController {
  async getMvUrl () {
    const { ctx, service } = this

    const { rid } = ctx.query

    if (!rid) {
      ctx.body = {
        code: 500,
        message: '参数错误',
        result: null,
        success: false,
      }
      return
    }
    const res = await service.mv.getMvUrl(rid)
    ctx.body = res
  }

  async getKGMvInfo () {
    const result = await this.ctx.service.mv.getKGMvInfo(this.ctx.request.query.id)
    this.ctx.body = result.data.toString()
  }
}
