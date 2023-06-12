import configProd from './prod.mjs'
import configDev from './dev.mjs'


export var config

if (process.env.NODE_ENV === 'production') {
  console.log("prod", configProd)
  config = configProd
} else {
  config = configDev
}
config.isGuestMode = true