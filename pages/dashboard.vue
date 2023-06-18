<template>
    <!-- ===============>> account start here <<================= -->
    <section class="account padding-top padding-bottom">
        <div class="container">
            <div class="account__wrapper">
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-lg-10 ">
                        <div class="account__content account__content--style1">

                            <!-- account title -->
                            <div class="account__header">

                            <div class="d-flex justify-content-between">

                            <div>
                                    <h3>Settings</h3> 
                                </div>
                                <div v-if="loggedIn">
                                    <div class="text-right">
                                        <button @click="logout" class="btn cutom-btn btn-primary mx-2">Logout</button>
                                    </div>
                                </div>
                            
                            </div>
                            
                                <span>Profile</span>
                            </div>

                        


                            <!-- account form -->
                            <form action="#" class="account__form needs-validation mt-5" novalidate>
                                <div class="row g-4">
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="first-name" class="form-label">First name</label>
                                            <input class="form-control" type="text" id="first-name"
                                                placeholder="Ex. Jhon">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="last-name" class="form-label">Last name</label>
                                            <input class="form-control" type="text" id="last-name"
                                                placeholder="Ex. Doe">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="account-email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="account-email"
                                                placeholder="Enter your email" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="postal-code" class="form-label">Postal Code</label>
                                            <input class="form-control" type="text" id="postal-code"
                                                placeholder="42222">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div>
                                            <label for="address" class="form-label">Address</label>
                                            <input class="form-control" type="text" id="address"
                                                placeholder="San Francisco">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="city" class="form-label">City</label>
                                            <input class="form-control" type="text" id="city"
                                                placeholder="San Francisco">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div>
                                            <label for="country" class="form-label">Country</label>
                                            <input class="form-control" type="text" id="country"
                                                placeholder="North America">
                                        </div>
                                    </div>
                                </div>

                                <div class="action text-end mt-4">
                                    <button type="submit" class="btn cutom-btn btn-primary mt-4">Save</button>
                                    <button type="submit" class="btn cutom-btn btn-outline-primary mt-4">Cancel</button>
                                </div>
                            </form>
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
            loggedIn:false,
            userData: {
                access_token: '',
                name: '',
                id: '',
                email: ''
            },
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
