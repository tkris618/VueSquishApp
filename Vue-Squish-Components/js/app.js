const app = Vue.createApp({
    data: function() {
        return {
            squishList: [
                new SquishListItem('Clayton', 'animal',false, false),//want it
                new SquishListItem('Ronnie', 'animal', false, false), //have it
                new SquishListItem('Reshma','animal', true, true), //favorite
                new SquishListItem('Poo', 'animal', true, true), //favorite

            ],
        }
    },
    methods: {
        //add item to list
        addIt: function(newItemFromModal){
            this.squishList.push(newItemFromModal);
        },
        deleteIt(item){
            this.squishList.splice(item);
        },

    },
    computed: {
        gotList: function () {
            return this.squishList.filter(function (item) {
                return item.status === true;
            })
        },
        wantList: function () {
            return this.squishList.filter(function (item) {
                return item.status === false;
            })
        },
        favoriteList: function () {
            return this.squishList.filter(function (item) {
                return item.favorite;
            })
        }
    },
    mounted: function () {
        if(localStorage.getItem('squishList')){

            //this.squishList = JSON.parse(localStorage.getItem('squishList'));
        }
    },

    watch: {
        squishList: {

            handler: function(newList){
                //localStorage.setItem('squishList', JSON.stringify(this.squishList));
            },
            deep: true,
        }
    }
})