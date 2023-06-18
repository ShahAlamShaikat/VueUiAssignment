<template>
    <!-- ===============>> account start here <<================= -->
    <section class="account padding-top padding-bottom">
        <div class="container">
            <div class="account__wrapper">
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-lg-8 ">
                        <div class="account__content account__content--style1">

                            <!-- account title -->
                            <div class="account__header">
                                <h2>Welcome Back</h2>
                                <p class="stlye1">Log in to your Events in Minutes account to pick up where you left off and continue
                                    planning your major life events. Enter your credentials below to access your
                                    personalized event dashboard and enjoy a seamless planning experience.</p>
                            </div>


                            <!-- account form -->
                            <form action="#" class="account__form needs-validation mt-5" @submit.prevent="login">
                                <div class="row g-4">
                                    <div class="col-12">
                                        <div>
                                            <label for="account-email" class="form-label">Email Id</label>
                                            <input type="email" class="form-control" id="account-email"
                                                placeholder="Enter your email" v-model="form.email" required>

                                            <small class="text-danger" v-if="errors.email">{{
                                              errors.email[0]
                                            }}</small>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-pass">
                                            <label for="account-pass" class="form-label">Password</label>
                                            <input type="password" class="form-control showhide-pass" id="account-pass"
                                                placeholder="Password" v-model="form.password" required>
                                            <small class="text-danger" v-if="errors.password">{{
                                              errors.password[0]
                                            }}</small>

                                            <button type="button" id="btnToggle" class="form-pass__toggle"><i
                                                    class="fa-regular fa-eye-slash"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <p class="olter-action mt-4">
                                    <a href="forgot-password">Forgot Password</a>
                                </p>
                                <button type="submit" class="btn btn-primary d-block mt-5">Continue</button>
                            </form>


                            <div class="account__switch">
                                <p>New to Events in Minutes? <a href="signup">Sign up here to get started.</a></p>
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
      form: {
        email: null,
        password: null,
      },
      userData: {
        access_token:'',
        name:'',
        id:'',
        email:''
      },
      errors: {},
    };
  },


  methods: {
    async login() {
      const response = await $axios.post('https://apps.techhubai.com/eim/api/signin', this.form)
        .then((response) => {

          
        if (response) {
          if (process.client) {
            localStorage.setItem("token", response.data.access_token);
          }
          $axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
            ? "Bearer " + localStorage.getItem("token") : "";

            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });

          this.updateUserData();

          } else {

            Toast.fire({
              icon: 'error',
              title: "Something went wrong. Try again."
            })


          }

        }).catch((error) => {
        
          Toast.fire({
            icon: 'error',
            title: error?.response.data.message
          })

        })

    },
    async updateUserData() {

      const response = await $axios.post('https://apps.techhubai.com/eim/api/verify_token', {token: localStorage.getItem("token")})
        .then((response) => {

          this.userData.access_token = localStorage.getItem("token");
          this.userData.name = response.data.full_name;
          this.userData.id = response.data.user_id;
          this.userData.email = this.form.email;
          
          User.responseAfterLogin(this.userData);

          this.$router.push("/dashboard");
          this.$router.go();

        }).catch((error) => {

          Toast.fire({
            icon: 'error',
            title: "Something went wrong. Try again."
          })

        })
    }
  },
  mounted() {
    if (User && User.loggedIn()) {
      this.$router.push("/dashboard");
      
    }
  },
};
</script>
