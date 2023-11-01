function SquishItem(toy){
    this.toy = toy;

    //set the default status to false for want
    this.status = false;

    //create the methods to sort between false(want) and true(got)
    this.wantIt = function() {
        this.status = false;
    }

    this.gotIt = function() {
        this.status = true;
    }

    this.isWant = function() {
        return this.status === false;
    }

    //set the default favorite status to false 
    this.favorite = false;

    //create the methods to sort between false and true
    this.notFavorite = function(){
        this.favorite = false;
    }

    this.favoriteIt = function() {
        this.favorite = true;
    }

    this.isNotFavorite = function() {
        return this.favorite === false;
    }

}

function SquishListItem(name, category, status, favorite ){
    this.name = name ?? '';
    this.category = category ?? '1';
    this.status = status ?? false;
    this.favorite = favorite ?? false;

}
SquishListItem.type = 'SquishListItem';
