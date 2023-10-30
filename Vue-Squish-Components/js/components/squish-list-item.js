app.component('SquishListItem', {
    data: function(){
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e16),
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    template: `
                        <li class="squish-list-item list-group-item">
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
})