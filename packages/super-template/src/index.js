import Button from './Components/Button/index'
import Dialog from './Components/Dialog/index'


import getSchma from './util/getSchema'

const schameMap = [
    getSchma(Button),
    getSchma(Dialog)
]

export {
    Button,
    Dialog,
    schameMap
}