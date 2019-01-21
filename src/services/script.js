export default class gotService {
    constructor () {
        this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }
   
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Ошибка при получении данных по адресу ${this._apiBase}${url}. Сервер вернул ответ ${res.status}`);
        } else {
           return await res.json();
        }
    }
    
    getAllCharacters(){
       return  this.getResourse(`characters?page=5&pageSize=10`);
    }

    getCharacter(id){
       return  this.getResourse(`characters/${id}`); 
    }

    getAllBooks(){
        return  this.getResourse(`books`);
     }
 
     getBooks(id){
        return  this.getResourse(`books/${id}`); 
     }
     getAllHouses(){
        return  this.getResourse(`houses`);
     }
 
     getHouses(id){
        return  this.getResourse(`houses/${id}`); 
     }
}