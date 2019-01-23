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
    
   async getAllCharacters(){
       const res =await this.getResourse(`characters?page=5&pageSize=10`);
       return res.map(this._transformCharacter)
    }

   async getCharacter(id){
      const character = await this.getResourse(`characters/${id}`); 
      return this._transformCharacter(character);
    }

   async getAllBooks(){
        const res = await this.getResourse(`books`);
        return res.map(this._transformBook)
     }
 
   async getBooks(id){
        const book = await this.getResourse(`books/${id}`);
        return this._transformBook(book);
     }
   async getAllHouses(){
         const res = await this.getResourse(`houses`);
         return  res.map(this._transformHouse);
     }
 
   async  getHouses(id){
         const house = await this.getResourse(`houses/${id}`);
        return  this._transformHouse(house); 
     }

     _transformCharacter(char) {
         return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
         }
      }   

      _transformHouse(house) {
         return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.title,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
         }      
      }

      _transformBook(book) {
         return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
         }      
      }
}