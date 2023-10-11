app.component('EditItemModal', {
    data(){
        return{
            editItem: {
                ...this.modelValue
            },
            uid: 'eim-' + Math.Floor(Math.random() * 10e16),
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
      <span>
        <button class="btn-bd-primary btn" type="button" :data-bs-target="'#editModal' + uid" data-bs-toggle="modal"><i class="fa-solid fa-pencil"></i> Edit</button>
      <app-modal :id="id" title="Edit Item">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="editItem.name" id="name" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="col-sm-2">Category: </label>
          <select v-model="editItem.category" class="form-select" aria-label="Default select example">
            <option value="Animal">Animal</option>
            <option value="Aquatic Animal">Aquatic Animal</option>
            <option value="Insect">Insect</option>
            <option value="Bird">Bird</option>
            <option value="Monster">Monster</option>
          </select>
        </div>

        <template #footer>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
          <button @click.prevent="editIt" type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add It</button>
        </template>
      </app-modal>
      </span>
    `
})