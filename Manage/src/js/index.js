import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/index.less'
import { ajaxPromise } from './ajaxPromise'
import './loadVue'
!window.Vue && (window.Vue = require('./vue'))
!window.ajaxPromise && (window.ajaxPromise = ajaxPromise)