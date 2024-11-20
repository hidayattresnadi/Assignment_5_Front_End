import axios from 'axios';
import FormLayout from '../templates/FormLayout';
import LoadingSpinner from '../elements/loading';
import { useEffect, useState } from 'react';
import BorrowBookForm from '../modules/borrowBookForm';
import { failedSwal, successSwal } from '../../helper';

function BorrowFormPage({ books, members, setBooks, setMembers, errors, setErrors }) {
    const [loading, setLoading] = useState(true);
    const [ErrorStatus, setErrorStatus] = useState();

    useEffect(() => {
        const myFetch = async () => {
            try {
                // let response = await request('get','/User');
                // setMembers(response);
                let response = await axios.get(`http://localhost:5184/User`)
                await setBooks(response.data.data)

                let dresponse = await axios.get(`http://localhost:5184/Book`)
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
            await axios.post('http://localhost:5184/Borrowing', borrow)
            successSwal('borrow request succes created')
           

        } catch (error) {
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