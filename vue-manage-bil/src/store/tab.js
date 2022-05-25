import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        tabslist: [
            {
                path: '/',
                name: 'home-',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menu: [],
    },
    mutations: {
        CollapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'home-') {
                state.currentMenu = val
                const result = state.tabslist.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabslist.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        CloseTag(state, val) {
            const result = state.tabslist.findIndex(item => item.name === val.name)
            state.tabslist.splice(result, 1)
        },
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                // console.log(item);
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            // console.log(menuArray);
            //路由的动态添加
            menuArray.forEach(item => {
                //console.log(item);
                router.addRoute('Main', item)
                //console.log(router);
            })
        }
    }
}