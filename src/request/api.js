import { get, post, getDynamicynamic, getFileUseBlobByPost } from './http'

// export const getData = (p) => get('/home/category/head', p)
export const getCategoryAPI = (p) => get('/home/category/head', p) //获取分类
export const getBannerAPI = (p) => get('/home/banner', p) //获取banner
export const getnewAPI = (p) => get('/home/new', p) //获取banner
