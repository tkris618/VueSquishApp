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
const SquishItemComponent = {
    props: {
        item: {
            type: SquishItem,
        }
    },
    template: `
    <li class="list-group-item">
                            <div>
                              <label class="form-check-label" id="labelName"><strong>Name:</strong> {{item.name}}</label><br>
                              <label class="form-check-label"><strong>Category:</strong> {{item.category}}</label><br>
                                    <div class="form-check form-switch">
                                        <label :for="name + '-' + i"
                                        :class="{'form-check-label' : true, 'got' : item.status}"><input v-model="item.status"
                                         type="checkbox" role="switch" :id="name + '-' + i" class="form-check-input">Got it</label><br>
                                    </div>
                                    <div class="form-check form-switch">
                                        <label :for="'favorite-' + i"
                                               :class="{'form-check-label' : true, 'favorite' : item.favorite}"><input v-model="item.favorite"
                                                type="checkbox" role="switch" v-bind:id="name + '-' + i" class="form-check-input switches">Favorite</label><br>
                                    </div>
                                <div>
                                  <br>
                                    <button class="btn btn-tiny" id="deleteBtn" @click.prevent="deleteIt" data-bs-toggle="modal" data-bs-target="#deleteItemModal" style="margin-right: 15px"><i class="fa-solid fa-trash"></i></button>
                                  <edit-item-modal v-model="item">edit</edit-item-modal>
                                </div>
                            </div>
                        </li>
    `
};
app.component('SquishItem', SquishItemComponent);
const SquishComponent = app.component('SquishItem', {
    extends: SquishItemComponent,

    props: {
        item: {
            type: SquishListItem,
        }
    },
    template: `
    
    `
})