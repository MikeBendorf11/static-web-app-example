import fetch from 'node-fetch'

export const httpTrigger =  async(context, req) => {
  try{
    context.log(req)
    let r = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let response = await r.json()
    context.res.json(response)
  } catch (e) {
    context.log(e)
  }
  context.done = () => {}
}