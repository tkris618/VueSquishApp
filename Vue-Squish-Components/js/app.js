const app = Vue.createApp({
    data: function() {
        return {
            newItem: {
                name: '',
                id: Math.floor(Math.random() * 10e16),
                category: '',
                status: false,
                favorite: false,
            
            },
            squishList: [
                {id: 1, name: 'Clayton', category: 'animal', status: false, favorite: false},//want it
                {id: 2, name: 'Ronnie', category: 'animal', status: false, favorite: false}, //have it
                {id: 3, name: 'Reshma', category: 'animal', status: true, favorite: true}, //favorite
                {id: 4, name: 'Poo', category: 'animal', status: true, favorite: true}, //favorite

            ],
        }
    },
    methods: {
        //add item to list
        addIt: function(newItemFromModal){
            this.squishList.push(newItemFromModal);

            //form clear
            this.newItem = {
                name: '',
                id: Math.floor(Math.random() * 10e16),
                category: '',
                status: false,
                favorite: false,
            };
        },
        deleteIt(item){
            this.squishList.splice(item, 1);
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

            this.squishList = JSON.parse(localStorage.getItem('squishList'));
        }
    },

    watch: {
        squishList: {

            handler: function(newList){
                localStorage.setItem('squishList', JSON.stringify(this.squishList));
            },
            deep: true,
        }
    }
})