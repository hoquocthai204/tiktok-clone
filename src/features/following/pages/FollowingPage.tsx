import { authState } from '@/features/auth/authSlice';
import ItemContent from '@/features/landing/components/ItemContent';
import ItemImage from '@/features/landing/components/ItemImage';
import VideoContainer from '@/features/landing/components/VideoContainer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowCard from '../components/FollowCard';
import cardLogo from '@/assets/images/card_logo1.png';
import cardBackground from '@/assets/images/card_background1.png';
import LoginPopup from '@/features/auth/components/LoginPopup';
import { followCardInfo } from '@/constants/following/followCardInfo';

interface FollowingPageProps {}

const tagData = [
    'kienthucofficial',
    'kienthuc',
    'learnontiktok',
    'meovatcuocsong',
    'xuhuong',
    'meovat',
];

const FollowingPage: React.FunctionComponent<FollowingPageProps> = (props) => {
    const isLoggedIn = useSelector(authState).isLoggedIn;
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleFollow = () => {
        !isLoggedIn && setShowLoginPopup(true);
    };

    return (
        <div className="following">
            {isLoggedIn ? (
                [1, 2, 3, 4].map((e) => (
                    <div className="landing__item-container">
                        <ItemImage
                            src={
                                'data:image/jpeg;base64,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'
                            }
                        />
                        <div className="landing__item-content-container">
                            <ItemContent
                                tagData={tagData}
                                title={'reviewcuocsongs'}
                                name={'Review Cuộc Sống'}
                                description={'đi chợ sẽ gặp'}
                                isFollowing
                            />

                            <div className="landing__item-music-container">
                                <Link to={''} target="_blank" rel="noopener noreferrer">
                                    <MusicNoteIcon className="landing__music-link" />{' '}
                                    <span>RAVE - Dxrk ダーク</span>
                                </Link>
                            </div>

                            <VideoContainer
                                favoriteAmount={'126.4K'}
                                messageAmount={'126.4K'}
                                bookmarkAmount={'126.4K'}
                                shareAmount={'126.4K'}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="follow__container">
                    {followCardInfo.map((e) => (
                        <FollowCard
                            name={e.name}
                            subname={e.subName}
                            avatar={e.avatar}
                            background={e.background}
                            handleFollow={handleFollow}
                        />
                    ))}
                </div>
            )}

            <LoginPopup setOpen={setShowLoginPopup} open={showLoginPopup} />
        </div>
    );
};

export default FollowingPage;