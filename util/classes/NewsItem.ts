export default class NewsItem {
    id: string
    title: string
    content: string
    published_at: string
    author: Author
    tags: Array<string>


    constructor(id: string, title: string, content: string, published_at: string, author: Author, tags: Array<string>) {
        this.id = id
        this.title = title
        this.content = content
        this.published_at = published_at
        this.author = author
        this.tags = tags
    }

    static instantiateFromJson(json: any): NewsItem {
        return new NewsItem(json.id, json.title, json.content, json.published_at, json.author, json.tags)
    }

}

class Author {
    name: string
    constructor(name: string) {
        this.name = name
    }
}