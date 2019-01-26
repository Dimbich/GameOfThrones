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
      const character = await this.getResourse(`characters1/${id}`); 
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

     _transformCharacter = (char)=>{
         return this.сheckEmptyData(char);
      }   

      _transformHouse = (house)=> {
         return this.сheckEmptyData(house);
      }

      _transformBook = (book)=> {
         return this.сheckEmptyData(book)  
      }

      сheckEmptyData = (obj)=>{

         const newObj = {...obj};
            for (let prop in newObj) {
               if (prop === 'url') {
                  [newObj.id] = newObj[prop].match(/\d+$/);
               }
               
               if (!newObj[prop]) {
                  newObj[prop] = 'not set value';
               }
              
            }
              
         return newObj;
      };

}