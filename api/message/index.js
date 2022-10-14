import fetch from 'node-fetch'

export const httpTrigger =  async(context) => {
  let r = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let response = await r.json()
  context.res.json(response)
  context.done = () => {}

}