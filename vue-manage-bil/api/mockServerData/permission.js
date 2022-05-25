import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home-',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/mall',
                            name: 'mall-',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user-',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User/index'
                        },
                        // {
                        //     path: '/404',
                        //     name: '404-',
                        //     url: '404/index'
                        // },
                        {
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page-1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'other/pageone'
                                },
                                {
                                    path: '/page2',
                                    name: 'page-2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'other/pagetwo'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'user' && password === 'user') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/home',
                            name: 'home-',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/video',
                            name: 'video-',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        },
                        // {
                        //     path: '/404',
                        //     name: '404-',
                        //     url: '404/index'
                        // },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '用户名或密码错误'
                }
            }
        }

    }
}