export default class APIService {
    static UpdateArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
            'method': 'PUT',
            headers: {
                'content-Type': 'application/json',
                'Authorization':'Token 8b0c89f46181a0daa9de484a5f58e58eb8fb03f0'
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch('http://127.0.0.1:8000/api/articles/', {
            'method': 'POST',
            headers: {
                'content-Type': 'application/json',
                'Authorization':'Token 8b0c89f46181a0daa9de484a5f58e58eb8fb03f0'
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
            'method': 'DELETE',
            headers: {
                'content-Type': 'application/json',
                'Authorization':'Token 8b0c89f46181a0daa9de484a5f58e58eb8fb03f0'
              }
        })

    }
}