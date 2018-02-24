/**
 * 系统配置
 */

 /**
  * 接口相关
  */
//export const APP_SERVE_URL = 'http://192.168.1.252:9201/health-server/api/pub/';// API接口地址-本地252服务器
//export const APP_SERVE_URL = 'http://1c7231885i.iok.la:17763/health-server/api/pub/';// API接口地址-测试外网
export const APP_SERVE_URL = 'api/';// API接口地址-本地开发
export const REQUEST_TIMEOUT = 12000;// 请求超时时间,单位为毫秒

/**
 * 业务相关
 */
export const PAGE_SIZE= 10;// 默认分页大小
export const DEFAULT_AVATAR = './assets/img/avatar.png';// 用户默认头像
export const IMAGE_SIZE = 1024;// 拍照|从相册选择照片压缩大小
export const QUALITY_SIZE = 94;// 图像压缩质量，范围为0 - 100

/**
 * app版本相关
 */
export const APK_DOWNLOAD = '';// android apk下载完整地址,用于android本地升级
export const APP_DOWNLOAD = '';// app网页下载地址,用于ios升级或android本地升级失败
export const APP_VERSION_SERVE_URL = '';// app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.

/**
 * 字典码表
 */
export const GLOBAL_DICSMAP={
  "STATECODE": {// 状态代码
    "200": "成功",
    "201": "失败",
    "202": "认证失败"
  },
  "GENDER": {// 性别类型
    "01": "男",
    "02": "女"
  },
  "USERNEWSTYPE": {// 用户消息状态
    "01": "未读",
    "02": "已读"
  },
  "VERIFYSTATE":{
    "01": "未认证",
    "02": "待审核",
    "03": "审核失败",
    "04": "审核通过",
  }
};
