### Hash Table Implementation in JavaScript  
**Part of the #100DaysLearningChallenge by Saurabh Shukla Sir**

## 📚 Learning Topic  
Understanding and Implementing **Hash Tables** in JavaScript — a data structure that stores data in key-value pairs for fast access using hashing.

---

## 🧠 What I Learned  
Today, I implemented a custom **Hash Table** in JavaScript using a simple hash function and **chaining** (arrays of key-value pairs) for collision handling.  
This helped me understand how data is efficiently stored, retrieved, and deleted based on keys — the foundation of Maps, Objects, and databases.

---

## ⚙️ Key Concepts Covered  
- What is a **Hash Table** and how it differs from Arrays and Maps  
- How a **hash function** converts keys into indexes  
- **Collision handling** using Chaining  
- Implementing CRUD operations:
  - `set(key, value)` → Insert key-value pair  
  - `get(key)` → Retrieve value by key  
  - `remove(key)` → Delete a key-value pair  
  - `count()` → Track total elements  
- Real-world use cases: caching, indexing, symbol tables  

---

## 🧩 JavaScript Implementation  

```js
class HashTable {
    constructor(size = 40) {
        this.table = new Array(size);
        this.size = 0;
    }

    // Hash function to map keys to indexes
    _hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    // Insert or update a key-value pair
    set(key, value) {
        const index = this._hashFunction(key);
        if (this.table[index] === undefined) {
            this.table[index] = [];
        }
        const chain = this.table[index];
        for (let i = 0; i < chain.length; i++) {
            if (chain[i][0] === key) {
                chain[i][1] = value;
                return;
            }
        }
        chain.push([key, value]);
        this.size++;
    }

    // Retrieve value by key
    get(key) {
        const index = this._hashFunction(key);
        const chain = this.table[index];
        if (chain) {
            for (let i = 0; i < chain.length; i++) {
                if (chain[i][0] === key) {
                    return chain[i][1];
                }
            }
        }
        return undefined;
    }

    // Remove a key-value pair
    remove(key) {
        const index = this._hashFunction(key);
        const chain = this.table[index];
        if (chain) {
            for (let i = 0; i < chain.length; i++) {
                if (chain[i][0] === key) {
                    chain.splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;
    }

    // Return total number of entries
    count() {
        return this.size;
    }
}

// Example usage
const h = new HashTable(8);
h.set("Aman", 40);
h.set("Anant", 46);
h.set("Ayush", 45);
h.set("Amit", 50);

console.log("Get Anant:", h.get("Anant"));   // Output: 46
h.remove("Aman");
console.log("Get Aman:", h.get("Aman"));     // Output: undefined
console.log("Total elements:", h.count());   // Output: 3
✅ Output Example
yaml
Copy code
Get Anant: 46
Get Aman: undefined
Total elements: 3
🚀 Key Takeaways
Learned the working of hashing and collision resolution

Understood how to build a Hash Table from scratch

Practiced real-world DSA concepts with hands-on implementation

Strengthened my understanding of key-value storage in JavaScript

💡 Concept Insight
Hash Tables are the backbone of many systems — from databases to caching engines.
Building one manually helps understand how JavaScript Maps and Objects function internally.
