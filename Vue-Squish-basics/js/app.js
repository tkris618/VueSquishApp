const app = Vue.createApp({
    data: function() {
        return {
            newItem: {
                name: '',
                category: '',
                status: false,
                favorite: false,
            
            },
            squishList: [
                {name: 'Clayton', category: 'animal', status: false, favorite: false},//want it
                {name: 'Ronnie', category: 'animal', status: false, favorite: false}, //have it
                {name: 'Reshma', category: 'animal', status: true, favorite: true}, //favorite
                {name: 'Poo', category: 'animal', status: true, favorite: true}, //favorite

            ],
        }
    },
    methods: {
        //add item to list
        addIt: function(){
            console.log("hit me");
            this.squishList.push(this.newItem);

            //form clear
            this.newItem = {
                name: '',
                category: '',
                status: false,
                favorite: false,
            };
        }

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
    watch: {
    }
})