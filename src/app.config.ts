export default {
  pages: [
    'pages/load/index',
    'pages/home/index',
    'pages/list/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './image/home_normal.png',
        selectedIconPath: './image/home_selected.png'
      },
      {
        pagePath: 'pages/list/index',
        text: '列表',
        iconPath: './image/list_normal.png',
        selectedIconPath: './image/list_selected.png'
      }]
  }
}
