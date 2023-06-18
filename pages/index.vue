<template>
    <!-- ===============>> account start here <<================= -->
    <section class="account padding-top padding-bottom">
        <div class="container">
            <div class="account__wrapper">
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-lg-10 ">
                        <div class="account__content account__content--style1"  v-if="loggedIn">
                            <!-- account title -->
                            <div class="account__header text-center">
                                Hi <h3>{{ userData.email }}</h3>
                            </div>

                            <div class="text-center">
                             You are logged in!
                            </div>

                            <div>
                                <div class="text-center my-4">
                                    <button @click="logout" class="btn cutom-btn btn-primary mx-2">Logout</button>
                                </div>
                            </div>
                        </div>

                        <div class="account__content account__content--style1"  v-else>
                            <div>
                                <div class="text-center my-4">
                                    <nuxt-link href="/signin" class="btn cutom-btn btn-primary mx-2">Sign In</nuxt-link>
                                    <nuxt-link href="/signup" class="btn cutom-btn btn-outline-primary mx-2">Sign Up</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===============>> account end here <<================= -->
</template>

<script>

export default {
    data() {
        return {
            loggedIn: false,
            userData: {
                name:"",
                id:"",
                email:""
            }
        };
    },
    mounted() {
        if (User && User.loggedIn()) {

            this.loggedIn = true;
            this.userData.name = User.name();
            this.userData.id = User.id();
            this.userData.email = User.email();
        }
    },
    methods: {
        async logout() {

            const response = await $axios.post('https://apps.techhubai.com/eim/api/logout')

                .then((response) => {
                
                    localStorage.removeItem('token')
                    localStorage.removeItem('id')
    
                    Toast.fire({
                        icon: 'success',
                        title: 'Logged Out Successfully'
                    })

                    this.$router.push('/');
                    this.$router.go();

                }).catch((error) => {

                localStorage.removeItem('token')
                localStorage.removeItem('id')

                Toast.fire({
                    icon: 'success',
                    title: 'Logged Out Successfully'
                })
                    this.$router.push('/')
                    this.$router.go();

            })
        }
    }
};
</script>
