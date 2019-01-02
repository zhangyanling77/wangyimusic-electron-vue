import http from '../utils/http'

// 邮箱登录
export function login(email, password) {
    return http.get('/login?email=' + email + '&password=' + password)
}
// 获取轮播图
export function banner() {
    return http.get('/banner')
}
// 推荐歌单
export function personalized() {
    return http.get('/personalized')
}

// 新歌速递,全部:0 华语:7 欧美:96 日本:8 韩国:16
export function newSongs(type, limit=20, offset=0) {
    return http.get('/top/song?type='+ type + '&limit='+ limit +'&offset='+offset)
}

export function getPlaylistDetail(id) {
    return http.get('/playlist/detail?id=' + id)
}

export function getPlaylistHot() {
    return http.get('/playlist/hot')
}

export function getTopPlaylistHighquality(cat = '全部', limit = 30) {
    return http.get('/top/playlist/highquality?cat=' + cat + "&limit=" + limit)
}
// 喜欢某首歌
export function like(id) {
    return http.get('/like?id=' + id)
}
// 排行榜某个榜单 "0": 新歌榜,"1": 热歌榜,"2": 原创榜,"3": 飙升榜,"4": 电音榜
export function toplist(idx) {
    return http.get('/top/list?idx=' + idx)
}

// 全部排行榜榜单
export function globalTopList() {
    return http.get('/toplist')
}
// 获取歌手列表
export function singerlist(cat,offset) {
    if(cat==0){
        return http.get('/top/artists?offset=0')
    }
    return http.get('/artist/list?cat=' + cat+'&offset='+offset)
}
// 歌曲详情
export function getSongDetail(ids) {
    return http.get('/song/detail?ids=' + ids)
}
// 获取音乐地址
export function getMusicUrl(id, br = 999000) {
    return http.get('/music/url?id=' + id + '&br=' + br)
}
// 获取dj列表
export function djlist(catid) {
    if(catid==0){
        return http.get('/dj/recommend')
    }else{
        return http.get('/dj/recommend/type?type='+catid)
    }
}

// 获取推荐电台
export function getRecommendDj() {
    return http.get('/personalized/djprogram')
}

// 获取推荐节目
export function getRecommendProgram() {
    return http.get('/program/recommend')
}

export function djcat() {
    return http.get('/dj/catelist')
}
