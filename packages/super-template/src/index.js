import './style.less'
import Button from './Components/Button/index'
import Dialog from './Components/Dialog/index'
import Image from './Components/Image/index'


import getSchma from './util/getSchema'

const schameMap = [
    getSchma(Button),
    getSchma(Dialog),
    getSchma(Image)
]

export {
    schameMap,
    Button,
    Dialog,
    Image
}