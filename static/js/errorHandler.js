/**
 * Display an error message using SweetAlert2.
 * @param {string} message - The error message to display.
 */

function showError(message) {
    Swal.fire({
        title: 'Error',
        text: message || 'An unexpected error occurred',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}
