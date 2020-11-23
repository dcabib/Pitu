import { Request, Response } from 'express'
import { Link } from '../models/link'

const links: Link[] = []
let nextId = 1

const generateCode = () => {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
}

const postLink = (request: Request, response: Response) => {
    const link = request.body as Link

    link.id = nextId++
    link.code = generateCode()
    link.hits = 0
    links.push(link)

    return response.status(201).json(link)
}

const getLink = (request: Request, response: Response) => {
    const code = request.params.code as string
    const link = links
        .find(item => item.code === code)

    if (!link) {
        return response.sendStatus(404)
    } 

    return response.json(link)
}

const hitLink = (request: Request, response: Response) => {
    const code = request.params.code as string
    const index = links.findIndex(item => item.code === code)

    if (index === -1) {
        return response.sendStatus(404)
    }

    links[index].hits!++ // usar o !++ apenas quando se tem certeza que a varíavel possui um valor
    return response.json(links[index])
}

export default {
    postLink,
    getLink,
    hitLink
}
