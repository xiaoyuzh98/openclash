window.config = {
  // 网站标题
  siteName: 'Subconverter Web',
  // API 地址
  apiUrl: 'http://127.0.0.1:3001',
  // 短域名服务地址
  shortUrl: 'https://s.ops.ci',
  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/stilleshan/subweb',
      target: '_blank',
    },
  ],
  // 远程配置地址,可以自行按照格式添加。
  remoteConfigOptions: [
    {
      value: 'https://raw.githubusercontent.com/xiaoyuzh98/openclash/refs/heads/main/clash_rules.ini',
      text: 'Rules',
    }
  ],
};