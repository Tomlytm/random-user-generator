const app = Vue.createApp({
    data(){
        return {
            firstName: 'Jesse',
            lastName: 'Tomilayo',
            phoneNumber: '(234)-808-995-464-4',
            email: 'Tomilayojesse@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    methods: {
        async changeId(){
            const data = await fetch('https://randomuser.me/api')
            const { results } = await data.json();
            const result = results[0]
            // console.log(result);

            this.firstName= result.name.first;
            this.lastName = result.name.last;
            this.phoneNumber = result.phone;
            this.email = result.email;
            this.picture = result.picture.large

        }
    }

})

app.mount('#app')
