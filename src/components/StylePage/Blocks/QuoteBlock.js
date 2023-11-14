import React from 'react';
import Quote from "@components/Styles/Quote";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const QuoteBlock = ({ title, content, members }) => {

    const employees = useSelector((state) => state.employees.apiEmployees)

    const author = {
        name: members && members.length !== 0 ? `${members[0].name} ${members[0].lastName}` : null,
        position: members && members.length !== 0 ? members[0].position : null,
        image: members && members.length !== 0 ? members[0].photo : null,
    }

    if (members && members.length !== 0 && members[0]._id) {

        if (employees[members[0]._id]) {
            author.name = `${employees[members[0]._id].name} ${employees[members[0]._id].lastName}`,
            author.position = employees[members[0]._id].position,
            author.image = employees[members[0]._id].photo
        } 
    }

    return (
        members || content || title ?
        <div className="grid-row quote_padd">
            <div className="grid-col-6">
                <Quote 
                    title={title}
                    content={content}
                    name={author.name}
                    position={author.position}
                    image={author.image}  /> 
            </div>
        </div> : '')
}


QuoteBlock.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    members: PropTypes.array
}

export default QuoteBlock;