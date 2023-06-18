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
                                        <a href="forgot-password">
                                            <i class="fa-solid fa-angle-left"></i><span> Back</span>
                                        </a>
                                    </div>
                                    <div class="account__step-option">
                                        <p>Step <span>2</span> of <span>3</span> </p>
                                        <span class="hint">Forgot Password</span>
                                    </div>
                                </div>

                                <!-- account title -->
                                <div class="account__header">
                                    <h2>Forgot Password</h2>
                                    <p class="style2">We,ve sent a 6-digit confirmation code to <a
                                            href="#">username@gmail.com</a>. Make sure you enter correct code.</p>
                                </div>


                                <!-- account form -->
                                <form action="#" class="account__form needs-validation mt-5" novalidate>
                                    <div class="row g-4">
                                        <div class="col-12 col-lg-8">
                                            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> <input
                                                    class="my-2 me-2 text-center form-control rounded" type="text" id="first"
                                                    maxlength="1" placeholder="X" /> <input
                                                    class="m-2 text-center form-control rounded" type="text" id="second"
                                                    maxlength="1" placeholder="X" /> <input
                                                    class="m-2 text-center form-control rounded" type="text" id="third"
                                                    maxlength="1" placeholder="|" /> <input
                                                    class="m-2 text-center form-control rounded" type="text" id="fourth"
                                                    maxlength="1" /> <input class="m-2 text-center form-control rounded"
                                                    type="text" id="fifth" maxlength="1" /> <input
                                                    class="m-2 text-center form-control rounded" type="text" id="sixth"
                                                    maxlength="1" /> </div>
                                        </div>
                                        <p class="olter-action mt-4 mb-0">
                                            <a href="#">Resend OTP</a>
                                        </p>
                                    </div>

                                    <a href="reset-password" type="submit"
                                        class="btn btn-primary d-block mt-5">Continue</a>
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
