import { definePayloadPlugin, definePayloadReducer, definePayloadReviver } from 'nuxt/app'


export default definePayloadPlugin(() => {
  definePayloadReducer('Message', (value: any) => {
    if (process.dev) {
      const pubC = (<any>pub)[sm.ctorName]
      
      if (count === 0) {
        throw new Error('I should not be interpreted as JSX')
      }
    }
  })
  definePayloadReviver('Message', (value: any) => {
    throw new Error('I should not be interpreted as JSX')
  })
})
