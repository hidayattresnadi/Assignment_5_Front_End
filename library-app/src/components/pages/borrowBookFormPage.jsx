import FormLayout from '../templates/FormLayout';
import LoadingSpinner from '../elements/loading';
import { useEffect, useState } from 'react';
import BorrowBookForm from '../modules/borrowBookForm';
import { failedSwal, successSwal } from '../../helper';
import UserService from '../../services/userService';
import BookService from '../../services/bookService';
import BorrowService from '../../services/borrowService';

function BorrowFormPage({ books, members, setBooks, setMembers, setErrors }) {
    const [loading, setLoading] = useState(true);
    const [ErrorStatus, setErrorStatus] = useState();

    useEffect(() => {
        const myFetch = async () => {
            try {
                // let response = await request('get','/User');
                // setMembers(response);
                let response = await UserService.getAll();
                await setMembers(response.data.data)

                let dresponse = await BookService.getAll();
                await setBooks(dresponse.data.data)
            }
            catch (error) {
                setErrorStatus(true);
                console.log(error);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        }
        myFetch();
    }, [setBooks,setMembers]);

    const submitBookForm = async (borrow) => {
        try {
            console.log(borrow)
            await BorrowService.borrow(borrow)
            successSwal('borrow request succes created')
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
            failedSwal(error.response.data)
            return error.response.data;
        }

    };

    return (
        <>
            {loading ? <LoadingSpinner /> : ErrorStatus ? <div><h1>Terjadi Gangguan...</h1></div> :
                <FormLayout title="Form to Borrow Book">
                    <BorrowBookForm
                        members={members}
                        setMembers={setMembers}
                        books={books}
                        setBooks={setBooks}
                        onSubmit={submitBookForm}
                    />
                </FormLayout>
            }
        </>
    )
}

export default BorrowFormPage;