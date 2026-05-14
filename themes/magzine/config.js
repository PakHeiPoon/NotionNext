const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/category/product',
  MAGZINE_HOME_BUTTON_TEXT: '看我的项目',

  MAGZINE_HOME_HIDDEN_CATEGORY: '', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: '在比特与代码之间，折腾留痕。',
  MAGZINE_HOME_DESCRIPTION:
    'Dongao 的技术档案 · Web3 / AI Agent / 安卓逆向 / 独立项目实验',
  MAGZINE_HOME_TIPS: '$ ./welcome.sh  —— 一个普通的互联网折腾者',

  MAGZINE_HERO_SUB_POST_COUNT: 2, // 首屏英雄区次要文章数量，通常2篇，如果关闭Banner，推荐改为3篇

  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '推荐',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '推荐阅读',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false,

  // Style — 右侧面板默认深色，营造 hacker 感
  MAGZINE_RIGHT_PANEL_DARK: true,

  MAGZINE_POST_LIST_COVER: true,
  MAGZINE_POST_LIST_PREVIEW: true,
  MAGZINE_POST_LIST_CATEGORY: true,
  MAGZINE_POST_LIST_TAG: true,

  MAGZINE_POST_DETAIL_CATEGORY: true,
  MAGZINE_POST_DETAIL_TAG: true,

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: true,
  MAGZINE_SOCIAL_CARD_TITLE_1: 'GitHub',
  MAGZINE_SOCIAL_CARD_TITLE_2: 'Follow my hacking journey',
  MAGZINE_SOCIAL_CARD_TITLE_3: '前往 GitHub',
  MAGZINE_SOCIAL_CARD_URL: 'https://github.com/PakHeiPoon',

  // 页脚菜单 — 全部替换为站内导航
  MAGZINE_FOOTER_LINKS: [
    {
      name: '导航',
      menus: [
        { title: '全部博文', href: '/' },
        { title: '项目集', href: '/category/product' },
        { title: '归档', href: '/archive' },
        { title: '关于我', href: '/about' }
      ]
    },
    {
      name: '专题',
      menus: [
        { title: 'Web3', href: '/category/WEB3' },
        { title: '技术分享', href: '/category/技术分享' },
        { title: '安卓逆向', href: '/category/安卓逆向' },
        { title: '心情随笔', href: '/category/心情随笔' }
      ]
    },
    {
      name: '联系',
      menus: [
        { title: 'GitHub', href: 'https://github.com/PakHeiPoon' },
        { title: 'RSS', href: '/feed' },
        { title: '友情链接', href: '/tag/友链' }
      ]
    }
  ],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: true,
  MAGZINE_MENU_TAG: true,
  MAGZINE_MENU_ARCHIVE: true,
  MAGZINE_MENU_SEARCH: true,

  MAGZINE_WIDGET_TO_TOP: true
}
export default CONFIG
