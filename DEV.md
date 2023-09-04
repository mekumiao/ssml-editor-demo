# 开发文档

> `src/mock` 文件夹是一些预设数据(假数据,可参考),如果暂时看不懂,可忽略.

下列文档中**配音师**就是**语音包**的意思

## 结构解释

```txt
.
└── src
    ├── api
    │   └──index.ts  // api汇总
    │
    ├── mock  // 预设数据,如果看起来复杂,可以忽略它
    │
    ├── App.vue  // 主视图
    ├── config.ts  // 编辑器配置(各种请求,菜单项配置)
    └── main.ts   // 程序入口

```

## API介绍

| 名称              | 描述                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| pinyin            | 传入一个中文字符,返回拼音数组                                                                          |
| english           | 传入一个英文单词,返回音标数组                                                                          |
| bgm               | 背景音乐菜单请求数据用                                                                                 |
| special           | 音效菜单请求数据用                                                                                     |
| scene             | 背景音乐,音效菜单请求 **场景** 数据用                                                                  |
| style             | 背景音乐,音效菜单请求 **风格** 数据用                                                                  |
| tag               | 试听面板请求的tag数据(影视,情感等)                                                                     |
| speaker           | 请求配音师(语音包)数据                                                                                 |
| star              | 收藏配音师                                                                                             |
| upload            | 上传文件                                                                                               |
| transfer          | 用于在局部变音中将upload接口上传的音频转换为指定配音师的音色效果                                       |
| conversionSpeaker | 在局部变音功能中获取配音师列表(这里没有复用上面的speaker接口,因为考虑到仅有部分配音师支持transfer接口) |
| play              | 播放音频. 传入ssml,返回一个音频链接                                                                    |

## API数据MODEL

api一共有3种返回类型: LabelValue, Speaker, AudioInfo. 可在 `src/api/index.ts` 中将鼠标放在模型上,`ctrl+鼠标右键` 即可查看实体属性

1.`LabelValue`. 用于 拼音, 音标, 背景音乐, 音效等地方

| 字段  | 类型   | 描述   |
| ----- | ------ | ------ |
| label | string | 显示值 |
| value | string | 实际值 |

2.`Speaker`. 配音师实体模型

| 字段        | 类型                           | 描述                                                         |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| id          | string                         | 配音师ID (唯一标识,会在star,transfer API 中作为参数传递过来) |
| name        | string                         | 配音师真实名称(SSML中voice的name属性值)                      |
| displayName | string                         | 显示名                                                       |
| category    | string                         | 分类(常用,已购,等.可在`config.ts`中自定义)                   |
| avatar      | string                         | 头像链接                                                     |
| isFree      | boolean                        | 是否免费                                                     |
| isStar      | boolean                        | 是否收藏                                                     |
| isSupper24K | boolean                        | 是否支持24K音质                                              |
| roles       | Array&lt;LabelValue & { avatar: string }&gt; | 角色Array                                                    |
| styles      | Array&lt;LabelValue & { avatar: string }&gt; | 风格Array                                                    |

3.`AudioInfo`. 用于局部变音返回音频信息

| 字段 | 类型   | 描述                                   |
| ---- | ------ | -------------------------------------- |
| id   | string | 音频ID (将作为 transfer API的参数传入) |
| src  | string | 音频url                                |

## config.ts 配置文件介绍

我在`src/config.ts`中加了注释,详请见注释

![](https://gcore.jsdelivr.net/gh/mekumiao/img-hosting/upload/20230904142425.png)
