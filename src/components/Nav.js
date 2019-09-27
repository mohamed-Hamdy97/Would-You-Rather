import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAuthUser } from '../actions/authUser';

class Nav extends Component {

  handleLogOut = () => {
    const { dispatch } = this.props
    dispatch(deleteAuthUser())

  }

  render() {
    const { users, AuthUser } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink exact to='/' activeclassname='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/add" activeclassname='active'>NewQuestion</NavLink>
          </li>
          <li>
            <NavLink to="/LeaderBoard" activeclassname='active'>LeaderBroad</NavLink>
          </li>
          {AuthUser
            ?
            (
              <div className='AuthUser'>

                <li>
                  <span>Hello {users[AuthUser].name}</span>

                </li>
                <li>
                  <img
                    src={users[AuthUser].avatarURL}
                    className="NavAvatar"
                    alt="userAvatar"
                  />
                </li>
                <li>
                  <button onClick={this.handleLogOut} style={{
                    borderColor: '#76edc5',
                    borderRadius: '5px',
                    width: '90px',
                    padding: '8px',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }} activeclassname='active'>Logout</button>
                </li>
              </div>
    )
    : ''
  }

        </ul>
      </nav>
    )
  }

}
function mapStateToProps({ users, AuthUser }) {
  return {
    users,
    AuthUser
  }
}
export default connect(mapStateToProps)(Nav)
