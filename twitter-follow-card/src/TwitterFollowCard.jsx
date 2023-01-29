export const TwitterFollowCard = ({ username, name, isFollowing }) => {
  const avatarUrl = `https://unavatar.io/${username}`

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={avatarUrl}
          alt={`${username}'s avatar`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}
