app.component('SquishList', {
    props: {
        name: {
            type: String,
            default: 'Want it',
        },
        list: {
            type: Array,
            required: true,
        },
    },
    template:
        `
        <div class="want-it-list">
                    <h2>{{name}}</h2>
                    <ul class="list-group list-group-flush border-bottom">
                        <li v-for="(item, i) in list" :key="item.name" class="list-group-item">
                            <div>
                                <label class="form-check-label">Name: {{item.name}}</label><br>
                                    <label class="form-check-label">Category: {{item.category}}</label><br>
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
                                    <button class="btn btn-bd-primary" id="deleteBtn" data-bs-toggle="modal" data-bs-target="#deleteItemModal"><i class="fa-solid fa-trash"></i> Delete squish</button><br><br>
                                    <!--<edit-item-modal v-model="item"></edit-item-modal>-->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        `
});