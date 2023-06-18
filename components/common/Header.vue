<template>
    <!-- header start -->
    <header class="header">
        <div class="container">
            <div
                class="header-inner d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <nuxt-link href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src="images/logo.png" alt="logo">
                </nuxt-link>

                <ul class="nav col-12 col-lg-2 col-xl-2 col-xxl-2 me-xl-auto mb-2 ms-4 justify-content-start mb-md-0">
                    <li><nuxt-link href="#" class="nav-link px-2 link-secondary"><img src="images/bar.svg" alt="bar"></nuxt-link>
                    </li>
                    <li><nuxt-link href="#" class="nav-link px-2 link-dark">Menu</nuxt-link></li>
                </ul>

                <form class="col-12  col-lg-2 col-xl-3 col-xxl-4 mb-3 mb-lg-0 me-lg-3">
                    <input type="search" class="form-control" placeholder="Birthday party, Music," aria-label="Search">
                </form>

                <ul class="nav col-12  col-lg-5 col-xl-5 col-xxl-4  mb-2 ms-4 justify-content-center mb-md-0 header-action-end">
                    <li><nuxt-link href="#" class="nav-link px-2 link-dark wishlist"><img src="images/1.svg" alt="heart"
                                class="wishlist-heart"></nuxt-link> <span class="wishlist-count"> 5 </span></li>
                    <li v-if="loggedIn"><nuxt-link href="/dashboard" class="nav-link px-2 link-dark user">{{ userData.email.substring(0, 10) }}</nuxt-link> <span><i
                                class="fa-regular fa-user"></i></span></li>
                    <li><nuxt-link href="/signup" class="nav-link px-2 link-dark btn"><button class="btn btn-primary ms-4">Register
                                your Service</button></nuxt-link></li>
                </ul>
            </div>
        </div>
    </header>
    <!-- header end -->
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false,
            userData: {
                name: "",
                id: "",
                email: ""
            }
        };
    },
    mounted() {

        if (localStorage.getItem("token") != '') {
            $axios.defaults.headers.common["Authorization"] = localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : "";  
        }
        this.syncUserData();
        
    },
    methods: {
        syncUserData() {
            if (User && User.loggedIn()) {
                this.loggedIn = true;
                this.userData.name = User.name();
                this.userData.id = User.id();
                this.userData.email = User.email();
            }
        }
    }
};
</script>
