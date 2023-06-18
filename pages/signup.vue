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
                                  <h2>Create an Account</h2>
                                  <p class="stlye1">Unlock the power of stress-free event planning by signing up for a free account.
                                      Experience seamless organization and create memorable moments with ease.</p>
                              </div>


                              <!-- account form -->
                              <form action="#" class="account__form needs-validation mt-5" @submit.prevent="signUp">
                                  <div class="row g-4">
                                      <div class="col-12">
                                          <div>
                                              <label for="account-email" class="form-label">Full Name</label>
                                              <input type="text" class="form-control" id="account-email"
                                                  placeholder="Enter your Full Name" v-model="form.full_name" required>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div>
                                              <label for="account-email" class="form-label">Email Id</label>
                                              <input type="email" class="form-control" id="account-email"
                                                  placeholder="Enter your email"  v-model="form.email" required>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-pass">
                                              <label for="account-pass" class="form-label">Password</label>
                                              <input type="password" class="form-control showhide-pass" id="account-pass"
                                                  placeholder="Password" v-model="form.password" @keyup="validatePassword()" required>


                                              <small class="text-danger d-block" v-for="item in errors.password" v-if="item!=''">{{ item }}</small>


                                              <button type="button" id="btnToggle" class="form-pass__toggle"><i
                                                      class="fa-regular fa-eye-slash"></i></button>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-pass">
                                              <label for="account-cpass" class="form-label">Confirm Password</label>
                                              <input type="password" class="form-control showhide-pass" id="account-cpass"
                                                  placeholder="Re-type password" v-model="form.password_confirmation" required>
                                                  <small class="text-danger d-block" v-for="item in errors.password_confirmation" v-if="item != ''">{{ item }}</small>
                                              <button type="button" id="btnCToggle" class="form-pass__toggle"><i
                                                      class="fa-regular fa-eye-slash"></i></button>
                                          </div>
                                      </div>
                                  </div>

                                  <p class="agrement mt-4">
                                      By Registering you, Agree & Join, you agree to the <a href="#">User Agreement</a>,
                                      <a href="#">Privacy Policy</a>.
                                  </p>


                                  <button type="submit" class="btn btn-primary d-block mt-5">Continue</button>
                              </form>


                              <div class="account__switch">
                                  <p>Already have an account? <a href="/signin">Sign In</a></p>
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
        full_name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      errors: {'password':[],'password_confirmation':[]}
    };
  },


  methods: {
    signUp() {

      if (this.form.password != this.form.password_confirmation) {
       this.errors.password_confirmation[0] = "Confirm password not matched.";
      } else {
        this.errors.password_confirmation[0] = "";

        $axios.post('https://apps.techhubai.com/eim/api/signup', this.form)
          .then((response) => {

            Toast.fire({
              icon: 'success',
              title: 'Signed Up Successfully. Sign In Now.'
            })
            this.$router.push('/signin')
          })
          .catch(error => {
            Toast.fire({
              icon: 'error',
              title: error.response.data.message
            })
          })

      }

    },

    validatePassword() {


        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (this.form.password.match(lowerCaseLetters)) {
          this.errors.password[0] = "";
        } else {
          this.errors.password[0]="Minimum 1 lowercase.";
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (this.form.password.match(upperCaseLetters)) {
          this.errors.password[1] = "";
        } else {
          this.errors.password[1] = "Minimum 1 uppercase.";
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (this.form.password.match(numbers)) {
          this.errors.password[2] = "";
        } else {
          this.errors.password[2] = "Minimum 1 number.";
        }

        // Validate length
        if (this.form.password.length >= 8) {
          this.errors.password[3] = "";
        } else {
          this.errors.password[3] = "Minimum length 8";
        }
    },

    verifyEmail() {
      // $axios.post("https://apps.techhubai.com/eim/api/verify-email", this.form)
      $axios.post("https://apps.techhubai.com/eim/api/get-verification-email", this.form)
        .then((response) => {
          Toast.fire({
            icon: 'success',
            title: response.data.message
          })
        })
        .catch(error => {
          Toast.fire({
            icon: 'error',
            title: 'OTP Verification Failed.'
          })
        })

    },
  },
  mounted() {
    // this.settings = settings.settings;
    if (User && User.loggedIn()) {
      this.$router.push("/dashboard");
    }
  },
};
</script>
