const cozeWebSDK = new CozeWebSDK.WebChatClient({
    /**
     * 代理配置项。
     * @param config.bot_id - 代理ID。
     */
    config: {
        bot_id: '7355054488501764096',
    },
    /**
     * auth属性用于配置身份验证方式。
     * @param type - 身份验证方式，默认值为'unauth'，表示不需要身份验证；推荐设置为'token'，表示通过PAT（个人访问令牌）或OAuth进行身份验证。
     * @param token - 当type设置为'token'时，需要配置PAT（个人访问令牌）或OAuth访问密钥。
     * @param onRefreshToken - 当访问密钥过期时，可以根据需要设置一个新的密钥。
     */
    // auth:  {
    //   type: 'token',
    //   token: '',
    //   onRefreshToken: async () => '',
    // },
    /**
     * userInfo参数用于设置代理用户信息在聊天框中的显示。
     * @param userInfo.id - 代理用户ID。
     * @param userInfo.url - 用户头像的URL地址。
     * @param userInfo.nickname - 代理用户的昵称。
     */
    userInfo: {
        id: 'user',
        url: 'https://github.com/away-star/coze-ai/blob/main/%E4%BA%BA.png?raw=true',
        nickname: '访客',
    },
    ui: {
        /**
         * ui.base参数用于设置聊天窗口的整体UI效果。
         * @param base.icon - 应用图标URL。
         * @param base.layout - 代理聊天框的布局风格，可以设置为'pc'或'mobile'。
         * @param base.lang - 代理的系统语言，可以设置为'en'或'zh-CN'。
         * @param base.zIndex - 聊天框的z-index。
         */
        base: {
            icon: 'https://github.com/away-star/coze-ai/blob/main/%E6%99%BA%E8%83%BD%E5%8A%A9%E6%89%8B.png?raw=true',
            layout: 'mobile',
            lang: 'zh-CN',
            // zIndex: 1000,
        },
        /**
         * 控制聊天框的UI及基本功能。
         * @param chatBot.title - 聊天框的标题。
         * @param chatBot.uploadable - 是否支持文件上传。
         * @param chatBot.width - PC端代理窗口的宽度，单位为px，默认值为460。
         * @param chatBot.el - 设置聊天框放置位置的容器（Element）。
         */
        chatBot: {
            title: '云小智',
            uploadable: true,
            width: 390
        },
        /**
         * 控制是否显示页面右下角的浮动按钮。
         */
        asstBtn: {
            isNeed: false,
        },
        /**
         * ui.footer参数用于设置聊天窗口的底部信息。
         * @param footer.isShow - 是否显示底部版权模块。
         * @param footer.expressionText - 底部显示的文字信息。
         * @param footer.linkvars - 底部链接及链接地址。
         */
        footer: {
            isShow: false,
            expressionText: 'Powered by 云小智',
            linkvars: {
                name: {
                    text: 'A',
                    link: 'https://www.test1.com'
                },
                name1: {
                    text: 'B',
                    link: 'https://www.test2.com'
                }
            }
        }
    },
    header: {
        isNeedClose: false
    },
});


window.onload = function() {
    cozeWebSDK.showChatBot();
};