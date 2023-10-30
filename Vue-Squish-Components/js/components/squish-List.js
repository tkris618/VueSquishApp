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
                    <ul class="list-group list-group-flush border border-2" id="squishItems">
                        <squish-list-item v-for="(item, i) in list"
                                          :key="item.id"
                                          :item="item"></squish-list-item>
                    </ul>
                </div>
        `
});