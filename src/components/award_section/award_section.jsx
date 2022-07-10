import React from 'react';
import styles from './award_section.module.css'
import classnames from 'classnames';
const AwardSection = (props) => {

    return (
        <div className={styles.award_section}>
            <p className={classnames(styles.award_section_p, styles.award_section_p_goggle)}>
                2018 구글 플레이스토어
                올해의 앱 최우수상 수상</p>
            <p className={classnames(styles.award_section_p, styles.award_section_p_apple)}>
                2018 애플 앱스토어<br />
                오늘의 여행앱 선정</p>
        </div >);
}


export default AwardSection;