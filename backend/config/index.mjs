import configProd from './prod.mjs'
import configDev from './dev.mjs'


export var config 

if (false && process.env.NODE_ENV === 'production') {
  config = configDev
  // config = configProd
} else {
  config = configDev
}
config.isGuestMode = true