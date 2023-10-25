app.component('AddItemModal', {
    data() {
        return {
            newItem: {
                name: '',
                id: Math.floor(Math.random() * 10e16),
                category: '',
                status: false,
                favorite: false,
            },
        }
    },
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    emits: ['add-item'],
    methods: {
        //add item to list
        addIt: function(){

            this.$emit('add-item', this.newItem);

            //form clear
            this.newItem = {
                name: '',
                id: Math.floor(Math.random() * 10e16),
                category: '',
                status: false,
                favorite: false,
            };
        },
    },
    template : `
      <app-modal :id="id" title="Add Item">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="newItem.name" id="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="col-sm-2">Category: </label>
          <select v-model="newItem.category" class="form-select" aria-label="Default select example">
            <option value="Animal">Animal</option>
            <option value="Aquatic Animal">Aquatic Animal</option>
            <option value="Insect">Insect</option>
            <option value="Bird">Bird</option>
            <option value="Monster">Monster</option>
          </select>
        </div>
      
      <template #footer>
        <button type="button" class="btn btn-bd-secondary" data-bs-dismiss="modal">Nevermind</button>
        <button @click.prevent="addIt" type="submit" class="btn btn-bd-primary" data-bs-dismiss="modal">Add It</button>
      </template>
      </app-modal>
    `
})