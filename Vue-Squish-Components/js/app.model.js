function SquishItem(name){
    this.name = name;

    //set the default status to false for want
    this.status = false;

    //create the methods to sort between false(want) and true(got)
    this.gotIt = function() {
        this.status = !this.status;
    }

    //Set default favorite status to false
    this.favorite = false;


    this.favoriteIt = function() {
        this.favorite = !this.status;
    }


}

function SquishListItem(name, category, status, favorite ){
    //call the parent class
    SquishItem.call(this, name);

    //Properties within the function
    // this.name = name ?? '';
    this.category = category ?? '1';
    this.status = status ?? false;
    this.favorite = favorite ?? false;

}
SquishListItem.type = 'SquishListItem';
