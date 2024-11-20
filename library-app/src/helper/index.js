import axios from 'axios'
import Swal from 'sweetalert2'
export function successSwal(message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: message
    })
}

export function validateInputBook(book) {
    const date = new Date();
    const newErrors = {}
    if (book.isbn.length < 13) {
        newErrors.isbn = 'Isbn must be at least 13 characters'
    }
    if (!book.title || book.title.length < 3) {
        newErrors.title = 'title must be at least 3 characters'
    }
    if (!book.author) {
        newErrors.author = 'author is required'
    }
    if (book.publicationYear > date.getFullYear()) {
        newErrors.publicationYear = 'year is exceeded from this year'
    }
    if (!book.publicationYear) {
        newErrors.publicationYear = 'year is required'
    }
    if (!book.category) {
        newErrors.category = 'please choose category'
    }
    if (!book.publisher) {
        newErrors.publisher = 'publisher is required'
    }
    if (!book.description) {
        newErrors.description = 'description is required'
    }
    if (!book.price) {
        newErrors.price = 'price is required'
    }
    if (!book.libraryLocation) {
        newErrors.libraryLocation = 'library location is required'
    }
    if (!book.availableBooks) {
        newErrors.availableBooks = 'available Books is required'
    }
    if (!book.purchaseDate) {
        newErrors.purchaseDate = 'purchase date is required'
    }
    return newErrors;
}

export async function validateInputMember(member) {
    const newErrors = {};
        if (!member.fullName) {
            newErrors.fullName = 'Name is required'
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!/^\+62\d{9,13}$/.test(member.phoneNumber)) {
            newErrors.phone = 'Phone number must start with +62 and contain 9-13 digits';
        }
        if (member.address.length < 200) {
            newErrors.address = 'address minimal characters should be 200'
        }
        if (!member.gender) {
            newErrors.gender = 'gender is required'
        }
    return newErrors;
}

export function failedSwal(error){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        footer: '<a href="">Why do I have this issue?</a>'
      })
}
