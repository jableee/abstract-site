class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const findBoard = this.boards.findIndex((i) => i.name === board.name);
        if (findBoard === -1) {
            board.addedboard = true;
            return this.boards.push(board);
        } else {
            throw new Error();
        }
    }

    findBoardByName(boardname) {
        const findboard = this.boards.findIndex((i) => i.name === boardname);
        return this.boards[findboard]; //
    }
}

class Board {
    constructor(name) {
        if (!name) {
            throw new Error();
        }
        this.name = name;
        this.addedboard = false;
        this.articles = [];
    }

    publish(article) {
        // Site에 추가된 Board에만 article추가 할수 있게 하기
        if (!this.addedboard) throw new Error();

        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        article.comment = [];
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (!subject || !content || !author) throw new Error();

        this.subject = subject;
        this.content = content;
        this.author = author;
    }

    reply(comment) {
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }
    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (!content || !author) throw new Error();

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
