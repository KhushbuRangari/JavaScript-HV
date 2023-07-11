const shoppingcart={
    items :[],
    addItems(name,price){
        const p ={name,price}
        this.items.push(p)
    },

    deleteItems(index){
        if(index>=0 && index<this.items.length){
            this.items.splice(index,1)  
        }

    
    },

    totalPrice(){
        let total=0;
        this.items.forEach(p => {
            total +=p.price
            
        })
        return total
    },
    displayItems(){
        console.log("----Shopping cart-----")
        this.items.forEach((i ,index)=> {
           
            console.log(`${index+1}.${i.name} : ${i.price}`);
            
        });
        console.log("totalPrice  = "+`${this.totalPrice()}`);
    }
}

shoppingcart.addItems("laptop",400000);
shoppingcart.addItems("phone",26786);
shoppingcart.addItems("tv",445600);
shoppingcart.addItems("vaccume",5456);
shoppingcart.addItems("mobile",100);
shoppingcart.deleteItems(2);
shoppingcart.displayItems();

