import Swal from 'sweetalert2'
import { useGlobalContext } from '../../../Context';

const Loaded = () => {
    const { loaderTitle, loaderText } = useGlobalContext()

    let timerInterval;

    // Swal.fire({
    //     title: loaderTitle,
    //     html: loaderText,
    //     timer: 0,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //         Swal.showLoading();
    //         const timer = Swal.getPopup().querySelector("b");
    //         timerInterval = setInterval(() => {
    //             timer.textContent = `${Swal.getTimerLeft()}`;
    //         }, 100);
    //     },
    //     willClose: () => {
    //         clearInterval(timerInterval);
    //     }
    // }).then((result) => {
    //     /* Read more about handling dismissals below */
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //         console.log("I was closed by the timer");
    //     }
    // });

}

export default Loaded