import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/User/userAction'

function UserContainer({ userData, fetchUser }) {
  // useEffect(() => {
  //   fetchUser()
  // }, [])
  return userData.loading ? (<h2>Loading</h2>) :
    userData.error ? (<h2>{userData.error}</h2>) :
      (<>
        <h2>User List</h2>
        <div>
          {
           userData.users.map(user=><p key={user.id}>{user.name}</p>)
          }
        </div>
      </>)
}

const mapStateToProps = state => {
  return {
    userData: state.users.users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)