import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { GoLocation, GoPerson, GoThumbsup } from "react-icons/go";
import { BiShow } from "react-icons/bi";




export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
      <div className={css.profile}>
  <div className={css.description}>
          <img
            width={120}
            height={120}
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
                <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>
            <GoLocation className={css.icon_location} size={18} />

            {location}</p>
  </div>

            <ul className={css.stats}>   
    <li className={css.wrapper_item}>
            <span className={css.label}><GoPerson size={18} /></span>
                    <span className={css.quontity}>{followers}</span>
    </li>
    <li className={css.wrapper_item}>
            <span className={css.label}><BiShow size={18} /></span>
                    <span className={css.quontity}>{views}</span>
    </li>
    <li className={css.wrapper_item}>
      <span className={css.label}><GoThumbsup size={18}/></span>
                    <span className={css.quontity}>{ likes}</span>
                </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
