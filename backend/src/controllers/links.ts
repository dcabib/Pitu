import { Request, Response } from 'express'

const postLink = (request: Request, response: Response) => {
    response.send('postLink')
}

const getLink = (request: Request, response: Response) => {
    response.send('getLInk')
}

const hitLink = (request: Request, response: Response) => {
    response.send('hitLInk')
}

export default {
    postLink,
    getLink,
    hitLink
}
