<template>
    <!-- header start -->
    <header class="header">
        <div class="container">
            <div
                class="header-inner d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="index.html" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src="images/logo.png" alt="logo">
                </a>

                <ul class="nav col-12 col-lg-2 col-xl-2 col-xxl-2 me-xl-auto mb-2 ms-4 justify-content-start mb-md-0">
                    <li><a href="#" class="nav-link px-2 link-secondary"><img src="images/bar.svg" alt="bar"></a>
                    </li>
                    <li><a href="#" class="nav-link px-2 link-dark">Menu</a></li>
                </ul>

                <form class="col-12  col-lg-2 col-xl-3 col-xxl-4 mb-3 mb-lg-0 me-lg-3">
                    <input type="search" class="form-control" placeholder="Birthday party, Music," aria-label="Search">
                </form>

                <ul class="nav col-12  col-lg-5 col-xl-5 col-xxl-4  mb-2 ms-4 justify-content-center mb-md-0 header-action-end">
                    <li><a href="#" class="nav-link px-2 link-dark wishlist"><img src="images/1.svg" alt="heart"
                                class="wishlist-heart"></a> <span class="wishlist-count"> 5 </span></li>
                    <li><a href="#" class="nav-link px-2 link-dark user">George</a> <span><i
                                class="fa-regular fa-user"></i></span></li>
                    <li><a href="signup.html" class="nav-link px-2 link-dark btn"><button class="btn btn-primary ms-4">Register
                                your Service</button></a></li>
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
            showMoblie: false,
            megamenu_items: [],
            loggedIn: false,
            photo: "",
            megamenu_hover: false,
            memberShipCategory: [],
        };
    },
    methods: {
        showMobileMenu() {
            let menuItems = document.querySelector(".menu_items");
            menuItems.classList.add("tork-d-block", "mobile__menus");
        },
        closeMoblieMenu() {
            let menuItems = document.querySelector(".menu_items");
            menuItems.classList.remove("tork-d-block");
        },
        mouseHover() {
            this.megamenu_hover = true;
        },
        mouseHoverOut() {
            this.megamenu_hover = false;
        },

        toggleMegaMenuHover() {
            this.megamenu_hover = false;
        },
    },
    mounted() {

        this.loggedIn = User.loggedIn();
    }
};
</script>

<style scoped>
.header {
    /* display: none; */
}
</style>