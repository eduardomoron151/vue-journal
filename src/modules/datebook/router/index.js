
export default {

    name : 'daybook',
    component : () => import(/* webpackChunkName: "daybook" */ '@/modules/datebook/layouts/DayBookLayout.vue'),
    children : [
        {
            path : '',
            name : 'no-entry',
            component : () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/datebook/views/NoEntrySelected.vue')
        },
        {
            path : ':id',
            name : 'entry',
            component : () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/datebook/views/EntryView.vue')

        }
    ]
}