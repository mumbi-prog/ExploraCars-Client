// import axiosInstance from "../axiosConfig";
  
  // async function handleLogin(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.post(loginApi, loginData);
  //     const data = response.data;
  //     if (data.errors) {
  //       setErrors(data.errors)
  //     } else {
  //       if (typeof window !== 'undefined') {
  //         sessionStorage.setItem('user', JSON.stringify(data));
  //       }
  //       navigate.replace('/');
  //       Swal.fire({
  //         icon: 'success',
  //         text: "Logged in successfully",
  //         showCloseButton: true,
  //         confirmButtonColor: "#0F73BD",
  //         timer: 3000
  //       });
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.errors) {
  //       setErrors(error.response.data.errors)
  //     } else {
  //       setErrors("Too many attempts, try again later")
  //     }
  //   }
  // }