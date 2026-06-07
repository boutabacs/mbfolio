import { profile, profileImage } from '../data'

export default function ProfileImage({ size = 'lg', className = '' }) {
  const sizes = {
    sm: 'w-28 h-28',
    md: 'w-36 h-36',
    lg: 'w-44 h-44 sm:w-48 sm:h-48',
  }

  return (
    <div className={`relative shrink-0 ${className}`}>
      <div
        className={`${sizes[size]} rounded-full p-1 bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/15`}
      >
        <img
          src={profileImage}
          alt={profile.name}
          className="w-full h-full rounded-full object-cover object-top border-4 border-canvas"
        />
      </div>
    </div>
  )
}
