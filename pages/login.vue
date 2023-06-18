<template>
    <!-- ===============>> account start here <<================= -->
    <section class="account padding-top padding-bottom">
        <div class="container">
            <div class="account__wrapper">
                <div class="row g-4 justify-content-center">
                    <div class="col-12 col-lg-8 ">
                        <div class="account__content account__content--style1">

                            <!-- account tittle -->
                            <div class="account__header">
                                <h2>Welcome Back</h2>
                                <p class="stlye1">Log in to your Events in Minutes account to pick up where you left off and continue
                                    planning your major life events. Enter your credentials below to access your
                                    personalized event dashboard and enjoy a seamless planning experience.</p>
                            </div>


                            <!-- account form -->
                            <form action="#" class="account__form needs-validation mt-5" novalidate>
                                <div class="row g-4">
                                    <div class="col-12">
                                        <div>
                                            <label for="account-email" class="form-label">Email Id</label>
                                            <input type="email" class="form-control" id="account-email"
                                                placeholder="Enter your email" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-pass">
                                            <label for="account-pass" class="form-label">Password</label>
                                            <input type="password" class="form-control showhide-pass" id="account-pass"
                                                placeholder="Password" required>

                                            <button type="button" id="btnToggle" class="form-pass__toggle"><i
                                                    class="fa-regular fa-eye-slash"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <p class="olter-action mt-4">
                                    <a href="forgot-pass.html">Forgot Password</a>
                                </p>
                                <button type="submit" class="btn btn-primary d-block mt-5">Continue</button>
                            </form>


                            <div class="account__switch">
                                <p>New to Events in Minutes? <a href="signup.html">Sign up here to get started.</a></p>
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
        login_with_password: true,
      },
      loginStatus: "Login",
      OTPSent: false,
      errors: {},
    };
  },


  methods: {
    async login() {
      this.loginStatus = "Loging...";
      const response = await $axios.post('https://apps.techhubai.com/eim/api/signin', this.form)
      if (response) {
        User.responseAfterLogin(response);
        if (process.client) {
          localStorage.setItem("token", response.data.access_token);
        }
        // this.$axios.setHeader('Authorization', localStorage.getItem("token"));
        $axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
          ? "Bearer " + localStorage.getItem("token") : "";
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        if (this.$route.name === "login") {
          this.$router.push("/user-dashboard");
        } else {
          this.$router.go();
        }
      }

    }
  },
  mounted() {
    // this.settings = settings.settings;
    if (User && User.loggedIn()) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
