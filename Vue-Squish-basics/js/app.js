const app = Vue.createApp({
    data: function() {
        return {
            newItem: {
                name: '',
                category: '',
                status: 'want',
                favorite: false,
            
            },
            squishList: [
                {name: 'Clayton', category: 'animal', status: 'want', favorite: false},//want it
                {name: 'Ronnie', category: 'animal', status: 'got', favorite: false}, //have it
                {name: 'Reshma', category: 'animal', status: 'got', favorite: true}, //favorite
                {name: 'Poo', category: 'animal', status: 'got', favorite: true}, //favorite

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
                status: 'want',
                favorite: false,
            };
        }

    },
    computed: {
        gotList: function () {
            return this.squishList.filter(function (item) {
                return item.status === 'got';
            })
        },
        wantList: function () {
            return this.squishList.filter(function (item) {
                return item.status === 'want';
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