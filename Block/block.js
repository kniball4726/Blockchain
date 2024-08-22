const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(timestamp, lasthash, hash,data){
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block-
                Timestamp: ${this.timestamp}
                Last Hash: ${this.lasthash}
                Hash: ${this.hash}
                Data: ${this.data}`;
    }

    static genesis(){
        return new this(Date.UTC(), '0'.repeat(64), '0'.repeat(64), [])
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.UTC();
        const lasthash = lastBlock.hash;
        const hash = '0'.repeat(64);
        return new this(timestamp, lasthash, hash, data)
    }
}

module.exports = Block;