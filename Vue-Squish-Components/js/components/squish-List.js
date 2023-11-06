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
        <div class="squish-list want-it-list">
                    <h2>{{name}}</h2>
                    <ul class="list-group list-group-flush border" id="squishItems">
                        <squish-list-item v-for="(item, i) in list"
                                          :key="item.id"
                                          :item="item"
                                          @delete-item="deleteItem => $emit('delete-item', deleteItem)"
                        ></squish-list-item>
                    </ul>
                </div>
        `
});