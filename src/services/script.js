export default class gotService {
    constructor () {
        this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }
   
    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Ошибка при получении данных по адресу ${this._apiBase}${url}. Сервер вернул ответ ${res.status}`);
        } else {
           return await res.json();
        }
    }
    
   getAllCharacters = async () => {
       const res = await this.getResourse(`characters?page=5&pageSize=10`);
       const result = res.map(this._transformCharacter);
      return result;        
   }

   getCharacter = async (id) => {
      const character = await this.getResourse(`characters/${id}`); 
      return this._transformCharacter(character);
    }

   getAllBooks = async () => {
        const res = await this.getResourse(`books`);
        return res.map(this._transformBook)
     }
 
   getBooks =  async (id) => {
        const book = await this.getResourse(`books/${id}`);
        return this._transformBook(book);
     }
   getAllHouses =  async() => {
         const res = await this.getResourse(`houses`);
         return  res.map(this._transformHouse);
     }
 
    getHouses =  async (id) => {
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

               // if(Array.isArray(newObj[prop]) ) {
               //   console.log(newObj[prop].filter(item=>item));
               // }
              
            }
              
         return newObj;
      };

}