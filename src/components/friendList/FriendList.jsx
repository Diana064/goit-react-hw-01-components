import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <section className="statistics">
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="item" key={friend.id}>
            <span className="status"></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
