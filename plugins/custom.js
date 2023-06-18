("use strict");
import axios from "axios";
import User from "~/assets/js/User.js";
import Swal from "sweetalert2";

window.$axios = axios;
window.$baseApiUrl = window.__NUXT__.config.public.baseApiUrl;

window.User = User;

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;

export default defineNuxtPlugin(() => {});
