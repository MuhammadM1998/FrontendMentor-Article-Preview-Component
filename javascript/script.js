'use strict';

const btn = document.querySelector('.article--user-btn button');
const shareDesktopBtn = document.querySelector('.share');
const shareMobileBtn = document.querySelector('.share-mobile');

const handleShare = function (e) {
	//Big & Medium Screens
	const displayType = e.type === 'mouseover' ? 'flex' : 'none';
	if (window.innerWidth > 768) {
		shareDesktopBtn.style.display = displayType;
	}
	// Mobile Screens
	else {
		shareMobileBtn.style.display = displayType;
	}
};
btn.addEventListener('mouseover', handleShare);
btn.addEventListener('mouseout', handleShare);
