const BaseController = require('./BaseController')

export default class TagList extends BaseController {
  async index () {
    const { ctx, service } = this

    const res = await service.getTagList.index()

    ctx.body = res
  }

  async getKGTagList () {
    let list = []
    let hotResult = await this.ctx.service.getTagList.getKGHotTag()
    hotResult = JSON.parse(hotResult.data.toString())
    list = hotResult.data.info.map(ele => ({
      id: ele.special_tag_id || ele.song_tag_id,
      name: ele.name,
    })).filter(ele => ele.id)
    let highResult = await this.ctx.service.getTagList.getKGHighTag()
    highResult = JSON.parse(highResult.data.toString())
    const highList = highResult.data.info.reduce((prev, cur) => {
      const list = cur.children.map(ele => ({
        id: ele.special_tag_id || ele.song_tag_id,
        name: ele.name,
      })).filter(ele => ele.id)
      return prev.concat(list)
    }, [])
    list = list.concat(highList)
    this.ctx.body = {
      code: 200,
      message: 'success',
      result: list,
    }
  }
}
