import axios from 'axios'

export const BREAKPOINTS = {
    xs: 552,
    sm: 768, 
    md: 992,
    lg: 1250,
}

export const MAX_WIDTH_CONTAINER = 1200

export const FONTS = {
    h1: 46,
    h2: 32,
    h3: 18,
    p: 14,
}

export const COLORS = {
    dark: '#1D1D20',
    darken: '#1D1D1F',
    white: '#ffffff',
    black: '#000000',
    lighten: '#eff7f7',
}

axios.defaults.baseURL = 'https://api.teamtailor.com/v1'
axios.defaults.headers.common['Authorization'] = "Token token=6Q185JczKY8NpY-CPQaxMCwJYzIT-juueOVI2SAv"
axios.defaults.headers.common['Accept'] = 'application/vnd.api+json'
axios.defaults.headers.common["X-Api-Version"] = 20161108