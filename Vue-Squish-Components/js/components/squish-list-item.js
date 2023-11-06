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
    methods: {
        deleteIt(){
            this.$emit('delete-item', this.item);
        },
    },
    template: `
                        <li class="squish-list-item list-group-item">
                            <div>
                              <label class="form-check-label" id="labelName"><strong>Name:</strong> {{item.name}}</label><br>
                              <label class="form-check-label"><strong>Category:</strong> {{item.category}}</label><br>
                              <div class="form-check">
<!--                                <button v-if="item.isWant()" class="btn btn-bd-primary" @click="item.gotIt()">Want It</button>-->
<!--                                <button v-else class="btn btn-bd-primary" @click="item.wantIt()">Got It</button>-->
                                <div class="form-check form-switch">
                                <label class="form-check-label" for="flexSwitchCheckDefault"><input type="checkbox" role="switch" class="form-check-input"  @click="item.gotIt()">Got It</label>
                                </div>
                              </div>

                                    <div class="form-check form-switch">
                                        <label :for="'favorite-' + i"><input
                                            :id="'favorite-' + i"
                                            type="checkbox" role="switch"  class="form-check-input" @click="item.favoriteIt()">Favorite</label><br>
                                    </div>
                                <div>
                                  <br>
                                    <button class="btn btn-tiny" id="deleteBtn" @click="deleteIt()" data-bs-toggle="modal" data-bs-target="#deleteItemModal" style="margin-right: 15px"><i class="fa-solid fa-trash" id="trashCan"></i></button>
                                  <edit-item-modal v-model="item">edit</edit-item-modal>
                                </div>
                            </div>
                        </li>
    
    `
})