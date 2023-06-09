import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({user:{login,avatar_url} }) {
  return (
    <div className='card shadow-md compact side  rounded-lg bg-gray-200 hover:scale-105 duration-700'>
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar ">
                <div className="rounded-full shadow w-14 h-14 ">
             <img src={avatar_url} alt='Profile'></img>       
                </div>
            </div>
          </div>
<div>
    <h2 className="card-title ">
        {login}
    </h2>
  <Link to={`/user/${login}`} className='text-base-content text-opacity-90 text-blue-900 cursor-pointer '>
    Visit profile
  </Link>
</div>

        </div>
       
    </div>
  )
}



UserItem.protoType={
    user: PropTypes.object.isRequired,
}

export default UserItem