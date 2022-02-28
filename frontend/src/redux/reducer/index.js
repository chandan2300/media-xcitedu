import { combineReducers } from 'redux'
import {
    allBlogsReducer,
    topMainBlogReducer,
    topSubBlogReducer,
    NewsBlogsReducer,
    BusinessBlogsReducer,
    SociologyBlogsReducer,
    TechBlogsReducer,
    EconomicBlogsReducer,
    singleBlogReducer,
    latestBlogReducer
} from './Reducer'
import {
    userLoginReducer,
    userRegisterReducer
} from "./userReducers"

const reducer = combineReducers({
    Blogs: allBlogsReducer,
    MainBlog: topMainBlogReducer,
    SubBlogs: topSubBlogReducer,
    NewsBlogs: NewsBlogsReducer,
    BusinessBlogs: BusinessBlogsReducer,
    SociologyBlogs: SociologyBlogsReducer,
    TechBlogs: TechBlogsReducer,
    EconomicBlogs: EconomicBlogsReducer,
    SingleBlog: singleBlogReducer,
    LatestBlog: latestBlogReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

export default reducer;