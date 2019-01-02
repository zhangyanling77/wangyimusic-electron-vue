import storage from '@/utils/storage';

export default {
    state: {
        is_login: storage.get('profile') ? true : false,
        account: storage.get('account'),
        bindings: storage.get('bindings'),
        profile: storage.get('profile')
    },
    mutations: {
        SET_USER_DATA: (state, data) => {
            Object.keys(data).forEach(function (key) {
                state[key] = data[key]
            })
        },
    },
    actions: {
        SET_LOGIN({
            commit,
            state
        }, res) {

            let data = {
                is_login: true,
                account: res.account,
                bindings: res.bindings,
                profile: res.profile
            }
            storage.set('account', res.account)
            storage.set('bindings', res.bindings)
            storage.set('profile', res.profile)
            commit("SET_USER_DATA", data)

        }
    }
}