import Swal from "sweetalert2";

export const successMessage = (title, message) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: message,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

export const errorMessage = (data) => {
    let errorMessage = ''
    try {
        for (const field in data) {
            if (data.hasOwnProperty(field)) {
                errorMessage += `${field}: ${data[field].join(', ')}\n`;
            }

        }
    } catch (error) {
        errorMessage = data.detail
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true
    })
}