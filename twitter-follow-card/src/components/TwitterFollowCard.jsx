import { useState } from 'react'

export const TwitterFollowCard = ({ children, username, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const avatarUrl = `https://unavatar.io/${username}`
  const isFollowingButtonText = isFollowing
    ? 'Following'
    : 'Follow'
  const isFollowingButtonClass = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => setIsFollowing(!isFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={avatarUrl}
          alt={`${username}'s avatar`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={isFollowingButtonClass} onClick={handleClick}>
          <span className='tw-followCard-text'>{isFollowingButtonText}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
