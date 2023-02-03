import {MdDeleteForever} from 'react-icons/md'

const Note = () =>{
    return(
        <div className="note">
            <span>First Note</span>
            <div className="note-footer">
                <small>13/04/2023</small>
                <MdDeleteForever className='delete-icoon' size='1.3em' />
            </div>
        </div>
    );
};

export default Note;