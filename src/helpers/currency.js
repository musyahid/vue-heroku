import Vue from 'vue'


Vue.filter('currency', value => {
    if (!value) return ''
    let dot = value.toString();
    dot = dot.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${dot}`
})