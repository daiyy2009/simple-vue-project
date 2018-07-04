var styleTemplate = param =>
    `display:inline-block;border:5px white solid;height:50px;width:50px;background-color:rgb(${param})`;

var myComponent = Vue.component(
    'my-component', {
        render: function (createElement) {
            let colors = [];
            let i = this.len;
            while (i > 0) {
                colors.push([171 + 8 * i, 37 + 15 * i, 103 + 11 * i]);
                i--;
            }

            return createElement('div', colors.map(item => {
                return createElement('div', {
                    attrs: {
                        style: `${styleTemplate(item.join(','))}`
                    }
                });
            }));
        },
        props: {
            len: {
                type: Number
            }
        }
    }
);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
});