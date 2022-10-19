import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="friend-list">
        {friends.map(friend => (
          <li class="item" key={friend.id}>
            <span class="status"></span>
            <img
              class="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
Profile.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default FriendList;
