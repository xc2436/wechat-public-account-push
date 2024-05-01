/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx896620912f17586d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5a9e2acb10c45225eb0058bdae828fbd',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '刘静宇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oChbu6YIEH7f69rTDPpdgG0uismM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ylN8lxKw8E66-WuRzl4sVCXl9HHnI17IBWv30ql7QCI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-09',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '刘静宇', year: '2006', date: '02-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '04-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-07' },
      ],
    },
  ],


module.exports = USER_CONFIG

