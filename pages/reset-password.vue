<template>
        <!-- ===============>> account start here <<================= -->
        <section class="account padding-top padding-bottom">
            <div class="container">
                <div class="account__wrapper">
                    <div class="row g-4 justify-content-center">
                        <div class="col-12 col-lg-8 ">
                            <div class="account__content account__content--style1">

                                <!-- step 1 -->
                                <div class="account__step">
                                    <div class="account__step-back">
                                        <a href="verify-email">
                                            <i class="fa-solid fa-angle-left"></i><span> Back</span>
                                        </a>
                                    </div>
                                    <div class="account__step-option">
                                        <p>Step <span>3</span> of <span>3</span> </p>
                                        <span class="hint">Forgot Password</span>
                                    </div>
                                </div>

                                <!-- account title -->
                                <div class="account__header">
                                    <h2>Create Password</h2>
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
                                        <div class="col-12">
                                            <div class="form-pass">
                                                <label for="account-cpass" class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control showhide-pass" id="account-cpass"
                                                    placeholder="Re-type password" required>
                                                <button type="button" id="btnCToggle" class="form-pass__toggle"><i
                                                        class="fa-regular fa-eye-slash"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="pass-terms mt-4">
                                        <li><i class="fa-solid fa-check"></i> Password must be between 8 to 32 character.</li>
                                        <li><i class="fa-solid fa-check"></i> Must contain a uppercase character.</li>
                                        <li><i class="fa-solid fa-check"></i> Must contain a number.</li>
                                        <li><i class="fa-solid fa-check"></i> Must contain one special character.</li>
                                    </ul>


                                    <button type="submit" class="btn btn-primary d-block mt-5">Continue</button>
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
            show: true,
        };
    },
    beforeMount() {

    }
};
</script>
