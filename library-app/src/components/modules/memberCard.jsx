import MemberDetail from "../widgets/dataDetail";
import '../../bookCard.css'
import Container from "../elements/container";
import { formatDateWithOrdinal } from "../../helper";

const MemberDetailCard = ({ detailMember }) => {
    return (
        <>
            <Container className="book-details">
                <MemberDetail label="Id" value={detailMember.userId} />
                <MemberDetail label="Full Name" value={`${detailMember.firstName} ${detailMember.lastName}`} />
                <MemberDetail label="Position" value={detailMember.position} />
                <MemberDetail label="Privilege" value={detailMember.privilege} />
                <MemberDetail label="Library Card Number" value={detailMember.libraryCardNumber} />
                <MemberDetail label="Library Card Expiring Date" value={formatDateWithOrdinal(detailMember.libraryCardExpiringDate)} />
            </Container>
        </>

    );
};

export default MemberDetailCard;
