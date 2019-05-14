import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const SidebarLink = ({history, label, to, icon, id}) => (
    <div onClick={() => history.push(to)}>
        {icon ? (<Icon type={icon} />) : null}
        <span id={id} className="nav-text">{label}</span>
    </div>
)

SidebarLink.propTypes = {
    history: PropTypes.object.isRequired,
    label: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string
}

export default SidebarLink