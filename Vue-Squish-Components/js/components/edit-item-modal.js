app.component('EditItemModal', {
    data(){
        return{
            editItem: {
                ...this.modelValue
            },
            uid: 'eim-' + Math.floor(Math.random() * 10e16),
        }
    },
    props: {
        modelValue: {
            type: Object,
            required: true,
        }
    },
    emits:['update:modelValue'],
    methods: {
        editIt: function () {
            Object.assign(this.modelValue, this.editItem);
        },
    },
    template: `
      <span class="edit-item-modal">
          <button class="btn btn-tiny" :data-bs-target="'#editModal' + uid" data-bs-toggle="modal">
            <i class="fas fa-pencil-alt" id="pencilIcon"></i>
          </button>
          <app-modal :id="'editModal' + uid" title="Edit Item">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="editItem.name" id="name" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <select v-model="editItem.category" id="category" class="form-select">
                <option value="animal">Animal</option>
                <option value="aquatic animal">Aquatic Animal</option>
                <option value="Insect">Insect</option>
                <option value="Bird">Bird</option>
                <option value="Monster">Monster</option>

              </select>
            </div>
            
            <template #footer>
              <button type="button" class="btn btn-bd-secondary" data-bs-dismiss="modal">Nevermind</button>
              <button @click.prevent="editIt" type="submit" class="btn btn-bd-primary" data-bs-dismiss="modal">Save It</button>
            </template>
            
          </app-modal>
      </span>
    `
})