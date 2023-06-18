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
                                        <a href="signin">
                                            <i class="fa-solid fa-angle-left"></i><span> Back</span>
                                        </a>
                                    </div>
                                    <div class="account__step-option">
                                        <p>Step <span>1</span> of <span>3</span> </p>
                                        <span class="hint">Forgot Password</span>
                                    </div>
                                </div>

                                <!-- account title -->
                                <div class="account__header">
                                    <h2>Forgot Password</h2>
                                    <p class="style2">Enter the email of your account and we will send the email to reset your password.</p>
                                </div>


                                <!-- account form -->
                                <form action="#" class="account__form needs-validation mt-5" novalidate>
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <div class="form-pass">
                                                <label for="account-pass" class="form-label">Email</label>
                                                <input type="text" class="form-control showhide-pass" id="account-pass"
                                                    placeholder="Email" required>

                                                <button type="button" id="btnToggle" class="form-pass__toggle"><i
                                                        class="fa-regular fa-eye-slash"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="verify-email" type="submit" class="btn btn-primary d-block mt-5">Continue</a>
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
