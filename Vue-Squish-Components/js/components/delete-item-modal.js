app.component('deleteItemModal', {
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    methods: {
        deleteIt(item){
            this.squishList.splice(item, 1);
        },
    },
    template: `
      <app-modal :id="id" title="Delete Item">
        <div class="mb-3">
          <label for="deleteItem" class="form-label">Are you sure you want to delete?</label>
        </div>
        <template #footer>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <button @click.prevent="deleteIt" type="submit" >Yes</button>
        </template>
      </app-modal>
    `
})