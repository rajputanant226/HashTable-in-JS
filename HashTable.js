class HashTable{
    constructor(size=40){
        this.table=new Array(size);
        this.size=0;
    }
    _hashFunction(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%this.table.length;
    }
    set(key,value){
        const index=this._hashFunction(key);
        if(this.table[index]===undefined){
            this.table[index]=[];
        }
        const chain=this.table[index];
        for(let i=0;i<chain.length;i++){
            if(chain[i][0]===key){
                chain[i][1]=value;
                return;
            }
        }
        chain.push([key,value]);
        this.size++;       
    }
    get(key){
        const index=this._hashFunction(key);
        const chain=this.table[index];
        if(chain){
            for(let i=0;i<chain.length;i++){
                if(chain[i][0]===key){
                    return chain[i][1];
                }
            }
        }
        return undefined;
    }
    remove(key){
        const index=this._hashFunction(key);
        const chain=this.table[index];
        if(chain){
            for(let i=0;i<chain.length;i++){
                if(chain[i][0]===key){
                    chain.splice(i,1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;     
    }
    count(){
        return this.size;
    }
}

const h=new HashTable(8);
h.set("Aman",40);
h.set("Anant",46);
h.set("Ayush",45);
h.set("Amit",50);

console.log(h.get("Anant"));
h.remove("Aman");
console.log(h.get("Aman"));

